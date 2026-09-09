import fs from "fs";
import path from "path";

export interface ResearchDossier {
  target_audience: {
    primary_institution: string;
    target_personas: string[];
    accreditation_focus: string;
    operational_friction: string;
  };
  creative_angle: {
    contrarian_truth: string;
    legacy_bottleneck: string;
    architectural_solution: string;
    proof_of_work_link: string;
    pr_stunt_concept: {
      headline: string;
      mechanic: string;
      target_media: string[];
    };
  };
  deliverables_summary: {
    article_title: string;
    article_slug: string;
    email_sequence_touches: number;
    pr_headline: string;
    social_angles: string[];
  };
}

export interface GeneratedChannelDeliverables {
  web_article: {
    title: string;
    slug: string;
    excerpt: string;
    markdown_content: string;
    category: string;
    reading_time_minutes: number;
  };
  email_sequence: {
    sequence_name: string;
    target_persona: string;
    touches: Array<{
      day: number;
      subject: string;
      body: string;
      cta: string;
    }>;
  };
  pr_stunt: {
    stunt_name: string;
    press_release_headline: string;
    dateline: string;
    press_release_body: string;
    journalist_pitch: string;
  };
  social_package: {
    linkedin_post: string;
    x_thread: string[];
    substack_notes: string;
  };
}

/**
 * Loads .agents specification files from repository
 */
function loadAgentSpecs(): { strategy: string; editorial: string; agents: Record<string, string> } {
  try {
    const agentsDir = path.join(process.cwd(), ".agents");
    const strategy = fs.existsSync(path.join(agentsDir, "strategy.md"))
      ? fs.readFileSync(path.join(agentsDir, "strategy.md"), "utf-8")
      : "Heykudu Clinical Education Engine Strategy";

    const editorial = fs.existsSync(path.join(agentsDir, "rules/editorial-standards.md"))
      ? fs.readFileSync(path.join(agentsDir, "rules/editorial-standards.md"), "utf-8")
      : "Direct, factual, systems-thinker tone";

    const agents: Record<string, string> = {};
    const agentsSubdir = path.join(agentsDir, "agents");
    if (fs.existsSync(agentsSubdir)) {
      const files = fs.readdirSync(agentsSubdir);
      for (const file of files) {
        if (file.endsWith(".md")) {
          const name = file.replace(".md", "");
          agents[name] = fs.readFileSync(path.join(agentsSubdir, file), "utf-8");
        }
      }
    }

    return { strategy, editorial, agents };
  } catch (err) {
    console.warn("Could not read .agents directory, using standard defaults:", err);
    return {
      strategy: "Heykudu Clinical Education Engine Strategy",
      editorial: "Direct, factual, systems-thinker tone",
      agents: {}
    };
  }
}

/**
 * Executes a structured call to Google Gemini 2.5 Flash
 */
async function callGemini(prompt: string, inlineAudio?: { mimeType: string; data: string }): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;

  const parts: Record<string, unknown>[] = [];
  if (inlineAudio) {
    parts.push({
      inlineData: {
        mimeType: inlineAudio.mimeType,
        data: inlineAudio.data
      }
    });
  }
  parts.push({ text: prompt });

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts }],
      generationConfig: {
        temperature: 0.3,
        responseMimeType: "application/json",
        maxOutputTokens: 8192
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!textResponse) {
    throw new Error("Empty response returned from Gemini.");
  }

  return textResponse;
}

/**
 * Transcribes audio voice memo and extracts campaign idea
 */
export async function transcribeAndExtractMemo(audioBuffer: Buffer, mimeType: string = "audio/webm"): Promise<{ transcript: string; concept: string; title: string }> {
  const base64Data = audioBuffer.toString("base64");
  const prompt = `
You are the Executive Voice Transcriber for Duncan Luke, Founder of Heykudu.
Analyze this voice memo.
1. Transcribe the audio faithfully.
2. Extract the core campaign idea or milestone.
3. Suggest a punchy 3-6 word campaign title.

Return JSON in this format:
{
  "transcript": "...",
  "concept": "...",
  "title": "..."
}
`;

  const jsonStr = await callGemini(prompt, { mimeType, data: base64Data });
  return JSON.parse(jsonStr);
}

