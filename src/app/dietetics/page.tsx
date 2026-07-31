"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DieteticsExperience() {
  // High-fidelity dopamine stats for the hero phone mockup
  const rotationStats = [
    { label: "Patient Consultations & Ward Rounds", progress: 88, current: "22 / 25 completed", target: "88%", color: "from-emerald-400 to-teal-400" },
    { label: "Enteral & Parenteral Case Logs", progress: 94, current: "15 / 16 completed", target: "94%", color: "from-purple-400 to-indigo-400" },
    { label: "WBAs & Clinical Competency Forms", progress: 80, current: "4 / 5 signed off", target: "80%", color: "from-pink-400 to-rose-400" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface text-on-surface pt-20 overflow-x-hidden">
        
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-surface via-surface-container-lowest to-surface relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Copy Column */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-left"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">nutrition</span>
                  Dietetics &amp; Clinical Nutrition
                </div>

                <div className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider ml-2">
                  🏆 BECOME THE BEST DIETITIAN IN THE WORLD
                </div>

                <h1 className="font-extrabold text-4xl md:text-6xl text-on-surface tracking-tight leading-[1.1]" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Made for Dietitians. <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-emerald-600">
                    Built for Clinical Excellence.
                  </span>
                </h1>

                <p className="text-on-surface-variant font-medium text-base md:text-lg leading-relaxed max-w-xl">
                  HeyKudu is designed specifically for student dietitians, clinical interns, and practicing nutritionists. Log inpatient consultations, track medical nutrition therapy (MNT) requirements, complete clinical assessments, and maintain a fully verified, portable digital portfolio.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                  <Link
                    href="https://heykudu.com"
                    className="px-8 py-4 bg-primary text-on-primary font-black rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                  >
                    Start Dietetics Logbook
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="px-6 py-4 bg-surface-container border border-outline-variant/30 text-on-surface font-bold rounded-full hover:bg-surface-container-high transition-all text-center flex items-center justify-center gap-2"
                  >
                    View Step-by-Step Guide
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="pt-6 grid grid-cols-3 gap-4 border-t border-outline-variant/20 max-w-md">
                  <div>
                    <div className="font-black text-lg text-primary">MNT Ready</div>
                    <div className="text-[11px] text-on-surface-variant font-medium">Syllabus Aligned</div>
                  </div>
                  <div>
                    <div className="font-black text-lg text-emerald-600">1 Tap</div>
                    <div className="text-[11px] text-on-surface-variant font-medium">Ward Check-Ins</div>
                  </div>
                  <div>
                    <div className="font-black text-lg text-purple-600">QR Scan</div>
                    <div className="text-[11px] text-on-surface-variant font-medium">Supervisor Sign-Off</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Phone Frame Mockup - Dietetics Tailored */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center items-center"
              >
                <div className="relative w-[320px] h-[650px] bg-slate-950 rounded-[50px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),_0_0_40px_rgba(16,185,129,0.15)] border-[8px] border-slate-900 ring-4 ring-slate-950/20 flex flex-col overflow-hidden">
                  
                  {/* Speaker grill */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-950 rounded-b-2xl z-30 flex items-center justify-center">
                    <div className="w-10 h-1 bg-neutral-800 rounded-full mb-1"></div>
                  </div>
                  
                  {/* Screen Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>

                  {/* Dietetics Screen Theme */}
                  <div className="w-full h-full bg-gradient-to-b from-[#0B231A] via-[#103325] to-[#0A1F17] rounded-[38px] p-4.5 pt-8 flex flex-col justify-between text-white relative overflow-hidden select-none">
                    
                    {/* Status Bar */}
                    <div className="absolute top-1.5 inset-x-5 flex justify-between items-center text-[10px] font-bold opacity-80 z-20">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[11px]">signal_cellular_4_bar</span>
                        <span className="material-symbols-outlined text-[11px]">wifi</span>
                        <span className="material-symbols-outlined text-[11px]">battery_charging_full</span>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="space-y-1.5 mt-3.5 relative">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xl font-black tracking-tight bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-teal-300" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                            Clinical Dietetics
                          </div>
                          <div className="text-[10px] text-emerald-300 font-extrabold uppercase tracking-widest mt-0.5">Term 2 Internship</div>
                        </div>
                        
                        {/* Progress Circle */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                          <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center">
                            <span className="text-[12px] font-black tracking-tight text-white leading-none">96%</span>
                            <span className="text-[6px] font-bold text-emerald-400 uppercase tracking-tight">Active</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Rank badge */}
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-full text-[8px] font-black tracking-wide uppercase">
                        <span className="material-symbols-outlined text-[10px]">workspace_premium</span>
                        Global Rank: Top 2%
                      </div>
                    </div>

                    {/* Dietetics Stats Progress Block */}
                    <div className="space-y-3.5 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-2xl p-4 my-2.5 shadow-inner">
                      {rotationStats.map((stat, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-[8px] font-extrabold uppercase tracking-wider text-slate-300">
                            <span>{stat.label}</span>
                            <span className="text-white font-black">{stat.target}</span>
                          </div>
                          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                            <div 
                              className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000`}
                              style={{ width: `${stat.progress}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Motivator Badge */}
                    <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-2.5 text-center my-1 flex items-center gap-2.5 justify-start">
                      <span className="material-symbols-outlined text-emerald-400 text-[18px]">verified</span>
                      <div className="text-left leading-tight">
                        <div className="text-[8px] font-black text-emerald-400 uppercase tracking-wider">MNT Milestone Achieved</div>
                        <div className="text-[7.5px] text-white/70 font-semibold">Ready to become the best dietitian in the world</div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl text-[9px] font-black tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 mt-2.5 shadow-lg shadow-emerald-500/25 border border-white/10">
                      <span className="material-symbols-outlined text-[13px]">download</span>
                      Export Verified Dietetics Logbook
                    </button>

                    {/* Home Bar */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Preloaded Dietetics Curriculum Matching Section */}
        <section className="py-24 bg-surface-container-lowest border-y border-outline-variant/15">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                  Automated Dietetic Syllabus
                </span>
                <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Curriculum-Aligned Dietetic Goals, Preloaded
                </h2>
                <p className="text-on-surface-variant font-medium leading-relaxed text-sm md:text-base">
                  When you select your dietetics rotation (Clinical Inpatient, Outpatient MNT, Pediatric Nutrition, or Critical Care), required patient consult volumes, feed formulations, and competency assessments are automatically preloaded onto your dashboard.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <span className="material-symbols-outlined text-[16px]">menu_book</span>
                    </div>
                    <span className="text-xs font-extrabold text-on-surface">Enteral &amp; Parenteral Feed Calculations</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <span className="material-symbols-outlined text-[16px]">menu_book</span>
                    </div>
                    <span className="text-xs font-extrabold text-on-surface">Malnutrition Risk Screening (MUST / SGA)</span>
                  </div>
                </div>
              </motion.div>

              {/* Graphic Dashboard list */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-surface border border-outline-variant/30 rounded-[32px] p-6 shadow-lg space-y-6"
              >
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                  <h3 className="font-black text-sm text-on-surface uppercase tracking-wider">Dietetics Term Requirements</h3>
                  <span className="text-xs text-emerald-600 font-extrabold">COMPLETION: 84%</span>
                </div>

                <div className="space-y-4">
                  {/* Row 1 */}
                  <div className="flex justify-between items-center p-3 bg-surface-container rounded-2xl border border-outline-variant/10">
                    <div>
                      <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">Consult</span>
                      <div className="text-xs font-bold mt-1 text-on-surface">Renal Diet MNT Prescription</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-on-surface">1 / 1</div>
                      <span className="text-[10px] font-extrabold text-emerald-600">Completed</span>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex justify-between items-center p-3 bg-surface-container rounded-2xl border border-outline-variant/10">
                    <div>
                      <span className="text-[10px] font-black uppercase text-purple-600 bg-purple-500/10 px-2 py-0.5 rounded-full">Assessment</span>
                      <div className="text-xs font-bold mt-1 text-on-surface">ICU Enteral Feed Protocol</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-on-surface">1 / 1</div>
                      <span className="text-[10px] font-extrabold text-emerald-600">Completed</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* The On-Call & Clinical Stat Dock for Dietitians */}
        <section className="py-24 bg-gradient-to-b from-slate-950 via-[#0B231A] to-slate-950 text-white relative overflow-hidden border-y border-white/10 shadow-2xl">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-widest border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                Dietetic Clinical Dock
              </span>
              <h2 className="font-black text-3xl md:text-5xl tracking-tight bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-teal-200" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                The Clinical &amp; Ward &ldquo;Stat&rdquo; Dock
              </h2>
              <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed">
                Tap the floating <strong className="text-white font-bold">“+” button</strong> on your dashboard to instantly log patient consultations, enteral/parenteral feed calculations, and AI nutrition guidance in one place.
              </p>
            </motion.div>

            {/* High-Contrast Vibrant Dark Dock Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Card 1: WBA */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-slate-900/90 border border-emerald-500/30 p-8 rounded-[32px] hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[340px] relative overflow-hidden group shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 relative z-10 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                    <span className="material-symbols-outlined text-[28px]">nutrition</span>
                  </div>
                  
                  {/* Micro-UI preview */}
                  <div className="space-y-2 bg-slate-950/80 border border-emerald-500/30 p-3.5 rounded-2xl mb-4 relative z-10 text-[10px] shadow-inner">
                    <div className="flex justify-between font-black">
                      <span className="text-emerald-300">MNT Consult Form</span>
                      <span className="text-emerald-400 font-bold">Entrusted ✓</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <div className="w-4/5 h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 relative z-10">
                  <h3 className="font-extrabold text-lg text-white leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    WBA (Workplace Based Assessment)
                  </h3>
                  <p className="text-slate-300 text-[12px] font-medium leading-relaxed">
                    Instant access to clinical dietetic competency forms for your ward rotations.
                  </p>
                </div>
              </motion.div>

              {/* Card 2: EPA */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-slate-900/90 border border-teal-500/30 p-8 rounded-[32px] hover:border-teal-400 hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[340px] relative overflow-hidden group shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 relative z-10 mb-6 shadow-[0_0_20px_rgba(20,184,166,0.25)]">
                    <span className="material-symbols-outlined text-[28px]">shield</span>
                  </div>
                  
                  {/* Micro-UI preview */}
                  <div className="space-y-2 bg-slate-950/80 border border-teal-500/30 p-3.5 rounded-2xl mb-4 relative z-10 text-[10px] shadow-inner">
                    <div className="flex justify-between font-black">
                      <span className="text-teal-300">EPA-02 Critical Care Feeds</span>
                      <span className="text-cyan-400 font-bold">Stage 2</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <div className="w-3/5 h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.6)]"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 relative z-10">
                  <h3 className="font-extrabold text-lg text-white leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    EPA (Entrustable Activity)
                  </h3>
                  <p className="text-slate-300 text-[12px] font-medium leading-relaxed">
                    Log professional milestones aligned directly to clinical dietetics board benchmarks.
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Reflections */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-900/90 border border-purple-500/30 p-8 rounded-[32px] hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[340px] relative overflow-hidden group shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 relative z-10 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                    <span className="material-symbols-outlined text-[28px]">auto_awesome</span>
                  </div>
                  
                  {/* Micro-UI preview */}
                  <div className="bg-slate-950/80 border border-purple-500/30 p-3.5 rounded-2xl mb-4 relative z-10 text-[10px] text-purple-200 font-semibold shadow-inner flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
                    &ldquo;Reflecting on ICU enteral feed intolerance case...&rdquo;
                  </div>
                </div>

                <div className="space-y-2.5 relative z-10">
                  <h3 className="font-extrabold text-lg text-white leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Case Reflection Module
                  </h3>
                  <p className="text-slate-300 text-[12px] font-medium leading-relaxed">
                    Record structured educational reflections on complex patient nutritional cases.
                  </p>
                </div>
              </motion.div>

              {/* Card 4: Clinical Brain AI */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-slate-900/90 border border-emerald-500/40 p-8 rounded-[32px] hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[340px] relative overflow-hidden group shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-emerald-500/50 flex items-center justify-center p-3 relative z-10 shadow-[0_0_20px_rgba(16,185,129,0.3)] mb-6">
                    <img 
                      src="/images/logo-white.png" 
                      alt="Kudu" 
                      className="w-full h-full object-contain animate-pulse z-10"
                    />
                  </div>

                  <div className="flex gap-1.5 items-center bg-slate-950/80 border border-emerald-500/30 p-2.5 rounded-2xl mb-4 relative z-10 justify-center h-9 shadow-inner">
                    <div className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-1 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-1 h-4 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>

                <div className="space-y-2.5 relative z-10">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    Voice Active AI
                  </div>
                  <h3 className="font-extrabold text-lg text-white leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Clinical Dietetic AI Assistant
                  </h3>
                  <p className="text-slate-300 text-[12px] font-medium leading-relaxed">
                    Double-check micronutrient targets, feed formulations, and clinical MNT guidelines right at the bedside.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Step-by-Step Clinical Workflow Guide for Dietitians */}
        <section id="how-it-works" className="py-24 bg-surface border-b border-outline-variant/15 relative">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                Step-by-Step Instruction
              </span>
              <h2 className="font-extrabold text-3xl md:text-5xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                How It Works: Step-by-Step
              </h2>
              <p className="text-on-surface-variant font-medium text-base md:text-lg">
                Follow this simple step-by-step process to log dietetic consults, sign off clinical competencies, and track your internship progress.
              </p>
            </motion.div>

            {/* 10-Step Timeline Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Visit heykudu.com",
                  desc: "Go to heykudu.com on your web or mobile browser to get started.",
                  icon: "language"
                },
                {
                  step: "02",
                  title: "Create Profile",
                  desc: "Sign up for your secure dietetics profile in under 30 seconds.",
                  icon: "person_add"
                },
                {
                  step: "03",
                  title: "Complete Credentials",
                  desc: "Add your academic institution, hospital, and internship details.",
                  icon: "badge"
                },
                {
                  step: "04",
                  title: "Select Rotation",
                  desc: "Pick your active term (e.g. Clinical Inpatient, ICU Dietetics, Outpatient MNT).",
                  icon: "clinical_notes"
                },
                {
                  step: "05",
                  title: "1-Tap Check-In",
                  desc: "Perform quick ward check-ins for everyday consultations & patient screenings.",
                  icon: "touch_app"
                },
                {
                  step: "06",
                  title: "Launch Assessment",
                  desc: "Tap the floating '+' button on your homepage and select WBA or EPA.",
                  icon: "add_circle"
                },
                {
                  step: "07",
                  title: "Complete Form Together",
                  desc: "Fill out the competency form side-by-side with your supervising dietitian or educator.",
                  icon: "assignment"
                },
                {
                  step: "08",
                  title: "Bedside QR Scan",
                  desc: "Hit submit to display your QR code. Your supervisor scans it to verify instantly.",
                  icon: "qr_code_scanner"
                },
                {
                  step: "09",
                  title: "Repeat & Share",
                  desc: "Log daily clinical milestones and invite fellow dietetics interns to simplify sign-offs.",
                  icon: "share"
                },
                {
                  step: "10",
                  title: "Export Logbook",
                  desc: "Check progress on your profile and download your accredited logbook anytime.",
                  icon: "download"
                }
              ].map((stepItem, idx) => (
                <motion.div
                  key={stepItem.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-md transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 font-black text-xs flex items-center justify-center">
                        {stepItem.step}
                      </span>
                      <span className="material-symbols-outlined text-on-surface-variant/50 text-[20px] group-hover:text-emerald-600 transition-colors">
                        {stepItem.icon}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-sm text-on-surface leading-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                      {stepItem.title}
                    </h3>
                    <p className="text-on-surface-variant text-[11px] font-medium leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* QR Code Sign-off flow section */}
        <section className="py-24 relative bg-surface-container-low overflow-hidden border-t border-outline-variant/15">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6"
              >
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                  Ward-level Sign-off Flow
                </span>
                <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  QR Sign-offs on the Ward
                </h2>
                <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                  No more paper forms or chasing busy senior dietitians for signatures. When you complete an MNT consult or enteral feed formulation, HeyKudu generates an on-screen QR code of your submission.
                </p>
                <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
                  Simply show the QR code to your clinical supervisor or chief dietitian. They can scan it directly with their device camera to sign off on your competency instantly.
                </p>
              </motion.div>

              {/* Dual Phone Scanner Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 flex justify-center items-center py-8"
              >
                <div className="relative w-full max-w-[420px] h-[480px] flex items-center justify-center">
                  
                  {/* Phone 1: Student App */}
                  <div className="absolute left-4 top-8 w-[190px] h-[390px] bg-slate-950 rounded-[36px] p-1.5 border-[5px] border-slate-800 shadow-2xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition-transform duration-500 z-10 select-none">
                    <div className="absolute top-0 inset-x-0 h-4 flex justify-center items-center z-30">
                      <div className="w-14 h-3 bg-slate-950 rounded-b-xl"></div>
                    </div>
                    
                    <div className="w-full h-full bg-[#059669] rounded-[28px] p-3 pt-6 flex flex-col justify-between text-white text-[9px] relative overflow-hidden">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="font-extrabold text-[10px] tracking-tight">heykudu</span>
                        <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[8px]">←</span>
                      </div>

                      <div className="flex flex-col items-center gap-1 my-1.5">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#059669] shadow">
                          <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                        </div>
                        <span className="font-black text-[10px] tracking-tight">MNT Consult Saved</span>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/10 flex flex-col items-center gap-1.5 flex-grow justify-center">
                        <div className="bg-white rounded-lg p-1 w-20 h-24 flex items-center justify-center shadow-md">
                          <svg className="w-full h-full text-slate-900" viewBox="0 0 25 25" fill="currentColor">
                            <rect x="0" y="0" width="7" height="7" />
                            <rect x="1" y="1" width="5" height="5" fill="white" />
                            <rect x="2" y="2" width="3" height="3" />
                            <rect x="18" y="0" width="7" height="7" />
                            <rect x="19" y="1" width="5" height="5" fill="white" />
                            <rect x="20" y="2" width="3" height="3" />
                            <rect x="0" y="18" width="7" height="7" />
                            <rect x="1" y="19" width="5" height="5" fill="white" />
                            <rect x="2" y="20" width="3" height="3" />
                            <rect x="16" y="16" width="5" height="5" />
                            <rect x="17" y="17" width="3" height="3" fill="white" />
                            <rect x="18" y="18" width="1" height="1" />
                            <rect x="0" y="8" width="1" height="1" />
                            <rect x="2" y="8" width="2" height="1" />
                          </svg>
                        </div>
                        <span className="text-[7px] font-black text-center text-white/90">Scan to Sign-off</span>
                      </div>
                    </div>
                  </div>

                  {/* Phone 2: Supervisor held camera scanner */}
                  <div className="absolute right-4 bottom-4 w-[190px] h-[390px] bg-slate-950 rounded-[36px] p-1.5 border-[5px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rotate-[6deg] hover:rotate-0 transition-transform duration-500 z-20 select-none">
                    <div className="absolute top-0 inset-x-0 h-4 flex justify-center items-center z-30">
                      <div className="w-14 h-3 bg-slate-950 rounded-b-xl"></div>
                    </div>

                    <div className="w-full h-full bg-slate-900 rounded-[28px] p-3 pt-6 flex flex-col justify-between text-white text-[9px] relative overflow-hidden">
                      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[0.5px] z-0"></div>
                      
                      <div className="absolute inset-6 border border-emerald-400/50 rounded-xl flex items-center justify-center z-10">
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-400"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-400"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-emerald-400"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-400"></div>
                        
                        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_#34d399] animate-bounce"></div>
                      </div>

                      <div className="relative z-10 flex justify-between items-center text-white/80">
                        <span className="font-extrabold">SCANNING</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      </div>

                      <div className="relative z-10 text-center space-y-1 mt-auto bg-slate-950/70 p-2.5 rounded-xl border border-white/5 backdrop-blur-md">
                        <span className="text-[10px] font-black text-emerald-400 block tracking-wider uppercase animate-pulse">QR Code Found</span>
                        <p className="text-[7.5px] text-white/70">Dietetic MNT assessment signed off.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Full-Width CTA Section */}
        <section className="py-28 bg-gradient-to-b from-surface to-slate-900 border-t border-outline-variant/10 relative">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
          
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-emerald-950 via-[#064E3B] to-slate-950 border border-white/10 text-white rounded-[50px] p-8 md:p-20 text-center shadow-[0_30px_100px_-15px_rgba(0,0,0,0.8),_0_0_50px_rgba(16,185,129,0.1)] relative overflow-hidden"
            >
              <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                <div className="space-y-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-black uppercase tracking-widest border border-white/5">
                    Start Your Onboarding
                  </span>
                  <h2 className="font-black text-4xl md:text-6xl tracking-tight leading-none bg-clip-text bg-gradient-to-r from-white via-slate-100 to-emerald-200" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Digital, Verified, and Unstoppable.
                  </h2>
                  <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    Deploy HeyKudu in your Dietetics Department or Clinical Internship Program. Join dietitians tracking, logging, and completing their training requirements with zero friction.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="https://heykudu.com"
                    className="group relative px-12 py-5 bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-500 bg-[length:200%_auto] text-white rounded-full font-black text-base shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:bg-right transition-all duration-500 scale-100 hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-3.5 border border-white/25"
                  >
                    Get Started Now
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1.5 transition-transform duration-300">arrow_forward</span>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-xl mx-auto text-center">
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-emerald-400">100%</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Digital MNT Logs</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-teal-400">1 Tap</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Bedside Sign-offs</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-cyan-400">100%</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Audit Compliant</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
