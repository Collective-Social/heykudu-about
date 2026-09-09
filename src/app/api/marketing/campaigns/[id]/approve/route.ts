import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

/**
 * POST /api/marketing/campaigns/[id]/approve
 * Human-in-the-loop 1-click Approval to Start.
 * Initiates the Countdown Timer Delay before Go-Live.
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json().catch(() => ({}));
    const delayMinutes = body.delayMinutes || parseInt(process.env.TIMER_DELAY_MINUTES || "30", 10);

    // Calculate scheduled go-live timestamp
    const scheduledDate = new Date(Date.now() + delayMinutes * 60 * 1000);

    const { data: campaign, error } = await supabase
      .from("marketing_campaigns")
      .update({
        status: "approved_in_timer",
        scheduled_go_live_at: scheduledDate.toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error || !campaign) {
      return NextResponse.json({ error: error?.message || "Campaign not found" }, { status: 404 });
    }

    // Update all draft elements to scheduled
    await supabase
      .from("marketing_elements")
      .update({
        status: "scheduled",
        scheduled_publish_at: scheduledDate.toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("campaign_id", id)
      .eq("status", "draft");

    return NextResponse.json({
      success: true,
      campaign,
      message: `Campaign approved! Staged in timer delay queue. Scheduled to go live in ${delayMinutes} minutes (${scheduledDate.toLocaleTimeString()}).`,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
