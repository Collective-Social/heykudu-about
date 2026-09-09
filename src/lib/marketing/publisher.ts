import { supabase } from "../supabaseClient";
import { auditMarketingElement, GatekeeperAuditReport } from "./gatekeeperAgent";

export interface GoLiveResult {
  success: boolean;
  campaign_id: string;
  audit_results: Record<string, GatekeeperAuditReport>;
  published_elements: Array<{
    id: string;
    channel: string;
    title: string;
    published_url: string;
    status: string;
  }>;
  quarantined_elements: Array<{
    id: string;
    channel: string;
    title: string;
    reasons: string[];
  }>;
  error?: string;
}

/**
 * Executes Pre-Flight Gatekeeper Audit and Synchronized Go Live across all channels
 */
export async function executeSynchronizedGoLive(campaignId: string): Promise<GoLiveResult> {
  // 1. Fetch Campaign
  const { data: campaign, error: campaignError } = await supabase
    .from("marketing_campaigns")
    .select("*")
    .eq("id", campaignId)
    .single();

  if (campaignError || !campaign) {
    throw new Error(`Campaign not found: ${campaignError?.message || campaignId}`);
  }

  // 2. Fetch all elements for this Campaign
  const { data: elements, error: elementsError } = await supabase
    .from("marketing_elements")
    .select("*")
    .eq("campaign_id", campaignId);

  if (elementsError || !elements || elements.length === 0) {
    throw new Error(`No deliverables found for campaign ${campaignId}`);
  }

  // 3. Run Pre-Flight Gatekeeper Audit across every element
  const auditResults: Record<string, GatekeeperAuditReport> = {};
  const quarantined: Array<{ id: string; channel: string; title: string; reasons: string[] }> = [];
  const passedElements: typeof elements = [];

  for (const element of elements) {
    const report = await auditMarketingElement(
      element.channel,
      element.title,
      element.content_payload
    );

    auditResults[element.id] = report;

    // Update element with audit report
    await supabase
      .from("marketing_elements")
      .update({
        gatekeeper_report: report,
        status: report.passed ? "audit_passed" : "quarantined",
        updated_at: new Date().toISOString()
      })
      .eq("id", element.id);

    if (!report.passed) {
      quarantined.push({
        id: element.id,
        channel: element.channel,
        title: element.title,
        reasons: report.flagged_terms.length > 0 ? report.flagged_terms : [report.audit_summary]
      });
    } else {
      passedElements.push(element);
    }
  }

  // 4. Strict Safety Rule: If ANY element fails the PII / Safety audit, halt Go-Live!
  if (quarantined.length > 0) {
    await supabase
      .from("marketing_campaigns")
      .update({
        status: "quarantined",
        updated_at: new Date().toISOString()
      })
      .eq("id", campaignId);

    return {
      success: false,
      campaign_id: campaignId,
      audit_results: auditResults,
      published_elements: [],
      quarantined_elements: quarantined,
      error: "Gatekeeper halted Go-Live: One or more deliverables contained PII or failed safety audit."
    };
  }

  // 5. Synchronized Go Live: Publish all channels together
  const publishedElements: GoLiveResult["published_elements"] = [];
  const now = new Date().toISOString();

  for (const element of passedElements) {
    let publishedUrl = "";

    if (element.channel === "web_article") {
      const slug = element.content_payload?.slug || campaign.id;
      publishedUrl = `/articles/${slug}`;
    } else if (element.channel === "email_sequence") {
      publishedUrl = `/campaigns?channel=email&id=${element.id}`;
    } else if (element.channel === "pr_stunt") {
      publishedUrl = `/campaigns?channel=pr&id=${element.id}`;
    } else if (element.channel === "social_package") {
      publishedUrl = `/campaigns?channel=social&id=${element.id}`;
    }

    await supabase
      .from("marketing_elements")
      .update({
        status: "published",
        published_url: publishedUrl,
        published_at: now,
        updated_at: now
      })
      .eq("id", element.id);

    publishedElements.push({
      id: element.id,
      channel: element.channel,
      title: element.title,
      published_url: publishedUrl,
      status: "published"
    });
  }

  // 6. Transition Campaign status to 'live' and mark all_channels_published = true
  await supabase
    .from("marketing_campaigns")
    .update({
      status: "live",
      went_live_at: now,
      all_channels_published: true,
      updated_at: now
    })
    .eq("id", campaignId);

  // 7. Store Campaign Learning in Agent Memory
  const articleDeliverable = passedElements.find(e => e.channel === "web_article");
  if (articleDeliverable) {
    await supabase.from("marketing_agent_memory").insert({
      category: "winning_hook",
      insight: `Campaign "${campaign.title}" successfully completed pre-flight audit and published live across all channels.`,
      evidence: {
        campaign_id: campaignId,
        channels_published: passedElements.map(e => e.channel),
        title: campaign.title
      },
      confidence_score: 0.95
    });
  }

  return {
    success: true,
    campaign_id: campaignId,
    audit_results: auditResults,
    published_elements: publishedElements,
    quarantined_elements: []
  };
}