/**
 * Executes Deep Multi-Agent Research on a Campaign Concept
 */
export async function executeCampaignResearch(
  campaignTitle: string,
  conceptPrompt: string,
  source: string = "ui_prompt"
): Promise<{ dossier: ResearchDossier; deliverables: GeneratedChannelDeliverables }> {
  const { strategy, editorial, agents } = loadAgentSpecs();
  const agentPersonas = Object.entries(agents).map(([k, v]) => `[${k}]:\n${v}`).join("\n\n");

  const systemContext = `
${strategy}

================ EDITORIAL STANDARDS ================
${editorial}

================ MULTI-AGENT SWARM INSTRUCTIONS ================
${agentPersonas || "You are the combined multi-agent swarm: Master Orchestrator, Institutional Researcher, Creative PR Strategist, and Channel Architect."}
`;

  const userPrompt = `
CAMPAIGN INTAKE:
Title: "${campaignTitle}"
Concept / Prompt: "${conceptPrompt}"
Source: "${source}"

Generate a complete, deeply researched Campaign Dossier and all 4 channel deliverables.
Ensure:
1. Web article is comprehensive (1200+ words), authoritative, and provides concrete clinical/technical details.
2. Email sequence contains 3 strategic touches tailored to Clinical HODs or Faculty Deans.
3. PR stunt is provocative, data-backed, and credible for health journalists.
4. Social package includes a high-status LinkedIn post and a 4-tweet X thread.

Return strictly valid JSON matching this schema:
{
  "dossier": {
    "target_audience": {
      "primary_institution": "string",
      "target_personas": ["string"],
      "accreditation_focus": "string",
      "operational_friction": "string"
    },
    "creative_angle": {
      "contrarian_truth": "string",
      "legacy_bottleneck": "string",
      "architectural_solution": "string",
      "proof_of_work_link": "string",
      "pr_stunt_concept": {
        "headline": "string",
        "mechanic": "string",
        "target_media": ["string"]
      }
    },
    "deliverables_summary": {
      "article_title": "string",
      "article_slug": "string",
      "email_sequence_touches": 3,
      "pr_headline": "string",
      "social_angles": ["string"]
    }
  },
  "deliverables": {
    "web_article": {
      "title": "string",
      "slug": "string (lowercase, alphanumeric with hyphens, e.g. wits-paperless-logbook-study)",
      "excerpt": "string (under 160 chars)",
      "markdown_content": "string (rich markdown with headings, bullet points, callouts)",
      "category": "Medical Education | Clinical Technology | Faculty Accreditation",
      "reading_time_minutes": 5
    },
    "email_sequence": {
      "sequence_name": "string",
      "target_persona": "string",
      "touches": [
        { "day": 0, "subject": "string", "body": "string", "cta": "string" },
        { "day": 3, "subject": "string", "body": "string", "cta": "string" },
        { "day": 7, "subject": "string", "body": "string", "cta": "string" }
      ]
    },
    "pr_stunt": {
      "stunt_name": "string",
      "press_release_headline": "string",
      "dateline": "JOHANNESBURG, SOUTH AFRICA",
      "press_release_body": "string",
      "journalist_pitch": "string"
    },
    "social_package": {
      "linkedin_post": "string",
      "x_thread": ["string", "string", "string", "string"],
      "substack_notes": "string"
    }
  }
}
`;

  const fullPrompt = `${systemContext}\n\n${userPrompt}`;
  const rawJson = await callGemini(fullPrompt);
  
  // Clean markdown fencing if present
  let cleanJson = rawJson.trim();
  if (cleanJson.startsWith("```json")) {
    cleanJson = cleanJson.replace(/^```json/, "").replace(/```$/, "").trim();
  } else if (cleanJson.startsWith("```")) {
    cleanJson = cleanJson.replace(/^```/, "").replace(/```$/, "").trim();
  }

  const result = JSON.parse(cleanJson);
  return result;
}
