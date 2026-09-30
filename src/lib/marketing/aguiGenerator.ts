import { createClient } from "@supabase/supabase-js";

export interface AguiSimulatorConfig {
  metricName: string; // e.g. "Practical Sessions", "Clinical Hours", "Bedside Procedures"
  unit: string; // e.g. "sessions", "hours", "procedures"
  totalDefault: number; // e.g. 20, 100, 40
  attendedDefault: number; // e.g. 16, 75, 32
  thresholdPct: number; // e.g. 80
  greenStatusText: string;
  amberStatusText: string;
  redStatusText: string;
}

export interface AguiCaseStudy {
  badge: string;
  title: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface AguiVariant {
  slug: string;
  category: "medical" | "university_wide" | "student_led";
  badge: string;
  title?: string;
  targetPersona?: string;
  targetRole: string;
  heroHeadline: string;
  heroSubhead: string;
  proofStats: Array<{
    value: string;
    label: string;
    subtext: string;
  }>;
  painPoints: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  solutionFeatures: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  primaryCta: {
    label: string;
    actionType?: "schedule_briefing" | "deploy_pilot" | "interactive_demo" | "curriculum_audit";
    helperText: string;
  };
  deliverable: {
    title: string;
    format: string;
    description: string;
    filename: string;
  };
  caseStudy?: AguiCaseStudy;
  simulatorConfig?: AguiSimulatorConfig;
  closingScript?: {
    title?: string;
    targetRole?: string;
    targetPersona?: string;
    discoveryQuestions?: string[];
    keyQuestions?: string[];
    closingAngle?: string;
    pilotMemorandumTerms?: string[];
  };
  googleAdHeadlines?: string[];
  googleAdDescriptions?: string[];
}

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  if (!url || !key) return null;
  return createClient(url, key);
}

