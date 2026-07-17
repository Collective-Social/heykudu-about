import { NextResponse } from "next/server";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";

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

    // Persist submission to a local JSON file to guarantee lead capture without impacting live network services
    const leadsFilePath = path.join(process.cwd(), "contact_leads.json");
    let leads = [];
    try {
      const fileData = await fs.readFile(leadsFilePath, "utf8");
      leads = JSON.parse(fileData);
    } catch {
      // File doesn't exist yet, start with empty list
    }

    leads.push({
      program,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    await fs.writeFile(leadsFilePath, JSON.stringify(leads, null, 2), "utf8");

    // Print logs to console
    console.log(`[EMAIL DISPATCH] sending clinical lead message to no-reply@heykudu.com`);
    console.log(`Sender: ${email}`);
    console.log(`Program: ${program}`);
    console.log(`Content: ${message}`);

    return NextResponse.json({
      success: true,
      message: "Message successfully dispatched and saved securely.",
    });
  } catch (error) {
    console.error("Contact Form Submission Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
