"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { FUNNEL_MATRIX, FunnelVariant } from "@/lib/marketing/funnelMatrix";
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
  Calendar,
  Sparkles,
  Building2,
  Check,
  QrCode,
  Share2,
  Award,
  Copy,
} from "lucide-react";

export default function LandingPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const rawSlug = (params?.slug as string) || "departmental";
  const slug = FUNNEL_MATRIX[rawSlug] ? rawSlug : "departmental";
  const variant: FunnelVariant = FUNNEL_MATRIX[slug];

  // Dynamic Headline / Subhead / Badge Parameter Overrides (for 10/10 Google Ads Quality Score)
  const queryHeadline = searchParams.get("headline") || searchParams.get("h");
  const querySubhead = searchParams.get("subhead") || searchParams.get("sub");
  const queryBadge = searchParams.get("badge");
  const queryFaculty = searchParams.get("faculty");
  const queryRole = searchParams.get("role");

  const displayHeadline = queryHeadline || variant.heroHeadline;
  const displaySubhead = querySubhead || variant.heroSubhead;
  const displayBadge = queryBadge || (
    variant.category === "medical"
      ? (queryFaculty ? `${queryFaculty} Faculty` : "Health Sciences")
      : variant.category === "student_led"
      ? (queryFaculty ? `${queryFaculty} Student Portal` : "Student & Class Portal")
      : (queryFaculty ? `${queryFaculty} Department` : "Higher Education")
  );

  // Lead Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [role, setRole] = useState("Head of Department");
  const [phone, setPhone] = useState("");
  const [courseName, setCourseName] = useState("");
  const [lecturerName, setLecturerName] = useState("");
  const [lecturerEmail, setLecturerEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [whatsappShareUrl, setWhatsappShareUrl] = useState<string | null>(null);
  const [whatsappShareText, setWhatsappShareText] = useState<string | null>(null);
  const [copiedPitch, setCopiedPitch] = useState(false);

  // Interactive Student Progress & DP Simulator State
  const simTotalSessions = 20;
  const [simAttended, setSimAttended] = useState(16);
  const simPct = Math.round((simAttended / simTotalSessions) * 100);
  const isGreen = simPct >= 80;
  const isAmber = simPct >= 65 && simPct < 80;
  const isRed = simPct < 65;

  useEffect(() => {
    // Set default role based on query parameter or variant
    if (queryRole) {
      setRole(queryRole);
    } else if (slug === "students") {
      setRole("Student / Class Representative");
    } else if (slug === "accreditation") {
      setRole("Executive Dean");
    } else if (slug === "departmental") {
      setRole("Head of Department");
    } else if (slug === "bedside-wba") {
      setRole("Clinical Consultant / Supervisor");
    } else if (slug === "epa-transition") {
      setRole("Curriculum Committee Chair");
    } else if (slug === "paperless-attendance") {
      setRole("Course Convenor / Lecturer");
    } else if (slug === "student-rag-analytics") {
      setRole("Director of Teaching & Learning");
    } else if (slug === "distributed-sites") {
      setRole("Director of Work-Integrated Learning (WIL)");
    } else if (slug === "academic-apis") {
      setRole("Head of Academic IT / EdTech");
    }
  }, [slug, queryRole]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = {
        full_name: fullName,
        email,
        institution,
        role,
        phone,
        funnel_variant: slug,
        utm_source: searchParams.get("utm_source") || "direct",
        utm_campaign: searchParams.get("utm_campaign") || slug,
        utm_medium: searchParams.get("utm_medium") || "web",
        utm_content: searchParams.get("utm_content") || "hero_form",
        deliverable_requested: variant.deliverable.title,
        course_name: courseName,
        lecturer_name: lecturerName,
        lecturer_email: lecturerEmail,
        notes,
      };

      const res = await fetch("/api/marketing/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      if (data.whatsapp_share_url) {
        setWhatsappShareUrl(data.whatsapp_share_url);
      }
      if (data.whatsapp_share_text) {
        setWhatsappShareText(data.whatsapp_share_text);
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyPitch = () => {
    if (!whatsappShareText) return;
    navigator.clipboard.writeText(whatsappShareText);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2000);
  };

  const renderIcon = (name: string) => {
    const props = { className: "w-6 h-6 text-emerald-400" };
    switch (name) {
      case "shield-alert": return <ShieldAlert {...props} />;
      case "clock": return <Clock {...props} />;
      case "file-question": return <FileQuestion {...props} />;
      case "map-pin": return <MapPin {...props} />;
      case "check-circle": return <CheckCircle {...props} />;
      case "bar-chart": return <BarChart3 {...props} />;
      case "zap": return <Zap {...props} />;
      case "activity": return <Activity {...props} />;
      case "smartphone": return <Smartphone {...props} />;
      case "user-x": return <UserX {...props} />;
      case "file-text": return <FileText {...props} />;
      case "alert-triangle": return <AlertTriangle {...props} />;
      case "user-minus": return <UserMinus {...props} />;
      case "edit-3": return <Edit3 {...props} />;
      case "sliders": return <Sliders {...props} />;
      case "check-square": return <CheckSquare {...props} />;
      case "mic": return <Mic {...props} />;
      case "wifi-off": return <WifiOff {...props} />;
      case "trending-down": return <TrendingDown {...props} />;
      case "monitor-x": return <MonitorX {...props} />;
      case "book-open": return <BookOpen {...props} />;
      case "trending-up": return <TrendingUp {...props} />;
      case "cpu": return <Cpu {...props} />;
      case "layers": return <Layers {...props} />;
      case "qr-code": return <QrCode {...props} />;
      case "share-2": return <Share2 {...props} />;
      case "award": return <Award {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">Heykudu</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {displayBadge}
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="#lead-form"
              className="text-xs md:text-sm font-semibold px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-lg shadow-emerald-500/20"
            >
              {variant.category === "medical"
                ? "Get Rotation Blueprint"
                : variant.category === "student_led"
                ? "Nominate Your Course"
                : "Get Attendance Playbook"}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-950/30 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {displayBadge}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {displayHeadline}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {displaySubhead}
          </p>

          {/* Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {variant.proofStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 text-center backdrop-blur"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-emerald-400 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.subtext}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#lead-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2"
            >
              {variant.primaryCta.label}
              <ArrowRight className="w-5 h-5" />
            </a>
            {slug === "students" || slug === "student-rag-analytics" ? (
              <a
                href="#simulator"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-base border border-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Sliders className="w-4 h-4 text-emerald-400" />
                Try Live DP Simulator
              </a>
            ) : (
              <a
                href="#case-study"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-base border border-slate-800 transition-colors"
              >
                Read Institutional Case Study
              </a>
            )}
          </div>
          <p className="text-xs text-slate-500 mt-3">{variant.primaryCta.helperText}</p>
        </div>
      </section>

      {/* Interactive Student Progress & DP Simulator Section (Visible on students & analytics pages) */}
      {(slug === "students" || slug === "student-rag-analytics") && (
        <section id="simulator" className="py-16 px-4 bg-slate-950 border-b border-slate-900">
          <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl relative">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3">
                <Sliders className="w-3.5 h-3.5" />
                Interactive Attendance & DP Simulator
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Real-Time RAG Status on Every Student Mobile Phone
              </h2>
              <p className="text-xs md:text-sm text-slate-400">
                Move the slider to simulate attendance across 20 lectures/rotations and see how Heykudu protects students and alerts lecturers before it is too late.
              </p>
            </div>

            {/* Simulator Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Lectures / Practicals Attended:
                </span>
                <span className="text-xl font-extrabold text-white">
                  {simAttended} <span className="text-slate-500 text-sm font-normal">/ {simTotalSessions} Sessions</span>
                </span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="0"
                max={simTotalSessions}
                value={simAttended}
                onChange={(e) => setSimAttended(parseInt(e.target.value, 10))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 mb-6"
              />

              {/* Visual Progress Bar */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-400">Current Attendance Rate</span>
                  <span className={`font-bold ${isGreen ? "text-emerald-400" : isAmber ? "text-amber-400" : "text-rose-400"}`}>
                    {simPct}% {isGreen ? "(Qualified)" : isAmber ? "(At Risk)" : "(Deficit)"}
                  </span>
                </div>
                <div className="h-4 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isGreen ? "bg-emerald-500" : isAmber ? "bg-amber-500" : "bg-rose-500"
                    }`}
                    style={{ width: `${simPct}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 pt-1">
                  <span>0%</span>
                  <span className="text-amber-400/80 font-semibold">65% Warning</span>
                  <span className="text-emerald-400 font-semibold">80% DP Requirement</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Live Status Indicator Box */}
              <div
                className={`p-4 rounded-xl border flex items-start gap-3 transition-colors ${
                  isGreen
                    ? "bg-emerald-950/20 border-emerald-500/40 text-emerald-300"
                    : isAmber
                    ? "bg-amber-950/20 border-amber-500/40 text-amber-300"
                    : isRed
                    ? "bg-rose-950/20 border-rose-500/40 text-rose-300"
                    : "bg-slate-900 border-slate-800 text-slate-300"
                }`}
              >
                <div className="mt-0.5">
                  {isGreen ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  ) : isAmber ? (
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                  ) : (
                    <ShieldAlert className="w-5 h-5 text-rose-400" />
                  )}
                </div>
                <div>
                  <div className="text-sm font-bold mb-0.5">
                    {isGreen
                      ? "GREEN STATUS: DP SECURED"
                      : isAmber
                      ? "AMBER WARNING: 2 SESSIONS NEEDED"
                      : "RED STATUS: CRITICAL ATTENDANCE DEFICIT"}
                  </div>
                  <p className="text-xs opacity-90 leading-relaxed">
                    {isGreen
                      ? "Attendance is above the 80% university threshold. Student is fully authorized to sit final semester examinations. All records digitally certified."
                      : isAmber
                      ? "Attendance is between 65% and 79%. System alerts student and course convenor with 3 weeks remaining to recover missed practicals."
                      : "Attendance has fallen below 65%. Automated notification triggers academic advising before formal DP refusal and costly student appeals."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pain Points Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-semibold mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            The Status Quo Bottlenecks
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            Why Traditional Systems Break Down
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Paper registers, lost cardboard cards, and buddy proxy sign-ins compromise academic integrity and waste critical teaching time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {variant.painPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                {renderIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution Features Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto border-t border-slate-900">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            The Architectural Solution
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            The Heykudu Digital Standard
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Offline-first mobile attendance and procedure tracking engineered for high-consequence education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {variant.solutionFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 relative overflow-hidden hover:border-emerald-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                {renderIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Anchor Section */}
      <section id="case-study" className="py-16 px-4 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Building2 className="w-4 h-4" />
            {variant.category === "medical"
              ? "Verified Clinical Field Study"
              : variant.category === "student_led"
              ? "Student Experience & DP Protection Study"
              : "Proven University-Wide Operational Architecture"}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {variant.category === "medical"
              ? "University of the Witwatersrand (Wits) GEMP 2 Paediatrics"
              : variant.category === "student_led"
              ? "How Wits Medical Students Protected 100% of Their Bedside Clinical Logs"
              : "Engineered for 400-Seat Lecture Theatres & Distributed Satellite Sites"}
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            {variant.category === "medical"
              ? "In 2026, the Department of Paediatrics replaced physical cardboard sign-off cards with Heykudu across Charlotte Maxeke Johannesburg Academic Hospital and Chris Hani Baragwanath. Over a 6-week rotation block, 100% of procedure quotas were logged at the bedside with zero lost records and zero consultant grading backlogs."
              : variant.category === "student_led"
              ? "Medical and undergraduate students routinely suffer from lost attendance registers, soaking wet cardboard cards in ward scrubs, or proxy sign-ins that prompt whole-class penalties. Heykudu gives each student a personal cloud-synced progress bar and tamper-proof check-ins so their DP hours are never disputed."
              : "Whether managing a 400-seat introductory lecture hall, 15-student practical labs, or students distributed across 25 external fieldwork sites, Heykudu eliminates paper registers. Students scan dynamic anti-cheat QR codes or NFC checkpoints in 2 seconds, while lecturers track real-time RAG progress and automated course requirement thresholds."}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800 pt-6">
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                {variant.category === "medical" ? "100%" : "0 Sec"}
              </div>
              <div className="text-xs text-slate-400">
                {variant.category === "medical" ? "Card Retention Rate" : "Class Time Wasted"}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                {variant.category === "medical" ? "Week 2" : "100%"}
              </div>
              <div className="text-xs text-slate-400">
                {variant.category === "medical" ? "Early Deficit Detection" : "Proxy Sign-In Prevention"}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                {variant.category === "medical" ? "14 Days" : "Week 3"}
              </div>
              <div className="text-xs text-slate-400">
                {variant.category === "medical" ? "Department Rollout" : "Early RAG Deficit Alerts"}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                {variant.category === "medical" ? "Zero" : "1-Click"}
              </div>
              <div className="text-xs text-slate-400">
                {variant.category === "medical" ? "IT Disruption" : "LMS & Excel Sync"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero-Human-Intervention Fast Track Banner */}
      <section className="pt-16 px-4 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" /> Zero-Setup Self-Serve Fast Track
            </div>
            <h4 className="text-lg md:text-xl font-bold text-white mb-1">
              Want to run paperless attendance in your next lecture today?
            </h4>
            <p className="text-slate-300 text-xs md:text-sm">
              Create a live digital register in 60 seconds with no sales call or credit card required. Free forever for up to 35 students or 1 pilot block.
            </p>
          </div>
          <a
            href="https://heykudu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs md:text-sm flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
          >
            Launch Free Register <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Interactive Lead Capture Form & Deliverable */}
      <section id="lead-form" className="py-20 px-4 max-w-4xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          <div className="max-w-xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3">
              <Download className="w-3.5 h-3.5" />
              Instant Deliverable Included
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {variant.primaryCta.label}
            </h2>
            <p className="text-sm text-slate-400">
              Submit below to receive <span className="text-white font-medium">{variant.deliverable.title}</span> and coordinate your access.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-950/20 border border-emerald-500/40 rounded-2xl p-8 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {slug === "students" ? "Course Nomination & Referral Logged" : "Request Received"}
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                Thank you, {fullName}. Your toolkit <span className="text-emerald-400 font-semibold">{variant.deliverable.filename}</span> has been dispatched to {email}.
                {lecturerEmail && (
                  <span className="block mt-2 text-xs text-slate-400">
                    We also queued the free pilot onboarding invitation for <strong className="text-white">{lecturerName || "your lecturer"}</strong> ({lecturerEmail}).
                  </span>
                )}
              </p>

              {/* Instant WhatsApp Share Card for Students */}
              {whatsappShareText && (
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 max-w-lg mx-auto text-left mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Share2 className="w-3.5 h-3.5" /> 1-Click WhatsApp Class Message
                    </span>
                    <button
                      onClick={handleCopyPitch}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 bg-slate-900 px-2 py-1 rounded border border-slate-800"
                    >
                      {copiedPitch ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      {copiedPitch ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <p className="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-850 font-mono mb-4 leading-relaxed">
                    {decodeURIComponent(whatsappShareText)}
                  </p>
                  <a
                    href={whatsappShareUrl || `https://wa.me/?text=${whatsappShareText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Share2 className="w-4 h-4" /> Open & Send via WhatsApp
                  </a>
                </div>
              )}

              {/* Deliverable Box */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 max-w-md mx-auto text-left mb-6">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Instant Resource</div>
                <div className="font-bold text-white text-base mb-1">{variant.deliverable.title}</div>
                <div className="text-xs text-slate-400 mb-4">{variant.deliverable.format}</div>
                <button
                  onClick={() => alert(`Downloading: ${variant.deliverable.filename}`)}
                  className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Deliverable Now (PDF)
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4" /> Select 15-Min Briefing Slot
                </Link>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-slate-500 hover:text-slate-400 py-2"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs text-center">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  {slug === "students" ? "Your Name or Class Rep *" : "Full Name *"}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={slug === "students" ? "e.g. Sipho Ndlovu (Class Rep)" : "e.g. Prof. Sarah Mokoena"}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  University / Institution *
                </label>
                <input
                  type="text"
                  required
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="e.g. University of the Witwatersrand (Wits)"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Your Role *
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 text-sm"
                  >
                    <option value="Student / Class Representative">Student / Class Representative</option>
                    <option value="Medical Student / Clinical Intern">Medical Student / Clinical Intern</option>
                    <option value="Course Convenor / Lecturer">Course Convenor / Lecturer</option>
                    <option value="Head of Department">Head of Department (HOD)</option>
                    <option value="Executive Dean">Executive Dean / Deanery</option>
                    <option value="Deputy Dean of Education">Deputy Dean of Education / Academic Dean</option>
                    <option value="Director of Teaching & Learning">Director of Teaching & Learning</option>
                    <option value="Director of Work-Integrated Learning (WIL)">Director of WIL / Fieldwork Coordinator</option>
                    <option value="Head of Academic IT / EdTech">Head of Academic IT / EdTech Specialist</option>
                    <option value="Clinical Lecturer / Course Convenor">Clinical Lecturer / Course Convenor (Medical)</option>
                    <option value="Clinical Consultant / Supervisor">Clinical Consultant / Ward Supervisor (Medical)</option>
                    <option value="Curriculum Committee Chair">Curriculum Committee Chair</option>
                    <option value="Other">Other Faculty Member / Administrator</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    {slug === "students" ? "Your Student Email *" : "Institutional Email *"}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@students.wits.ac.za"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
              </div>

              {/* Student Referral Fields: Lecturer Details */}
              {slug === "students" ? (
                <>
                  <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      <Share2 className="w-3.5 h-3.5" /> Course & Lecturer Nomination
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Course or Rotation Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        placeholder="e.g. GEMP 2 Paediatrics or CIVN2001 Engineering"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Lecturer / Convenor Name
                        </label>
                        <input
                          type="text"
                          value={lecturerName}
                          onChange={(e) => setLecturerName(e.target.value)}
                          placeholder="e.g. Dr. Jansen"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Lecturer's University Email
                        </label>
                        <input
                          type="email"
                          value={lecturerEmail}
                          onChange={(e) => setLecturerEmail(e.target.value)}
                          placeholder="convenor@university.ac.za"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Mobile / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+27 82 000 0000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Additional Notes or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={slug === "students" ? "e.g. We have 120 students in our class and our lecturer wants to test it next Monday" : "e.g. Looking to test across 2 rotation hospitals next term"}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : variant.primaryCta.label}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-500">
                  Zero spam. Instant deliverable PDF sent immediately. Hosted in South Africa under POPIA standards.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 px-4 bg-slate-950 text-center text-xs text-slate-500">
        <p className="mb-2">Heykudu Health Sciences & Higher Education Ecosystem • Collective Social (Pty) Ltd</p>
        <p>Verified clinical and academic attendance infrastructure deployed across South African universities.</p>
      </footer>
    </div>
  );
}
