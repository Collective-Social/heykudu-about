"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EPATracking() {
  const [activeRubricType, setActiveRubricType] = useState<"mini-cex" | "dops" | "cbd" | "msf">("mini-cex");
  const [selectedEntrustment, setSelectedEntrustment] = useState<number>(3);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  const [isSignedOff, setIsSignedOff] = useState<boolean>(false);

  const entrustmentLevels = [
    { level: 1, title: "Direct Observation", desc: "Trainee observes or performs under direct step-by-step supervision." },
    { level: 2, title: "Direct Supervision", desc: "Trainee performs with supervisor physically present in the room." },
    { level: 3, title: "Indirect Supervision", desc: "Trainee performs independently with supervisor immediately available." },
    { level: 4, title: "Independent Practice", desc: "Trainee performs with full autonomy without supervisor assistance." },
    { level: 5, title: "Supervises Others", desc: "Trainee is fully competent to teach and supervise junior colleagues." },
  ];

  const rubrics = {
    "mini-cex": {
      name: "Mini-CEX",
      fullName: "Mini-Clinical Evaluation Exercise",
      duration: "15 mins",
      domains: [
        { name: "Medical Interviewing Skills", score: 4 },
        { name: "Physical Examination Technique", score: 4 },
        { name: "Professionalism & Communication", score: 5 },
        { name: "Clinical Judgment & Reasoning", score: 3 },
      ],
      desc: "Direct observation of a focused clinical history and examination during real ward rounds or outpatient clinics."
    },
    "dops": {
      name: "DOPS",
      fullName: "Direct Observation of Procedural Skills",
      duration: "10-20 mins",
      domains: [
        { name: "Anatomical Knowledge & Preparation", score: 5 },
        { name: "Aseptic & Infection Control Technique", score: 5 },
        { name: "Technical Procedure Execution", score: 4 },
        { name: "Post-Procedure Patient Care", score: 4 },
      ],
      desc: "Structured assessment evaluating technical proficiency and safety during invasive or diagnostic bedside procedures."
    },
    "cbd": {
      name: "CBD",
      fullName: "Case-Based Discussion",
      duration: "20 mins",
      domains: [
        { name: "Medical Record Quality & Notes", score: 4 },
        { name: "Differential Diagnosis Formulation", score: 4 },
        { name: "Investigation & Management Plan", score: 5 },
        { name: "Ethical & Legal Considerations", score: 5 },
      ],
      desc: "In-depth clinical discussion probing trainee rationale, diagnostic reasoning, and evidence-based decision making."
    },
    "msf": {
      name: "MSF 360°",
      fullName: "Multi-Source Peer & Supervisor Feedback",
      duration: "Continuous",
      domains: [
        { name: "Interprofessional Teamwork", score: 5 },
        { name: "Communication with Nursing Staff", score: 5 },
        { name: "Reliability & Punctuality", score: 5 },
        { name: "Compassion & Patient Empathy", score: 5 },
      ],
      desc: "Consensus evaluation collecting feedback from consultants, registrars, nurses, and allied healthcare professionals."
    }
  };

  const activeRubric = rubrics[activeRubricType];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface overflow-hidden">

        {/* HERO SECTION - Deep Rich Purple Gradient */}
        <section className="pt-28 pb-20 md:pt-32 md:pb-28 relative bg-gradient-to-b from-[#5B00C7] via-[#7D00FF] to-slate-950 text-white border-b border-white/10 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[950px] h-[500px] bg-purple-400/20 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Hero Text */}
              <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-extrabold text-xs uppercase tracking-widest shadow-lg"
                >
                  <span className="material-symbols-outlined text-[16px] text-emerald-300">verified</span>
                  EPA &amp; WBA CLINICAL TRACKING ENGINE
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08]" 
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Fill Rubrics Online.<br />
                  <span className="text-purple-200">Sign Off via QR in Seconds.</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-purple-100/90 font-medium text-base md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
                >
                  Trainees complete clinical rubrics online on any phone. When finished, an instant secure QR code is generated on-screen — the educator scans, approves entrustment, and signs off on the spot with zero paperwork.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2"
                >
                  <a
                    href="#interactive-demo"
                    className="px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 rounded-full font-black text-sm shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[20px] text-purple-700">touch_app</span>
                    Try Interactive Rubric Simulator
                  </a>
                  <a
                    href="https://heykudu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white rounded-full font-extrabold text-sm transition-all flex items-center gap-2"
                  >
                    Go to HeyKudu App
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </motion.div>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15 text-center lg:text-left">
                  <div>
                    <div className="font-black text-2xl md:text-3xl text-white">&lt; 30s</div>
                    <div className="text-[10px] text-purple-200 font-bold uppercase tracking-wider mt-0.5">QR Sign-Off Speed</div>
                  </div>
                  <div>
                    <div className="font-black text-2xl md:text-3xl text-emerald-300">100%</div>
                    <div className="text-[10px] text-purple-200 font-bold uppercase tracking-wider mt-0.5">Paperless Audits</div>
                  </div>
                  <div>
                    <div className="font-black text-2xl md:text-3xl text-purple-200">Level 1-5</div>
                    <div className="text-[10px] text-purple-200 font-bold uppercase tracking-wider mt-0.5">Entrustment Scale</div>
                  </div>
                </div>
              </div>

              {/* Right Hero Graphic: Interactive Live Phone Rubric & Educator QR Scanner Showcase */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[420px] bg-slate-950 rounded-[44px] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.6)] border-4 border-white/20 backdrop-blur-xl">
                  
                  {/* Phone Speaker Notch */}
                  <div className="w-32 h-5 bg-slate-900 rounded-full mx-auto mb-4 border border-white/10 flex items-center justify-center">
                    <div className="w-10 h-1.5 bg-slate-700 rounded-full"></div>
                  </div>

                  {/* Phone Content Screen */}
                  <div className="bg-slate-900 rounded-[32px] p-5 text-white space-y-4 border border-white/10 shadow-inner">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
                          <span className="material-symbols-outlined text-base">assignment_turned_in</span>
                        </div>
                        <div>
                          <div className="text-xs font-black text-white">Mini-CEX Assessment</div>
                          <div className="text-[10px] text-purple-300 font-bold">Obstetrics &amp; Gynecology Rotation</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-black uppercase tracking-wider border border-emerald-500/30">
                        Online Form
                      </span>
                    </div>

                    {/* Rubric Score Preview */}
                    <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-white/10 space-y-2.5">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider flex justify-between">
                        <span>Clinical Competencies</span>
                        <span className="text-purple-300 font-mono">Score: 4.8 / 5.0</span>
                      </div>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between items-center text-slate-200">
                          <span>Patient Encounter Skill</span>
                          <div className="flex gap-1 text-emerald-400">★★★★★</div>
                        </div>
                        <div className="flex justify-between items-center text-slate-200">
                          <span>Clinical Diagnostic Judgment</span>
                          <div className="flex gap-1 text-emerald-400">★★★★☆</div>
                        </div>
                        <div className="flex justify-between items-center text-slate-200">
                          <span>Professional Communication</span>
                          <div className="flex gap-1 text-emerald-400">★★★★★</div>
                        </div>
                      </div>
                    </div>

                    {/* Entrustment Rating Selector */}
                    <div className="bg-purple-950/50 p-3.5 rounded-2xl border border-purple-500/30 space-y-2">
                      <div className="text-[10px] font-black text-purple-200 uppercase tracking-wider flex justify-between">
                        <span>Entrustment Decision</span>
                        <span className="text-emerald-300">Level 3: Indirect Supervision</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 pt-1">
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <div 
                            key={lvl} 
                            className={`h-7 rounded-lg font-black text-xs flex items-center justify-center border transition-all ${
                              lvl === 3 
                                ? "bg-emerald-500 text-slate-950 border-emerald-300 shadow-md font-extrabold" 
                                : lvl < 3 
                                ? "bg-purple-900/60 text-purple-200 border-purple-500/30" 
                                : "bg-slate-900 text-slate-500 border-slate-800"
                            }`}
                          >
                            L{lvl}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* QR Code Verification Action Box */}
                    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 p-4 rounded-2xl border border-purple-400/40 text-center space-y-3 relative overflow-hidden">
                      <div className="flex items-center justify-center gap-3">
                        <div className="p-2 bg-white rounded-xl shadow-lg border border-purple-300 shrink-0">
                          <span className="material-symbols-outlined text-[36px] text-slate-900">qr_code_2</span>
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-black text-white">Generate Sign-Off QR</div>
                          <div className="text-[10px] text-purple-200 font-medium">Educator scans student screen for instant sign-off</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-2 bg-emerald-500/20 py-1.5 px-3 rounded-full border border-emerald-400/40 text-emerald-300 text-[10px] font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        Ready for Educator Scan
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* STEP-BY-STEP VISUAL WORKFLOW: "THE 4-STEP QR SIGN-OFF EXPERIENCE" */}
        <section className="py-24 bg-surface-container-lowest border-b border-outline-variant/15">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                End-To-End Clinical Workflow
              </span>
              <h2 className="font-extrabold text-3xl md:text-5xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                How Online Rubrics &amp; Educator QR Sign-Offs Work
              </h2>
              <p className="text-on-surface-variant font-medium text-base md:text-lg">
                No passwords to type, no paper forms to lose. Complete rubrics anywhere in the ward, then present your student QR code to your clinical educator for instant approval.
              </p>
            </div>

            {/* 4 Interactive Workflow Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Step 1 */}
              <div className="bg-surface rounded-3xl p-8 border border-outline-variant/30 hover:border-primary/50 hover:shadow-xl transition-all relative flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="w-10 h-10 rounded-2xl bg-primary text-on-primary font-black text-sm flex items-center justify-center shadow-md">
                      1
                    </span>
                    <span className="material-symbols-outlined text-2xl text-primary">edit_note</span>
                  </div>
                  <h3 className="font-extrabold text-xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Fill Rubric Online
                  </h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed font-medium">
                    Trainee opens HeyKudu on mobile and selects Mini-CEX, DOPS, or Case-Based Discussion. Scores competency criteria and adds self-reflection notes.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/15 text-[11px] font-bold text-primary flex items-center gap-1">
                  <span>Standardized Clinical Criteria</span>
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-surface rounded-3xl p-8 border border-outline-variant/30 hover:border-primary/50 hover:shadow-xl transition-all relative flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="w-10 h-10 rounded-2xl bg-purple-600 text-white font-black text-sm flex items-center justify-center shadow-md">
                      2
                    </span>
                    <span className="material-symbols-outlined text-2xl text-purple-600">qr_code_2</span>
                  </div>
                  <h3 className="font-extrabold text-xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Generate Student QR
                  </h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed font-medium">
                    Upon completing the online rubric, HeyKudu compiles an encrypted single-use QR token displaying on the trainee&apos;s phone screen.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/15 text-[11px] font-bold text-purple-600 flex items-center gap-1">
                  <span>Encrypted Instant Token</span>
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-surface rounded-3xl p-8 border border-outline-variant/30 hover:border-primary/50 hover:shadow-xl transition-all relative flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="w-10 h-10 rounded-2xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-md">
                      3
                    </span>
                    <span className="material-symbols-outlined text-2xl text-indigo-600">qr_code_scanner</span>
                  </div>
                  <h3 className="font-extrabold text-xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Educator Scans QR
                  </h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed font-medium">
                    The clinical supervisor or consultant scans the student&apos;s phone screen using their own camera or HeyKudu app in under 2 seconds.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/15 text-[11px] font-bold text-indigo-600 flex items-center gap-1">
                  <span>Zero Password Typing</span>
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-surface rounded-3xl p-8 border border-outline-variant/30 hover:border-emerald-500/50 hover:shadow-xl transition-all relative flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-md">
                      4
                    </span>
                    <span className="material-symbols-outlined text-2xl text-emerald-600">verified_user</span>
                  </div>
                  <h3 className="font-extrabold text-xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    1-Tap Sign-Off &amp; Smiles!
                  </h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed font-medium">
                    Educator selects Entrustment Rating (Level 1-5), adds brief verbal feedback, and taps Confirm. Instantly signed off and synced to faculty portfolio.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/15 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <span>Synced to E-Portfolio</span>
                  <span className="material-symbols-outlined text-sm">done_all</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* INTERACTIVE RUBRIC SIMULATOR & ENTRUSTMENT SCALE */}
        <section id="interactive-demo" className="py-24 bg-gradient-to-b from-slate-950 via-[#0E0A28] to-slate-950 text-white relative border-b border-white/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-500/30">
                Interactive Rubric Simulator
              </span>
              <h2 className="font-extrabold text-3xl md:text-5xl text-white tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Try the Online Rubric &amp; QR Sign-Off
              </h2>
              <p className="text-slate-300 font-medium text-base">
                Click between assessment types below to simulate filling out a clinical rubric and generating a sign-off QR code.
              </p>
            </div>

            {/* Assessment Type Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {(["mini-cex", "dops", "cbd", "msf"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setActiveRubricType(type);
                    setIsSignedOff(false);
                  }}
                  className={`px-6 py-3 rounded-full font-bold text-xs md:text-sm transition-all border ${
                    activeRubricType === type
                      ? "bg-purple-600 text-white border-purple-400 shadow-[0_0_25px_rgba(125,0,255,0.4)] scale-105"
                      : "bg-slate-900/80 text-slate-300 border-white/15 hover:bg-slate-800"
                  }`}
                >
                  {rubrics[type].name} ({rubrics[type].duration})
                </button>
              ))}
            </div>

            {/* Simulated Online Rubric Container */}
            <div className="max-w-4xl mx-auto bg-slate-900/90 rounded-[36px] p-6 md:p-12 border border-white/15 shadow-2xl space-y-8">
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-white/10">
                <div>
                  <h3 className="font-extrabold text-2xl text-white">{activeRubric.fullName}</h3>
                  <p className="text-slate-400 text-xs mt-1 font-medium">{activeRubric.desc}</p>
                </div>
                <div className="px-4 py-2 rounded-2xl bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold shrink-0">
                  Target Time: {activeRubric.duration}
                </div>
              </div>

              {/* Rubric Criteria Domain Rating Sliders */}
              <div className="space-y-6">
                <h4 className="text-xs font-black text-purple-300 uppercase tracking-wider">Step 1: Rate Clinical Competency Domains</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  {activeRubric.domains.map((domain, idx) => (
                    <div key={idx} className="bg-slate-950 p-4 rounded-2xl border border-white/10 space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-200">
                        <span>{domain.name}</span>
                        <span className="text-emerald-400 font-mono">{domain.score} / 5.0</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full"
                          style={{ width: `${(domain.score / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Entrustment Rating Scale Selector */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h4 className="text-xs font-black text-purple-300 uppercase tracking-wider">Step 2: Select Entrustment Professional Activity (EPA) Level</h4>
                
                <div className="grid sm:grid-cols-5 gap-3">
                  {entrustmentLevels.map((item) => (
                    <button
                      key={item.level}
                      onClick={() => setSelectedEntrustment(item.level)}
                      className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                        selectedEntrustment === item.level
                          ? "bg-emerald-500/20 border-emerald-400 text-white shadow-lg shadow-emerald-500/10 scale-105"
                          : "bg-slate-950 border-white/10 text-slate-400 hover:border-white/20"
                      }`}
                    >
                      <div className="flex justify-between items-center w-full mb-2">
                        <span className={`text-xs font-black px-2 py-0.5 rounded-md ${
                          selectedEntrustment === item.level ? "bg-emerald-400 text-slate-950" : "bg-slate-800 text-slate-300"
                        }`}>
                          Level {item.level}
                        </span>
                        {selectedEntrustment === item.level && (
                          <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                        )}
                      </div>
                      <div className="text-xs font-bold text-white mb-1">{item.title}</div>
                      <div className="text-[10px] text-slate-400 line-clamp-2 leading-tight">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Bar & Sign-Off Trigger */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-xs text-slate-400 font-medium">
                  Status: <span className={isSignedOff ? "text-emerald-400 font-bold" : "text-amber-300 font-bold"}>
                    {isSignedOff ? "✓ Verified & Signed Off by Educator" : "Pending Educator QR Scan"}
                  </span>
                </div>

                {!isSignedOff ? (
                  <button
                    onClick={() => setShowQrModal(true)}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 border border-purple-300/30"
                  >
                    <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
                    Generate Student Sign-Off QR Code
                  </button>
                ) : (
                  <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
                    <span className="material-symbols-outlined text-lg">verified</span>
                    Rubric Signed Off Successfully!
                  </div>
                )}
              </div>

            </div>

          </div>
        </section>

        {/* MODAL: SIMULATED STUDENT QR CODE SIGN-OFF POPUP */}
        <AnimatePresence>
          {showQrModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 20 }}
                className="bg-slate-900 border border-purple-400/40 rounded-[36px] p-8 max-w-md w-full text-center text-white space-y-6 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-400"></div>

                <div className="space-y-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-black uppercase tracking-wider border border-purple-400/30">
                    Student Sign-Off Token
                  </span>
                  <h3 className="font-extrabold text-2xl text-white">Educator Scan Screen</h3>
                  <p className="text-slate-300 text-xs">
                    Present this screen to your clinical consultant or registrar to scan and verify entrustment level {selectedEntrustment}.
                  </p>
                </div>

                {/* QR Code Graphic Box */}
                <div className="bg-white p-6 rounded-3xl inline-block shadow-2xl border-4 border-purple-300/40 relative">
                  <div className="w-48 h-48 bg-slate-950 rounded-2xl flex flex-col items-center justify-center space-y-2 p-4 text-white">
                    <span className="material-symbols-outlined text-[80px] text-purple-400 animate-pulse">qr_code_2</span>
                    <span className="text-[10px] font-mono text-purple-200 uppercase tracking-widest">KUDU_SIGN_#{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                </div>

                {/* Simulate Educator Scan Action */}
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setShowQrModal(false);
                      setIsSignedOff(true);
                    }}
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                    Simulate Educator Scanning QR (1-Tap Approve)
                  </button>

                  <button
                    onClick={() => setShowQrModal(false)}
                    className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
                  >
                    Cancel / Back to Rubric
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ALL WBA ASSESSMENT TYPES DETAILED GRID */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Full Assessment Portfolio
              </span>
              <h2 className="font-extrabold text-3xl md:text-5xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Comprehensive Clinical Assessment Suite
              </h2>
              <p className="text-on-surface-variant font-medium text-base md:text-lg">
                Pre-configured for medical schools, surgical colleges, nursing councils, and allied health programs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-surface rounded-3xl p-8 border border-outline-variant/30 space-y-4 hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">clinical_notes</span>
                </div>
                <h3 className="font-extrabold text-2xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Mini-CEX (Mini-Clinical Evaluation)
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                  Direct observation of real patient history taking, physical examination, and diagnostic reasoning. Features immediate 5-minute structured feedback prompts.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold">
                  <span className="px-3 py-1 bg-surface-container rounded-full text-on-surface-variant">15-20 Minutes</span>
                  <span className="px-3.5 py-1 bg-primary/10 text-primary rounded-full">Level 1-5 Entrustment</span>
                </div>
              </div>

              <div className="bg-surface rounded-3xl p-8 border border-outline-variant/30 space-y-4 hover:border-purple-600/40 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">medical_services</span>
                </div>
                <h3 className="font-extrabold text-2xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  DOPS (Direct Observation of Procedural Skills)
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                  Evaluates technical accuracy, sterile preparation, patient comfort, and post-procedure care for clinical procedures (venepuncture, lumbar puncture, suturing, etc.).
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold">
                  <span className="px-3 py-1 bg-surface-container rounded-full text-on-surface-variant">10-15 Minutes</span>
                  <span className="px-3.5 py-1 bg-purple-500/10 text-purple-600 rounded-full">Sterile Safety Auditing</span>
                </div>
              </div>

              <div className="bg-surface rounded-3xl p-8 border border-outline-variant/30 space-y-4 hover:border-indigo-600/40 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">forum</span>
                </div>
                <h3 className="font-extrabold text-2xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  CBD (Case-Based Discussion)
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                  In-depth clinical viva exploring complex patient management, ethical considerations, and clinical reasoning behind diagnostic decisions.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold">
                  <span className="px-3 py-1 bg-surface-container rounded-full text-on-surface-variant">20 Minutes</span>
                  <span className="px-3.5 py-1 bg-indigo-500/10 text-indigo-600 rounded-full">Management Rationale</span>
                </div>
              </div>

              <div className="bg-surface rounded-3xl p-8 border border-outline-variant/30 space-y-4 hover:border-emerald-600/40 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">groups</span>
                </div>
                <h3 className="font-extrabold text-2xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  MSF 360° (Multi-Source Feedback)
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                  Aggregates anonymous feedback from nursing staff, registrars, consultants, and administrative peers to form a comprehensive view of professional behavior.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold">
                  <span className="px-3 py-1 bg-surface-container rounded-full text-on-surface-variant">Monthly Aggregation</span>
                  <span className="px-3.5 py-1 bg-emerald-500/10 text-emerald-600 rounded-full">Radar Spider Diagram</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* CALL TO ACTION BANNER */}
        <section className="py-28 bg-surface relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter max-w-4xl relative z-10">
            <div className="bg-gradient-to-br from-indigo-950 via-[#1E1B4B] to-slate-950 border border-white/10 text-white rounded-[48px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="max-w-2xl mx-auto space-y-8 relative z-10">
                <div className="space-y-3">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-indigo-300 text-xs font-black uppercase tracking-widest border border-white/5">
                    Ready For Your Department
                  </span>
                  <h2 className="font-black text-3xl md:text-5xl tracking-tight text-white" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Transform EPA &amp; WBA Tracking
                  </h2>
                  <p className="text-slate-300 font-medium text-sm md:text-base leading-relaxed">
                    Eliminate paper evaluation forms and empower your trainees and clinical educators with instant online rubrics and QR sign-offs.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-10 py-5 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2 border border-white/20"
                  >
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    Deploy EPA Tracking
                  </Link>
                  <Link
                    href="/contact"
                    className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all text-center"
                  >
                    Request Faculty Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
