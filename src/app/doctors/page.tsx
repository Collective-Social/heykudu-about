"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";


export default function DoctorExperience() {
  const rotationStats = [
    { label: "Check-Ins", progress: 16, current: "38 completed", target: "16%" },
    { label: "Rotation Requirements", progress: 7, current: "Incomplete", target: "7%" },
    { label: "WBAs", progress: 0, current: "0 completed", target: "0%" },
    { label: "EPA", progress: 0, current: "0 completed", target: "0%" },
  ];

  const quickActions = [
    {
      icon: "vaccines",
      title: "WBA (Workplace Based Assessment)",
      desc: "Instant access to required clinical competency forms for your rotation.",
      color: "from-purple-500/10 to-indigo-500/10 text-purple-600 border-purple-500/20"
    },
    {
      icon: "shield",
      title: "EPA (Entrustable Professional Activity)",
      desc: "Log professional milestones with direct alignment to academic syllabus benchmarks.",
      color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-500/20"
    },
    {
      icon: "auto_awesome",
      title: "Self-Reflection Module",
      desc: "Record educational reflections on complex clinical scenarios with structured prompt guidance.",
      color: "from-fuchsia-500/10 to-pink-500/10 text-fuchsia-600 border-fuchsia-500/20"
    },
    {
      icon: "psychology",
      title: "Clinical Brain AI Assistant",
      desc: "Double-check complex case findings, guidelines, and diagnostic criteria right in the field.",
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-500/20"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 bg-surface min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="py-20 relative bg-surface-container-low border-b border-outline-variant/10">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-tertiary/5 pointer-events-none" />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Copy */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">school</span>
                  Academic &amp; Postgraduate Portability
                </div>
                
                <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Made for Doctors.<br />
                  <span className="text-primary bg-clip-text">Built for Academic Rigor.</span>
                </h1>
                
                <p className="text-on-surface-variant font-medium text-lg leading-relaxed max-w-2xl">
                  HeyKudu is designed specifically for medical doctors in academic training programs. Log clinical hours, track rotation requirements, complete assessments, and maintain a fully verified, portable digital record of your learning journey.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-sm shadow-lg hover:opacity-95 transition-all text-center flex items-center gap-2"
                  >
                    Get Started with HeyKudu
                  </Link>
                </div>
              </div>

              {/* Right Column - Premium App Mockup Dashboard */}
              <div className="lg:col-span-5 flex justify-center relative">
                <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10 animate-pulse"></div>
                
                {/* Simulated Phone Mockup replicating user uploaded screenshot */}
                <div className="w-[340px] bg-gradient-to-b from-indigo-600 to-purple-700 rounded-[48px] p-6 shadow-2xl border-4 border-slate-900 relative overflow-hidden text-white">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-4.5 bg-slate-900 rounded-full z-20"></div>
                  
                  {/* Mockup Header */}
                  <div className="flex justify-between items-center mb-6 pt-2">
                    <div>
                      <div className="text-2xl font-black tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>O&amp;G GEMPII</div>
                      <div className="text-[10px] text-white/70 font-semibold mt-0.5">Jul 20 - Nov 20, 2026</div>
                    </div>
                    
                    {/* Progress Circle Replicating 6% */}
                    <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center relative bg-white/5 shadow-inner">
                      <span className="text-sm font-extrabold">6%</span>
                    </div>
                  </div>

                  {/* Stats Bars Block */}
                  <div className="space-y-4 bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-5 mb-6">
                    {rotationStats.map((stat, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/80">
                          <span>{stat.label}</span>
                          <span>{stat.target}</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-white rounded-full transition-all duration-1000"
                            style={{ width: `${stat.progress || 2}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Micro Indicators */}
                  <div className="grid grid-cols-3 gap-2 bg-white/5 border border-white/10 rounded-2xl p-3 text-center mb-6">
                    <div>
                      <div className="text-lg font-black">0</div>
                      <div className="text-[8px] text-white/60 font-bold uppercase">Verifications</div>
                    </div>
                    <div>
                      <div className="text-lg font-black">22</div>
                      <div className="text-[8px] text-white/60 font-bold uppercase">Patients</div>
                    </div>
                    <div>
                      <div className="text-lg font-black">0</div>
                      <div className="text-[8px] text-white/60 font-bold uppercase">Reflections</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-3 bg-white/15 border border-white/20 rounded-2xl text-xs font-black hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    Download Portable Logbook
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Portability and Rigor Compliance Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Graphic representation of logbook compliance */}
              <div className="lg:col-span-5 order-last lg:order-first">
                <div className="bg-surface-container border border-outline-variant/40 rounded-[32px] p-8 space-y-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">verified_user</span>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-lg text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Royal College Compliant</h4>
                      <p className="text-xs text-on-surface-variant font-medium">Standards-compliant verification mapping</p>
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
              </div>

              {/* Copy */}
              <div className="lg:col-span-7 space-y-6">
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                  Compliance &amp; Security
                </span>
                <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Your Portfolio. Portable and Compliant.
                </h2>
                <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                  Signing off paper logs is an admin nightmare. HeyKudu secures your logs digitally. Our formats map strictly to academic boards (ACGME, Royal Colleges, AMC) ensuring your completed WBA assessments, EPA targets, and log counts are immediately accepted and ready for export.
                </p>
                <div className="pt-2">
                  <blockquote className="border-l-4 border-primary pl-4 text-xs font-semibold italic text-on-surface-variant/80">
                    &ldquo;HeyKudu maps my rotation requirements precisely. At the end of my term, I can download a pristine, compliant clinical log ready for my assessment board in 1 click.&rdquo;
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Dynamic Rotation & pre-loaded curriculum tracker */}
        <section className="py-24 bg-surface-container-lowest border-y border-outline-variant/15">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-6">
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
              </div>

              {/* Graphic Dashboard list replicating second screenshot */}
              <div className="bg-surface border border-outline-variant/30 rounded-[32px] p-6 shadow-lg space-y-6">
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
              </div>

            </div>
          </div>
        </section>

        {/* Quick action block: Plus Button & Modules */}
        <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Instant Utility Dock
              </span>
              <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                The Quick-Action Utility Dock
              </h2>
              <p className="text-on-surface-variant font-medium text-sm md:text-base">
                Tap the floating <strong>“+” button</strong> on your dashboard to instantly open professional medical assessment sheets, reflection portals, or diagnostic reference engines in 1 second.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, idx) => (
                <div 
                  key={idx} 
                  className={`bg-gradient-to-br ${action.color} p-6.5 rounded-3xl border hover:scale-[1.02] hover:shadow-md transition-all duration-300 flex flex-col justify-between h-[230px]`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/80 shadow flex items-center justify-center">
                    <span className="material-symbols-outlined text-[26px]">{action.icon}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-base text-on-surface leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                      {action.title}
                    </h3>
                    <p className="text-on-surface-variant text-[11px] font-medium leading-relaxed">
                      {action.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* QR Code Sign-off flow section */}
        <section className="py-24 bg-surface-container-low border-t border-outline-variant/15">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
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
              </div>

              {/* Graphic represent QR scanner */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="bg-surface border border-outline-variant/30 rounded-[40px] p-8 shadow-2xl max-w-[420px] text-center space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px]" />
                  
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <span className="material-symbols-outlined text-[32px]">qr_code_scanner</span>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="font-black text-lg text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Supervisor Verification</h4>
                    <p className="text-xs text-on-surface-variant font-medium">Instant scan sign-off for clinical skills</p>
                  </div>

                  <div className="p-4 bg-surface-container rounded-3xl inline-flex border border-outline-variant/25">
                    {/* Simulated QR block */}
                    <div className="w-36 h-36 border-2 border-primary/25 rounded-2xl flex items-center justify-center p-2 bg-white">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-[48px] animate-pulse">qr_code_2</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] font-bold text-on-surface-variant">
                    SCAN TO APPROVE WBA AT COMPETENT LEVEL
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter max-w-4xl">
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-[48px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
              
              <div className="max-w-2xl mx-auto space-y-8 relative z-10">
                <div className="space-y-3">
                  <h2 className="font-extrabold text-3xl md:text-4xl tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Digital, Verified, and Unstoppable.
                  </h2>
                  <p className="text-white/80 font-medium text-sm md:text-base leading-relaxed">
                    Deploy HeyKudu in your clinical school or residency program. Join hundreds of doctors tracking, logging, and completing their training requirements with zero friction.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-10 py-5 bg-white text-primary rounded-full font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center"
                  >
                    Contact Partnerships Team
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
