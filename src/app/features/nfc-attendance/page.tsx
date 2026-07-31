"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NfcAndGeoFenceCombined() {
  const [submissionsCount, setSubmissionsCount] = useState(1284);
  const [pulseActive, setPulseActive] = useState(true);

  // Simulate incoming real-time verified logs
  useEffect(() => {
    const interval = setInterval(() => {
      setSubmissionsCount((prev) => prev + 1);
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const capabilities = [
    {
      icon: "smartphone",
      title: "Universal Device Compatibility",
      desc: "Works natively on iPhone & Android NFC chip readers. No special apps required — just tap and open the secure clinical browser interface."
    },
    {
      icon: "room_preferences",
      title: "Multi-Tag Department Mapping",
      desc: "Assign distinct physical tags or QR cards per rotation ward, operating theater, lecture hall, or clinic room with simple 1-click mappings."
    },
    {
      icon: "shield_lock",
      title: "Privacy-First Geofence",
      desc: "Zero background location tracking. We only check GPS coordinates at the exact millisecond of submission to ensure student privacy."
    },
    {
      icon: "offline_bolt",
      title: "Offline-Capable Validation",
      desc: "Validates and queues logs offline securely in cellular dead zones, syncing immediately when connection returns."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-28 bg-surface min-h-screen overflow-hidden">
        
        {/* HERO SECTION */}
        <section className="py-16 md:py-24 relative bg-gradient-to-b from-surface-container-low via-surface to-surface border-b border-outline-variant/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-tertiary/5 pointer-events-none" />
          
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Headline & Copy */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 space-y-6 text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">contactless</span>
                  PHYSICAL NFC TAGS &amp; GPS GEOFENCING
                </div>
                
                <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Tap to Check In.<br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-indigo-600">
                    Verified Attendance.
                  </span>
                </h1>
                
                <p className="text-on-surface-variant font-medium text-base md:text-lg leading-relaxed max-w-xl">
                  Eliminate paper sign-in sheets, buddy-punching, and location fraud. HeyKudu combines physical NTAG213 desk tags with GPS geofencing to record instant, tamper-proof attendance across hospitals and university classrooms.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-primary text-on-primary rounded-full font-extrabold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">contactless</span>
                    Enable NFC Tags &amp; Geofencing
                  </Link>
                  <a
                    href="#radar-demo"
                    className="px-8 py-4 bg-surface-container border border-outline-variant/30 text-on-surface rounded-full font-bold text-sm hover:bg-surface-container-high transition-all text-center flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">radar</span>
                    Live Geofence Radar
                  </a>
                </div>

                {/* Micro metrics badges */}
                <div className="pt-6 grid grid-cols-3 gap-4 border-t border-outline-variant/20 max-w-md">
                  <div>
                    <div className="font-black text-xl text-primary">&lt; 1s</div>
                    <div className="text-[11px] text-on-surface-variant font-medium">NFC Tap Check-In</div>
                  </div>
                  <div>
                    <div className="font-black text-xl text-emerald-600">100%</div>
                    <div className="text-[11px] text-on-surface-variant font-medium">Geofence Accuracy</div>
                  </div>
                  <div>
                    <div className="font-black text-xl text-purple-600">0%</div>
                    <div className="text-[11px] text-on-surface-variant font-medium">Background Trailing</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Hero Artwork Showcase with Floating Spinning 3D Physical Tag Logo */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-6 flex justify-center relative"
              >
                <div className="relative p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-[40px] shadow-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-500 max-w-[500px]">
                  <img
                    src="/images/nfc_attendance.png"
                    alt="Physical NFC Location Attendance Tag Artwork"
                    className="w-full h-auto rounded-[32px] object-cover"
                  />
                  
                  {/* Floating Micro-Badge */}
                  <div className="absolute top-8 right-8 bg-surface-container-lowest/90 backdrop-blur border border-outline-variant/30 rounded-2xl p-3 flex items-center gap-3 shadow-xl z-20">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px] animate-pulse">sensors</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">SECURE CHIP</div>
                      <div className="text-xs font-black text-on-surface">NFC NTAG213 + GPS</div>
                    </div>
                  </div>

                  {/* FLOATING SPINNING 3D PHYSICAL NFC TAG TOKEN (Identical to staging.heykudu.com/scan) */}
                  <div className="absolute bottom-6 left-6 z-30 flex items-center gap-3 bg-slate-950/80 backdrop-blur-md p-2.5 rounded-full border border-purple-400/40 shadow-2xl">
                    <div className="w-14 h-14 rounded-full bg-white/95 shadow-xl flex items-center justify-center p-1 border-2 border-white/60">
                      <motion.div
                        animate={{ rotateY: [0, 360] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="w-full h-full rounded-full bg-gradient-to-br from-purple-700 via-indigo-800 to-purple-900 border border-purple-400/40 flex items-center justify-center relative shadow-inner"
                      >
                        <div className="w-[88%] h-[88%] rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                          <img
                            src="/images/logo-white.png"
                            alt="heykudu physical tag"
                            className="h-5 w-5 object-contain brightness-0 invert drop-shadow"
                          />
                        </div>
                      </motion.div>
                    </div>
                    <div className="pr-4 text-left">
                      <div className="text-[10px] font-black text-purple-300 uppercase tracking-wider">Physical NFC Tag</div>
                      <div className="text-xs font-extrabold text-white">Tap To Detect</div>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* LIVE SIMULATION GEOFENCE RADAR SECTION */}
        <section id="radar-demo" className="py-24 bg-gradient-to-b from-slate-950 via-[#0B0920] to-slate-950 text-white relative overflow-hidden border-y border-white/10 shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Description */}
              <div className="lg:col-span-5 space-y-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-indigo-300 text-xs font-extrabold uppercase tracking-widest border border-primary/30">
                  <span className="material-symbols-outlined text-[16px]">radar</span>
                  REAL-TIME LOCATION ENGINE
                </div>

                <h2 className="font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Verified Attendance with Absolute Integrity.
                </h2>
                
                <p className="text-slate-300 text-base leading-relaxed font-medium">
                  HeyKudu compares student tap coordinates against the facility&apos;s registered geographic boundary in real-time. No continuous background tracking, zero privacy compromise.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-indigo-300 flex-shrink-0">
                      <span className="material-symbols-outlined">gpp_good</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Privacy-First Architecture</h4>
                      <p className="text-slate-300 text-xs font-medium mt-0.5">Coordinates are evaluated strictly at the millisecond of submission. No background location trailing.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0">
                      <span className="material-symbols-outlined">offline_bolt</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Offline Dead-Zone Queueing</h4>
                      <p className="text-slate-300 text-xs font-medium mt-0.5">Validates and queues check-in signatures offline in thick concrete ward basements, syncing instantly upon reconnect.</p>
                    </div>
                  </div>
                </div>

                {/* Verified Submissions Live Widget */}
                <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 flex justify-between items-center shadow-xl">
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Verified Submissions Today</div>
                    <div className="text-3xl font-black text-indigo-400 mt-1">{submissionsCount}</div>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                    <span className={`w-2.5 h-2.5 rounded-full bg-emerald-400 ${pulseActive ? "animate-ping" : ""}`}></span>
                    <span className="text-xs font-bold text-emerald-400">Live Sync Active</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Animated Radar Screen Graphic */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="relative w-full max-w-[550px] aspect-square rounded-[40px] bg-slate-950 p-8 shadow-2xl border border-white/15 overflow-hidden flex flex-col justify-between">
                  {/* Radar Grid Circles */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
                    <div className="w-[85%] aspect-square rounded-full border border-dashed border-indigo-400"></div>
                    <div className="w-[60%] aspect-square rounded-full border border-dashed border-indigo-400 absolute"></div>
                    <div className="w-[35%] aspect-square rounded-full border border-dashed border-indigo-400 absolute"></div>
                    {/* Radar Sweeper Line */}
                    <div className="w-1/2 h-[2px] bg-gradient-to-r from-indigo-400 to-transparent absolute left-1/2 top-1/2 origin-left animate-[spin_6s_linear_infinite]"></div>
                  </div>

                  {/* Radar Content Interface */}
                  <div className="flex justify-between items-center z-10">
                    <div className="text-slate-400 font-mono text-xs">GEOFENCE_ENGINE_V3</div>
                    <div className="bg-slate-900/90 px-3 py-1 rounded-full border border-indigo-500/40 text-[10px] font-mono text-indigo-300">
                      STATUS: GEOFENCE_ACTIVE
                    </div>
                  </div>

                  {/* Simulated Facility Coordinates Card */}
                  <div className="my-auto z-10 flex flex-col items-center gap-6">
                    <div className="relative">
                      <span className="material-symbols-outlined text-[64px] text-indigo-400 animate-pulse">local_hospital</span>
                      <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500"></span>
                      </span>
                    </div>

                    <div className="bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-full max-w-sm space-y-4 font-mono text-xs shadow-2xl">
                      <div className="flex justify-between text-slate-400">
                        <span>FACILITY:</span>
                        <span className="text-white font-bold">St. Mary&apos;s Academic Complex</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>GPS COORDINATES:</span>
                        <span className="text-white">51.5074° N, 0.1278° W</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>RADIUS BOUNDARY:</span>
                        <span className="text-indigo-400 font-bold">150 METERS</span>
                      </div>
                      <div className="h-[1px] bg-white/10 my-2"></div>
                      <div className="flex justify-between items-center text-emerald-400 font-bold bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/30">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-sm">verified_user</span>
                          NFC + GPS MATCH
                        </span>
                        <span>100% IN BOUNDS</span>
                      </div>
                    </div>
                  </div>

                  {/* System Stats Footer */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 z-10">
                    <span>LATENCY: 38MS</span>
                    <span>ENCRYPTION: HARDWARE AES-GCM-256</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SMART CLASSROOM & WARD TAG SHOWCASE WITH FEATURED SPINNING TAG DEMO */}
        <section className="py-24 bg-surface-container-lowest border-b border-outline-variant/15">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-16">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Hardware &amp; Software Synergy
              </span>
              <h2 className="font-extrabold text-3xl md:text-5xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Physical Hardware Meets Intelligent Software
              </h2>
              <p className="text-on-surface-variant font-medium text-base md:text-lg">
                HeyKudu supplies durable, waterproof NTAG213 smart tags and acrylic desktop plaques ready to mount in hospital wards, operating suites, and university lecture halls.
              </p>
            </div>

            {/* Interactive Spinning Tag Feature Showcase Box */}
            <div className="bg-gradient-to-br from-slate-950 via-[#120D2D] to-slate-950 text-white p-8 md:p-14 rounded-[40px] border border-white/15 shadow-2xl grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Left: The Spinning 3D Physical Tag Badge */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
                <div className="relative flex items-center justify-center p-8">
                  {/* Glowing background ring */}
                  <div className="absolute inset-0 rounded-full bg-purple-600/30 blur-3xl animate-pulse"></div>
                  
                  {/* White Outer Badge Frame */}
                  <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white/95 shadow-[0_0_60px_rgba(125,0,255,0.5)] flex items-center justify-center relative p-2.5 border-4 border-white/60 backdrop-blur-md">
                    {/* Spinning Inner 3D Tag Token */}
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="w-full h-full rounded-full bg-gradient-to-br from-purple-700 via-indigo-800 to-purple-900 border-2 border-purple-400/40 shadow-inner flex items-center justify-center relative"
                    >
                      <div className="w-[88%] h-[88%] rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center border border-white/20">
                        <img
                          src="/images/logo-white.png"
                          alt="heykudu physical tag"
                          className="h-12 w-12 sm:h-16 sm:w-16 object-contain brightness-0 invert drop-shadow-lg"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <div className="text-sm font-black text-white tracking-tight">heykudu NTAG213 Certified Token</div>
                  <div className="text-xs text-purple-300 font-bold">Continuous 3D Encrypted NFC Broadcast</div>
                </div>
              </div>

              {/* Right: Classroom Photo Showcase */}
              <div className="lg:col-span-7 space-y-6">
                <div className="relative rounded-[28px] overflow-hidden border border-white/15 shadow-xl group">
                  <img 
                    src="/images/classroom_nfc_tag.png" 
                    alt="Students using HeyKudu Smart NFC Tag in classroom" 
                    className="w-full h-[280px] sm:h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                    <div className="text-xs font-black uppercase tracking-wider text-emerald-400">Classroom Desk NFC Tag</div>
                    <div className="text-sm font-bold">1-Tap Contactless Check-In for Lectures &amp; Practicums</div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex gap-3 items-center bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300">
                      <span className="material-symbols-outlined text-[16px]">touch_app</span>
                    </div>
                    <span className="text-xs font-extrabold text-white">Automated Check-In / Out Flow</span>
                  </div>
                  <div className="flex gap-3 items-center bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300">
                      <span className="material-symbols-outlined text-[16px]">qr_code</span>
                    </div>
                    <span className="text-xs font-extrabold text-white">HD Printable QR Code Backup</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* TECHNICAL CAPABILITIES GRID */}
        <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-wider">
                Technical Specifications
              </span>
              <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Key Capabilities at a Glance
              </h2>
              <p className="text-on-surface-variant font-medium">
                Engineered specifically for demanding clinical ward and university campus environments.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="bg-surface-container p-6 rounded-3xl border border-outline-variant/30 space-y-3 hover:border-primary/40 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">{cap.icon}</span>
                  </div>
                  <h4 className="font-extrabold text-on-surface text-base" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{cap.title}</h4>
                  <p className="text-on-surface-variant text-xs leading-relaxed font-medium">{cap.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* UNIFIED CALL TO ACTION BANNER */}
        <section className="py-28 bg-surface relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter max-w-4xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-950 via-[#1E1B4B] to-slate-950 border border-white/10 text-white rounded-[48px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="max-w-2xl mx-auto space-y-8 relative z-10">
                <div className="space-y-3">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-indigo-300 text-xs font-black uppercase tracking-widest border border-white/5">
                    Hardware &amp; Software Ready
                  </span>
                  <h2 className="font-black text-3xl md:text-5xl tracking-tight text-white" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Deploy NFC &amp; Geofencing
                  </h2>
                  <p className="text-slate-300 font-medium text-sm md:text-base leading-relaxed">
                    Transform attendance tracking across your medical rotations and academic programs. Contact our team to coordinate hardware tags and geofence setup.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-10 py-5 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2 border border-white/20"
                  >
                    <span className="material-symbols-outlined text-[18px]">contactless</span>
                    Order NFC Hardware &amp; Setup
                  </Link>
                  <Link
                    href="/contact"
                    className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all text-center"
                  >
                    Request Demo
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
