"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [program, setProgram] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!program || !email || !message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ program, email, message }),
      });

      if (response.ok) {
        setSubmitStatus("success");
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
              Standardize clinical assessments, attendance validation, and EPA progress logs for your medical school, residency, or training program. 
            </p>

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
                Program Contact Form
              </h2>
              <p className="text-on-surface-variant text-sm mb-6">
                Tell us about your medical program and we&apos;ll configure a custom demo sandbox environment for your institution.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="program" className="block text-sm font-semibold text-on-surface mb-2">
                    Medical Program / Institution Name
                  </label>
                  <input
                    type="text"
                    id="program"
                    placeholder="e.g. Harvard Medical School Residency"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    required
                    className="w-full px-5 py-3.5 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-on-surface mb-2">
                    Contact Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="e.g. dean@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-5 py-3.5 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-on-surface mb-2">
                    Your Requirements & Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your active clinical tracks, approximate cohort size, and any desired curriculum configurations..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-5 py-3.5 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-on-primary rounded-2xl font-bold hover:opacity-95 transition-all text-sm shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>
                      Submitting Message...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      Submit Details
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
                      Your medical program details have been securely dispatched to <strong className="text-primary">no-reply@heykudu.com</strong>. Our deployment lead will follow up shortly.
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
