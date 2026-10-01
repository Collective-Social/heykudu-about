"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { trackGoogleLeadConversion } from "@/lib/gtag";
import { getAttributionData } from "@/lib/attribution";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [program, setProgram] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Head of Department / Academic Convenor");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const isIndividualInquiry = role === "Student / Job Seeker / Other";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!program || !email || !message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const attribution = getAttributionData();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || undefined,
          program: program.trim(),
          email: email.trim(),
          role,
          message: message.trim(),
          ...attribution,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Only track Google Ads conversion for qualified institutional leads or all submissions
        trackGoogleLeadConversion(1.0, "ZAR");
        setName("");
        setProgram("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-surface min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-4xl w-full px-margin-mobile grid md:grid-cols-12 gap-8 items-center">
          
          {/* Information Section */}
          <div className="md:col-span-5 space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              Institutional Setup
            </span>
            <h1 className="font-bold text-4xl md:text-5xl text-on-surface leading-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Deploy heykudu at your University
            </h1>
            <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
              Standardize clinical assessments, attendance validation, and EPA progress logs for your medical school, residency, or training hospital.
            </p>

            <div className="p-4 rounded-2xl bg-surface-container-high/60 border border-outline-variant/30 text-xs text-on-surface-variant space-y-2">
              <div className="font-bold text-on-surface flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                Institutional Software Platform
              </div>
              <p>
                heykudu provides enterprise clinical management tools to university deans, faculties, and hospital supervisors.
              </p>
              <p className="text-[11px] text-on-surface-variant/70 italic">
                Notice: We do not offer individual medical courses, private nursing lessons, or student enrollments.
              </p>
            </div>
          </div>

          {/* Form Card Section */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-surface-container-low p-6 md:p-8 rounded-[40px] border border-outline-variant/20 shadow-lg relative overflow-hidden"
            >
              <h2 className="text-2xl font-bold text-on-surface mb-2" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Institutional Briefing Request
              </h2>
              <p className="text-on-surface-variant text-sm mb-6">
                Tell us about your university faculty or hospital program to configure a departmental pilot environment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="e.g. Dr. Sarah Ndlovu"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                      Your Role / Designation
                    </label>
                    <select
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                    >
                      <option value="Executive Dean / Faculty Leadership">Executive Dean / Faculty Leadership</option>
                      <option value="Head of Department / Academic Convenor">Head of Department / Academic Convenor</option>
                      <option value="Clinical Nursing Facilitator / Preceptor">Clinical Nursing Facilitator / Preceptor</option>
                      <option value="Lecturer / Course Lead">Lecturer / Course Lead</option>
                      <option value="Hospital Administrator / Registrar">Hospital Administrator / Registrar</option>
                      <option value="Student / Job Seeker / Other">Student / Job Seeker / Other</option>
                    </select>
                  </div>
                </div>

                {isIndividualInquiry && (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-300">
                    <strong>Please note:</strong> heykudu provides institutional software for universities. We do not provide student courses, lessons, or recruitment. For academic enrollment, please reach out to your faculty registrar directly.
                  </div>
                )}

                <div>
                  <label htmlFor="program" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    University / Hospital / Medical Program <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="program"
                    placeholder="e.g. Wits School of Clinical Medicine / Charlotte Maxeke"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Work / Institutional Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="e.g. sarah.ndlovu@wits.ac.za"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Your Requirements & Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Describe your student cohort size, current logbook or attendance challenge, and any accreditation requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-primary text-on-primary rounded-2xl font-bold hover:opacity-95 transition-all text-sm shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>
                      Submitting Details...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      Submit Briefing Request
                    </>
                  )}
                </button>
              </form>

              {/* Status Message Overlays */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-surface flex flex-col justify-center items-center text-center p-6 z-10"
                  >
                    <span className="material-symbols-outlined text-[64px] text-green-500 mb-4 animate-bounce">
                      check_circle
                    </span>
                    <h3 className="text-2xl font-bold text-on-surface mb-2" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                      Details Submitted!
                    </h3>
                    <p className="text-on-surface-variant text-sm max-w-sm mb-6">
                      Your details have been securely dispatched to <strong className="text-primary">no-reply@heykudu.com</strong>. Our team will review the requirements and follow up.
                    </p>
                    <button
                      onClick={() => setSubmitStatus("idle")}
                      className="px-6 py-2.5 bg-surface-container-high text-on-surface font-semibold rounded-full hover:bg-surface-container-highest transition-all border border-outline-variant/30 text-sm"
                    >
                      Done
                    </button>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-surface flex flex-col justify-center items-center text-center p-6 z-10"
                  >
                    <span className="material-symbols-outlined text-[64px] text-primary mb-4">
                      error
                    </span>
                    <h3 className="text-2xl font-bold text-on-surface mb-2" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                      Submission Failed
                    </h3>
                    <p className="text-on-surface-variant text-sm max-w-sm mb-6">
                      There was a network transmission error. Please reload and try submitting again.
                    </p>
                    <button
                      onClick={() => setSubmitStatus("idle")}
                      className="px-6 py-2.5 bg-primary text-on-primary font-semibold rounded-full hover:opacity-90 transition-all text-sm"
                    >
                      Try Again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
export const dynamic = "force-static";
