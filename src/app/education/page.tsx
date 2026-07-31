"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EducationExperience() {
  // High-fidelity stats for the hero phone mockup
  const academicStats = [
    { label: "Practicum & Class Check-Ins", progress: 85, current: "12 / 15 completed", target: "85%", color: "from-emerald-400 to-teal-400" },
    { label: "Syllabus & Course Requirements", progress: 92, current: "24 / 26 completed", target: "92%", color: "from-purple-400 to-indigo-400" },
    { label: "Competencies & Assessments", progress: 75, current: "3 / 4 signed off", target: "75%", color: "from-pink-400 to-rose-400" },
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
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">school</span>
                  Education &amp; Academic Programs
                </div>

                <div className="inline-block px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 text-xs font-bold uppercase tracking-wider ml-2">
                  🎓 ACADEMIC RIGOR &amp; COMPETENCY TRACKING
                </div>

                <h1 className="font-extrabold text-4xl md:text-6xl text-on-surface tracking-tight leading-[1.1]" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Made for Education. <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-indigo-600">
                    Built for Academic Rigor.
                  </span>
                </h1>

                <p className="text-on-surface-variant font-medium text-base md:text-lg leading-relaxed max-w-xl">
                  HeyKudu is designed specifically for students, educators, and academic program directors. Log practicum hours, track curriculum requirements, complete rubric evaluations, and maintain a fully verified, portable digital record of learning.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                  <Link
                    href="https://heykudu.com"
                    className="px-8 py-4 bg-primary text-on-primary font-black rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                  >
                    Get Started Now
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
                    <div className="font-black text-lg text-primary">Syllabus Sync</div>
                    <div className="text-[11px] text-on-surface-variant font-medium">Preloaded Goals</div>
                  </div>
                  <div>
                    <div className="font-black text-lg text-emerald-600">1 Tap</div>
                    <div className="text-[11px] text-on-surface-variant font-medium">Class Check-Ins</div>
                  </div>
                  <div>
                    <div className="font-black text-lg text-purple-600">QR Scan</div>
                    <div className="text-[11px] text-on-surface-variant font-medium">Instructor Sign-Off</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Phone Frame Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center items-center"
              >
                <div className="relative w-[320px] h-[650px] bg-slate-950 rounded-[50px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),_0_0_40px_rgba(99,102,241,0.15)] border-[8px] border-slate-900 ring-4 ring-slate-950/20 flex flex-col overflow-hidden">
                  
                  {/* Speaker grill */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-950 rounded-b-2xl z-30 flex items-center justify-center">
                    <div className="w-10 h-1 bg-neutral-800 rounded-full mb-1"></div>
                  </div>
                  
                  {/* Screen Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>

                  {/* Education Screen Theme */}
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

                    {/* Header */}
                    <div className="space-y-1.5 mt-3.5 relative">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xl font-black tracking-tight bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-300" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                            Academic Program
                          </div>
                          <div className="text-[10px] text-indigo-300 font-extrabold uppercase tracking-widest mt-0.5">Term 3 Portfolio</div>
                        </div>
                        
                        {/* Progress Circle */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                          <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center">
                            <span className="text-[12px] font-black tracking-tight text-white leading-none">94%</span>
                            <span className="text-[6px] font-bold text-indigo-400 uppercase tracking-tight">Active</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Rank badge */}
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-full text-[8px] font-black tracking-wide uppercase">
                        <span className="material-symbols-outlined text-[10px]">workspace_premium</span>
                        Global Rank: Top 3%
                      </div>
                    </div>

                    {/* Education Stats Progress Block */}
                    <div className="space-y-3.5 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-2xl p-4 my-2.5 shadow-inner">
                      {academicStats.map((stat, idx) => (
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
                        <div className="text-[8px] font-black text-emerald-400 uppercase tracking-wider">Milestone Achieved</div>
                        <div className="text-[7.5px] text-white/70 font-semibold">Ready to achieve academic excellence</div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl text-[9px] font-black tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 mt-2.5 shadow-lg shadow-indigo-500/25 border border-white/10">
                      <span className="material-symbols-outlined text-[13px]">school</span>
                      Export Verification Portfolio
                    </button>

                    {/* Home Bar */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Preloaded Curriculum Matching Section */}
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
                  When you start a course or practicum block, all required skills, lectures, and academic categories are automatically preloaded onto your dashboard. No manual logging setup is required.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[16px]">menu_book</span>
                    </div>
                    <span className="text-xs font-extrabold text-on-surface">Observe Practical / Lab Demonstration</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[16px]">menu_book</span>
                    </div>
                    <span className="text-xs font-extrabold text-on-surface">Practicum &amp; Fieldwork Requirements</span>
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
                  <h3 className="font-black text-sm text-on-surface uppercase tracking-wider">Course Requirements</h3>
                  <span className="text-xs text-primary font-extrabold">COMPLETION: 92%</span>
                </div>

                <div className="space-y-4">
                  {/* Row 1 */}
                  <div className="flex justify-between items-center p-3 bg-surface-container rounded-2xl border border-outline-variant/10">
                    <div>
                      <span className="text-[10px] font-black uppercase text-purple-600 bg-purple-500/10 px-2 py-0.5 rounded-full">Practicum</span>
                      <div className="text-xs font-bold mt-1 text-on-surface">Observe Classroom Instruction</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-on-surface">1 / 1</div>
                      <span className="text-[10px] font-extrabold text-emerald-600">Completed</span>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex justify-between items-center p-3 bg-surface-container rounded-2xl border border-outline-variant/10">
                    <div>
                      <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-500/10 px-2 py-0.5 rounded-full">Lecture</span>
                      <div className="text-xs font-bold mt-1 text-on-surface">Advanced Research Methods</div>
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

        {/* NEW BEAUTIFUL CLASSROOM NFC TAG ATTENDANCE SECTION */}
        <section className="py-24 bg-gradient-to-b from-slate-950 via-[#110D2C] to-slate-950 text-white relative overflow-hidden border-y border-white/10 shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-500/15 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-indigo-500/15 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <span className="px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-black uppercase tracking-widest border border-purple-500/30 shadow-lg shadow-purple-500/20">
                1-Tap Smart Classroom Hardware
              </span>
              <h2 className="font-black text-3xl md:text-5xl tracking-tight bg-clip-text bg-gradient-to-r from-white via-purple-100 to-indigo-200" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Smart NFC Tags in Every Classroom
              </h2>
              <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed">
                Contactless attendance logging in less than a second. Students tap the desk-mounted HeyKudu Tag with their smartphone to record verified, geofenced class attendance instantly.
              </p>
            </motion.div>

            {/* Feature Showcase Container with Classroom Image & Floating Check-In Button Overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[36px] overflow-hidden border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.8),_0_0_50px_rgba(125,0,255,0.2)] bg-slate-900 group"
            >
              {/* Classroom Photo */}
              <img 
                src="/images/classroom_nfc_tag.png" 
                alt="Students in classroom with HeyKudu Smart NFC Tag" 
                className="w-full h-[380px] md:h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>

              {/* Floating Glowing 1-Tap "Check-In" Button Overlay */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#7D00FF] hover:bg-[#6B00E6] text-white px-6 md:px-8 py-3.5 rounded-full shadow-[0_10px_35px_rgba(125,0,255,0.6)] border border-white/40 flex items-center gap-3 animate-bounce z-20 transition-all cursor-pointer">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="material-symbols-outlined text-[22px]">nfc</span>
                <span className="font-black text-xs md:text-sm tracking-wide uppercase font-sans">TAP DESK TAG TO CHECK IN</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>

              {/* Floating Verification Badge (Bottom Overlay) */}
              <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-auto bg-slate-950/90 backdrop-blur-md border border-purple-500/40 p-4.5 rounded-2xl text-white shadow-2xl z-20 max-w-md flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wider">Classroom 4A Verified</div>
                  <div className="text-[11px] text-emerald-400 font-bold mt-0.5">GPS Geofence + Smart NFC Chip Match ✓</div>
                  <div className="text-[10px] text-slate-400 font-medium">Recorded at 09:41 AM • Lecture: Advanced Pedagogy</div>
                </div>
              </div>
            </motion.div>

            {/* 3 Benefit Cards below image */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-slate-900/80 border border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <span className="material-symbols-outlined text-[20px]">nfc</span>
                </div>
                <h3 className="font-extrabold text-base text-white">Sub-Second Contactless Tap</h3>
                <p className="text-slate-300 text-xs leading-relaxed font-medium">
                  No paper roll calls or slow login screens. Students hold their phone near the desk tag to log attendance instantly.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-slate-900/80 border border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                  <span className="material-symbols-outlined text-[20px]">pin_drop</span>
                </div>
                <h3 className="font-extrabold text-base text-white">Anti-Spoofing Geofence</h3>
                <p className="text-slate-300 text-xs leading-relaxed font-medium">
                  Combines physical NFC chip encryption with GPS location boundary verification to ensure students are physically present in the room.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-900/80 border border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                  <span className="material-symbols-outlined text-[20px]">analytics</span>
                </div>
                <h3 className="font-extrabold text-base text-white">Live Instructor Analytics</h3>
                <p className="text-slate-300 text-xs leading-relaxed font-medium">
                  Professors and educators see real-time attendance rosters update live on their dashboard as students arrive.
                </p>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Step-by-Step Academic Workflow Guide */}
        <section id="how-it-works" className="py-24 bg-surface border-b border-outline-variant/15 relative">
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
                Follow this simple step-by-step process to log academic activities, sign off competencies, and track your program progress.
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
                  desc: "Sign up for your secure student or educator profile in under 30 seconds.",
                  icon: "person_add"
                },
                {
                  step: "03",
                  title: "Complete Credentials",
                  desc: "Add your university, academic level, and program affiliations.",
                  icon: "badge"
                },
                {
                  step: "04",
                  title: "Select Program",
                  desc: "Pick your active term or subject block.",
                  icon: "school"
                },
                {
                  step: "05",
                  title: "1-Tap NFC Check-In",
                  desc: "Tap your phone on the classroom NFC tag for sub-second class check-ins.",
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
                  desc: "Fill out the evaluation form side-by-side with your professor or supervisor.",
                  icon: "assignment"
                },
                {
                  step: "08",
                  title: "On-Screen QR Scan",
                  desc: "Hit submit to show your QR code. Your supervisor scans it to verify instantly.",
                  icon: "qr_code_scanner"
                },
                {
                  step: "09",
                  title: "Repeat & Share",
                  desc: "Log daily academic milestones and invite peers to simplify sign-offs.",
                  icon: "share"
                },
                {
                  step: "10",
                  title: "Export Logbook",
                  desc: "Check progress on your profile and download your verified academic portfolio anytime.",
                  icon: "download"
                }
              ].map((stepItem, idx) => (
                <motion.div
                  key={stepItem.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-2xl flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-black text-xs flex items-center justify-center">
                        {stepItem.step}
                      </span>
                      <span className="material-symbols-outlined text-on-surface-variant/50 text-[20px] group-hover:text-primary transition-colors">
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
                <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  Practicum &amp; Class Sign-off Flow
                </span>
                <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  QR Sign-offs on the Fly
                </h2>
                <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                  No more chasing busy instructors for physical signatures or email approvals. When you log a skill or complete an evaluation, HeyKudu generates an on-screen QR code of your submission.
                </p>
                <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
                  Simply show the QR code to your professor, instructor, or evaluator. They can scan it directly with their camera to sign off on your competency instantly.
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
                    
                    <div className="w-full h-full bg-[#7D00FF] rounded-[28px] p-3 pt-6 flex flex-col justify-between text-white text-[9px] relative overflow-hidden">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="font-extrabold text-[10px] tracking-tight">heykudu</span>
                        <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[8px]">←</span>
                      </div>

                      <div className="flex flex-col items-center gap-1 my-1.5">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#7D00FF] shadow">
                          <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                        </div>
                        <span className="font-black text-[10px] tracking-tight">Evaluation Saved</span>
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
                          </svg>
                        </div>
                        <span className="text-[7px] font-black text-center text-white/90">Scan to Sign-off</span>
                      </div>
                    </div>
                  </div>

                  {/* Phone 2: Instructor Camera Scanner */}
                  <div className="absolute right-4 bottom-4 w-[190px] h-[390px] bg-slate-950 rounded-[36px] p-1.5 border-[5px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rotate-[6deg] hover:rotate-0 transition-transform duration-500 z-20 select-none">
                    <div className="absolute top-0 inset-x-0 h-4 flex justify-center items-center z-30">
                      <div className="w-14 h-3 bg-slate-950 rounded-b-xl"></div>
                    </div>

                    <div className="w-full h-full bg-slate-900 rounded-[28px] p-3 pt-6 flex flex-col justify-between text-white text-[9px] relative overflow-hidden">
                      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[0.5px] z-0"></div>
                      
                      <div className="absolute inset-6 border border-green-400/50 rounded-xl flex items-center justify-center z-10">
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-green-400"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-green-400"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-400"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-green-400"></div>
                        
                        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_8px_#4ade80] animate-bounce"></div>
                      </div>

                      <div className="relative z-10 flex justify-between items-center text-white/80">
                        <span className="font-extrabold">SCANNING</span>
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                      </div>

                      <div className="relative z-10 text-center space-y-1 mt-auto bg-slate-950/70 p-2.5 rounded-xl border border-white/5 backdrop-blur-md">
                        <span className="text-[10px] font-black text-green-400 block tracking-wider uppercase animate-pulse">QR Code Found</span>
                        <p className="text-[7.5px] text-white/70">Competency verification successfully signed off.</p>
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
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>
          
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-indigo-950 via-[#1E1B4B] to-slate-950 border border-white/10 text-white rounded-[50px] p-8 md:p-20 text-center shadow-[0_30px_100px_-15px_rgba(0,0,0,0.8),_0_0_50px_rgba(99,102,241,0.1)] relative overflow-hidden"
            >
              <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                <div className="space-y-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-indigo-300 text-xs font-black uppercase tracking-widest border border-white/5">
                    Start Your Onboarding
                  </span>
                  <h2 className="font-black text-4xl md:text-6xl tracking-tight leading-none bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Digital, Verified, and Unstoppable.
                  </h2>
                  <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    Deploy HeyKudu in your school, university, or academic program. Join thousands of students and educators tracking and completing requirements with zero friction.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="https://heykudu.com"
                    className="group relative px-12 py-5 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 bg-[length:200%_auto] text-white rounded-full font-black text-base shadow-[0_15px_40px_rgba(99,102,241,0.4)] hover:bg-right transition-all duration-500 scale-100 hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-3.5 border border-white/25"
                  >
                    Get Started Now
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1.5 transition-transform duration-300">arrow_forward</span>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-xl mx-auto text-center">
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-indigo-400">100%</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Digital Portfolios</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-purple-400">1 Tap</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">On-Screen Sign-Offs</div>
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
