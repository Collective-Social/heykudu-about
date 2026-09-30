import { NextRequest, NextResponse } from "next/server";
import { generateAguiPayload } from "@/lib/marketing/aguiGenerator";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q") || searchParams.get("query") || "Paperless Higher Education Attendance";
    const targetRole = searchParams.get("role") || undefined;
    const faculty = searchParams.get("faculty") || undefined;
    const institution = searchParams.get("institution") || undefined;

    const result = await generateAguiPayload({
      query,
      targetRole,
      faculty,
      institution,
    });

    return NextResponse.json({
      success: true,
      query,
      cached: result.cached,
      variant: result.variant,
    });
  } catch (error) {
    console.error("AGUI generation API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to generate AGUI payload",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, targetRole, faculty, institution } = body;

    if (!query || typeof query !== "string") {
      return NextResponse.json({ success: false, error: "query is required" }, { status: 400 });
    }

    const result = await generateAguiPayload({
      query,
      targetRole,
      faculty,
      institution,
    });

    return NextResponse.json({
      success: true,
      query,
      cached: result.cached,
      variant: result.variant,
    });
  } catch (error) {
    console.error("AGUI POST generation error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to generate AGUI payload",
      },
      { status: 500 }
    );
  }
}
