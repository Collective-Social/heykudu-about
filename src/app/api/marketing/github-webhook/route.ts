import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { executeCampaignResearch } from "@/lib/marketing/agentEngine";

export const dynamic = "force-dynamic";

/**
 * POST /api/marketing/github-webhook
 * Ingests GitHub webhooks for PR merges and commits to main/staging
 */
export async function POST(req: NextRequest) {
  try {
    const eventType = req.headers.get("x-github-event");
    const payload = await req.json();

    // We focus on Pull Request merged events or push events to main
    let isMergeToMain = false;
    const repoName = payload.repository?.full_name || "heykudu/core";
    let branch = "";
    let commitMessage = "";
    let author = "";
    let commitHash = "";
    let filesChanged: string[] = [];

    if (eventType === "pull_request" && payload.action === "closed" && payload.pull_request?.merged) {
      const pr = payload.pull_request;
      branch = pr.base?.ref || "main";
      if (branch === "main") {
        isMergeToMain = true;
        commitMessage = `[Merged PR #${pr.number}]: ${pr.title}\n\n${pr.body || ""}`;
        author = pr.user?.login || "unknown";
        commitHash = pr.merge_commit_sha || pr.head?.sha || "";
      }
    } else if (eventType === "push") {
      const ref = payload.ref || "";
      branch = ref.replace("refs/heads/", "");
      if (branch === "main" && payload.commits && payload.commits.length > 0) {
        isMergeToMain = true;
        const latestCommit = payload.commits[payload.commits.length - 1];
        commitMessage = payload.commits.map((c: any) => `- ${c.message}`).join("\n");
        author = latestCommit.author?.name || latestCommit.author?.username || "developer";
        commitHash = latestCommit.id || "";
        filesChanged = Array.from(
          new Set(
            payload.commits.flatMap((c: any) => [
              ...(c.added || []),
              ...(c.modified || []),
              ...(c.removed || []),
            ])
          )
        ) as string[];
      }
    }

    if (!isMergeToMain) {
      return NextResponse.json({ message: "Ignored: Not a merge into main branch." }, { status: 200 });
    }

    // 1. Log to Proof of Work
    const { data: powRecord } = await supabase
      .from("marketing_proof_of_work")
      .insert({
        repo_name: repoName,
        branch,
        commit_hash: commitHash,
        author,
        message: commitMessage,
        files_changed: filesChanged,
      })
      .select()
      .single();

    // 2. Automatically spawn a Campaign based on Proof of Work
    const campaignTitle = `Engineering Proof-of-Work: ${commitMessage.split("\n")[0].slice(0, 60)}`;
    const conceptPrompt = `
We just merged engineering changes into main for ${repoName}:
Commit details:
${commitMessage}

Files impacted:
${filesChanged.slice(0, 10).join(", ")}

Generate an authoritative, high-status proof-of-work campaign demonstrating real engineering progress and practical clinical benefits for medical school leadership.
`;

    // 3. Insert Campaign
    const { data: campaign, error: campError } = await supabase
      .from("marketing_campaigns")
      .insert({
        title: campaignTitle,
        concept_prompt: conceptPrompt,
        source: "github_merge",
        status: "researching",
      })
      .select()
      .single();

    if (campError || !campaign) {
      return NextResponse.json({ error: "Failed to initialize campaign from merge." }, { status: 500 });
    }

    // Link POW record to campaign
    if (powRecord) {
      await supabase
        .from("marketing_proof_of_work")
        .update({ associated_campaign_id: campaign.id })
        .eq("id", powRecord.id);
    }

    // 4. Run Multi-Agent Research
    try {
      const { dossier, deliverables } = await executeCampaignResearch(
        campaignTitle,
        conceptPrompt,
        "github_merge"
      );

      // Insert Deliverables
      const elementsToInsert = [
        {
          campaign_id: campaign.id,
          channel: "web_article",
          title: deliverables.web_article.title,
          content_payload: deliverables.web_article,
          status: "draft",
        },
        {
          campaign_id: campaign.id,
          channel: "email_sequence",
          title: deliverables.email_sequence.sequence_name || "Proof of Work Deanery Drip",
          content_payload: deliverables.email_sequence,
          status: "draft",
        },
        {
          campaign_id: campaign.id,
          channel: "pr_stunt",
          title: deliverables.pr_stunt.stunt_name || deliverables.pr_stunt.press_release_headline,
          content_payload: deliverables.pr_stunt,
          status: "draft",
        },
        {
          campaign_id: campaign.id,
          channel: "social_package",
          title: "Proof of Work Social Package",
          content_payload: deliverables.social_package,
          status: "draft",
        },
      ];

      await supabase.from("marketing_elements").insert(elementsToInsert);

      // Mark as pending approval
      await supabase
        .from("marketing_campaigns")
        .update({
          title: dossier?.deliverables_summary?.article_title || campaignTitle,
          research_dossier: dossier,
          status: "pending_approval",
          updated_at: new Date().toISOString(),
        })
        .eq("id", campaign.id);

      return NextResponse.json({
        success: true,
        message: `Proof-of-work campaign created and researched: ${campaign.id}`,
        campaign_id: campaign.id,
      });
    } catch (researchErr: any) {
      console.error("Automated GitHub campaign research failed:", researchErr);
      await supabase
        .from("marketing_campaigns")
        .update({ status: "draft", updated_at: new Date().toISOString() })
        .eq("id", campaign.id);

      return NextResponse.json({ success: true, message: "Campaign created in draft mode." });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
