import { NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/lib/supabaseClient";

const ContactSchema = z.object({
  program: z.string().min(2, "Program or institution name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(3, "Message is required"),
  name: z.string().optional(),
  role: z.string().optional(),
  phone: z.string().optional(),
  // Attribution parameters
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  search_query: z.string().optional(),
  gclid: z.string().optional(),
  network: z.string().optional(),
  matchtype: z.string().optional(),
  device: z.string().optional(),
  landing_page: z.string().optional(),
  landing_path: z.string().optional(),
  current_page: z.string().optional(),
  referrer: z.string().optional(),
  landing_timestamp: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.format() },
        { status: 400 }
      );
    }

    const {
      program,
      email,
      message,
      name,
      role,
      phone,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      search_query,
      gclid,
      network,
      matchtype,
      device,
      landing_page,
      landing_path,
      current_page,
      referrer,
      landing_timestamp,
    } = result.data;

    // Detect if the lead appears to be an unqualified individual/student seeking lessons or jobs
    const combinedContent = `${program} ${message} ${role || ""}`.toLowerCase();
    const isStudentOrJobSeeker =
      role?.toLowerCase().includes("student") ||
      role?.toLowerCase().includes("job") ||
      role?.toLowerCase().includes("other") ||
      combinedContent.includes("lesson") ||
      combinedContent.includes("learnership") ||
      combinedContent.includes("start the best") ||
      combinedContent.includes("course") ||
      combinedContent.includes("caregiver");

    const matchedSearch = utm_term || search_query || "Direct / None";
    const leadClassification = isStudentOrJobSeeker
      ? "⚠️ Unqualified / Individual Inquiry (Student or Job Seeker)"
      : "🎯 Qualified Institutional Lead";

    // 1. Structured Serverless Console Log
    console.log("=================================================");
    console.log(isStudentOrJobSeeker ? "⚠️ [INDIVIDUAL INQUIRY RECEIVED]" : "🎉 [INSTITUTIONAL LEAD RECEIVED]");
    console.log(`Program/Inst:  ${program}`);
    console.log(`Email:         ${email}`);
    console.log(`Role:          ${role || "N/A"}`);
    console.log(`Message:       ${message}`);
    console.log(`Search Query:  ${matchedSearch}`);
    console.log(`Ad Campaign:   ${utm_campaign || "N/A"}`);
    console.log(`Ad Content:    ${utm_content || "N/A"}`);
    console.log(`Traffic Src:   ${utm_source || "direct"} / ${utm_medium || "none"}`);
    console.log(`GCLID:         ${gclid || "None"}`);
    console.log(`Landing Page:  ${landing_page || "N/A"}`);
    console.log(`Converted On:  ${current_page || "N/A"}`);
    console.log(`Referrer:      ${referrer || "N/A"}`);
    console.log("=================================================");

    // 2. Persist lead to Supabase marketing_leads
    try {
      await supabase.from("marketing_leads").insert([
        {
          full_name: name || program,
          email,
          institution: program,
          role: role || (isStudentOrJobSeeker ? "Student / Individual" : "Convenor / Program Director"),
          phone: phone || null,
          funnel_variant: landing_path || "contact_page",
          utm_source: utm_source || null,
          utm_campaign: utm_campaign || null,
          utm_medium: utm_medium || null,
          utm_content: utm_content || null,
          deliverable_requested: "Institutional Demo / Pilot Briefing",
          status: isStudentOrJobSeeker ? "unqualified_inquiry" : "new",
          notes: message,
          metadata: {
            search_query: matchedSearch,
            gclid: gclid || null,
            network: network || null,
            matchtype: matchtype || null,
            device: device || null,
            landing_page: landing_page || null,
            current_page: current_page || null,
            referrer: referrer || null,
            is_unqualified_individual: isStudentOrJobSeeker,
            landing_timestamp: landing_timestamp || null,
            submitted_at: new Date().toISOString(),
          },
        },
      ]);
      console.log("[SUPABASE SYNC] Successfully recorded lead in database.");
    } catch (dbErr) {
      console.error("[SUPABASE SYNC ERROR]", dbErr);
    }

    // 3. Post to Slack Webhook with Attribution Context
    const slackUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackUrl) {
      try {
        await fetch(slackUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            blocks: [
              {
                type: "header",
                text: {
                  type: "plain_text",
                  text: isStudentOrJobSeeker
                    ? "⚠️ [Individual Inquiry] Lead Received"
                    : "🎉 New Institutional Lead for heykudu!",
                  emoji: true,
                },
              },
              {
                type: "section",
                fields: [
                  {
                    type: "mrkdwn",
                    text: `*Institution / Program:*\n${program}`,
                  },
                  {
                    type: "mrkdwn",
                    text: `*Contact Email:*\n${email}`,
                  },
                  {
                    type: "mrkdwn",
                    text: `*Role / Designation:*\n${role || "Not specified"}`,
                  },
                  {
                    type: "mrkdwn",
                    text: `*Matched Keyword / Search:*\n\`${matchedSearch}\``,
                  },
                ],
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `*Message:*\n${message}`,
                },
              },
              {
                type: "section",
                fields: [
                  {
                    type: "mrkdwn",
                    text: `*Campaign:*\n\`${utm_campaign || "none"}\``,
                  },
                  {
                    type: "mrkdwn",
                    text: `*Traffic Source:*\n\`${utm_source || "direct"}\` / \`${utm_medium || "none"}\``,
                  },
                  {
                    type: "mrkdwn",
                    text: `*Ad / Content:*\n\`${utm_content || "none"}\``,
                  },
                  {
                    type: "mrkdwn",
                    text: `*Google Click ID (GCLID):*\n\`${gclid ? `${gclid.slice(0, 16)}...` : "None"}\``,
                  },
                ],
              },
              {
                type: "context",
                elements: [
                  {
                    type: "mrkdwn",
                    text: `*Landing Page:* <${landing_page || "https://about.heykudu.com"}|${landing_path || "home"}> | *Converted on:* ${current_page || "contact"}`,
                  },
                ],
              },
            ],
          }),
        });
        console.log("[SLACK DISPATCH] Successfully posted lead to Slack channel.");
      } catch (slackError) {
        console.error("Slack integration error:", slackError);
      }
    }

    // 4. Send Rich Attribution Email via MailerSend
    const mailersendKey = process.env.MAILERSEND_API_KEY;
    if (mailersendKey) {
      try {
        const senderEmail = process.env.MAILERSEND_SENDER_EMAIL || "no-reply@heykudu.com";
        const recipientEmail = process.env.CONTACT_EMAIL_TARGET || "no-reply@heykudu.com";

        const subjectTag = isStudentOrJobSeeker
          ? `⚠️ [Individual / Course Inquiry] ${program}`
          : `🎉 New Institutional Lead: ${program} (${role || "Convenor"})`;
        const emailSubject = `${subjectTag} | Search: "${matchedSearch}"`;

        const htmlBody = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.5; padding: 0; margin: 0; background-color: #f8fafc; }
              .container { max-width: 650px; margin: 20px auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; }
              .header { background: ${isStudentOrJobSeeker ? "#475569" : "#6C22D6"}; padding: 24px 32px; color: #ffffff; }
              .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
              .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.9; }
              .content { padding: 32px; }
              .classification-badge { display: inline-block; padding: 5px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; background: ${isStudentOrJobSeeker ? "#fef3c7; color: #92400e;" : "#ecfdf5; color: #047857;"} margin-bottom: 20px; }
              .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-top: 24px; margin-bottom: 12px; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px; }
              .field-row { margin-bottom: 12px; display: flex; flex-direction: column; }
              .field-label { font-size: 11px; font-weight: 600; text-transform: uppercase; color: #64748b; margin-bottom: 2px; }
              .field-value { font-size: 15px; font-weight: 600; color: #0f172a; word-break: break-word; }
              .field-value a { color: #6C22D6; text-decoration: none; }
              .message-box { background: #f8fafc; border-radius: 10px; padding: 16px; border: 1px solid #e2e8f0; border-left: 4px solid ${isStudentOrJobSeeker ? "#f59e0b" : "#6C22D6"}; font-size: 14px; color: #334155; margin-top: 6px; white-space: pre-wrap; }
              .attr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px; border: 1px solid #e2e8f0; }
              .attr-item { font-size: 12px; }
              .attr-item strong { display: block; color: #64748b; font-size: 10px; text-transform: uppercase; margin-bottom: 2px; }
              .attr-item code { background: #e2e8f0; padding: 2px 6px; border-radius: 4px; font-size: 12px; color: #0f172a; }
              .footer { padding: 18px 32px; background: #f1f5f9; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
              .reply-btn { display: inline-block; background: #6C22D6; color: #ffffff !important; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 13px; margin-top: 16px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>heykudu Inbound Lead Notification</h1>
                <p>Captured on about.heykudu.com</p>
              </div>
              <div class="content">
                <span class="classification-badge">${leadClassification}</span>

                <div class="field-row">
                  <div class="field-label">Medical Program / Institution</div>
                  <div class="field-value">${program}</div>
                </div>

                <div class="field-row">
                  <div class="field-label">Contact Email</div>
                  <div class="field-value"><a href="mailto:${email}">${email}</a></div>
                </div>

                <div class="field-row">
                  <div class="field-label">Designation / Role</div>
                  <div class="field-value">${role || "Not specified"}</div>
                </div>

                <div class="field-row">
                  <div class="field-label">Requirements / Message</div>
                  <div class="message-box">${message}</div>
                </div>

                <div class="section-title">🎯 Lead Attribution & Search Context</div>
                <div class="attr-grid">
                  <div class="attr-item" style="grid-column: span 2;">
                    <strong>🔍 User Search Query / Matched Keyword:</strong>
                    <code style="font-weight: 700; color: #6C22D6; font-size: 13px;">${matchedSearch}</code>
                  </div>
                  <div class="attr-item">
                    <strong>📢 Google Ads Campaign:</strong>
                    <code>${utm_campaign || "none"}</code>
                  </div>
                  <div class="attr-item">
                    <strong>🖼️ Ad Content / Creative:</strong>
                    <code>${utm_content || "none"}</code>
                  </div>
                  <div class="attr-item">
                    <strong>🌐 Traffic Source & Medium:</strong>
                    <code>${utm_source || "direct"} / ${utm_medium || "none"}</code>
                  </div>
                  <div class="attr-item">
                    <strong>🔑 Google Click ID (GCLID):</strong>
                    <code>${gclid ? `${gclid.slice(0, 20)}...` : "None (Direct/Organic)"}</code>
                  </div>
                  <div class="attr-item">
                    <strong>📡 Network / Match Type:</strong>
                    <code>Network: ${network || "N/A"} | Match: ${matchtype || "N/A"}</code>
                  </div>
                  <div class="attr-item">
                    <strong>📱 Device:</strong>
                    <code>${device || "Desktop / Unspecified"}</code>
                  </div>
                  <div class="attr-item" style="grid-column: span 2;">
                    <strong>🏁 First Landing Page:</strong>
                    <a href="${landing_page || "https://about.heykudu.com"}" target="_blank" style="font-size: 11px; color: #6C22D6; word-break: break-all;">
                      ${landing_page || "https://about.heykudu.com"}
                    </a>
                  </div>
                  <div class="attr-item" style="grid-column: span 2;">
                    <strong>📝 Form Submitted On:</strong>
                    <span style="font-size: 11px; color: #475569; word-break: break-all;">${current_page || "https://about.heykudu.com/contact"}</span>
                  </div>
                  <div class="attr-item" style="grid-column: span 2;">
                    <strong>🔗 HTTP Referrer:</strong>
                    <span style="font-size: 11px; color: #475569; word-break: break-all;">${referrer || "Direct (None)"}</span>
                  </div>
                </div>

                <div style="text-align: center; margin-top: 24px;">
                  <a href="mailto:${email}?subject=heykudu%20Institutional%20Inquiry%20Follow-Up" class="reply-btn">Reply to Lead</a>
                </div>
              </div>
              <div class="footer">
                Automated lead dispatch generated by heykudu attribution engine.<br>
                Submitted on ${new Date().toUTCString()}
              </div>
            </div>
          </body>
          </html>
        `;

        const plainText = `
heykudu Inbound Lead Notification
Classification: ${leadClassification}

Institution/Program: ${program}
Email: ${email}
Role: ${role || "Not specified"}

Message:
${message}

--- LEAD ATTRIBUTION & SEARCH CONTEXT ---
User Search Query / Keyword: ${matchedSearch}
Campaign: ${utm_campaign || "none"}
Ad Creative / Content: ${utm_content || "none"}
Traffic Source / Medium: ${utm_source || "direct"} / ${utm_medium || "none"}
Google Click ID (GCLID): ${gclid || "None"}
Network: ${network || "N/A"} | Match: ${matchtype || "N/A"} | Device: ${device || "N/A"}
First Landing Page: ${landing_page || "None"}
Converted On: ${current_page || "https://about.heykudu.com/contact"}
Referrer: ${referrer || "None"}
Submitted: ${new Date().toUTCString()}
        `.trim();

        const response = await fetch("https://api.mailersend.com/v1/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            Authorization: `Bearer ${mailersendKey}`,
          },
          body: JSON.stringify({
            from: {
              email: senderEmail,
              name: "heykudu Landing Page",
            },
            to: [
              {
                email: recipientEmail,
                name: "heykudu Team",
              },
            ],
            subject: emailSubject,
            html: htmlBody,
            text: plainText,
          }),
        });

        if (response.ok) {
          console.log("[EMAIL DISPATCH] Successfully dispatched lead email via Mailersend.");
        } else {
          const errorText = await response.text();
          console.error(`[EMAIL DISPATCH ERROR] Mailersend returned status ${response.status}:`, errorText);
        }
      } catch (mailersendError) {
        console.error("Mailersend integration error:", mailersendError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully.",
    });
  } catch (error) {
    console.error("Contact Form Submission Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
