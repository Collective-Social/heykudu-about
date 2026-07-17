"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ClinicalGuide() {
  const [activeTab, setActiveAssessment] = useState<"logging" | "assessments" | "signatures">("logging");

  const guideModules = {
    "logging": {
      title: "How to Log a Clinical Placement",
      description: "Quickly register your placement, rota details, or ward assignment with automatic verification.",
      steps: [
        { title: "Open Clinical Log Tab", desc: "Select 'New Placement' in the Kudu Mobile application's navigation dock." },
        { title: "Confirm Ward Location", desc: "Ensure your location services are active. Kudu detects your affiliated hospital ward." },
        { title: "Enter Case Details", desc: "Fill in the anonymous patient context (e.g. ward details, specialty) and click submit." },
      ],
      tips: "Always log within the hospital perimeter. If location validation fails, check hospital Wi-Fi connection and re-try."
    },
    "assessments": {
      title: "Initiating a Workplace Based Assessment (WBA)",
      description: "Trigger Mini-CEX, DOPS, or MSF digital feedback forms securely from any clinical supervisor.",
      steps: [
        { title: "Select Assessment Mode", desc: "Pick the assessment standard requested by your educational body (e.g., Mini-CEX)." },
        { title: "Generate QR Signature Code", desc: "Kudu constructs a temporary authorization token and shows it as a beautiful QR code." },
        { title: "Present to Consultant", desc: "The consultant scans your screen with their device camera to securely open and complete the rating form instantly." },
      ],
      tips: "To maintain security, the QR token automatically expires after 10 minutes."
    },
    "signatures": {
      title: "Verifying Attendance & Placements",
      description: "Get immediate signs-off for rotation attendance without requiring a paper portfolio.",
      steps: [
        { title: "Set Status to On-Site", desc: "Mark yourself present when crossing the hospital geo-boundary." },
        { title: "Daily Auto-Verification", desc: "Our server-side automation confirms hours logged and marks them verified." },
        { title: "Review Logs & Export", desc: "Export clean CSV and PDF logs directly to your educational supervisor or portfolio system." },
      ],
      tips: "Export templates are fully compatible with Royal College and national curriculum tracking standards."
    }
  };

  const currentModule = guideModules[activeTab];

  return (
    <>
      <Navbar />
      <main className="pt-32 bg-surface min-h-screen">
        {/* Header */}
        <section className="py-16 bg-surface-container-low border-b border-outline-variant/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
              Interactive Trainee Guide
            </div>
            <h1 className="font-bold text-4xl md:text-5xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Clinical Training Hub &amp; Guide
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Master Kudu in minutes. Step-by-step guides, procedural tips, and reference standards for logging your clinical rotation.
            </p>
          </div>
        </section>

        {/* Dynamic Help Center Interface */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-bold text-lg text-on-surface mb-6 uppercase tracking-wider" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Guide Modules
              </h3>
              {(["logging", "assessments", "signatures"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveAssessment(tab)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center gap-4 ${
                    activeTab === tab
                      ? "bg-surface-container-lowest border-primary shadow-soft"
                      : "bg-transparent border-transparent text-on-surface-variant hover:bg-surface-container-low"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    activeTab === tab ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant"
                  }`}>
                    <span className="material-symbols-outlined">
                      {tab === "logging" ? "add_circle" : tab === "assessments" ? "fact_check" : "draw"}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                      {tab === "logging" ? "Logging Placements" : tab === "assessments" ? "WBA Assessments" : "Attendance Sign-Off"}
                    </div>
                    <div className="text-xs text-on-surface-variant mt-0.5">
                      {tab === "logging" ? "Quick rotation entries" : tab === "assessments" ? "Mini-CEX & DOPS flows" : "Digital verification basics"}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Help Module Detail Content */}
            <div className="lg:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-[32px] border border-outline-variant/20 shadow-lg space-y-8">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl md:text-3xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  {currentModule.title}
                </h2>
                <p className="text-on-surface-variant text-body-lg">
                  {currentModule.description}
                </p>
              </div>

              <div className="h-[1px] bg-outline-variant/20"></div>

              {/* Steps Layout */}
              <div className="space-y-8">
                {currentModule.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 relative">
                    {idx < currentModule.steps.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-[2px] bg-outline-variant/30"></div>
                    )}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg shadow-sm">
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-lg text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{step.title}</h4>
                      <p className="text-on-surface-variant text-body-md">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pro Tip Box */}
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-[28px] flex-shrink-0">lightbulb</span>
                <div>
                  <h5 className="font-bold text-primary text-sm uppercase tracking-wider mb-1">PRO-TIP FOR TRAINEES</h5>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{currentModule.tips}</p>
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
