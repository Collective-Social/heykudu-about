"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NfcAttendance() {
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
      icon: "sync",
      title: "Instant Live Sync",
      desc: "Attendance records and check-in signatures sync immediately to student logs and administrative oversight dashboards in real-time."
    },
    {
      icon: "link",
      title: "One-Click URL & QR Backup",
      desc: "Generate and download print-ready high-definition QR codes or direct digital check-in links anytime from your program manager console."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 bg-surface min-h-screen overflow-hidden">
        {/* Hero Section with Visual Artwork */}
        <section className="py-20 relative bg-surface-container-low border-b border-outline-variant/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-tertiary/5 pointer-events-none" />
          
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Hero Copy */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">contactless</span>
                  NEW FEATURE • PHYSICAL LOCATION VERIFICATION
                </div>
                
                <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Tap to Check In.<br />
                  <span className="text-primary bg-clip-text">Instant Clinical Attendance.</span>
                </h1>
                
                <p className="text-on-surface-variant font-medium text-lg leading-relaxed max-w-xl">
                  Place physical NFC tags or QR stands across your hospital wards and clinics. Students simply tap their phone to record verified check-ins and check-outs in seconds.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-sm shadow-lg hover:opacity-95 transition-all text-center flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">contactless</span>
                    Enable Physical Tags
                  </Link>
                  <a
                    href="#capabilities"
                    className="px-8 py-4 bg-surface-container border border-outline-variant/30 text-on-surface rounded-full font-bold text-sm hover:bg-surface-container-high transition-all text-center"
                  >
                    Explore Capabilities
                  </a>
                </div>
              </div>

              {/* Artwork Container */}
              <div className="lg:col-span-6 flex justify-center relative">
                {/* Glowing backdrop halo */}
                <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10 animate-pulse"></div>
                
                <div className="relative p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-[40px] shadow-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-500 max-w-[500px]">
                  <img
                    src="/images/nfc_attendance.png"
                    alt="Physical NFC Location Attendance Tag Artwork"
                    className="w-full h-auto rounded-[32px] object-cover"
                  />
                  
                  {/* Floating Micro-Badge */}
                  <div className="absolute top-8 right-8 bg-surface-container-lowest/90 backdrop-blur border border-outline-variant/30 rounded-2xl p-3 flex items-center gap-3 shadow-xl">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px] animate-pulse">sensors</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">SECURE CHIP</div>
                      <div className="text-xs font-black text-on-surface">NFC NTAG213 Certified</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3-Column Key Features Grid */}
        <section className="py-28 bg-surface overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-wider">
                Designed for Ward Workflows
              </span>
              <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Zero-Friction Location Authenticity
              </h2>
              <p className="text-on-surface-variant font-medium">
                Eliminate paper sheets and buddy-punching with physical tokens and geofencing intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="bg-surface-container p-8 rounded-3xl border border-outline-variant/30 hover:border-primary/30 hover:shadow-lg hover-lift transition-all space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">pin_drop</span>
                </div>
                <h3 className="font-bold text-xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  📍 Multi-Location Physical Tags
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Assign durable physical NFC tags or high-definition QR plaques to specific wards, operating theaters, or clinic suites. Easily manage tag names and locations from your admin console.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container p-8 rounded-3xl border border-outline-variant/30 hover:border-primary/30 hover:shadow-lg hover-lift transition-all space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">electric_bolt</span>
                </div>
                <h3 className="font-bold text-xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  ⚡ Automated Check-In/Out
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  HeyKudu automatically detects student flow — the first tap of the day registers as Check-In, and subsequent taps register as Check-Out, removing guesswork for students.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container p-8 rounded-3xl border border-outline-variant/30 hover:border-primary/30 hover:shadow-lg hover-lift transition-all space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">gpp_good</span>
                </div>
                <h3 className="font-bold text-xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  🛡️ Verified &amp; Fraud-Proof
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Every physical tag scan pairs with device GPS verification to confirm students are physically on-site, complete with intelligent 10-minute duplicate scan guards.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Feature Specifications / Key Capabilities Callout */}
        <section id="capabilities" className="py-24 bg-surface-container-lowest border-y border-outline-variant/15">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-6">
                <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  Technical Specifications
                </span>
                <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Key Capabilities at a Glance
                </h2>
                <p className="text-on-surface-variant font-medium leading-relaxed">
                  Engineered specifically for clinical ward settings where reliability, cellular dead zones, and student velocity are critical constraints.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-[22px]">{cap.icon}</span>
                      <h4 className="font-bold text-on-surface text-base" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{cap.title}</h4>
                    </div>
                    <p className="text-on-surface-variant text-xs leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Unified Call to Action Banner (Routes to consolidated /contact form) */}
        <section className="py-28 bg-surface relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter max-w-4xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-surface-container border border-outline-variant/35 rounded-[48px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="max-w-2xl mx-auto space-y-8 relative z-10">
                <div className="space-y-3">
                  <h2 className="font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Deploy NFC Tag Verification
                  </h2>
                  <p className="text-on-surface-variant font-medium text-sm md:text-base leading-relaxed">
                    Be among the first clinical schools to deploy physical tag verification in your clinical rotations. Contact us to coordinate NFC hardware configuration and dashboard setup.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-10 py-5 bg-primary text-on-primary rounded-full font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">contactless</span>
                    Enable Physical Tags
                  </Link>
                  <Link
                    href="/contact"
                    className="px-10 py-5 border border-outline-variant/50 text-on-surface rounded-full font-bold text-sm hover:bg-surface-container-high transition-all text-center"
                  >
                    Request NFC Hardware
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
