import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { executeCampaignResearch } from "@/lib/marketing/agentEngine";

export const dynamic = "force-dynamic";

/**
 * GET /api/marketing/campaigns
 * Retrieves all campaigns with their channel elements
 */
export async function GET(req: NextRequest) {
  try {
    const { data: campaigns, error: campError } = await supabase
      .from("marketing_campaigns")
      .select("*")
      .order("created_at", { ascending: false });

    if (campError) {
      return NextResponse.json({ error: campError.message }, { status: 500 });
    }

    const { data: elements, error: elemError } = await supabase
      .from("marketing_elements")
      .select("*")
      .order("created_at", { ascending: true });

    if (elemError) {
      return NextResponse.json({ error: elemError.message }, { status: 500 });
    }

    // Attach elements to their respective campaigns
    const enrichedCampaigns = campaigns.map((campaign) => ({
      ...campaign,
      elements: elements.filter((elem) => elem.campaign_id === campaign.id),
    }));

    return NextResponse.json({ campaigns: enrichedCampaigns });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/**
 * POST /api/marketing/campaigns
 * Creates a new Campaign and runs Deep Multi-Agent Research
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, prompt, source = "ui_prompt" } = body;

    if (!prompt) {
      return NextResponse.json({ error: "Campaign prompt or idea is required." }, { status: 400 });
    }

    const campaignTitle = title || prompt.slice(0, 50) + "...";

    // 1. Insert Campaign in 'researching' state
    const { data: campaign, error: insertError } = await supabase
      .from("marketing_campaigns")
      .insert({
        title: campaignTitle,
        concept_prompt: prompt,
        source,
        status: "researching",
      })
      .select()
      .single();

    if (insertError || !campaign) {
      return NextResponse.json({ error: insertError?.message || "Failed to create campaign." }, { status: 500 });
    }

    // 2. Run Deep Multi-Agent Research
    try {
      const { dossier, deliverables } = await executeCampaignResearch(
        campaign.title,
        campaign.concept_prompt,
        campaign.source
      );

      // 3. Insert the 4 Channel Deliverables
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
          title: deliverables.email_sequence.sequence_name || "3-Touch Deanery Email Drip",
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
          title: "Omnichannel Social Package (LinkedIn & X)",
          content_payload: deliverables.social_package,
          status: "draft",
        },
      ];

      const { data: insertedElements, error: elemError } = await supabase
        .from("marketing_elements")
        .insert(elementsToInsert)
        .select();

      if (elemError) {
        console.error("Error creating deliverables:", elemError);
      }

      // 4. Update Campaign to 'pending_approval' with the Research Dossier
      const { data: updatedCampaign, error: updateError } = await supabase
        .from("marketing_campaigns")
        .update({
          title: dossier?.deliverables_summary?.article_title || campaign.title,
          research_dossier: dossier,
          status: "pending_approval",
          updated_at: new Date().toISOString(),
        })
        .eq("id", campaign.id)
        .select()
        .single();

      return NextResponse.json({
        success: true,
        campaign: {
          ...updatedCampaign,
          elements: insertedElements || [],
        },
      });
    } catch (researchError: any) {
      console.error("Research execution failed:", researchError);
      // Mark as draft so user can retry
      await supabase
        .from("marketing_campaigns")
        .update({
          status: "draft",
          research_dossier: { error: researchError.message },
          updated_at: new Date().toISOString(),
        })
        .eq("id", campaign.id);

      return NextResponse.json(
        { error: `Research failed: ${researchError.message}`, campaignId: campaign.id },
        { status: 500 }
      );
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
