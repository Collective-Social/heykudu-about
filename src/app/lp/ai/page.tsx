"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AguiVariant } from "@/lib/marketing/aguiGenerator";
import { trackGoogleLeadConversion } from "@/lib/gtag";
import { getAttributionData } from "@/lib/attribution";
import {
  ShieldAlert,
  Clock,
  FileQuestion,
  MapPin,
  CheckCircle,
  BarChart3,
  Zap,
  Activity,
  Smartphone,
  UserX,
  FileText,
  AlertTriangle,
  UserMinus,
  Edit3,
  Sliders,
  CheckSquare,
  Mic,
  WifiOff,
  TrendingDown,
  MonitorX,
  BookOpen,
  TrendingUp,
  Cpu,
  Layers,
  ArrowRight,
  Download,
  Sparkles,
  Check,
  QrCode,
  Share2,
  Copy,
  RefreshCw,
  Search,
  ExternalLink,
} from "lucide-react";

// Icon mapping dictionary
const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-emerald-400" />,
  Clock: <Clock className="w-6 h-6 text-amber-400" />,
  FileQuestion: <FileQuestion className="w-6 h-6 text-rose-400" />,
  MapPin: <MapPin className="w-6 h-6 text-purple-400" />,
  CheckCircle: <CheckCircle className="w-6 h-6 text-emerald-400" />,
  CheckCircle2: <CheckCircle className="w-6 h-6 text-emerald-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-blue-400" />,
  Zap: <Zap className="w-6 h-6 text-amber-400" />,
  Activity: <Activity className="w-6 h-6 text-emerald-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-indigo-400" />,
  UserX: <UserX className="w-6 h-6 text-rose-400" />,
  FileText: <FileText className="w-6 h-6 text-cyan-400" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6 text-amber-400" />,
  UserMinus: <UserMinus className="w-6 h-6 text-rose-400" />,
  FileX: <FileQuestion className="w-6 h-6 text-rose-400" />,
  Edit3: <Edit3 className="w-6 h-6 text-blue-400" />,
  Sliders: <Sliders className="w-6 h-6 text-indigo-400" />,
  CheckSquare: <CheckSquare className="w-6 h-6 text-emerald-400" />,
  Mic: <Mic className="w-6 h-6 text-cyan-400" />,
  WifiOff: <WifiOff className="w-6 h-6 text-amber-400" />,
  TrendingDown: <TrendingDown className="w-6 h-6 text-rose-400" />,
  MonitorX: <MonitorX className="w-6 h-6 text-rose-400" />,
  BookOpen: <BookOpen className="w-6 h-6 text-purple-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-400" />,
  Cpu: <Cpu className="w-6 h-6 text-blue-400" />,
  Layers: <Layers className="w-6 h-6 text-indigo-400" />,
  QrCode: <QrCode className="w-6 h-6 text-emerald-400" />,
};

const SAMPLE_SCENARIOS = [
  {
    label: "🩺 Medical Dean",
    query: "HPCSA Clinical Training Audit & Ward Quota Compliance",
    role: "Executive Dean / Faculty Leadership",
  },
  {
    label: "🧪 Occupational Therapy",
    query: "Occupational Therapy Clinical Practicals & Rural Hours Logbook",
    role: "Clinical Course Convenor",
  },
  {
    label: "🏛️ Law / Commerce Lecture",
    query: "Stop Buddy Sign-Ins in 400-Seat Lecture Hall Registers",
    role: "Lead Lecturer / Course Convenor",
  },
  {
    label: "💉 Nursing Skills at SMU",
    query: "Sefako Makgatho Nursing Clinical Skills & Bedside Verification",
    role: "Clinical Nursing Facilitator",
  },
  {
    label: "🎓 Student DP Rescue",
    query: "Lost Medical Student Bedside Procedure Card in Scrubs",
    role: "Student / Class Representative",
  },
];

function AguiContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery =
    searchParams.get("q") ||
    searchParams.get("query") ||
    "Eliminate Paper Attendance & Disputed Clinical Logbooks";

  const [queryInput, setQueryInput] = useState(initialQuery);
  const [activeQuery, setActiveQuery] = useState(initialQuery);
  const [targetRole, setTargetRole] = useState(searchParams.get("role") || "");
  const faculty = searchParams.get("faculty") || "";
  const institution = searchParams.get("institution") || "";

  const [loading, setLoading] = useState(true);
  const [cached, setCached] = useState(false);
  const [generationTimeMs, setGenerationTimeMs] = useState<number | null>(null);
  const [variant, setVariant] = useState<AguiVariant | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Debug & Preview Controller Visibility
  const isDebugOrPreview =
    searchParams.get("debug") === "1" ||
    searchParams.get("debug") === "true" ||
    searchParams.get("preview") === "1" ||
    searchParams.get("preview") === "true" ||
    searchParams.get("admin") === "1";
  const [showControls, setShowControls] = useState(isDebugOrPreview);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userInstitution, setUserInstitution] = useState("");
  const [userRole, setUserRole] = useState("");
  const [courseName, setCourseName] = useState("");
  const [lecturerName, setLecturerName] = useState("");
  const [lecturerEmail, setLecturerEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [whatsappShareUrl, setWhatsappShareUrl] = useState<string | null>(null);
  const [whatsappShareText, setWhatsappShareText] = useState<string | null>(null);
  const [copiedPitch, setCopiedPitch] = useState(false);

  // Dynamic Simulator State
  const simConfig = variant?.simulatorConfig || {
    metricName: "Practical Sessions / Lectures",
    unit: "sessions",
    totalDefault: 20,
    attendedDefault: 16,
    thresholdPct: 80,
    greenStatusText: "DP Verified — 100% Eligible to sit final examinations",
    amberStatusText: "At Risk — 2 more sessions needed before semester deadline",
    redStatusText: "Exclusion Deficit — Below minimum DP requirement",
  };

  const [totalSessions, setTotalSessions] = useState(simConfig.totalDefault);
  const [attendedSessions, setAttendedSessions] = useState(simConfig.attendedDefault);

  useEffect(() => {
    fetchAgui(activeQuery, targetRole, faculty, institution);
  }, [activeQuery, targetRole, faculty, institution]);

  async function fetchAgui(q: string, role?: string, fac?: string, inst?: string) {
    setLoading(true);
    setError(null);
    const start = performance.now();

    try {
      const params = new URLSearchParams({ q });
      if (role) params.set("role", role);
      if (fac) params.set("faculty", fac);
      if (inst) params.set("institution", inst);

      const res = await fetch(`/api/marketing/agui?${params.toString()}`);
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to generate AGUI interface");
      }

      setVariant(data.variant);
      setCached(Boolean(data.cached));
      setGenerationTimeMs(Math.round(performance.now() - start));

      // Re-initialize simulator defaults
      if (data.variant.simulatorConfig) {
        setTotalSessions(data.variant.simulatorConfig.totalDefault || 20);
        setAttendedSessions(data.variant.simulatorConfig.attendedDefault || 16);
      }
    } catch (err: unknown) {
      console.error("Failed to load AGUI:", err);
      setError(err instanceof Error ? err.message : "Error generating interface");
    } finally {
      setLoading(false);
    }
  }

  function handleQuerySubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!queryInput.trim()) return;
    setActiveQuery(queryInput.trim());
    router.replace(`/lp/ai?q=${encodeURIComponent(queryInput.trim())}`);
  }

  function handleScenarioSelect(scenario: (typeof SAMPLE_SCENARIOS)[0]) {
    setQueryInput(scenario.query);
    setActiveQuery(scenario.query);
    setTargetRole(scenario.role);
    router.replace(
      `/lp/ai?q=${encodeURIComponent(scenario.query)}&role=${encodeURIComponent(scenario.role)}`
    );
  }

  const attendancePct = totalSessions > 0 ? Math.round((attendedSessions / totalSessions) * 100) : 0;
  const isGreen = attendancePct >= (simConfig.thresholdPct || 80);
  const isAmber = !isGreen && attendancePct >= 65;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !fullName) return;

    setIsSubmitting(true);
    try {
      const attribution = getAttributionData();
      const payload = {
        full_name: fullName,
        email,
        institution: userInstitution || institution || "Higher Education Institution",
        role: userRole || targetRole || variant?.targetRole || "Educator / Student",
        phone,
        funnel_variant: `agui:${variant?.slug || "custom"}`,
        course_name: courseName || undefined,
        lecturer_name: lecturerName || undefined,
        lecturer_email: lecturerEmail || undefined,
        notes: `Generated via AGUI Query: "${activeQuery}"`,
        ...attribution,
      };

      const res = await fetch("/api/marketing/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
        setSubmittedLeadId(data.lead_id);
        trackGoogleLeadConversion(1.0, "ZAR");
        if (data.whatsapp_share_url) {
          setWhatsappShareUrl(data.whatsapp_share_url);
          setWhatsappShareText(data.whatsapp_share_text);
        }
      }
    } catch (err) {
      console.error("Failed to submit AGUI lead:", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Standard Brand Marketing Header */}
      <Navbar />

      {/* ========================================================================= */}
      {/* 1. AGUI REAL-TIME CONTROLLER BAR (Internal Preview & Diagnostics Only)    */}
      {/* ========================================================================= */}
      {showControls && (
        <div className="sticky top-16 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl px-4 py-3">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                AGUI Engine Live
              </span>
              <span className="text-xs text-slate-400 hidden lg:inline">
                AI Generative User Interface synthesizing bespoke copy, stats, & simulator grounded in{" "}
                <code className="text-slate-300">.agents/strategy.md</code>
              </span>
            </div>

            <form onSubmit={handleQuerySubmit} className="flex items-center gap-2 w-full md:w-auto flex-1 max-w-xl">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={queryInput}
                  onChange={(e) => setQueryInput(e.target.value)}
                  placeholder="Enter any search intent, faculty, or course challenge..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 transition-colors whitespace-nowrap disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    Synthesizing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    Morph Interface
                  </>
                )}
              </button>
            </form>

            {generationTimeMs !== null && (
              <div className="text-[11px] text-slate-400 font-mono hidden xl:flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  {cached ? "⚡ Cache Hit" : "🧠 Gemini Flash Synthesized"}
                </span>
                <span>{generationTimeMs}ms</span>
              </div>
            )}
          </div>

          {/* Quick Scenario Chips */}
          <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-slate-800/60 flex items-center gap-2 overflow-x-auto text-xs pb-1">
            <span className="text-slate-400 font-medium text-[11px] whitespace-nowrap">Instant Scenarios:</span>
            {SAMPLE_SCENARIOS.map((sc, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleScenarioSelect(sc)}
                className="px-2.5 py-0.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-emerald-300 border border-slate-700/60 transition-colors whitespace-nowrap text-[11px]"
              >
                {sc.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setShowControls(false)}
              className="ml-auto text-[11px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800/50 hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              Hide Bar ✕
            </button>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="flex-1 flex flex-col">
        {loading ? (
          <div className={`max-w-4xl mx-auto ${showControls ? "py-24" : "pt-36 pb-28"} px-6 text-center`}>
            <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-slate-200 mb-2">Synthesizing Bespoke AGUI Interface...</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Analyzing query: <span className="text-emerald-400 italic font-mono">"{activeQuery}"</span>. Framing
              pedagogical vocabulary, proof anchors, and simulator thresholds grounded in Heykudu technical specifications.
            </p>
          </div>
        ) : error || !variant ? (
          <div className={`max-w-xl mx-auto ${showControls ? "py-20" : "pt-36 pb-28"} px-6 text-center`}>
            <AlertTriangle className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">AGUI Generation Error</h2>
            <p className="text-slate-400 text-sm mb-6">{error || "Failed to generate interface."}</p>
            <button
              onClick={() => fetchAgui(activeQuery)}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* ========================================================================= */}
            {/* 2. HERO SECTION (DYNAMIC AGUI SYNTHESIS)                                  */}
            {/* ========================================================================= */}
            <section className={`relative ${showControls ? "pt-12" : "pt-28 md:pt-36"} pb-16 px-6 lg:px-8 border-b border-slate-800/60 overflow-hidden bg-gradient-to-b from-[#5B00C7]/20 via-slate-950 to-slate-950`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{variant.badge}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-300 font-mono text-[11px]">{variant.targetRole}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
                  {variant.heroHeadline}
                </h1>

                <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
                  {variant.heroSubhead}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <a
                    href="#pilot-form"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{variant.primaryCta.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#interactive-simulator"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Sliders className="w-4 h-4 text-emerald-400" />
                    <span>Test Interactive Simulator</span>
                  </a>
                </div>

                <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{variant.primaryCta.helperText}</span>
                </p>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* 3. CONTEXTUAL PROOF METRICS                                               */}
            {/* ========================================================================= */}
            <section className="py-12 bg-slate-900/40 border-b border-slate-800/60 px-6">
              <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                {variant.proofStats.map((stat, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-slate-200 mb-1">{stat.label}</div>
                    <div className="text-xs text-slate-400">{stat.subtext}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========================================================================= */}
            {/* 4. ADAPTIVE INTERACTIVE SIMULATOR (DP / HOURS / PROCEDURES)               */}
            {/* ========================================================================= */}
            <section id="interactive-simulator" className="py-16 px-6 lg:px-8 border-b border-slate-800/60 bg-slate-950">
              <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                      <Sliders className="w-3.5 h-3.5" />
                      <span>Adaptive AGUI Simulator</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Live DP & Attendance Compliance Calculator</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Calibrated to: <span className="text-slate-200 font-medium">{simConfig.metricName}</span>
                    </p>
                  </div>

                  <div className="text-right">
                    <div
                      className={`text-3xl font-extrabold ${
                        isGreen ? "text-emerald-400" : isAmber ? "text-amber-400" : "text-rose-400"
                      }`}
                    >
                      {attendancePct}%
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      {attendedSessions} of {totalSessions} {simConfig.unit}
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="w-full bg-slate-950 rounded-full h-4 p-0.5 border border-slate-800 mb-6 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isGreen ? "bg-emerald-500" : isAmber ? "bg-amber-500" : "bg-rose-500"
                    }`}
                    style={{ width: `${Math.min(attendancePct, 100)}%` }}
                  />
                </div>

                {/* Status Alert */}
                <div
                  className={`p-4 rounded-xl border text-xs sm:text-sm mb-8 flex items-center gap-3 ${
                    isGreen
                      ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-300"
                      : isAmber
                      ? "bg-amber-950/30 border-amber-500/30 text-amber-300"
                      : "bg-rose-950/30 border-rose-500/30 text-rose-300"
                  }`}
                >
                  <Activity className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block mb-0.5">
                      {isGreen ? "Compliant Status" : isAmber ? "Early Warning Indicator" : "Deficit Alert"}
                    </span>
                    <span>
                      {isGreen
                        ? simConfig.greenStatusText
                        : isAmber
                        ? simConfig.amberStatusText
                        : simConfig.redStatusText}
                    </span>
                  </div>
                </div>

                {/* Slider Control */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Adjust Verified {simConfig.metricName}:</span>
                    <span className="font-mono text-emerald-400 font-bold">
                      {attendedSessions} {simConfig.unit}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={totalSessions}
                    value={attendedSessions}
                    onChange={(e) => setAttendedSessions(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-2 bg-slate-950 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>0 {simConfig.unit}</span>
                    <span>Threshold ({simConfig.thresholdPct}% DP Cutoff)</span>
                    <span>
                      {totalSessions} {simConfig.unit}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* 5. SPECIFIC PAIN POINTS & SOLUTIONS                                       */}
            {/* ========================================================================= */}
            <section className="py-16 px-6 lg:px-8 border-b border-slate-800/60 bg-slate-900/30">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Why Legacy Paper Fails in {variant.badge}
                  </h2>
                  <p className="text-slate-400 text-sm max-w-xl mx-auto">
                    The systemic points of friction eliminated when transitioning to Heykudu.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                  {variant.painPoints.map((pain, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex gap-4">
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex-shrink-0 h-fit">
                        {ICON_MAP[pain.icon] || <AlertTriangle className="w-6 h-6 text-amber-400" />}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white mb-1">{pain.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{pain.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    The Heykudu Technical Architecture
                  </h2>
                  <p className="text-slate-400 text-sm max-w-xl mx-auto">
                    Tamper-proof, offline-first mobile verification built for African institutions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {variant.solutionFeatures.map((sol, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex gap-4">
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex-shrink-0 h-fit">
                        {ICON_MAP[sol.icon] || <CheckCircle className="w-6 h-6 text-emerald-400" />}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white mb-1">{sol.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{sol.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* 6. GROUNDED CASE STUDY                                                    */}
            {/* ========================================================================= */}
            {variant.caseStudy && (
              <section className="py-16 px-6 lg:px-8 border-b border-slate-800/60 bg-slate-950">
                <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4 inline-block">
                    {variant.caseStudy.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{variant.caseStudy.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{variant.caseStudy.description}</p>
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                    {variant.caseStudy.stats?.map((s: { value: string; label: string }, idx: number) => (
                      <div key={idx}>
                        <div className="text-2xl font-bold text-emerald-400">{s.value}</div>
                        <div className="text-xs text-slate-400">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* ========================================================================= */}
            {/* 7. ZERO-HUMAN-INTERVENTION FAST-TRACK BANNER                              */}
            {/* ========================================================================= */}
            <section className="py-8 px-6 bg-emerald-950/20 border-b border-emerald-500/20">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Zero-Sales-Call Fast Track: Run Your Next Session Paperless Today
                    </h4>
                    <p className="text-xs text-slate-400">
                      Create a live digital register in 60 seconds with no credit card or sales call. Free forever for up to 35 students.
                    </p>
                  </div>
                </div>
                <a
                  href="https://heykudu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center gap-1.5 transition-colors whitespace-nowrap shadow-md shadow-emerald-500/20"
                >
                  <span>Launch 60-Sec Free Register</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* 8. LEAD CAPTURE & DELIVERABLE DOWNLOAD FORM                               */}
            {/* ========================================================================= */}
            <section id="pilot-form" className="py-20 px-6 lg:px-8 bg-slate-950 scroll-mt-24 border-t border-slate-900">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
                    <Check className="w-3.5 h-3.5" />
                    <span>Free 6-Week Turnkey Pilot</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
                    Activate Your Free Cohort &amp; Receive {variant.deliverable.title}
                  </h2>
                  <p className="text-slate-400 text-sm max-w-xl mx-auto">
                    Zero hardware or complex IT integration. Free forever for up to 35 students. Dispatched instantly to your institutional inbox.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
                  {isSubmitted ? (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                        <Check className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Your Toolkit Has Been Prepared!</h3>
                      <p className="text-sm text-slate-300 mb-6">
                        We have dispatched <span className="text-emerald-400 font-semibold">{variant.deliverable.title}</span> to{" "}
                        <span className="font-mono text-white">{email}</span>.
                        {submittedLeadId && (
                          <span className="block text-[11px] font-mono text-slate-500 mt-1">
                            Tracking Reference: {submittedLeadId}
                          </span>
                        )}
                      </p>

                      {/* WhatsApp Referral Action if available */}
                      {whatsappShareUrl && (
                        <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-left mb-6">
                          <h4 className="text-sm font-semibold text-emerald-300 mb-2 flex items-center gap-2">
                            <Share2 className="w-4 h-4" />
                            <span>1-Click WhatsApp Class / Lecturer Referral</span>
                          </h4>
                          <p className="text-xs text-slate-300 mb-4">
                            Send this pre-formatted invitation directly to your class WhatsApp group or course convenor:
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <a
                              href={whatsappShareUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                            >
                              <span>Open in WhatsApp</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                            <button
                              type="button"
                              onClick={() => {
                                if (whatsappShareText) {
                                  navigator.clipboard.writeText(whatsappShareText);
                                  setCopiedPitch(true);
                                  setTimeout(() => setCopiedPitch(false), 2000);
                                }
                              }}
                              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center justify-center gap-1.5 transition-colors"
                            >
                              {copiedPitch ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedPitch ? "Copied!" : "Copy Pitch Message"}</span>
                            </button>
                          </div>
                        </div>
                      )}

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                      >
                        <span>Schedule 15-Minute Institutional Briefing</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Dr. Lerato Khumalo"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:border-emerald-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">Institutional Email *</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. lerato.khumalo@wits.ac.za"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:border-emerald-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">University / Faculty</label>
                          <input
                            type="text"
                            value={userInstitution}
                            onChange={(e) => setUserInstitution(e.target.value)}
                            placeholder="e.g. Wits Health Sciences"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:border-emerald-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">Your Role</label>
                          <input
                            type="text"
                            value={userRole}
                            onChange={(e) => setUserRole(e.target.value)}
                            placeholder={variant.targetRole}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:border-emerald-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">Mobile / WhatsApp</label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+27 82 000 0000"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:border-emerald-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      {variant.category === "student_led" && (
                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                          <span className="text-xs font-semibold text-emerald-400 block">
                            Nominate Course / Rotation for 1-Click Setup:
                          </span>
                          <div className="grid sm:grid-cols-3 gap-3">
                            <input
                              type="text"
                              value={courseName}
                              onChange={(e) => setCourseName(e.target.value)}
                              placeholder="Course Code / Name (e.g. PEDS3001)"
                              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                            />
                            <input
                              type="text"
                              value={lecturerName}
                              onChange={(e) => setLecturerName(e.target.value)}
                              placeholder="Lecturer / Convenor Name"
                              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                            />
                            <input
                              type="email"
                              value={lecturerEmail}
                              onChange={(e) => setLecturerEmail(e.target.value)}
                              placeholder="Lecturer Email"
                              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                            />
                          </div>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Processing Request...</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            <span>Download Free {variant.deliverable.title}</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Discreet Developer Toggle at Bottom */}
        {!showControls && (
          <div className="py-4 text-center bg-slate-950 border-t border-slate-900">
            <button
              type="button"
              onClick={() => setShowControls(true)}
              className="text-[11px] text-slate-600 hover:text-slate-400 font-mono transition-colors"
            >
              ⚙️ Preview Controls / Test AGUI Generator
            </button>
          </div>
        )}
      </div>

      {/* Standard Brand Marketing Footer */}
      <Footer />
    </div>
  );
}

export default function AguiLandingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
          <div className="w-8 h-8 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mr-3" />
          <span>Loading AGUI Engine...</span>
        </div>
      }
    >
      <AguiContent />
    </Suspense>
  );
}
