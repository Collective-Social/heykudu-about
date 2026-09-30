import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { FUNNEL_MATRIX } from "@/lib/marketing/funnelMatrix";
import { notifyNewLead } from "@/lib/marketing/leadNotifier";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      full_name,
      email,
      institution,
      role,
      phone,
      funnel_variant,
      utm_source,
      utm_campaign,
      utm_medium,
      utm_content,
      deliverable_requested,
      lecturer_name,
      lecturer_email,
      course_name,
      notes,
    } = body;

    if (!full_name || !email || !institution || !role) {
      return NextResponse.json(
        { error: "Name, email, institution, and role are required." },
        { status: 400 }
      );
    }

    // Insert into marketing_leads
    const { data: lead, error } = await supabase
      .from("marketing_leads")
      .insert([
        {
          full_name,
          email,
          institution,
          role,
          phone: phone || null,
          funnel_variant: funnel_variant || "direct",
          utm_source: utm_source || null,
          utm_campaign: utm_campaign || null,
          utm_medium: utm_medium || null,
          utm_content: utm_content || null,
          deliverable_requested: deliverable_requested || null,
          status: "new",
          metadata: {
            referrer: req.headers.get("referer") || null,
            user_agent: req.headers.get("user-agent") || null,
            submitted_at: new Date().toISOString(),
            ...(lecturer_name ? { lecturer_name } : {}),
            ...(lecturer_email ? { lecturer_email } : {}),
            ...(course_name ? { course_name } : {}),
            ...(notes ? { notes } : {}),
          },
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error creating marketing lead:", error);
      return NextResponse.json(
        { error: "Failed to record lead. Please try again." },
        { status: 500 }
      );
    }

    // Trigger notification to no-reply@heykudu.com and team channels
    notifyNewLead({
      lead_id: lead?.id,
      full_name,
      email,
      institution,
      role,
      phone,
      funnel_variant,
      deliverable_requested,
      utm_source,
      utm_campaign,
      utm_medium,
      utm_content,
      lecturer_name,
      lecturer_email,
      course_name,
      notes,
      submitted_at: new Date().toISOString(),
    }).catch((notifErr) => console.error("Lead notification dispatch error:", notifErr));

    const variant = FUNNEL_MATRIX[funnel_variant];
    const deliverable = variant?.deliverable;

    const shareUrl = `https://about.heykudu.com/lp/departmental?utm_source=student_referral&utm_campaign=${encodeURIComponent(course_name || "course")}`;
    const whatsappText = `Hi ${lecturer_name ? `Dr./Prof. ${lecturer_name}` : "Lecturer"}, our class is requesting to use Heykudu for ${course_name || "our course"} to eliminate paper attendance and protect against lost records. You can activate a 100% free pilot for our class in 2 minutes: ${shareUrl}`;

    return NextResponse.json({
      success: true,
      lead_id: lead?.id,
      deliverable: deliverable || {
        title: "Heykudu Clinical Education Briefing Kit",
        filename: "Heykudu_Clinical_Education_Kit.pdf",
      },
      booking_url: "https://about.heykudu.com/contact",
      whatsapp_share_text: whatsappText,
      whatsapp_share_url: `https://wa.me/?text=${encodeURIComponent(whatsappText)}`,
    });
  } catch (err: any) {
    console.error("Lead submission exception:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "50", 10);

    const { data: leads, error } = await supabase
      .from("marketing_leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Error fetching marketing leads:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ leads });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
