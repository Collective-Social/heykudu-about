import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

// Load environment variables securely, fallback to dummy values for compile safety
const SUPABASE_URL = process.env.SUPABASE_URL || "https://dummy.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "dummy-key";
const API_SECRET_KEY = process.env.MARKETING_API_SECRET_KEY || "";

// Initialize Supabase Client
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Define Page Component Schema
const PageComponentSchema = z.object({
  id: z.string(),
  type: z.enum(["hero", "bento_grid", "cta_banner", "feature_highlights", "text_section"]),
  title: z.string(),
  content: z.record(z.string(), z.any()),
});

const MarketingPagePayloadSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  components: z.array(PageComponentSchema),
});

export async function POST(req: NextRequest) {
  try {
    // Prevent execution if configured with dummy variables
    if (SUPABASE_URL === "https://dummy.supabase.co") {
      return NextResponse.json({ error: "Database not configured" }, { status: 500 });
    }

    // 1. Validate Secret Authorization Token
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ") || authHeader.split(" ")[1] !== API_SECRET_KEY) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    // 2. Parse and Validate Request Payload
    const body = await req.json();
    const result = MarketingPagePayloadSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Invalid payload schema", details: result.error.format() }, { status: 400 });
    }

    const { slug, title, description, components } = result.data;

    // 3. Upsert to Supabase marketing_pages Table
    const { data, error } = await supabase
      .from("marketing_pages")
      .upsert(
        {
          slug,
          title,
          description,
          components,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "slug" }
      )
      .select();

    if (error) {
      console.error("Supabase write error:", error);
      return NextResponse.json({ error: "Database operation failed", details: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, page: data });
  } catch (err: unknown) {
    console.error("API error:", err);
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: "Internal Server Error", message: errorMsg }, { status: 500 });
  }
}
export const dynamic = "force-dynamic";