function normalizeKey(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Synthesizes an AI Generative User Interface (AGUI) grounded in Heykudu capabilities
 */
export async function generateAguiPayload(params: {
  query: string;
  targetRole?: string;
  faculty?: string;
  institution?: string;
}): Promise<{ variant: AguiVariant; cached: boolean }> {
  const query = params.query.trim();
  const cacheKey = normalizeKey(
    [query, params.targetRole, params.faculty, params.institution].filter(Boolean).join("--")
  );

  const supabase = getSupabaseClient();

  // 1. Check Supabase AGUI cache
  if (supabase) {
    try {
      const { data: cached } = await supabase
        .from("marketing_agui_cache")
        .select("payload, hit_count")
        .eq("cache_key", cacheKey)
        .maybeSingle();

      if (cached?.payload) {
        // Increment hit count asynchronously
        supabase
          .from("marketing_agui_cache")
          .update({ hit_count: (cached.hit_count || 1) + 1, updated_at: new Date().toISOString() })
          .eq("cache_key", cacheKey)
          .then();

        return { variant: cached.payload as AguiVariant, cached: true };
      }
    } catch (err) {
      console.warn("Supabase AGUI cache read error:", err);
    }
  }

  // 2. Synthesize with Google Gemini
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const prompt = `
You are the Lead Generative UI (AGUI) Architect for Heykudu (https://about.heykudu.com and https://heykudu.com).
Heykudu is South Africa and Africa's modern higher-education & clinical attendance, bedside procedure logbook, and student competency tracking platform.

A prospective university user or student arrived via this search query or persona context:
USER SEARCH QUERY / INTENT: "${query}"
TARGET ROLE: "${params.targetRole || "Course Convenor / Academic Educator / Student"}"
FACULTY / DISCIPLINE: "${params.faculty || "Higher Education / Health Sciences / University"}"
INSTITUTION: "${params.institution || "South African Higher Education Institution"}"

HEYKUDU GROUNDED TECHNICAL TRUTHS (DO NOT HALLUCINATE FEATURES WE DO NOT HAVE):
1. Offline-First Mobile Platform: Works natively inside basement hospital wards, remote clinics, and lecture halls without cellular data.
2. Anti-Proxy Dynamic QR Codes: QR code refreshes every 2 seconds on screen to stop buddy/proxy check-ins.
3. 1-Tap NFC Supervisor Sign-Off: Clinicians tap phone to student badge to approve bedside procedures in 30 seconds.
4. Sub-Meter GPS Geofencing: Verifies students are physically on the ward or campus.
5. Real-Time Student DP & Progress Bar: Real-time Red-Amber-Green (RAG) at-risk dashboard alerts educators weeks before exam DP (Duly Performed) exclusion.
6. Eliminates Paper: No lost logbook cards, no illegible signatures, no weekend spreadsheet data entry.
7. Compliance: POPIA and HPCSA compliant, hosted in South Africa.
8. Empirical Proof: Proven field results in Wits GEMP 2 Paediatrics (Charlotte Maxeke and Bara).

YOUR TASK:
Synthesize an AI Generative User Interface (AGUI) structured JSON object that tailors the entire landing page, copy, proof points, and interactive simulator specifically to the user's query and discipline, using their exact vocabulary.

Return ONLY a valid JSON object matching this TypeScript interface without markdown wrappers:
{
  "slug": "string-url-slug",
  "badge": "Short badge e.g. 'Faculty of Law & Humanities' or 'Nursing & Clinical Practical Hub'",
  "targetRole": "Specific persona title",
  "category": "medical" | "university_wide" | "student_led",
  "heroHeadline": "Punchy H1 headline (5-9 words) speaking directly to their exact problem",
  "heroSubhead": "Crisp 2-sentence value proposition explaining how Heykudu solves it in their exact context",
  "proofStats": [
    { "value": "100%", "label": "Short label", "subtext": "Contextual description" },
    { "value": "0", "label": "Short label", "subtext": "Contextual description" },
    { "value": "45s", "label": "Short label", "subtext": "Contextual description" },
    { "value": "Week 2", "label": "Short label", "subtext": "Contextual description" }
  ],
  "painPoints": [
    { "icon": "AlertTriangle", "title": "Pain point 1", "description": "Specific friction they face daily" },
    { "icon": "Clock", "title": "Pain point 2", "description": "Time lost or manual drag" },
    { "icon": "FileX", "title": "Pain point 3", "description": "Paper failure or buddy sign-in" },
    { "icon": "ShieldAlert", "title": "Pain point 4", "description": "Accreditation or DP exclusion risk" }
  ],
  "solutionFeatures": [
    { "icon": "Smartphone", "title": "Feature 1", "description": "How Heykudu fixes pain point 1" },
    { "icon": "QrCode", "title": "Feature 2", "description": "How Heykudu fixes pain point 2" },
    { "icon": "BarChart3", "title": "Feature 3", "description": "How Heykudu fixes pain point 3" },
    { "icon": "CheckCircle2", "title": "Feature 4", "description": "How Heykudu fixes pain point 4" }
  ],
  "caseStudy": {
    "badge": "Field Study Badge",
    "title": "Title of comparable pilot study",
    "description": "How a comparable South African cohort achieved 100% compliance using Heykudu",
    "stats": [
      { "value": "100%", "label": "Primary result" },
      { "value": "Zero", "label": "Eliminated drag" }
    ]
  },
  "primaryCta": {
    "label": "Action-oriented button label (e.g. 'Deploy 6-Week Turnkey Pilot' or 'Download Survival Kit')",
    "helperText": "No credit card or sales call required • Free forever up to 35 students"
  },
  "deliverable": {
    "title": "Title of tailored PDF toolkit",
    "format": "PDF Checklist & Implementation Guide",
    "description": "Specific description of what the user receives",
    "filename": "Heykudu_Custom_Guide.pdf"
  },
  "simulatorConfig": {
    "metricName": "e.g. Clinical Hours / Practical Sessions / Bedside DOPS",
    "unit": "e.g. hours / sessions / sign-offs",
    "totalDefault": 20,
    "attendedDefault": 16,
    "thresholdPct": 80,
    "greenStatusText": "DP Verified — 100% Eligible to sit final examinations",
    "amberStatusText": "At Risk — 2 more sessions needed before semester deadline",
    "redStatusText": "Exclusion Deficit — Below minimum DP requirement"
  },
  "closingScript": {
    "targetPersona": "Primary decision maker",
    "keyQuestions": [
      "Question 1 challenging legacy paper registers",
      "Question 2 about audit or DP dispute risk",
      "Question 3 about launching a 6-week paperless pilot"
    ],
    "closingAngle": "How to convert this department without human sales drag"
  }
}
`;

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: "application/json",
        maxOutputTokens: 8192,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini AGUI generation error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!textResponse) {
    throw new Error("Empty response returned from Gemini AGUI generator.");
  }

  const variant: AguiVariant = JSON.parse(textResponse);

  // 3. Cache into Supabase
  if (supabase) {
    try {
      await supabase.from("marketing_agui_cache").upsert(
        {
          cache_key: cacheKey,
          query,
          target_role: params.targetRole || null,
          faculty: params.faculty || null,
          institution: params.institution || null,
          payload: variant,
          hit_count: 1,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "cache_key" }
      );
    } catch (err) {
      console.warn("Supabase AGUI cache write error:", err);
    }
  }

  return { variant, cached: false };
}
