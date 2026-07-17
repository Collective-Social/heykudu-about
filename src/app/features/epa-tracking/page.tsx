"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function EPATracking() {
  const [activeAssessment, setActiveAssessment] = useState<"mini-cex" | "dops" | "msf">("mini-cex");

  const assessmentDetails = {
    "mini-cex": {
      title: "Mini-Clinical Evaluation Exercise (Mini-CEX)",
      description: "Direct observation of clinical skills during a patient encounter. Designed to assess key components including medical interviewing, physical examination, professionalism, and clinical judgment.",
      duration: "15-20 minutes",
      steps: [
        "Clinician conducts a focused medical history and examination.",
        "Assessor observes and scores performance across 6 key competencies.",
        "Immediate 5-minute feedback session is logged and signed off.",
      ],
      scoreType: "Rating scale: 1 (Unsatisfactory) to 9 (Highly Satisfactory)",
    },
    "dops": {
      title: "Direct Observation of Procedural Skills (DOPS)",
      description: "A structured assessment specifically designed to evaluate and provide feedback on a student or resident's performance of practical procedures on patients.",
      duration: "10-15 minutes",
      steps: [
        "Resident performs a standard clinical procedure (e.g., cannulation, suturing).",
        "Assessor observes technique, safety, infection control, and post-procedure care.",
        "A structured score-card is completed with immediate feedback.",
      ],
      scoreType: "Rating scale: 1 (Development Required) to 6 (Highly Competent)",
    },
    "msf": {
      title: "Multi-Source Feedback (MSF)",
      description: "Also known as 360-degree assessment. Collects anonymous peer, nursing, and supervisor assessments to map professional behaviors, teamwork, and communication skills.",
      duration: "Aggregated monthly",
      steps: [
        "Candidate initiates MSF survey through Kudu.",
        "Prompts are automatically sent to selected peers and clinical supervisors.",
        "Anonymized data is aggregated and displayed in a spider diagram.",
      ],
      scoreType: "Consensus-based radar scoring",
    },
  };

  const current = assessmentDetails[activeAssessment];

  return (
    <>
      <Navbar />
      <main className="pt-32 bg-surface min-h-screen">
        {/* Header */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Workplace Based Assessments
            </div>
            <h1 className="font-bold text-4xl md:text-5xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Surgical Precision WBA &amp; EPA Tracking
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Portability, reliability, and real-time clinical competence tracking. Empowering students, residents, and mentors to record milestones on-the-go.
            </p>
          </div>
        </section>

        {/* Interactive Assessment Selector */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Sidebar Controls */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-bold text-xl text-on-surface mb-6 uppercase tracking-wider" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Assessment Types
              </h3>
              {(["mini-cex", "dops", "msf"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveAssessment(type)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center justify-between group ${
                    activeAssessment === type
                      ? "bg-primary-container text-on-primary-container border-primary shadow-lg"
                      : "bg-surface-container-lowest border-outline-variant/30 text-on-surface hover:bg-surface-container hover:border-outline-variant"
                  }`}
                >
                  <div>
                    <div className="font-bold text-lg" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                      {type === "mini-cex" ? "Mini-CEX" : type === "dops" ? "DOPS" : "MSF 360°"}
                    </div>
                    <div className={`text-sm ${activeAssessment === type ? "text-on-primary-container/80" : "text-on-surface-variant"}`}>
                      {type === "mini-cex" ? "Clinical encounter rating" : type === "dops" ? "Procedural skills validation" : "Peer & multi-source feedback"}
                    </div>
                  </div>
                  <span className={`material-symbols-outlined transition-transform group-hover:translate-x-1 ${
                    activeAssessment === type ? "text-on-primary-container" : "text-primary"
                  }`}>
                    chevron_right
                  </span>
                </button>
              ))}
            </div>

            {/* Display Area */}
            <div className="lg:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-[32px] border border-outline-variant/20 shadow-xl min-h-[450px] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <h2 className="font-bold text-2xl md:text-3xl text-primary" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    {current.title}
                  </h2>
                  <span className="px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container font-semibold text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    {current.duration}
                  </span>
                </div>

                <p className="text-on-surface-variant font-body-lg text-body-lg">
                  {current.description}
                </p>

                <div className="h-[1px] bg-outline-variant/20 my-6"></div>

                <h4 className="font-bold text-on-surface text-lg mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Operational Workflow:
                </h4>
                <ol className="space-y-4">
                  {current.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-on-surface-variant font-medium">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-on-surface-variant font-semibold">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                  {current.scoreType}
                </div>
                <a
                  href="https://heykudu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-on-primary font-bold px-6 py-3 rounded-full hover:opacity-90 hover:scale-105 active:scale-95 transition-all text-sm shadow-md"
                >
                  Log This Assessment
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-bold text-3xl md:text-4xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Next-Gen Competency Dashboards
              </h2>
              <p className="text-on-surface-variant font-body-md mt-4">
                We&apos;ve built beautiful, high-fidelity visual representations of student growth patterns. Zero confusion, absolute readability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Box 1 */}
              <div className="bg-surface rounded-3xl p-8 border border-outline-variant/30 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">grouped_bar_chart</span>
                </div>
                <h4 className="font-bold text-xl mb-3 text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Progression Timelines
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Track EPA milestones longitudinally across multiple rotations with continuous linear graphing.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-surface rounded-3xl p-8 border border-outline-variant/30 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">qr_code_2</span>
                </div>
                <h4 className="font-bold text-xl mb-3 text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  QR Fast Feedback
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Students generate unique secure QR codes for instant observation and confirmation by clinical supervisors.
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-surface rounded-3xl p-8 border border-outline-variant/30 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">history_edu</span>
                </div>
                <h4 className="font-bold text-xl mb-3 text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Curriculum Alignment
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Out-of-the-box support for major global medical curricula, including RACP, ACGME, and GMC standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center space-y-8">
            <h2 className="font-bold text-3xl md:text-4xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Ready to replace paper assessment folders?
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto font-body-lg">
              Unlock a real-time, compliance-friendly clinical evaluation framework with Kudu.
            </p>
            <a
              href="https://heykudu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-primary text-on-primary font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Sign Up Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
