"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  Activity,
  FileText,
  Stethoscope,
  Leaf,
  CheckCircle2,
  AlertTriangle,
  QrCode,
  Download,
  Share2,
  Printer,
  Layers,
  Maximize2,
  X,
  Compass,
  MessageSquareHeart,
  BookOpen,
  Building2,
  GraduationCap,
  Globe,
  TrendingUp,
} from "lucide-react";

export default function SangomedPage() {
  const [activeTab, setActiveTab] = useState<"patient" | "platform" | "practitioner" | "clinician">("patient");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const sangomedUrl = "https://about.heykudu.com/sangomed";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(sangomedUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const actors = [
    {
      id: "patient" as const,
      number: "1",
      title: "Pregnant Patient",
      subtitle: "Shares traditional medicine use safely",
      icon: Heart,
      badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
      accentBg: "from-emerald-50 to-teal-50/50",
      ringColor: "ring-emerald-500",
      description:
        "Shares traditional medicine use in a safe, judgment-free environment to ensure transparent, protected antenatal care.",
      points: [
        "Records what traditional medicines are used (e.g., isihlambezo, herbal infusions, remedies)",
        "Provides cultural and timing context (when, how often, and why it is taken)",
        "Can ask questions and access reliable, evidence-based guidance without fear of reprimand",
        "100% voluntary, confidential, and protected under strict POPIA privacy standards",
      ],
    },
    {
      id: "platform" as const,
      number: "2",
      title: "SANGOMED Platform",
      subtitle: "Brings knowledge and evidence together",
      icon: Activity,
      badgeColor: "bg-purple-500/10 text-purple-700 border-purple-200",
      accentBg: "from-purple-50 to-indigo-50/50",
      ringColor: "ring-purple-500",
      description:
        "The digital intelligence bridge synthesizing traditional ethnobotanical context with peer-reviewed clinical pharmacology.",
      points: [
        "Consolidates traditional medicinal knowledge and biomedical O&G evidence",
        "Highlights potential pharmacological risks, drug-herb interactions, and clinical uncertainties",
        "Supports respectful clinical decision-making and culturally competent patient dialogues",
        "Enables structured consent-based documentation and nationwide pharmacovigilance safety reporting",
      ],
    },
    {
      id: "practitioner" as const,
      number: "3",
      title: "Traditional Health Practitioner",
      subtitle: "Contributes contextual customary knowledge",
      icon: Leaf,
      badgeColor: "bg-amber-500/10 text-amber-700 border-amber-200",
      accentBg: "from-amber-50 to-orange-50/50",
      ringColor: "ring-amber-500",
      description:
        "Recognized indigenous healers share authentic preparation methods, customary wisdom, and traditional dosage context.",
      points: [
        "Provides accurate information on plant ingredients, preparation methods, and intended customary use",
        "Shares cultural context and customary practices with biomedical teams",
        "Helps dispel misinformation and fosters mutual professional respect",
        "Strengthens trusted collaboration between traditional healers and hospital obstetric teams",
      ],
    },
    {
      id: "clinician" as const,
      number: "4",
      title: "Biomedical Clinician",
      subtitle: "Accesses evidence and assesses clinical safety",
      icon: Stethoscope,
      badgeColor: "bg-blue-500/10 text-blue-700 border-blue-200",
      accentBg: "from-blue-50 to-cyan-50/50",
      ringColor: "ring-blue-500",
      description:
        "Obstetricians, midwives, and maternal health teams evaluate interactions and guide safe clinical outcomes.",
      points: [
        "Reviews traditional medicine pharmacology and the latest scientific clinical evidence",
        "Assesses potential safety concerns, uterine contractility risks, and drug interactions",
        "Documents traditional remedy use in the clinical health record (with explicit patient consent)",
        "Engages in culturally respectful patient conversations and reports suspected adverse drug events",
      ],
    },
  ];

  const steps = [
    {
      num: "1",
      title: "Patient-Reported Use",
      desc: "Expectant mother logs remedies used (e.g. isihlambezo) confidentially.",
      icon: Heart,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      num: "2",
      title: "SANGOMED Synthesis",
      desc: "Platform cross-references ingredients against clinical database & alerts.",
      icon: Sparkles,
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      num: "3",
      title: "Traditional Insight",
      desc: "Practitioners provide authentic preparation and customary intent.",
      icon: Leaf,
      color: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      num: "4",
      title: "Clinical Evaluation",
      desc: "Doctors and midwives review safety, dosage, and pharmaceutical risks.",
      icon: Stethoscope,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      num: "5",
      title: "Shared Information",
      desc: "Holistic, respectful understanding between patient, healer, and doctor.",
      icon: FileText,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
    {
      num: "6",
      title: "Informed Decisions",
      desc: "Personalised antenatal care plan tailored to maternal safety & culture.",
      icon: Compass,
      color: "bg-teal-50 text-teal-600 border-teal-200",
    },
    {
      num: "7",
      title: "Better Outcomes",
      desc: "Safer deliveries, fewer emergency complications, and trusted healthcare.",
      icon: ShieldCheck,
      color: "bg-rose-50 text-rose-600 border-rose-200",
    },
  ];

  const stakeholders = [
    { name: "Pregnant Patients & Women", role: "Primary beneficiary of safe, respectful maternal healthcare", icon: Heart },
    { name: "Traditional Health Practitioners", role: "Customary knowledge leaders & trusted community partners", icon: Leaf },
    { name: "Obstetricians, Midwives & Doctors", role: "Frontline biomedical clinicians delivering evidence-based care", icon: Stethoscope },
    { name: "Traditional Healer Organisations", role: "Institutional representation and customary governance", icon: Users },
    { name: "SAHPRA & Professional Councils", role: "Regulatory pharmacovigilance and standards oversight", icon: ShieldCheck },
    { name: "National Department of Health", role: "Public health policy alignment and maternal mortality reduction", icon: Building2 },
    { name: "Academic & Research Institutions", role: "Wits, UCT, and clinical research collaborative trials", icon: GraduationCap },
    { name: "Communities & Civil Society", role: "Community advocacy, patient empowerment, and education", icon: Globe },
  ];

  const valueProps = [
    {
      title: "Improved Patient Safety",
      desc: "Reduces preventable maternal and neonatal complications by surfacing potential drug-herb interactions early.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Bridges System Gaps",
      desc: "Connects traditional healers and biomedical doctors who previously operated in siloed, disconnected systems.",
      icon: Users,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Accessible Evidence",
      desc: "Transforms fragmented ethnobotanical and pharmacological studies into clear, actionable clinical summaries.",
      icon: BookOpen,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Consent-Based Safety Records",
      desc: "Enables non-stigmatizing documentation and standardized pharmacovigilance reporting for adverse reactions.",
      icon: FileText,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Culturally Respectful Care",
      desc: "Empowers healthcare providers to engage patients in empathetic, culturally responsive antenatal conversations.",
      icon: MessageSquareHeart,
      color: "text-rose-600 bg-rose-50",
    },
    {
      title: "Collaborative Research Hub",
      desc: "Creates structured opportunities for academic studies, ethnobotanical validation, and public health data.",
      icon: TrendingUp,
      color: "text-indigo-600 bg-indigo-50",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#FBFBFE] min-h-screen text-slate-900 selection:bg-purple-100 selection:text-purple-900">
        
        {/* Top Header / Announcement Banner */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-purple-950 text-white py-2.5 px-4 text-xs font-semibold tracking-wide border-b border-white/10">
          <div className="max-w-container-max mx-auto flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 text-[11px] font-bold uppercase tracking-wider">
                Maternal Health Innovation
              </span>
              <span>Bridging Traditional &amp; Biomedical Healthcare in South Africa</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/sangomed/one-pager" className="underline underline-offset-2 hover:text-emerald-200 flex items-center gap-1 font-bold">
                <Printer className="w-3.5 h-3.5" />
                Printable One-Pager &amp; QR
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-purple-50/40 via-white to-slate-50/60">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-purple-300/20 via-emerald-200/20 to-teal-200/10 blur-3xl pointer-events-none rounded-full" />
          
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              {/* SANGOMED Brand Badge */}
              <motion.div variants={fadeInUp} className="flex justify-center items-center gap-2 flex-wrap">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-purple-500/10 border border-emerald-500/20 text-slate-800 font-extrabold text-xs uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  SANGOMED &bull; Concept Formulated (TRL 2)
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/60 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  POPIA &amp; HPCSA Respectful Architecture
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]"
              >
                SANGOMED
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-700 to-purple-700 mt-2">
                  Bridging Traditional &amp; Biomedical Healthcare in Maternal Health
                </span>
              </motion.h1>

              {/* Tagline / Subtitle */}
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
              >
                <strong>Shared knowledge. Safer pregnancies. Healthier women. Stronger communities.</strong>
                <span className="block mt-1 text-sm sm:text-base text-slate-500 font-normal">
                  A culturally responsive digital platform connecting pregnant patients, traditional health practitioners, and biomedical clinicians to eliminate blind spots and protect maternal health.
                </span>
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 pt-2">
                <a
                  href="#how-it-works"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
                >
                  <Activity className="w-4 h-4" />
                  Explore How It Works
                </a>
                <Link
                  href="/sangomed/one-pager"
                  className="px-6 py-3.5 rounded-2xl bg-white text-slate-800 border-2 border-slate-200 font-bold text-sm shadow-sm hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Printer className="w-4 h-4 text-purple-600" />
                  Printable One-Pager &amp; QR
                </Link>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-4 py-3.5 rounded-2xl bg-purple-50 text-purple-700 border border-purple-200/80 font-bold text-sm hover:bg-purple-100/70 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  {copiedLink ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Copied URL!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </motion.div>

              {/* The Core Formula Visual */}
              <motion.div variants={fadeInUp} className="pt-6">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm max-w-3xl mx-auto">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    The SANGOMED Impact Equation
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-slate-700">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200">
                      <Leaf className="w-3.5 h-3.5 text-emerald-600" /> Traditional Knowledge
                    </span>
                    <span className="text-slate-400 font-black">+</span>
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-50 text-purple-800 rounded-xl border border-purple-200">
                      <Users className="w-3.5 h-3.5 text-purple-600" /> Patient Experience
                    </span>
                    <span className="text-slate-400 font-black">+</span>
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-800 rounded-xl border border-blue-200">
                      <Stethoscope className="w-3.5 h-3.5 text-blue-600" /> Clinical Evidence
                    </span>
                    <span className="text-slate-400 font-black">=</span>
                    <span className="inline-flex items-center gap-1 px-3.5 py-1.5 bg-emerald-600 text-white rounded-xl shadow-sm">
                      <ShieldCheck className="w-4 h-4" /> Better Decisions &bull; Safer Pregnancies
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-3 font-medium">
                    &ldquo;Different knowledge. Shared purpose. Safer mothers. Healthier communities.&rdquo;
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" />
                The Healthcare Reality
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Two Disconnected Systems. One Vulnerable Patient.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                In South Africa, pregnant women frequently consult both traditional health practitioners and hospital antenatal clinics. However, stigma and communication barriers keep these worlds completely isolated.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-rose-50/60 to-orange-50/40 rounded-3xl p-6 sm:p-7 border border-rose-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-black text-lg">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Patients Conceal Traditional Use</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Patients may take traditional preparations (e.g. <em>isihlambezo</em>, herbal mixtures, teas, or labor inducers) alongside prescribed medications, but often do not disclose this to doctors due to fear of judgment or scolding.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-rose-200/50 text-xs font-semibold text-rose-700">
                  Risk: Undetected drug-herb interactions &amp; emergency complications.
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50/60 to-indigo-50/40 rounded-3xl p-6 sm:p-7 border border-blue-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Clinicians Lack Context &amp; Evidence</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Biomedical clinicians often lack accessible, structured clinical data about traditional remedies, their pharmacological mechanisms, dosage forms, or evidence-backed safety profiles in pregnancy.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200/50 text-xs font-semibold text-blue-700">
                  Risk: Dismissive consultations, lost trust &amp; incomplete medical history.
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50/60 to-yellow-50/40 rounded-3xl p-6 sm:p-7 border border-amber-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-lg">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Healers Excluded from Clinical Loop</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Traditional health practitioners may not be informed about the pharmaceuticals prescribed to their clients at hospital visits, preventing collaborative monitoring of maternal progress.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-amber-200/50 text-xs font-semibold text-amber-700">
                  Risk: Fragmented care, missed safety signals &amp; uncoordinated delivery.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 4-Pillar Interactive Ecosystem */}
        <section id="how-it-works" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                Collaborative Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                How SANGOMED Works
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A shared, culturally responsive ecosystem uniting four crucial participants in maternal healthcare.
              </p>
            </div>

            {/* Mobile / Desktop Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-8">
              {actors.map((actor) => {
                const Icon = actor.icon;
                const isSelected = activeTab === actor.id;
                return (
                  <button
                    key={actor.id}
                    onClick={() => setActiveTab(actor.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-slate-900 text-white shadow-md scale-100"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{actor.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Actor Card View */}
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                {actors.map((actor) => {
                  if (actor.id !== activeTab) return null;
                  const Icon = actor.icon;
                  return (
                    <motion.div
                      key={actor.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.3 }}
                      className={`bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-sm relative overflow-hidden`}
                    >
                      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                        {/* Left Column: Icon & Badge */}
                        <div className="shrink-0 space-y-3">
                          <div className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-inner ${actor.badgeColor}`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <div className="text-xs font-mono font-bold text-slate-400">
                            PILLAR 0{actor.number} OF 04
                          </div>
                        </div>

                        {/* Right Column: Title, Description, and Points */}
                        <div className="space-y-5 flex-1">
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-2 ${actor.badgeColor}`}>
                              {actor.subtitle}
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                              {actor.title}
                            </h3>
                            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                              {actor.description}
                            </p>
                          </div>

                          <div className="space-y-3 pt-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Key Actions &amp; Responsibilities
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {actor.points.map((pt, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-snug"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{pt}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 7-Step Shared Decision-Making Pathway */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200 text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                Step-by-Step Flow
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                The 7-Step Shared Decision Pathway
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From confidential patient disclosure to collaborative clinical care and measurable birth outcomes.
              </p>
            </div>

            {/* Steps Timeline Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {steps.map((st, i) => {
                const Icon = st.icon;
                return (
                  <div
                    key={st.num}
                    className={`bg-slate-50/70 hover:bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                      i === 6 ? "sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 border-emerald-200" : ""
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                          {st.num}
                        </span>
                        <div className={`p-2 rounded-xl border ${st.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="font-bold text-base text-slate-900">{st.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Initial Use Case: Isihlambezo in Pregnancy */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-purple-50/30 border-b border-slate-200/80">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border-2 border-purple-200/80 shadow-md space-y-8">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-2">
                    Proof of Concept &bull; Initial Use Case
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Use Case: <em>Isihlambezo</em> in Pregnancy
                  </h2>
                </div>
                <div className="px-3.5 py-1.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                  Clinical Feasibility Study
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
                <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-emerald-600" />
                    What is <em>Isihlambezo</em>?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <em>Isihlambezo</em> is an indigenous herbal decoction widely utilized in southern African communities throughout pregnancy and labor preparation to promote maternal wellbeing, strengthen contractions, and ease delivery.
                  </p>
                </div>

                <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-blue-600" />
                    The SANGOMED Intervention
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Rather than imposing an adversarial ban, SANGOMED allows patients to record their preparation, clinicians to assess specific botanical ingredients for uterine hyperstimulation or electrolyte imbalances, and healers to advise safely.
                  </p>
                </div>
              </div>

              {/* 4-Step Use Case Flow */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  The Clinical Encounter Flow
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-1.5">
                    <div className="font-bold text-purple-900">1. Patient Reports</div>
                    <p className="text-slate-600">Pregnant mother logs <em>isihlambezo</em> use confidentially via phone.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1.5">
                    <div className="font-bold text-blue-900">2. Evidence Review</div>
                    <p className="text-slate-600">Clinician checks SANGOMED database for known safety signals &amp; alerts.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-1.5">
                    <div className="font-bold text-teal-900">3. Respectful Dialogue</div>
                    <p className="text-slate-600">Doctor &amp; mother discuss safe dosage without cultural reprimand.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1.5">
                    <div className="font-bold text-emerald-900">4. Healer Context</div>
                    <p className="text-slate-600">With consent, traditional practitioner shares recipe &amp; preparation.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Infographics Gallery Section */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider">
                <Maximize2 className="w-3.5 h-3.5" />
                Official Infographics &amp; Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Explore the SANGOMED Framework
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Tap on any poster below to expand into high-definition view or download for clinical review.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Poster 1 */}
              <div className="bg-slate-50 rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
                <div className="space-y-3">
                  <div
                    onClick={() => setLightboxImage("/images/sangomed-how-it-works.jpg")}
                    className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer border border-slate-200 bg-slate-900"
                  >
                    <img
                      src="/images/sangomed-how-it-works.jpg"
                      alt="SANGOMED: How it Works Infographic"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5">
                      <Maximize2 className="w-4 h-4" /> Tap to Expand High-Res
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">How It Works: 4 Pillars &amp; 7 Steps</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Complete end-to-end operational diagram showing patient, platform, traditional practitioner, and clinical workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 mt-2 border-t border-slate-200/60">
                  <button
                    onClick={() => setLightboxImage("/images/sangomed-how-it-works.jpg")}
                    className="flex-1 py-2 px-3 rounded-xl bg-white text-slate-800 border border-slate-200 text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Maximize2 className="w-3.5 h-3.5" /> View Fullscreen
                  </button>
                  <a
                    href="/images/sangomed-how-it-works.jpg"
                    download="SANGOMED-How-It-Works.jpg"
                    className="py-2 px-3 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold hover:bg-purple-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" /> Save
                  </a>
                </div>
              </div>

              {/* Poster 2 */}
              <div className="bg-slate-50 rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
                <div className="space-y-3">
                  <div
                    onClick={() => setLightboxImage("/images/sangomed-concept-overview.jpg")}
                    className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer border border-slate-200 bg-slate-900"
                  >
                    <img
                      src="/images/sangomed-concept-overview.jpg"
                      alt="SANGOMED: Concept Overview, Problem & Solution"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5">
                      <Maximize2 className="w-4 h-4" /> Tap to Expand High-Res
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Concept Overview, Problem &amp; TRL Roadmap</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Comprehensive executive brief outlining Problem statement, TRL 2 status, stakeholders, value propositions, and proof-of-concept.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 mt-2 border-t border-slate-200/60">
                  <button
                    onClick={() => setLightboxImage("/images/sangomed-concept-overview.jpg")}
                    className="flex-1 py-2 px-3 rounded-xl bg-white text-slate-800 border border-slate-200 text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Maximize2 className="w-3.5 h-3.5" /> View Fullscreen
                  </button>
                  <a
                    href="/images/sangomed-concept-overview.jpg"
                    download="SANGOMED-Concept-Overview.jpg"
                    className="py-2 px-3 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold hover:bg-purple-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" /> Save
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Stakeholder & Value Proposition Matrix */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                Ecosystem Impact
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Value Added Across the Entire Healthcare System
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Aligning patients, healers, medical professionals, regulators, and national health authorities.
              </p>
            </div>

            {/* Value Props Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              {valueProps.map((vp, idx) => {
                const Icon = vp.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3"
                  >
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${vp.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-slate-900">{vp.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{vp.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Stakeholder Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 max-w-5xl mx-auto space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-purple-600" />
                Key Stakeholders Engaged in SANGOMED
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stakeholders.map((sh, idx) => {
                  const Icon = sh.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 hover:bg-purple-50/40 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-purple-700 shrink-0" />
                        <h4 className="font-bold text-xs text-slate-900">{sh.name}</h4>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug">{sh.role}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* QR Code & One-Pager Callout Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
          
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
              
              {/* QR Code Graphic Frame */}
              <div className="shrink-0 text-center space-y-3">
                <div className="p-4 bg-white rounded-3xl shadow-xl inline-block border-4 border-emerald-400/40">
                  <img
                    src="/images/sangomed-qr.svg"
                    alt="Scan SANGOMED QR Code"
                    className="w-44 h-44 sm:w-48 sm:h-48 object-contain"
                  />
                </div>
                <div className="text-[11px] font-mono tracking-widest text-emerald-300 uppercase font-bold">
                  about.heykudu.com/sangomed
                </div>
              </div>

              {/* QR Callout Content */}
              <div className="space-y-5 text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
                  <QrCode className="w-3.5 h-3.5" />
                  Instant Scan &amp; Share
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                  Share SANGOMED at Academic Sessions &amp; Hospital Rounds
                </h2>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  Scan this QR code from any smartphone camera to open this mobile-optimized platform overview, or access our printable one-pager for department briefings, deanery meetings, and research seminars.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
                  <Link
                    href="/sangomed/one-pager"
                    className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                  >
                    <Printer className="w-4 h-4" />
                    Open Printable One-Pager
                  </Link>
                  <a
                    href="/images/sangomed-qr.png"
                    download="SANGOMED-QR-Code.png"
                    className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm active:scale-95 transition-all flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download QR Image (PNG)
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="max-w-5xl max-h-[90vh] overflow-auto rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Expanded Infographic"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
