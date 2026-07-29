"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DoctorExperience() {
  const rotationStats = [
    { label: "Check-Ins", progress: 16, current: "38 completed", target: "16%" },
    { label: "Rotation Requirements", progress: 7, current: "Incomplete", target: "7%" },
    { label: "WBAs", progress: 0, current: "0 completed", target: "0%" },
    { label: "EPA", progress: 0, current: "0 completed", target: "0%" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-surface min-h-screen overflow-hidden">
        
        {/* Hero Section */}
        <section className="py-20 relative bg-surface-container-low border-b border-outline-variant/10">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-tertiary/5 pointer-events-none" />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Copy */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="lg:col-span-7 space-y-6 text-left"
              >
                <motion.div 
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider"
                >
                  <span className="material-symbols-outlined text-[16px]">school</span>
                  Academic &amp; Postgraduate Portability
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight tracking-tight" 
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Made for Doctors.<br />
                  <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-purple-600">Built for Academic Rigor.</span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  className="text-on-surface-variant font-medium text-lg leading-relaxed max-w-2xl"
                >
                  HeyKudu is designed specifically for medical doctors in academic training programs. Log clinical hours, track rotation requirements, complete assessments, and maintain a fully verified, portable digital record of your learning journey.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="https://heykudu.com"
                    className="px-8 py-4 bg-primary text-on-primary rounded-full font-black text-sm shadow-lg hover:scale-[1.03] active:scale-95 transition-all text-center flex items-center gap-2"
                  >
                    Get Started Now
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Column - High Fidelity CSS Mobile Phone Frame Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-5 flex justify-center relative"
              >
                <div className="absolute w-80 h-80 rounded-full bg-primary/10 blur-3xl -z-10 animate-pulse"></div>
                
                {/* Simulated Physical Phone Frame */}
                <div className="relative w-[310px] h-[640px] bg-slate-950 rounded-[50px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border-[8px] border-slate-900 ring-4 ring-slate-950/20 flex flex-col overflow-hidden">
                  
                  {/* Speaker grill & camera notch (Dynamic Island) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-950 rounded-b-2xl z-30 flex items-center justify-center">
                    <div className="w-10 h-1 bg-neutral-800 rounded-full mb-1"></div>
                  </div>
                  
                  {/* Screen Glare Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>

                  {/* Dynamic screen content with status bar */}
                  <div className="w-full h-full bg-gradient-to-b from-indigo-950 via-slate-900 to-purple-950 rounded-[38px] p-4 pt-8 flex flex-col justify-between text-white relative overflow-hidden select-none">
                    
                    {/* Status Bar */}
                    <div className="absolute top-1.5 inset-x-5 flex justify-between items-center text-[9px] font-bold opacity-80 z-20">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px]">signal_cellular_4_bar</span>
                        <span className="material-symbols-outlined text-[10px]">wifi</span>
                        <span className="material-symbols-outlined text-[10px]">battery_charging_full</span>
                      </div>
                    </div>

                    {/* Mockup Header */}
                    <div className="space-y-1 mt-3">
                      <div className="flex justify-between items-center">
                        <div className="text-xl font-black tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>O&amp;G GEMPII</div>
                        
                        {/* Progress Circle Replicating 6% */}
                        <div className="w-11 h-11 rounded-full border-2 border-primary flex items-center justify-center relative bg-white/5 shadow-inner">
                          <span className="text-[11px] font-black">6%</span>
                        </div>
                      </div>
                      <div className="text-[9px] text-white/60 font-semibold">Jul 20 - Nov 20, 2026</div>
                    </div>

                    {/* Stats Bars Block */}
                    <div className="space-y-3.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 my-2">
                      {rotationStats.map((stat, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-[8px] font-bold uppercase tracking-wider text-white/80">
                            <span>{stat.label}</span>
                            <span>{stat.target}</span>
                          </div>
                          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full transition-all duration-1000"
                              style={{ width: `${stat.progress || 2}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Micro Indicators */}
                    <div className="grid grid-cols-3 gap-1.5 bg-white/5 border border-white/10 rounded-xl p-2.5 text-center my-1">
                      <div>
                        <div className="text-sm font-black text-primary">0</div>
                        <div className="text-[7px] text-white/60 font-bold uppercase tracking-tight">Verifications</div>
                      </div>
                      <div>
                        <div className="text-sm font-black text-primary">22</div>
                        <div className="text-[7px] text-white/60 font-bold uppercase tracking-tight">Patients</div>
                      </div>
                      <div>
                        <div className="text-sm font-black text-primary">0</div>
                        <div className="text-[7px] text-white/60 font-bold uppercase tracking-tight">Reflections</div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-2.5 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-xl text-[9px] font-black tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 mt-2 shadow-lg">
                      <span className="material-symbols-outlined text-[13px]">download</span>
                      Download Portable Logbook
                    </button>

                    {/* Home Indicator Bar */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Portability and Rigor Compliance Section */}
        <section className="py-24 bg-surface relative">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Graphic representation of logbook compliance */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 order-last lg:order-first"
              >
                <div className="bg-surface-container border border-outline-variant/40 rounded-[32px] p-8 space-y-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">verified_user</span>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-lg text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Institutional Compliance</h4>
                      <p className="text-xs text-on-surface-variant font-medium">Syllabus-compliant verification mapping</p>
                    </div>
                  </div>
                  
                  <div className="h-[1px] bg-outline-variant/20" />
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        <strong>Secure Export Formats:</strong> Download entire clinical rotation logbooks, timestamps, clinician details, and feedback instantly. Easily upload into regulatory portfolio managers.
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        <strong>Anti-Fraud Verification:</strong> Clinician scan verification guarantees records are fully authenticated on the ward with GPS geofencing.
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        <strong>No Data Silos:</strong> Your records are yours. Maintain full ownership of your credentials, even as you move across different hospitals and rotation cycles.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Copy */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-6"
              >
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                  Compliance &amp; Security
                </span>
                <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Your Portfolio. Portable and Compliant.
                </h2>
                <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                  Signing off paper logs is an admin nightmare. HeyKudu secures your logs digitally. Our formats map strictly to academic boards, university curricula, and training institutions (including ACGME, AMC, and global residency programs) ensuring your completed WBA assessments, EPA targets, and log counts are immediately accepted and ready for export.
                </p>
                <div className="pt-2">
                  <blockquote className="border-l-4 border-primary pl-4 text-xs font-semibold italic text-on-surface-variant/80">
                    &ldquo;HeyKudu maps my rotation requirements precisely. At the end of my term, I can download a pristine, compliant clinical log ready for my assessment board in 1 click.&rdquo;
                  </blockquote>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Dynamic Rotation & pre-loaded curriculum tracker */}
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
                <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  Automated Syllabus Matching
                </span>
                <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Curriculum-Aligned Goals, Preloaded
                </h2>
                <p className="text-on-surface-variant font-medium leading-relaxed text-sm md:text-base">
                  When you start a rotation block, all required skills, lectures, and clinical categories are automatically preloaded onto your dashboard. No manual logging setup is required.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[16px]">menu_book</span>
                    </div>
                    <span className="text-xs font-extrabold text-on-surface">Observe Booking of 1st Visit Pt</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[16px]">menu_book</span>
                    </div>
                    <span className="text-xs font-extrabold text-on-surface">Antenatal / Intrapartum Cases</span>
                  </div>
                </div>
              </motion.div>

              {/* Graphic Dashboard list replicating second screenshot */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-surface border border-outline-variant/30 rounded-[32px] p-6 shadow-lg space-y-6"
              >
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                  <h3 className="font-black text-sm text-on-surface uppercase tracking-wider">Rotation Requirements</h3>
                  <span className="text-xs text-red-600 font-extrabold">COMPLETION: 7%</span>
                </div>

                <div className="space-y-4">
                  {/* Row 1 */}
                  <div className="flex justify-between items-center p-3 bg-surface-container rounded-2xl border border-outline-variant/10">
                    <div>
                      <span className="text-[10px] font-black uppercase text-purple-600 bg-purple-500/10 px-2 py-0.5 rounded-full">Skill</span>
                      <div className="text-xs font-bold mt-1 text-on-surface">Observe Booking of 1st Visit Pt</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-on-surface-variant">0 / 1</div>
                      <span className="text-[10px] font-extrabold text-red-500/80">Incomplete</span>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex justify-between items-center p-3 bg-surface-container rounded-2xl border border-outline-variant/10">
                    <div>
                      <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-500/10 px-2 py-0.5 rounded-full">Lecture</span>
                      <div className="text-xs font-bold mt-1 text-on-surface">Antenatal Cases</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-on-surface">1 / 1</div>
                      <span className="text-[10px] font-extrabold text-green-600">Completed</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Quick action block: Plus Button & Modules */}
        <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Instant Utility Dock
              </span>
              <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                The Quick-Action Utility Dock
              </h2>
              <p className="text-on-surface-variant font-medium text-sm md:text-base">
                Tap the floating <strong>“+” button</strong> on your dashboard to instantly open professional medical assessment sheets, reflection portals, or diagnostic reference engines in 1 second.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: WBA */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 p-6.5 rounded-3xl hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[250px] relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-2xl bg-white/80 shadow flex items-center justify-center text-purple-600 relative z-10">
                  <span className="material-symbols-outlined text-[26px]">vaccines</span>
                </div>
                <div className="space-y-2 relative z-10">
                  <h3 className="font-extrabold text-base text-on-surface leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    WBA (Workplace Based Assessment)
                  </h3>
                  <p className="text-on-surface-variant text-[11px] font-medium leading-relaxed">
                    Instant access to required clinical competency forms for your rotation block.
                  </p>
                </div>
              </motion.div>

              {/* Card 2: EPA */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 p-6.5 rounded-3xl hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[250px] relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-2xl bg-white/80 shadow flex items-center justify-center text-blue-600 relative z-10">
                  <span className="material-symbols-outlined text-[26px]">shield</span>
                </div>
                <div className="space-y-2 relative z-10">
                  <h3 className="font-extrabold text-base text-on-surface leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    EPA (Entrustable Professional Activity)
                  </h3>
                  <p className="text-on-surface-variant text-[11px] font-medium leading-relaxed">
                    Log professional milestones with direct alignment to academic syllabus benchmarks.
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Reflections */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 border border-fuchsia-500/20 p-6.5 rounded-3xl hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[250px] relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-fuchsia-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-2xl bg-white/80 shadow flex items-center justify-center text-fuchsia-600 relative z-10">
                  <span className="material-symbols-outlined text-[26px]">auto_awesome</span>
                </div>
                <div className="space-y-2 relative z-10">
                  <h3 className="font-extrabold text-base text-on-surface leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Self-Reflection Module
                  </h3>
                  <p className="text-on-surface-variant text-[11px] font-medium leading-relaxed">
                    Record educational reflections on complex clinical scenarios with structured prompt guidance.
                  </p>
                </div>
              </motion.div>

              {/* Card 4: Clinical Brain AI with pulsed Logo animation */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-2 border-emerald-500/30 p-6.5 rounded-3xl hover:scale-[1.03] hover:shadow-xl hover:border-emerald-500/50 shadow-md shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between h-[250px] relative overflow-hidden group"
              >
                {/* Glowing neon halo rings */}
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl group-hover:scale-150 transition-all duration-700"></div>
                <div className="absolute w-24 h-24 rounded-full border border-emerald-500/10 animate-ping duration-[3000ms] -right-4 -top-4 pointer-events-none"></div>

                {/* Animated Logo Container */}
                <div className="w-14 h-14 rounded-2xl bg-neutral-900 shadow-md flex items-center justify-center p-2 relative z-10 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all">
                  <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl animate-pulse"></div>
                  <img 
                    src="/images/logo.png" 
                    alt="Kudu" 
                    className="w-full h-full object-contain animate-pulse z-10"
                  />
                </div>
                
                <div className="space-y-1.5 relative z-10">
                  <div className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-700 px-2 py-0.5 rounded-full text-[9px] font-black tracking-wider uppercase animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Voice Active
                  </div>
                  <h3 className="font-extrabold text-base text-on-surface leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Clinical Brain AI Assistant
                  </h3>
                  <p className="text-on-surface-variant text-[11px] font-medium leading-relaxed">
                    Double-check complex case findings, guidelines, and diagnostic criteria right in the field with instant voice notes.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* QR Code Sign-off flow section */}
        <section className="py-24 relative bg-surface-container-low overflow-hidden border-t border-outline-variant/15">
          
          {/* Full bleed premium background overlay matching home hero */}
          <div className="absolute inset-0 w-full h-full select-none pointer-events-none transition-all duration-1000 z-0">
            <img 
              className="w-full h-full object-cover object-center lg:object-right opacity-[0.06] transition-all duration-1000" 
              src="/images/clean-team.png" 
              alt="heykudu clinical rotation"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/70 to-transparent z-10"></div>
          </div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6"
              >
                <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  Ward-level Sign-off Flow
                </span>
                <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  QR Sign-offs on the Fly
                </h2>
                <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                  No more chasing busy clinical supervisors for signatures or email approvals. When you log a skill or complete an assessment, HeyKudu generates an on-screen QR code of your submission. 
                </p>
                <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
                  Simply show the QR code to your clinical educator, consultant, or registrar. They can scan it directly with their device to sign off on your skill mastery instantly.
                </p>
              </motion.div>

              {/* High Fidelity Side-by-Side Dual Phone Scanner Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 flex justify-center items-center py-8"
              >
                <div className="relative w-full max-w-[420px] h-[480px] flex items-center justify-center">
                  
                  {/* Phone 1: Student App with QR Code */}
                  <div className="absolute left-4 top-8 w-[190px] h-[390px] bg-slate-950 rounded-[36px] p-1.5 border-[5px] border-slate-800 shadow-2xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition-transform duration-500 z-10 select-none">
                    {/* Speaker Notch */}
                    <div className="absolute top-0 inset-x-0 h-4 flex justify-center items-center z-30">
                      <div className="w-14 h-3 bg-slate-950 rounded-b-xl"></div>
                    </div>
                    
                    {/* Student Screen Content */}
                    <div className="w-full h-full bg-[#7D00FF] rounded-[28px] p-3 pt-6 flex flex-col justify-between text-white text-[9px] relative overflow-hidden">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="font-extrabold text-[10px] tracking-tight">heykudu</span>
                        <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[8px]">←</span>
                      </div>

                      <div className="flex flex-col items-center gap-1 my-1.5">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#7D00FF] shadow">
                          <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                        </div>
                        <span className="font-black text-[10px] tracking-tight">Assessment Saved</span>
                      </div>

                      {/* Glassmorphic Verification Area */}
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/10 flex flex-col items-center gap-1.5 flex-grow justify-center">
                        <div className="bg-white rounded-lg p-1 w-20 h-24 flex items-center justify-center shadow-md">
                          {/* High density vector representation of QR */}
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
                            <rect x="5" y="8" width="1" height="1" />
                            <rect x="1" y="9" width="1" height="1" />
                            <rect x="3" y="9" width="1" height="1" />
                            <rect x="6" y="9" width="1" height="1" />
                          </svg>
                        </div>
                        <span className="text-[7px] font-black text-center text-white/90">Scan to Sign-off</span>
                      </div>
                    </div>
                  </div>

                  {/* Phone 2: Supervisor held camera scanner */}
                  <div className="absolute right-4 bottom-4 w-[190px] h-[390px] bg-slate-950 rounded-[36px] p-1.5 border-[5px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rotate-[6deg] hover:rotate-0 transition-transform duration-500 z-20 select-none">
                    {/* Speaker Notch */}
                    <div className="absolute top-0 inset-x-0 h-4 flex justify-center items-center z-30">
                      <div className="w-14 h-3 bg-slate-950 rounded-b-xl"></div>
                    </div>

                    {/* Supervisor Camera Content */}
                    <div className="w-full h-full bg-slate-900 rounded-[28px] p-3 pt-6 flex flex-col justify-between text-white text-[9px] relative overflow-hidden">
                      {/* Viewfinder scanner box overlay */}
                      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[0.5px] z-0"></div>
                      
                      {/* Scan Target outline HUD */}
                      <div className="absolute inset-6 border border-green-400/50 rounded-xl flex items-center justify-center z-10">
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-green-400"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-green-400"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-400"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-green-400"></div>
                        
                        {/* Green laser scanning line */}
                        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_8px_#4ade80] animate-bounce"></div>
                      </div>

                      <div className="relative z-10 flex justify-between items-center text-white/80">
                        <span className="font-extrabold">SCANNING</span>
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                      </div>

                      <div className="relative z-10 text-center space-y-1 mt-auto bg-slate-950/70 p-2.5 rounded-xl border border-white/5 backdrop-blur-md">
                        <span className="text-[10px] font-black text-green-400 block tracking-wider uppercase animate-pulse">QR Code Found</span>
                        <p className="text-[7.5px] text-white/70">WBA competency verification successfully signed off.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-indigo-950 to-purple-950 text-white rounded-[40px] p-8 md:p-14 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
              
              <div className="max-w-2xl mx-auto space-y-6 relative z-10">
                <div className="space-y-3">
                  <h2 className="font-extrabold text-3xl md:text-4xl tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Digital, Verified, and Unstoppable.
                  </h2>
                  <p className="text-white/85 font-medium text-sm md:text-base leading-relaxed">
                    Deploy HeyKudu in your clinical school or residency program. Join hundreds of doctors tracking, logging, and completing their training requirements with zero friction.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://heykudu.com"
                    className="px-10 py-4.5 bg-white text-primary rounded-full font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                  >
                    Get Started Now
                    <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                  </Link>
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
