"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function GeoFence() {
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

  return (
    <>
      <Navbar />
      <main className="pt-32 bg-surface min-h-screen overflow-hidden">
        {/* Header */}
        <section className="py-16 bg-surface-container-low border-b border-outline-variant/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary/10 text-tertiary font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">share_location</span>
              Geo-Fence Verification
            </div>
            <h1 className="font-bold text-4xl md:text-5xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Verified Rotation &amp; Attendance Tracking
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Prevent rotation logs tampering with high-fidelity, privacy-preserving geo-verification. Ensuring clinical placements are completed truthfully.
            </p>
          </div>
        </section>

        {/* Live Simulation Map & Statistics */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="font-bold text-3xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Verify Attendance with absolute integrity.
              </h2>
              <p className="text-on-surface-variant text-body-lg">
                Kudu&apos;s system compares the student&apos;s submission coordinate against the hospital&apos;s registered geo-boundaries. No continuous tracking, zero privacy compromise.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">gpp_good</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface">Privacy First Design</h4>
                    <p className="text-on-surface-variant text-sm">We only check coordinates at the moment of submission. No background location trailing.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0">
                    <span className="material-symbols-outlined">offline_bolt</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface">Offline-Capable Validation</h4>
                    <p className="text-on-surface-variant text-sm">Validates and queues logs offline securely, syncing immediately when cellular service returns.</p>
                  </div>
                </div>
              </div>

              {/* Verified Count Widget */}
              <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/30 flex justify-between items-center">
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Verified Submissions Today</div>
                  <div className="text-3xl font-extrabold text-primary mt-1">{submissionsCount}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full bg-tertiary-container ${pulseActive ? "animate-ping" : ""}`}></span>
                  <span className="text-sm font-semibold text-on-surface-variant">Live Syncing</span>
                </div>
              </div>
            </div>

            {/* Simulated Radar Screen Graphic Column */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[550px] aspect-square rounded-[40px] bg-neutral-950 p-8 shadow-2xl border border-neutral-800 overflow-hidden flex flex-col justify-between">
                {/* Radar Grid Circles */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-[85%] aspect-square rounded-full border border-dashed border-tertiary-fixed"></div>
                  <div className="w-[60%] aspect-square rounded-full border border-dashed border-tertiary-fixed absolute"></div>
                  <div className="w-[35%] aspect-square rounded-full border border-dashed border-tertiary-fixed absolute"></div>
                  {/* Radar Sweeper Line */}
                  <div className="w-1/2 h-[2px] bg-gradient-to-r from-tertiary-fixed to-transparent absolute left-1/2 top-1/2 origin-left animate-[spin_6s_linear_infinite]"></div>
                </div>

                {/* Radar Content Interface */}
                <div className="flex justify-between items-center z-10">
                  <div className="text-neutral-400 font-mono text-xs">RADAR: GEO_FENCE_SYS_V2</div>
                  <div className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800 text-[10px] font-mono text-tertiary-fixed">
                    STATUS: ACTIVE
                  </div>
                </div>

                {/* Simulated Hospital Coordinates Card Overlay */}
                <div className="my-auto z-10 flex flex-col items-center gap-6">
                  {/* Outer hospital marker */}
                  <div className="relative">
                    <span className="material-symbols-outlined text-[64px] text-tertiary-fixed animate-pulse">local_hospital</span>
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-tertiary-container"></span>
                    </span>
                  </div>

                  <div className="bg-neutral-900/90 backdrop-blur-md p-6 rounded-2xl border border-neutral-800 w-full max-w-sm space-y-4 font-mono text-xs">
                    <div className="flex justify-between text-neutral-400">
                      <span>FACILITY:</span>
                      <span className="text-white font-bold">St. Mary&apos;s General</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>COORDINATES:</span>
                      <span className="text-white">51.5074° N, 0.1278° W</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>ALLOWED RADIUS:</span>
                      <span className="text-tertiary-fixed font-bold">150 METERS</span>
                    </div>
                    <div className="h-[1px] bg-neutral-800 my-2"></div>
                    <div className="flex justify-between items-center text-emerald-400 font-bold bg-emerald-950/40 p-2 rounded-lg border border-emerald-900/40">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">verified_user</span>
                        VALIDATION SUCCESS
                      </span>
                      <span>100% IN BOUNDS</span>
                    </div>
                  </div>
                </div>

                {/* System Stats Footer */}
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 z-10">
                  <span>LATENCY: 42MS</span>
                  <span>ENCRYPTION: AES-GCM-256</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Summary Section */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-bold text-3xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Absolute Security. No Middleman.
              </h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg">
                We take security and compliance extremely seriously. All geo-verification events are signed cryptographically using hardware-level secure enclaves on modern iOS and Android devices.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-outline-variant/30 space-y-6 shadow-sm">
              <div className="flex gap-4 items-center">
                <span className="material-symbols-outlined text-primary text-[32px]">shield_lock</span>
                <span className="font-bold text-lg text-on-surface">SOC2 Compliant Audits</span>
              </div>
              <p className="text-on-surface-variant text-sm">
                Every log event creates a cryptographically immutable ledger line, making your compliance review sessions stress-free and audit-ready.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
