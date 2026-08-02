"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DoctorExperience() {
  // High-fidelity dopamine stats for the hero phone mockup
  const rotationStats = [
    { label: "Check-Ins", progress: 85, current: "12 / 15 completed", target: "85%", color: "from-emerald-400 to-teal-400" },
    { label: "Rotation Syllabus Requirements", progress: 92, current: "24 / 26 completed", target: "92%", color: "from-purple-400 to-indigo-400" },
    { label: "WBAs / EPAs", progress: 75, current: "3 / 4 signed off", target: "75%", color: "from-pink-400 to-rose-400" },
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
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-surface min-h-screen overflow-hidden">
        
        {/* Hero Section */}
        <section className="py-20 relative bg-gradient-to-b from-indigo-950/5 via-surface to-surface border-b border-outline-variant/10">
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
                  <span className="material-symbols-outlined text-[16px]">emoji_events</span>
                  Become the Best Doctor in the World
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight tracking-tight" 
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Made for Doctors.<br />
                  <span className="text-primary bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-indigo-600">Built for Academic Rigor.</span>
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

              {/* Right Column - Extremely Dopamine-Enabling CSS Mobile Phone Frame Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-5 flex justify-center relative"
              >
                {/* Glowing dopamine background flares */}
                <div className="absolute w-80 h-80 rounded-full bg-purple-500/20 blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute w-60 h-60 rounded-full bg-emerald-500/10 blur-3xl -z-10 animate-bounce" style={{ animationDuration: '6s' }}></div>
                
                {/* Simulated Physical Phone Frame - Inviting and Bright */}
                <div className="relative w-[320px] h-[650px] bg-slate-950 rounded-[50px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),_0_0_40px_rgba(99,102,241,0.15)] border-[8px] border-slate-900 ring-4 ring-slate-950/20 flex flex-col overflow-hidden">
                  
                  {/* Speaker grill & camera notch (Dynamic Island) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-950 rounded-b-2xl z-30 flex items-center justify-center">
                    <div className="w-10 h-1 bg-neutral-800 rounded-full mb-1"></div>
                  </div>
                  
                  {/* Screen Glare Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>

                  {/* Bright, Inspiring screen gradient (Dopamine enabled!) */}
                  <div className="w-full h-full bg-gradient-to-b from-[#110D2C] via-[#1A1647] to-[#120D2D] rounded-[38px] p-4.5 pt-8 flex flex-col justify-between text-white relative overflow-hidden select-none">
                    
                    {/* Status Bar */}
                    <div className="absolute top-1.5 inset-x-5 flex justify-between items-center text-[10px] font-bold opacity-80 z-20">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[11px]">signal_cellular_4_bar</span>
                        <span className="material-symbols-outlined text-[11px]">wifi</span>
                        <span className="material-symbols-outlined text-[11px]">battery_charging_full</span>
                      </div>
                    </div>

                    {/* Inviting and Motivating Header */}
                    <div className="space-y-1.5 mt-3.5 relative">
                      <div className="flex justify-between items-start">
                        <div>
                          {/* Removed 'GEMPII' -> Changed to vibrant name */}
                          <div className="text-xl font-black tracking-tight bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-300" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>O&amp;G Rotation</div>
                          <div className="text-[10px] text-indigo-300 font-extrabold uppercase tracking-widest mt-0.5">Term 3 Portfolio</div>
                        </div>
                        
                        {/* Highly Motivating Progress Circle (Dopamine Enabled) */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                          <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center">
                            <span className="text-[12px] font-black tracking-tight text-white leading-none">94%</span>
                            <span className="text-[6px] font-bold text-indigo-400 uppercase tracking-tight">Active</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Dopamine boost rank badge */}
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-full text-[8px] font-black tracking-wide uppercase">
                        <span className="material-symbols-outlined text-[10px]">workspace_premium</span>
                        Global Rank: Top 3%
                      </div>
                    </div>

                    {/* Stats Bars Block - Bright, Beautiful, Clear */}
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

                    {/* Dopamine enabling motivator badge */}
                    <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-2.5 text-center my-1 flex items-center gap-2.5 justify-start">
                      <span className="material-symbols-outlined text-emerald-400 text-[18px]">verified</span>
                      <div className="text-left leading-tight">
                        <div className="text-[8px] font-black text-emerald-400 uppercase tracking-wider">Milestone Achieved</div>
                        <div className="text-[7.5px] text-white/70 font-semibold">Ready to become the best doctor in the world</div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl text-[9px] font-black tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 mt-2.5 shadow-lg shadow-indigo-500/25 border border-white/10">
                      <span className="material-symbols-outlined text-[13px]">rocket_launch</span>
                      Export Verification Portfolio
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

        {/* Polished Doctor-punning "On-Call Clinical Stat Dock" */}
        <section className="py-24 bg-gradient-to-b from-slate-950 via-[#0F0C29] to-slate-950 text-white relative overflow-hidden border-y border-white/10 shadow-2xl">
          {/* Ambient Lighting Glows */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-black uppercase tracking-widest border border-indigo-500/30 shadow-lg shadow-indigo-500/20">
                Emergency Access
              </span>
              <h2 className="font-black text-3xl md:text-5xl tracking-tight bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-purple-200" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                The On-Call Diagnostic &amp; &ldquo;Stat&rdquo; Dock
              </h2>
              <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed">
                Tap the floating <strong className="text-white font-bold">“+” button</strong> on your dashboard to instantly aggregate all of your assessment types, log entries, and real-time AI clinical assistants in one place.
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
                className="bg-slate-900/90 border border-purple-500/30 p-8 rounded-[32px] hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[340px] relative overflow-hidden group shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 relative z-10 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                    <span className="material-symbols-outlined text-[28px]">vaccines</span>
                  </div>
                  
                  {/* High Contrast Micro-UI preview */}
                  <div className="space-y-2 bg-slate-950/80 border border-purple-500/30 p-3.5 rounded-2xl mb-4 relative z-10 text-[10px] shadow-inner">
                    <div className="flex justify-between font-black">
                      <span className="text-purple-300">Mini-CEX Assessment</span>
                      <span className="text-emerald-400 font-bold">Entrusted ✓</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <div className="w-4/5 h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 relative z-10">
                  <h3 className="font-extrabold text-lg text-white leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    WBA (Workplace Based Assessment)
                  </h3>
                  <p className="text-slate-300 text-[12px] font-medium leading-relaxed">
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
                className="bg-slate-900/90 border border-blue-500/30 p-8 rounded-[32px] hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[340px] relative overflow-hidden group shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300 relative z-10 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.25)]">
                    <span className="material-symbols-outlined text-[28px]">shield</span>
                  </div>
                  
                  {/* High Contrast Micro-UI preview */}
                  <div className="space-y-2 bg-slate-950/80 border border-blue-500/30 p-3.5 rounded-2xl mb-4 relative z-10 text-[10px] shadow-inner">
                    <div className="flex justify-between font-black">
                      <span className="text-blue-300">EPA-03 Multi-Tasking</span>
                      <span className="text-cyan-400 font-bold">Stage 2</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <div className="w-3/5 h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 relative z-10">
                  <h3 className="font-extrabold text-lg text-white leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    EPA (Entrustable Professional Activity)
                  </h3>
                  <p className="text-slate-300 text-[12px] font-medium leading-relaxed">
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
                className="bg-slate-900/90 border border-fuchsia-500/30 p-8 rounded-[32px] hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[340px] relative overflow-hidden group shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-300 relative z-10 mb-6 shadow-[0_0_20px_rgba(217,70,239,0.25)]">
                    <span className="material-symbols-outlined text-[28px]">auto_awesome</span>
                  </div>
                  
                  {/* High Contrast Micro-UI preview */}
                  <div className="bg-slate-950/80 border border-fuchsia-500/30 p-3.5 rounded-2xl mb-4 relative z-10 text-[10px] text-fuchsia-200 font-semibold shadow-inner flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping"></span>
                    &ldquo;Reflecting on postoperative complications...&rdquo;
                  </div>
                </div>

                <div className="space-y-2.5 relative z-10">
                  <h3 className="font-extrabold text-lg text-white leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Self-Reflection Module
                  </h3>
                  <p className="text-slate-300 text-[12px] font-medium leading-relaxed">
                    Record educational reflections on complex clinical scenarios with structured prompt guidance.
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
                  {/* Clean glowing logo frame */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-emerald-500/50 flex items-center justify-center p-3 relative z-10 shadow-[0_0_20px_rgba(16,185,129,0.3)] mb-6">
                    <img 
                      src="/images/logo-white.png" 
                      alt="Kudu" 
                      className="w-full h-full object-contain animate-pulse z-10"
                    />
                  </div>

                  {/* Waveform visualizer inside card */}
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
                    Voice Active
                  </div>
                  <h3 className="font-extrabold text-lg text-white leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Clinical Brain AI Assistant
                  </h3>
                  <p className="text-slate-300 text-[12px] font-medium leading-relaxed">
                    Double-check complex case findings, guidelines, and diagnostic criteria right in the field with instant voice notes.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Step-by-Step Clinical Workflow Guide for Doctors */}
        <section className="py-24 bg-surface border-b border-outline-variant/15 relative">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Step-by-Step Instruction
              </span>
              <h2 className="font-extrabold text-3xl md:text-5xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                How It Works: Step-by-Step
              </h2>
              <p className="text-on-surface-variant font-medium text-base md:text-lg">
                Follow this simple step-by-step process to log clinical activities, sign off competencies, and track your rotation progress.
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
                  desc: "Sign up for your secure doctor profile in under 30 seconds.",
                  icon: "person_add"
                },
                {
                  step: "03",
                  title: "Complete Credentials",
                  desc: "Add your academic training level, hospital, and clinical affiliations.",
                  icon: "badge"
                },
                {
                  step: "04",
                  title: "Select Rotation",
                  desc: "Pick your active term (e.g. O&G, Pediatrics, Emergency Medicine).",
                  icon: "clinical_notes"
                },
                {
                  step: "05",
                  title: "1-Tap Check-In",
                  desc: "Perform quick ward check-ins for everyday skills and patient interactions.",
                  icon: "touch_app"
                },
                {
                  step: "06",
                  title: "Launch Assessment",
                  desc: "Tap the floating '+' button on your homepage and pick WBA or EPA.",
                  icon: "add_circle"
                },
                {
                  step: "07",
                  title: "Complete Form Together",
                  desc: "Fill out the competency form side-by-side with your clinician or supervisor.",
                  icon: "assignment"
                },
                {
                  step: "08",
                  title: "Bedside QR Scan",
                  desc: "Hit submit to show your QR code. Your supervisor scans it to verify instantly.",
                  icon: "qr_code_scanner"
                },
                {
                  step: "09",
                  title: "Repeat & Share",
                  desc: "Log daily clinical milestones and invite colleagues to simplify sign-offs.",
                  icon: "share"
                },
                {
                  step: "10",
                  title: "Export Logbook",
                  desc: "Check progress on your profile and download your verified logbook anytime.",
                  icon: "download"
                }
              ].map((stepItem, idx) => (
                <motion.a
                  key={stepItem.step}
                  href="https://heykudu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-2xl flex flex-col justify-between hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-black text-xs flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        {stepItem.step}
                      </span>
                      <span className="material-symbols-outlined text-on-surface-variant/50 text-[20px] group-hover:text-primary transition-colors">
                        {stepItem.icon}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-sm text-on-surface leading-tight group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                      {stepItem.title}
                    </h3>
                    <p className="text-on-surface-variant text-[11px] font-medium leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-outline-variant/15 flex items-center justify-between text-[10px] font-black text-primary group-hover:underline">
                    <span>Get Started</span>
                    <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </motion.a>
              ))}
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

        {/* Brand New Spectacular Full-Width Immersive CTA Section (Screenshot 3 Redesign) */}
        <section className="py-28 bg-gradient-to-b from-surface to-slate-900 border-t border-outline-variant/10 relative">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
          
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-indigo-950 via-[#1E1B4B] to-slate-950 border border-white/10 text-white rounded-[50px] p-8 md:p-20 text-center shadow-[0_30px_100px_-15px_rgba(0,0,0,0.8),_0_0_50px_rgba(99,102,241,0.1)] relative overflow-hidden"
            >
              {/* Background abstract radial circles for premium feel */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
              
              <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                <div className="space-y-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-indigo-300 text-xs font-black uppercase tracking-widest border border-white/5">
                    Start Your Onboarding
                  </span>
                  <h2 className="font-black text-4xl md:text-6xl tracking-tight leading-none bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Digital, Verified, and Unstoppable.
                  </h2>
                  <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    Deploy HeyKudu in your clinical school or residency program. Join thousands of doctors tracking, logging, and completing their training requirements with zero friction.
                  </p>
                </div>

                {/* Massive, Highly-Interactive, Dopamine Button */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="https://heykudu.com"
                    className="group relative px-12 py-5.5 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 bg-[length:200%_auto] text-white rounded-full font-black text-base shadow-[0_15px_40px_rgba(99,102,241,0.4)] hover:bg-right transition-all duration-500 scale-100 hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-3.5 border border-white/25"
                  >
                    Get Started Now
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1.5 transition-transform duration-300">rocket_launch</span>
                  </Link>
                </div>

                {/* Interactive onboarding statistics and trust metrics */}
                <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-xl mx-auto text-center">
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-indigo-400">4,500+</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Residents Active</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-purple-400">1 Tap</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Bedside Sign-offs</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-emerald-400">100%</div>
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
