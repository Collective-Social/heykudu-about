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
} from "lucide-react";

export default function LandingPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const rawSlug = (params?.slug as string) || "departmental";
  const slug = FUNNEL_MATRIX[rawSlug] ? rawSlug : "departmental";
  const variant: FunnelVariant = FUNNEL_MATRIX[slug];

  // Lead Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [role, setRole] = useState("Head of Department");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Set default role based on variant
    if (slug === "accreditation") setRole("Executive Dean");
    else if (slug === "departmental") setRole("Head of Department");
    else if (slug === "bedside-wba") setRole("Clinical Consultant / Supervisor");
    else if (slug === "epa-transition") setRole("Curriculum Committee Chair");
  }, [slug]);

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

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
              Health Sciences
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="#lead-form"
              className="text-xs md:text-sm font-semibold px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Get Rotation Blueprint
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
            {variant.badge}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {variant.heroHeadline}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {variant.heroSubhead}
          </p>

          {/* Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            {variant.proofStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 text-center backdrop-blur"
              >
                <div className="text-3xl font-extrabold text-emerald-400 mb-1">{stat.value}</div>
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
            <a
              href="#case-study"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-base border border-slate-800 transition-colors"
            >
              Read Wits Case Study
            </a>
          </div>
          <p className="text-xs text-slate-500 mt-3">{variant.primaryCta.helperText}</p>
        </div>
      </section>

      {/* The Problem vs The Solution Grid */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Why Clinical Education Fails on Paper
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Designed to address the exact operational friction experienced by health sciences deaneries and hospital tutors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {variant.painPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-rose-950/10 border border-rose-900/30 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 text-rose-400">
                {renderIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            The Heykudu Digital Standard
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Offline-first mobile architecture built specifically for teaching hospital wards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            Verified Empirical Field Study
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            University of the Witwatersrand (Wits) GEMP 2 Paediatrics
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            In 2026, the Department of Paediatrics replaced physical cardboard sign-off cards with Heykudu across Charlotte Maxeke Johannesburg Academic Hospital and Chris Hani Baragwanath. Over a 6-week rotation block, 100% of procedure quotas were logged at the bedside with zero lost records and zero consultant grading backlogs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800 pt-6">
            <div>
              <div className="text-2xl font-bold text-emerald-400">100%</div>
              <div className="text-xs text-slate-400">Card Retention Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">Week 2</div>
              <div className="text-xs text-slate-400">Early Deficit Detection</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">14 Days</div>
              <div className="text-xs text-slate-400">Department Rollout</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">Zero</div>
              <div className="text-xs text-slate-400">IT Disruption</div>
            </div>
          </div>
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
            <h2 className="text-3xl font-bold text-white mb-3">
              {variant.primaryCta.label}
            </h2>
            <p className="text-sm text-slate-400">
              Submit below to receive <span className="text-white font-medium">{variant.deliverable.title}</span> and coordinate your faculty sandbox.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-950/20 border border-emerald-500/40 rounded-2xl p-8 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                Thank you, {fullName}. Your deliverable <span className="text-emerald-400 font-semibold">{variant.deliverable.filename}</span> has been dispatched to {email}.
              </p>

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
                  <Calendar className="w-4 h-4" /> Select 15-Min Meeting Slot
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
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Prof. Sarah Mokoena"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  University / Teaching Hospital *
                </label>
                <input
                  type="text"
                  required
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="e.g. Wits Health Sciences / Charlotte Maxeke"
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
                    <option value="Executive Dean">Executive Dean / Deanery</option>
                    <option value="Deputy Dean of Education">Deputy Dean of Education</option>
                    <option value="Head of Department">Head of Department (HOD)</option>
                    <option value="Clinical Lecturer / Course Convenor">Clinical Lecturer / Course Convenor</option>
                    <option value="Clinical Consultant / Supervisor">Clinical Consultant / Supervisor</option>
                    <option value="Curriculum Committee Chair">Curriculum Committee Chair</option>
                    <option value="Other">Other Faculty Member</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@university.ac.za"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
              </div>

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
        <p className="mb-2">Heykudu Health Sciences Ecosystem • Collective Social (Pty) Ltd</p>
        <p>Verified clinical education software deployed in academic teaching hospitals across South Africa.</p>
      </footer>
    </div>
  );
}
