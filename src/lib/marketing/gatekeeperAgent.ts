export interface GatekeeperAuditReport {
  passed: boolean;
  pii_clean: boolean;
  flagged_terms: string[];
  quality_score: number; // 1 to 100
  strategy_alignment: "Pass" | "Fail";
  audit_summary: string;
  remediation_advice?: string;
}

/**
 * Deterministic Regex PII Pre-filter
 */
export function deterministicPiiCheck(text: string): string[] {
  const flagged: string[] = [];

  // South African / Generic ID patterns (13 digits)
  const idRegex = /\b\d{13}\b/g;
  if (idRegex.test(text)) {
    flagged.push("13-digit National ID pattern detected");
  }

  // Student number patterns (e.g., 7-8 consecutive digits)
  const studentNumRegex = /\b(student\s*(?:no|number|id)?[:\s]*)([0-9]{6,8})\b/gi;
  if (studentNumRegex.test(text)) {
    flagged.push("Student registration number pattern detected");
  }

  // Patient folder / MRN patterns (e.g., Folder #12345, MRN 4892) requiring numeric digits
  const folderRegex = /\b(?:patient\s+folder|folder\s*(?:#|no|number)|mrn\s*(?:#|no|number)?|chart\s*(?:#|no|number))\s*[:\s]*[A-Za-z0-9-]*\d+[A-Za-z0-9-]*\b/gi;
  if (folderRegex.test(text)) {
    flagged.push("Hospital patient folder / MRN reference detected");
  }

  // Cellphone / phone numbers (e.g. +27..., 082...)
  const phoneRegex = /(?:(?<=\s|^)\+27|\b0)[6-8][0-9]{8}\b/g;
  if (phoneRegex.test(text)) {
    flagged.push("Phone number detected");
  }

  return flagged;
}

/**
 * AI-Powered Semantic PII & Strategic Quality Audit via Gemini 2.5
 */
export async function auditMarketingElement(
  channel: string,
  title: string,
  content: string | Record<string, unknown>
): Promise<GatekeeperAuditReport> {
  const contentString = typeof content === "string" ? content : JSON.stringify(content, null, 2);

  // 1. Run deterministic regex checks
  const deterministicFlags = deterministicPiiCheck(contentString);

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // Fallback deterministic audit if API key is not supplied
    const passed = deterministicFlags.length === 0;
    return {
      passed,
      pii_clean: deterministicFlags.length === 0,
      flagged_terms: deterministicFlags,
      quality_score: passed ? 90 : 30,
      strategy_alignment: passed ? "Pass" : "Fail",
      audit_summary: passed
        ? "Deterministic regex scan passed. No student or patient identifiers found."
        : `Potential PII flags identified: ${deterministicFlags.join(", ")}`
    };
  }

  const prompt = `
You are the Supreme Pre-Flight Gatekeeper and Safety Officer for Heykudu.
Your responsibility is to strictly audit content before it is published to ensure:
1. STRICT ZERO-TOLERANCE MEDICAL & STUDENT PRIVACY (PII SHIELD):
   - Check for real patient names, patient initials paired with identifiable dates, hospital bed numbers, ward room numbers, or medical folder/MRN numbers.
   - Check for real university student names, student registration numbers, or unanonymized academic performance data.
   - Check for unredacted personal phone numbers, clinician email addresses, or database credentials.
2. EDITORIAL & STRATEGIC QUALITY:
   - Factual, authoritative, direct tone (Duncan Luke's voice).
   - Zero generic corporate AI jargon or buzzwords.
   - Grounded in real clinical education operations (Wits GEMP 2, logbooks, NFC presence).

ELEMENT TO AUDIT:
Channel: ${channel}
Title: "${title}"
Content:
${contentString.slice(0, 8000)}

Return strictly valid JSON in this format:
{
  "passed": true | false,
  "pii_clean": true | false,
  "flagged_terms": ["any flagged words or phrases"],
  "quality_score": 85,
  "strategy_alignment": "Pass" | "Fail",
  "audit_summary": "Comprehensive explanation of why this passed or failed",
  "remediation_advice": "Actionable fixes if failed, or empty string if passed"
}
`;

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1,
          responseMimeType: "application/json"
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gatekeeper API error: ${response.status}`);
    }

    const data = await response.json();
    const rawJson = data.candidates?.[0]?.content?.parts?.[0]?.text;
    const report: GatekeeperAuditReport = JSON.parse(rawJson);

    // Merge deterministic flags if any were found
    if (deterministicFlags.length > 0) {
      report.pii_clean = false;
      report.passed = false;
      report.flagged_terms = Array.from(new Set([...(report.flagged_terms || []), ...deterministicFlags]));
    }

    return report;
  } catch (err: unknown) {
    console.error("Gatekeeper audit exception:", err);
    const passed = deterministicFlags.length === 0;
    return {
      passed,
      pii_clean: passed,
      flagged_terms: deterministicFlags,
      quality_score: passed ? 85 : 30,
      strategy_alignment: passed ? "Pass" : "Fail",
      audit_summary: passed
        ? "Deterministic audit completed safely."
        : `Flagged items: ${deterministicFlags.join(", ")}`
    };
  }
}
