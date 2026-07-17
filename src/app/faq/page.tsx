"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
  category: "students" | "educators" | "universities";
}

const FAQ_DATA: FAQItem[] = [
  // Trainees
  {
    category: "students",
    question: "How do I log a Workplace-Based Assessment (WBA) on Kudu?",
    answer: "Logging a WBA on Kudu is designed to be frictionless. Simply tap the log button, select your assessment type (e.g., Mini-CEX, DOPS, or CBD), fill in the clinical encounter details, and generate a secure supervisor verification link or on-screen QR code."
  },
  {
    category: "students",
    question: "How does the supervisor sign-off work? Do tutors need an account?",
    answer: "No, supervisors do not need to register or log in. Once you present the secure QR code or send the validation link, the tutor is taken to a secure, lightweight sign-off screen where they can immediately verify, rate, and comment on your clinical performance in under 30 seconds."
  },
  {
    category: "students",
    question: "Are my clinical reflections private?",
    answer: "Kudu prioritizes data privacy. All student reflections and notes are strictly confidential and are only visible to you and your authorized university program administrators or tutors who are directly auditing your progress."
  },
  // Educators
  {
    category: "educators",
    question: "How does Kudu prevent fraudulent clinical sign-offs?",
    answer: "Kudu employs multi-layered security to verify the integrity of every assessment. This includes our proprietary privacy-preserving Geo-Fence verification (verifying the sign-off took place within authorized clinical site boundaries), time-window limits, unique secure cryptographic hashes, and strict email verification for high-stakes achievements."
  },
  {
    category: "educators",
    question: "What is Geo-Fence Verification, and does it track my location?",
    answer: "No, Kudu does not track or store your continuous location. Our Geo-Fence verification performs a single, privacy-safe, one-way coordinate check at the exact moment of supervisor sign-off. It only verifies if the sign-off occurred inside the designated clinical training facility (e.g., a specific hospital ward), completely preserving tutor and student privacy."
  },
  {
    category: "educators",
    question: "Can I review a resident's historical performance over time?",
    answer: "Absolutely. Educators with dashboard privileges have access to real-time, aggregated performance analytics. This lets you observe skill trajectories across Mini-CEX, DOPS, and multi-source feedback (MSF), helping you identify performance gaps early."
  },
  // Universities
  {
    category: "universities",
    question: "How does Kudu map clinical logs to medical school curricula?",
    answer: "Kudu maps clinical accomplishments directly to your institution's specific milestone requirements or Entrustable Professional Activities (EPAs). Our dynamic mapping engine aligns everyday logs to direct educational goals, ensuring students satisfy graduation criteria systematically."
  },
  {
    category: "universities",
    question: "Is Kudu compliant with international data protection standards?",
    answer: "Kudu is fully compliant with HIPAA, GDPR, and local educational privacy standards. All medical records and personal student identifiers are strongly encrypted both in-transit (SSL/TLS 1.3) and at-rest (AES-256), backed by isolated cloud hosting on Vercel and Supabase with strict RLS (Row-Level Security) policies."
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "students" | "educators" | "universities">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data (JSON-LD) for SEO / Generative Engine Optimization
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-32 pb-24 bg-surface min-h-screen">
        {/* Header Section */}
        <section className="py-12 text-center max-w-4xl mx-auto px-margin-mobile">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              Help & Resources
            </span>
            <h1 className="font-bold text-4xl md:text-6xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
              Frequently Asked Questions
            </h1>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto">
              Find answers to core features, integration frameworks, safety standards, and user guides for students, educators, and administrators.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 max-w-xl mx-auto relative px-4"
          >
            <span className="material-symbols-outlined absolute left-7 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">
              search
            </span>
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-surface-container-low border border-outline-variant/30 rounded-full text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-sm font-body-md"
            />
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-3 px-4"
          >
            {[
              { id: "all", label: "Show All" },
              { id: "students", label: "For Students" },
              { id: "educators", label: "For Educators" },
              { id: "universities", label: "For Universities" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id as "all" | "students" | "educators" | "universities");
                  setOpenIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all border shadow-sm ${
                  activeCategory === tab.id
                    ? "bg-primary text-on-primary border-primary"
                    : "bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container-low border-outline-variant/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </section>

        {/* FAQs Accordion */}
        <section className="max-w-3xl mx-auto px-margin-mobile">
          <motion.div
            layout
            className="space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredFAQs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={faq.question}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="bg-surface-container-low rounded-3xl border border-outline-variant/20 overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center gap-4 hover:bg-surface-container-medium transition-colors"
                    >
                      <span className="font-bold text-lg md:text-xl text-on-surface pr-2 leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                        {faq.question}
                      </span>
                      <span className={`material-symbols-outlined text-primary text-[24px] transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        expand_more
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 md:px-8 md:pb-8 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-outline-variant/10 pt-4 bg-surface-container-lowest/40">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filteredFAQs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-surface-container-lowest rounded-[40px] border border-outline-variant/20"
              >
                <span className="material-symbols-outlined text-primary text-[48px] mb-4">
                  search_off
                </span>
                <h3 className="font-bold text-xl text-on-surface mb-2" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>No FAQs Found</h3>
                <p className="text-on-surface-variant text-sm max-w-sm mx-auto">
                  Try searching with different keywords or switch back to the &quot;Show All&quot; category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export const dynamic = "force-static";
