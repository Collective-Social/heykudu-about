import { NextRequest, NextResponse } from "next/server";
import { executeSynchronizedGoLive } from "@/lib/marketing/publisher";

export const dynamic = "force-dynamic";

/**
 * POST /api/marketing/campaigns/[id]/go-live
 * Executes Pre-Flight Gatekeeper Audit and Synchronized Go Live across all channels
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await executeSynchronizedGoLive(id);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error,
          quarantined: result.quarantined_elements,
          audit_results: result.audit_results,
        },
        { status: 422 }
      );
    }

    return NextResponse.json({
      success: true,
      campaign_id: id,
      published_elements: result.published_elements,
      audit_results: result.audit_results,
      message: "Synchronized Go Live successful! All channels are now published and active.",
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
