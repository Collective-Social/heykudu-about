import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { pin } = await request.json();
    const VALID_PIN = process.env.PRESENTATION_PIN || process.env.NEXT_PUBLIC_PRESENTATION_PIN || "wits2026";

    if (pin && typeof pin === "string" && pin.trim().toLowerCase() === VALID_PIN.toLowerCase()) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Invalid access passcode" }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, error: "Server error processing passcode verification" }, { status: 500 });
  }
}
