import { supabase } from "@/lib/supabaseClient";

export interface LeadNotificationPayload {
  lead_id?: string;
  full_name: string;
  email: string;
  institution?: string;
  role?: string;
  phone?: string;
  funnel_variant?: string;
  deliverable_requested?: string;
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
  utm_content?: string;
  lecturer_name?: string;
  lecturer_email?: string;
  course_name?: string;
  notes?: string;
  submitted_at?: string;
}

/**
 * Dispatches notification emails and alerts when a prospective university lead
 * completes a form on the AGUI or marketing landing pages.
 */
export async function notifyNewLead(payload: LeadNotificationPayload): Promise<{
  emailDispatched: boolean;
  slackDispatched: boolean;
  crmSynced: boolean;
}> {
  const timestamp = payload.submitted_at || new Date().toISOString();
  const recipientEmail = process.env.CONTACT_EMAIL_TARGET || "no-reply@heykudu.com";
  const senderEmail = process.env.MAILERSEND_SENDER_EMAIL || "no-reply@heykudu.com";
  const mailersendKey = process.env.MAILERSEND_API_KEY;
  const slackUrl = process.env.SLACK_WEBHOOK_URL;

  // 1. Structured Serverless Console Log (always visible in Vercel logs)
  console.log("=================================================");
  console.log("🎉 [NEW UNIVERSITY LEAD RECEIVED]");
  console.log(`Timestamp:   ${timestamp}`);
  console.log(`Name:        ${payload.full_name}`);
  console.log(`Email:       ${payload.email}`);
  console.log(`Role:        ${payload.role || "N/A"}`);
  console.log(`Institution: ${payload.institution || "N/A"}`);
  console.log(`Phone:       ${payload.phone || "N/A"}`);
  console.log(`Variant:     ${payload.funnel_variant || "N/A"}`);
  console.log(`Deliverable: ${payload.deliverable_requested || "N/A"}`);
  if (payload.course_name) console.log(`Course:      ${payload.course_name}`);
  if (payload.lecturer_name) console.log(`Lecturer:    ${payload.lecturer_name} (${payload.lecturer_email})`);
  console.log(`Notification Target: ${recipientEmail}`);
  console.log("=================================================");

  let emailDispatched = false;
  let slackDispatched = false;
  let crmSynced = false;

  // 2. MailerSend Transactional Email Dispatch
  if (mailersendKey) {
    try {
      const subject = `🎉 New University Lead: ${payload.full_name} (${payload.institution || "Higher Ed"}) - ${payload.role || "Convenor"}`;

      const htmlBody = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.5; padding: 0; margin: 0; background-color: #f8fafc; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; }
            .header { background: #7D00FF; padding: 24px 32px; color: #ffffff; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
            .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.9; }
            .content { padding: 32px; }
            .badge { display: inline-block; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 600; text-transform: uppercase; background: #ecfdf5; color: #047857; margin-bottom: 16px; }
            .field-row { margin-bottom: 14px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
            .field-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 4px; }
            .field-value { font-size: 15px; font-weight: 600; color: #0f172a; word-break: break-word; }
            .field-value a { color: #7D00FF; text-decoration: none; }
            .box { background: #f8fafc; border-radius: 12px; padding: 16px; margin: 20px 0; border: 1px solid #e2e8f0; }
            .footer { padding: 20px 32px; background: #f1f5f9; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
            .btn { display: inline-block; background: #7D00FF; color: #ffffff !important; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 13px; margin-top: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>heykudu Inbound Lead Notification</h1>
              <p>Submitted via about.heykudu.com marketing & AGUI engine</p>
            </div>
            <div class="content">
              <span class="badge">New Institutional Inbound</span>

              <div class="field-row">
                <div class="field-label">Full Name</div>
                <div class="field-value">${payload.full_name}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Institutional Email</div>
                <div class="field-value"><a href="mailto:${payload.email}">${payload.email}</a></div>
              </div>

              <div class="field-row">
                <div class="field-label">University / Institution</div>
                <div class="field-value">${payload.institution || "Not specified"}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Target Role / Designation</div>
                <div class="field-value">${payload.role || "Not specified"}</div>
              </div>

              ${payload.phone ? `
              <div class="field-row">
                <div class="field-label">Phone / WhatsApp</div>
                <div class="field-value"><a href="tel:${payload.phone}">${payload.phone}</a> | <a href="https://wa.me/${payload.phone.replace(/[^0-9]/g, "")}" target="_blank">Chat on WhatsApp</a></div>
              </div>
              ` : ""}

              ${payload.deliverable_requested ? `
              <div class="field-row">
                <div class="field-label">Deliverable Requested</div>
                <div class="field-value">${payload.deliverable_requested}</div>
              </div>
              ` : ""}

              ${payload.course_name || payload.lecturer_name ? `
              <div class="box">
                <div style="font-weight: 700; font-size: 13px; color: #047857; margin-bottom: 8px;">🎓 Student / Course Referral Details</div>
                ${payload.course_name ? `<p style="margin: 4px 0; font-size: 13px;"><strong>Course / Code:</strong> ${payload.course_name}</p>` : ""}
                ${payload.lecturer_name ? `<p style="margin: 4px 0; font-size: 13px;"><strong>Lecturer / Convenor:</strong> ${payload.lecturer_name}</p>` : ""}
                ${payload.lecturer_email ? `<p style="margin: 4px 0; font-size: 13px;"><strong>Lecturer Email:</strong> <a href="mailto:${payload.lecturer_email}">${payload.lecturer_email}</a></p>` : ""}
              </div>
              ` : ""}

              <div class="field-row">
                <div class="field-label">Marketing Attribution</div>
                <div class="field-value" style="font-size: 13px; font-weight: 400; color: #475569;">
                  Variant: <code>${payload.funnel_variant || "direct"}</code><br>
                  UTM Source: <code>${payload.utm_source || "none"}</code> | Campaign: <code>${payload.utm_campaign || "none"}</code>
                </div>
              </div>

              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${payload.email}?subject=Heykudu%20Clinical%20Pilot%20Follow-Up" class="btn">Reply to Lead Directly</a>
              </div>
            </div>
            <div class="footer">
              This automated notification was generated by the Heykudu Growth Platform.<br>
              Reference ID: ${payload.lead_id || "N/A"} • Timestamp: ${timestamp}
            </div>
          </div>
        </body>
        </html>
      `;

      const plainText = `
New University Lead Received

Name:        ${payload.full_name}
Email:       ${payload.email}
Institution: ${payload.institution || "N/A"}
Role:        ${payload.role || "N/A"}
Phone:       ${payload.phone || "N/A"}
Deliverable: ${payload.deliverable_requested || "N/A"}
Variant:     ${payload.funnel_variant || "direct"}
Course:      ${payload.course_name || "N/A"}
Lecturer:    ${payload.lecturer_name || "N/A"} (${payload.lecturer_email || "N/A"})
Submitted:   ${timestamp}
Reference:   ${payload.lead_id || "N/A"}
      `.trim();

      const response = await fetch("https://api.mailersend.com/v1/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "Authorization": `Bearer ${mailersendKey}`,
        },
        body: JSON.stringify({
          from: {
            email: senderEmail,
            name: "Heykudu Inbound Engine",
          },
          to: [
            {
              email: recipientEmail,
              name: "Heykudu Team",
            },
          ],
          reply_to: {
            email: payload.email,
            name: payload.full_name,
          },
          subject,
          html: htmlBody,
          text: plainText,
        }),
      });

      if (response.ok) {
        console.log(`[MAILERSEND SUCCESS] Notification email sent to ${recipientEmail}`);
        emailDispatched = true;
      } else {
        const errorText = await response.text();
        console.warn(`[MAILERSEND API ERROR] ${response.status}: ${errorText}`);
      }
    } catch (msErr) {
      console.error("[MAILERSEND DISPATCH ERROR]", msErr);
    }
  } else {
    console.log(`[EMAIL NOTICE] MAILERSEND_API_KEY not configured. Notification logged to console for ${recipientEmail}.`);
  }

  // 3. Slack Webhook Alert
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
                text: "🎉 New University Lead on about.heykudu.com!",
                emoji: true,
              },
            },
            {
              type: "section",
              fields: [
                { type: "mrkdwn", text: `*Prospect:*\n${payload.full_name}` },
                { type: "mrkdwn", text: `*Email:*\n<mailto:${payload.email}|${payload.email}>` },
                { type: "mrkdwn", text: `*Role:*\n${payload.role || "N/A"}` },
                { type: "mrkdwn", text: `*Institution:*\n${payload.institution || "N/A"}` },
              ],
            },
            {
              type: "context",
              elements: [
                {
                  type: "mrkdwn",
                  text: `Deliverable: *${payload.deliverable_requested || "Implementation Kit"}* | Phone: ${payload.phone || "N/A"} | ${timestamp}`,
                },
              ],
            },
          ],
        }),
      });
      slackDispatched = true;
      console.log("[SLACK SUCCESS] Lead notification sent to Slack webhook.");
    } catch (slackErr) {
      console.error("[SLACK ERROR]", slackErr);
    }
  }

  // 4. Optionally Sync into core CRM `leads` table in Supabase
  try {
    const nameParts = payload.full_name.trim().split(/\s+/);
    const firstName = nameParts[0] || "Valued";
    const lastName = nameParts.slice(1).join(" ") || "Prospect";

    await supabase.from("leads").upsert(
      {
        email: payload.email,
        first_name: firstName,
        last_name: lastName,
        learning_institution: payload.institution || null,
        stage: "Lead",
        source: "Demo Form",
        persona: payload.role?.toLowerCase().includes("student") ? "Student" : "Educator",
        goal: payload.deliverable_requested || payload.funnel_variant || "Institutional Pilot",
        updated_at: new Date().toISOString(),
      },
      { onConflict: "email" }
    );
    crmSynced = true;
  } catch (crmErr) {
    // Non-fatal, core CRM sync is optional
    console.debug("Core CRM leads sync note:", crmErr);
  }

  return { emailDispatched, slackDispatched, crmSynced };
}
