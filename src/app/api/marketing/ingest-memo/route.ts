import { NextRequest, NextResponse } from "next/server";
import { transcribeAndExtractMemo } from "@/lib/marketing/agentEngine";

export const dynamic = "force-dynamic";

/**
 * POST /api/marketing/ingest-memo
 * Transcribes audio recording and returns concept and suggested title
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const audioFile = formData.get("audio") as File;

    if (!audioFile) {
      return NextResponse.json({ error: "No audio file provided." }, { status: 400 });
    }

    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const mimeType = audioFile.type || "audio/webm";

    const extraction = await transcribeAndExtractMemo(buffer, mimeType);

    return NextResponse.json({
      success: true,
      transcript: extraction.transcript,
      concept: extraction.concept,
      title: extraction.title,
    });
  } catch (err: any) {
    console.error("Audio memo ingestion failed:", err);
    return NextResponse.json({ error: err.message || "Failed to process audio memo." }, { status: 500 });
  }
}
