import { NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  program: z.string().min(2, "Program name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
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

    const { program, email, message } = result.data;

    // Log immediately to the serverless console so leads are ALWAYS captured in Vercel logs
    console.log(`[CONTACT LEAD RECEIVED]`);
    console.log(`Program: ${program}`);
    console.log(`Email:   ${email}`);
    console.log(`Message: ${message}`);

    // Optional: Send to Slack Webhook if configured
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
                  text: "🎉 New Clinical Lead for heykudu!",
                  emoji: true,
                },
              },
              {
                type: "section",
                fields: [
                  {
                    type: "mrkdwn",
                    text: `*Medical Program:*\n${program}`,
                  },
                  {
                    type: "mrkdwn",
                    text: `*Contact Email:*\n${email}`,
                  },
                ],
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `*Message / Requirements:*\n${message}`,
                },
              },
              {
                type: "context",
                elements: [
                  {
                    type: "mrkdwn",
                    text: `Submitted on ${new Date().toLocaleString()}`,
                  },
                ],
              },
            ],
          }),
        });
        console.log("[EMAIL DISPATCH] Successfully posted lead to Slack channel.");
      } catch (slackError) {
        console.error("Slack integration error:", slackError);
      }
    }

    // Optional: Send via Resend Email API if configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "heykudu Leads <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL_TARGET || "hello@heykudu.com",
            subject: `🎉 New Institutional Lead: ${program}`,
            html: `
              <div style="font-family: sans-serif; padding: 20px; line-height: 1.5; color: #333;">
                <h2 style="color: #6C22D6;">New Clinical Program Lead</h2>
                <p><strong>Medical Program:</strong> ${program}</p>
                <p><strong>Contact Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Requirements/Message:</strong></p>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; border-left: 4px solid #6C22D6;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
            `,
          }),
        });
        console.log("[EMAIL DISPATCH] Successfully dispatched lead email via Resend.");
      } catch (resendError) {
        console.error("Resend integration error:", resendError);
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

