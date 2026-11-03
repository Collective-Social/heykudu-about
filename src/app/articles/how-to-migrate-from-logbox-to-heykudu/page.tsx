import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  FileSpreadsheet,
  Zap,
  Smartphone,
  TrendingUp,
  Clock,
  HelpCircle,
  Sparkles,
  Download,
  MousePointerClick,
  WifiOff,
  Flame,
  UploadCloud,
  CheckCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Liberate Your Medical Logbook: How to Migrate from LogBox to Heykudu",
  description:
    "A 90-second, zero-data-loss technical guide for South African medical interns and registrars exporting clinical procedures from LogBox and importing directly into Heykudu.",
  keywords: [
    "LogBox migration",
    "LogBox to Heykudu",
    "medical logbook export",
    "LogBox XLS download",
    "LogBox South Africa",
    "HPCSA clinical logbook",
    "CMSA portfolio migration",
    "registrar logbook",
    "medical intern procedures",
    "Heykudu migration wizard",
    "heykudu.com/migrate",
  ],
  authors: [{ name: "Heykudu Engineering & Clinical Team" }],
  alternates: {
    canonical: "https://about.heykudu.com/articles/how-to-migrate-from-logbox-to-heykudu",
  },
  openGraph: {
    title: "Liberate Your Medical Logbook: How to Migrate from LogBox to Heykudu",
    description:
      "A fast, step-by-step technical guide for medical trainees exporting procedures from LogBox (.xls) and importing directly into Heykudu.",
    url: "https://about.heykudu.com/articles/how-to-migrate-from-logbox-to-heykudu",
    siteName: "heykudu",
    images: [
      {
        url: "https://about.heykudu.com/images/blog/logbox-procedures-view.png",
        width: 1200,
        height: 630,
        alt: "Step-by-Step LogBox Migration to Heykudu",
      },
    ],
    locale: "en_ZA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Migrate Your Medical Logbook from LogBox to Heykudu",
    description:
      "Export your LogBox procedures in 4 easy clicks and import straight into Heykudu with our automated spreadsheet parser.",
    images: ["https://about.heykudu.com/images/blog/logbox-procedures-view.png"],
  },
};

export default function LogBoxMigrationPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Liberate Your Medical Logbook: How to Migrate from LogBox to Heykudu",
    description:
      "A fast, 5-step technical guide for South African medical interns and registrars exporting procedure logs from LogBox in XLS format and importing them into Heykudu.",
    image: "https://about.heykudu.com/images/blog/logbox-procedures-view.png",
    author: {
      "@type": "Organization",
      name: "Heykudu Engineering & Clinical Team",
      url: "https://about.heykudu.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Heykudu",
      logo: {
        "@type": "ImageObject",
        url: "https://about.heykudu.com/images/logo.png",
      },
    },
    datePublished: "2026-11-03T00:00:00+02:00",
    dateModified: "2026-11-03T00:00:00+02:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://about.heykudu.com/articles/how-to-migrate-from-logbox-to-heykudu",
    },
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Export Your Procedures from LogBox and Import to Heykudu",
    description:
      "Step-by-step instructions to export clinical procedures from LogBox in raw Excel (.xls) format and import them directly into Heykudu.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Navigate to the LogBox LogBook Portal",
        text: "Directly open https://logbook.logbox.co.za/#/logbook/default in your browser and sign in.",
        url: "https://about.heykudu.com/articles/how-to-migrate-from-logbox-to-heykudu#step-1",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Open the LogBook View",
        text: "Click the LogBook section on the left rail to display your recorded procedures table.",
        image: "https://about.heykudu.com/images/blog/logbox-procedures-view.png",
        url: "https://about.heykudu.com/articles/how-to-migrate-from-logbox-to-heykudu#step-2",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Click the Download Action Icon",
        text: "Locate and click the download button in the upper-right table toolbar.",
        url: "https://about.heykudu.com/articles/how-to-migrate-from-logbox-to-heykudu#step-3",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Select XLS (Excel) Export",
        text: "Select XLS to download machine-readable tabular data containing all your procedure metadata.",
        image: "https://about.heykudu.com/images/blog/logbox-export-modal.png",
        url: "https://about.heykudu.com/articles/how-to-migrate-from-logbox-to-heykudu#step-4",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Import Spreadsheet into Heykudu",
        text: "Navigate to https://www.heykudu.com/?view=migrate (or https://www.heykudu.com/migrate), select your specialty rotation, enter your email, and upload your exported LogBox file. Heykudu automatically parses and credits all historical cases.",
        url: "https://about.heykudu.com/articles/how-to-migrate-from-logbox-to-heykudu#step-5",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why must I choose XLS instead of PDF when exporting from LogBox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "XLS contains raw structured data (columns for timestamps, procedure names, supervision roles, and supervisor names). Heykudu's automated ingestion engine parses this spreadsheet in milliseconds. A PDF is a static printable layout that machines cannot reliably parse.",
        },
      },
      {
        "@type": "Question",
        name: "Will my historical procedure counts count toward my CMSA / HPCSA quotas in Heykudu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. When Heykudu ingests your XLS file, all verified past procedures are mapped to your cumulative totals and Entrustable Professional Activities (EPAs).",
        },
      },
      {
        "@type": "Question",
        name: "Where do I start the import into Heykudu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can start directly at https://www.heykudu.com/?view=migrate or https://www.heykudu.com/migrate.",
        },
      },
      {
        "@type": "Question",
        name: "Is Heykudu free for medical students, interns, and registrars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Trainees can create an account, log cases, scan QR sign-offs, and track competencies completely free.",
        },
      },
    ],
  };

  return (
    <>
      {/* Structured SEO Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <Navbar />

      <main className="bg-surface min-h-screen text-on-surface pt-24 md:pt-32 pb-24">
        {/* Article Header */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4 mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Trainee Field Guide • 90-Second Walkthrough
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-on-surface text-balance"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            How to Migrate Your Medical Logbook from LogBox to Heykudu
          </h1>

          <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto text-balance leading-relaxed">
            If you have ever spent 20 minutes coaxing a legacy portal to save an intubation log while your consultant heads to tea, this guide is for you. Here is how to export your entire procedural history from LogBox and import it into Heykudu with zero data loss.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-on-surface-variant">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-primary" />
              90-second migration
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Zero Lost Cases
            </span>
            <span>•</span>
            <span className="text-on-surface-variant">
              Updated November 2026
            </span>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Quick Migration Shortcuts */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Direct Link Banner - LogBox */}
            <div className="bg-surface-container-lowest p-5 rounded-3xl border border-outline-variant/30 shadow-soft flex flex-col justify-between gap-3">
              <div className="space-y-1">
                <div className="text-[11px] uppercase font-extrabold tracking-wider text-slate-500">
                  Step 1: Export Source
                </div>
                <div
                  className="text-base font-bold text-on-surface"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  LogBox Portal
                </div>
                <div className="text-xs text-on-surface-variant font-mono break-all select-all">
                  https://logbook.logbox.co.za/#/logbook/default
                </div>
              </div>
              <a
                href="https://logbook.logbox.co.za/#/logbook/default"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-surface-container-high text-on-surface font-bold text-xs hover:bg-surface-container-highest transition-all shadow-sm shrink-0 active:scale-95"
              >
                Open LogBox Portal
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Link Banner - Heykudu */}
            <div className="bg-primary/5 p-5 rounded-3xl border border-primary/30 shadow-soft flex flex-col justify-between gap-3">
              <div className="space-y-1">
                <div className="text-[11px] uppercase font-extrabold tracking-wider text-primary">
                  Step 2: Destination
                </div>
                <div
                  className="text-base font-bold text-on-surface"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Heykudu Migration Portal
                </div>
                <div className="text-xs text-primary font-mono break-all select-all">
                  https://www.heykudu.com/?view=migrate
                </div>
              </div>
              <a
                href="https://www.heykudu.com/?view=migrate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary text-on-primary font-bold text-xs hover:opacity-90 transition-all shadow-sm shrink-0 active:scale-95"
              >
                Open Heykudu Migration
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Step 1 */}
          <section id="step-1" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
                1
              </div>
              <h2
                className="text-xl sm:text-2xl font-black text-on-surface"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Open LogBox &amp; Sign In
              </h2>
            </div>

            <p className="text-sm text-on-surface-variant leading-relaxed pl-12">
              Navigate straight to{" "}
              <a
                href="https://logbook.logbox.co.za/#/logbook/default"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold underline underline-offset-2 hover:opacity-80"
              >
                https://logbook.logbox.co.za/#/logbook/default
              </a>{" "}
              and sign in with your email and password.
            </p>
          </section>

          {/* Step 2 */}
          <section id="step-2" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
                2
              </div>
              <h2
                className="text-xl sm:text-2xl font-black text-on-surface"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Click &ldquo;LogBook&rdquo; in the Navigation
              </h2>
            </div>

            <p className="text-sm text-on-surface-variant leading-relaxed pl-12">
              Select the <strong>LogBook</strong> tab on the left rail. You will see your full procedural database: dates, patient references, procedure categories, supervisor names, and sign-off statuses (shown in <strong>Figure 1</strong> below).
            </p>

            {/* Screenshot 1 */}
            <div className="pl-12 pt-2">
              <div className="rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container-low shadow-sm">
                <div className="p-2 sm:p-4 bg-slate-900 flex justify-center">
                  <img
                    src="/images/blog/logbox-procedures-view.png"
                    alt="LogBox procedures list view showing procedure table and download button"
                    className="w-full h-auto rounded-lg max-h-[440px] object-contain"
                  />
                </div>
                <div className="p-3 bg-surface-container-low border-t border-outline-variant/20 text-xs text-on-surface-variant flex items-center gap-2">
                  <MousePointerClick className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    <strong>Figure 1:</strong> The LogBox procedures table. Notice the download icon located on the top right toolbar above the list.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section id="step-3" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
                3
              </div>
              <h2
                className="text-xl sm:text-2xl font-black text-on-surface"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Click the Download Icon
              </h2>
            </div>

            <p className="text-sm text-on-surface-variant leading-relaxed pl-12">
              In the upper-right corner of the procedure table (next to the date and search filters), click the <strong>Download icon</strong> (represented as a tray with an arrow, indicated in Figure 1). This will open the export format modal.
            </p>
          </section>

          {/* Step 4 */}
          <section id="step-4" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
                4
              </div>
              <h2
                className="text-xl sm:text-2xl font-black text-on-surface"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Select &ldquo;XLS&rdquo; (Excel) &amp; Download
              </h2>
            </div>

            <p className="text-sm text-on-surface-variant leading-relaxed pl-12">
              In the format dialog (shown in <strong>Figure 2</strong>), select <strong>XLS</strong> and confirm. Your browser will download your raw <code className="text-primary font-mono font-bold bg-primary/10 px-1.5 py-0.5 rounded">.xls</code> file immediately.
            </p>

            {/* Technical Callout */}
            <div className="pl-12">
              <div className="bg-primary/5 border border-primary/20 p-4 rounded-2xl flex items-start gap-3">
                <FileSpreadsheet className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-xs text-on-surface leading-relaxed">
                  <strong className="text-primary font-bold">Why XLS instead of PDF?</strong> A PDF is essentially a picture of paper — dead pixels that computers cannot easily read. An <strong>XLS</strong> file preserves structured data (timestamps, supervisor names, ICD codes, and role classifications), which Heykudu uses to auto-populate your digital portfolio without manual re-entry.
                </div>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="pl-12 pt-2">
              <div className="rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container-low shadow-sm">
                <div className="p-2 sm:p-4 bg-slate-900 flex justify-center">
                  <img
                    src="/images/blog/logbox-export-modal.png"
                    alt="LogBox export format selector modal highlighting XLS option"
                    className="w-full h-auto rounded-lg max-h-[400px] object-contain"
                  />
                </div>
                <div className="p-3 bg-surface-container-low border-t border-outline-variant/20 text-xs text-on-surface-variant flex items-center gap-2">
                  <Download className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    <strong>Figure 2:</strong> Format selection modal. Click the &ldquo;XLS&rdquo; button to save your raw spreadsheet.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Step 5: Import into Heykudu */}
          <section id="step-5" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
                5
              </div>
              <h2
                className="text-xl sm:text-2xl font-black text-on-surface"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Import Spreadsheet into Heykudu
              </h2>
            </div>

            <div className="pl-12 space-y-6">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Now open the automated Heykudu Migration Wizard. You can access it directly via{" "}
                <a
                  href="https://www.heykudu.com/?view=migrate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold underline underline-offset-2 hover:opacity-80"
                >
                  https://www.heykudu.com/?view=migrate
                </a>{" "}
                (or{" "}
                <a
                  href="https://www.heykudu.com/migrate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold underline underline-offset-2 hover:opacity-80"
                >
                  https://www.heykudu.com/migrate
                </a>
                ).
              </p>

              {/* Heykudu Migration Wizard Interactive Card */}
              <div className="bg-gradient-to-br from-primary/10 via-surface-container-low to-surface-container-lowest p-6 sm:p-8 rounded-[28px] border border-primary/30 shadow-soft space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-outline-variant/20 pb-5">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-[11px] uppercase font-extrabold tracking-wider text-primary">
                      <UploadCloud className="w-4 h-4" />
                      Heykudu 1-Click Ingestion
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-on-surface"
                      style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    >
                      Start Your Instant Import
                    </h3>
                  </div>

                  <a
                    href="https://www.heykudu.com/?view=migrate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-primary text-on-primary font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-md active:scale-95 shrink-0"
                  >
                    Open Migration Wizard
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/20 space-y-1.5">
                    <div className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[11px]">1</span>
                      Identify Yourself
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Enter your full name and medical trainee email (e.g., <code className="font-mono text-[11px]">dr.name@uct.ac.za</code>).
                    </p>
                  </div>

                  <div className="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/20 space-y-1.5">
                    <div className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[11px]">2</span>
                      Select Rotation
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Choose your specialty block (e.g. FCOG / O&amp;G, Surgery, Internal Medicine, Pediatrics).
                    </p>
                  </div>

                  <div className="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/20 space-y-1.5">
                    <div className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[11px]">3</span>
                      Drop File &amp; Finish
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Upload your LogBox <code className="font-mono text-[11px]">.xls</code> file and click <strong>Migrate Logbook</strong>. Done!
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-surface-container-lowest rounded-xl border border-outline-variant/20 flex items-start gap-2.5 text-xs text-on-surface-variant leading-relaxed">
                  <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Already using Heykudu?</strong> You can also access the migration wizard anytime directly from your profile page footer by clicking <em>&ldquo;Moving from Logbox? Import your existing logbook &rarr;&rdquo;</em>.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: The Benefits (Why Doctors Switch) */}
          <section className="space-y-6 pt-4">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">
                Why Doctors Are Switching
              </div>
              <h2
                className="text-2xl sm:text-3xl font-black text-on-surface"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                What You Get on Heykudu
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-soft space-y-2">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <h3
                  className="font-bold text-base text-on-surface"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  30-Second Case Logging
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Log your procedure, category, and role in 3 taps between patients. No tedious multi-step drop-down mazes.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-soft space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                </div>
                <h3
                  className="font-bold text-base text-on-surface"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Instant Consultant QR Sign-Offs
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Show your screen to your consultant. They scan it with their camera and sign off your Mini-CEX or DOPS in 8 seconds flat — no app or login needed for them.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-soft space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-700 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <h3
                  className="font-bold text-base text-on-surface"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Live CMSA &amp; College Progress
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Visual progress meters show you exactly where you stand against required rotation quotas so there are zero surprises before exam sign-offs.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-soft space-y-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center">
                  <WifiOff className="w-4 h-4 text-amber-600" />
                </div>
                <h3
                  className="font-bold text-base text-on-surface"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Works Offline in Theatre Basements
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Zero signal in the depths of Chris Hani Baragwanath or Groote Schuur? Heykudu caches everything locally and syncs automatically when back online.
                </p>
              </div>
            </div>
          </section>

          {/* Section: FAQ */}
          <section className="space-y-4 pt-2">
            <h2
              className="text-xl sm:text-2xl font-black text-on-surface"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-soft space-y-1.5">
                <h3 className="font-bold text-sm text-on-surface flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                  What happens to my old signatures and approvals?
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed pl-6">
                  Your LogBox XLS export contains the supervisor names and sign-off statuses for each case. Heykudu’s ingestion pipeline reads and preserves these historical records.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-soft space-y-1.5">
                <h3 className="font-bold text-sm text-on-surface flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                  Is Heykudu free for medical trainees?
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed pl-6">
                  Yes, 100% free for individual medical students, interns, and registrars.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Trainee Action Banner */}
          <section className="bg-gradient-to-r from-primary to-[#7D00FF] text-on-primary p-8 sm:p-10 rounded-[32px] text-center space-y-4 shadow-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              Ready to upgrade your logbook?
            </div>
            <h2
              className="text-2xl sm:text-3xl font-black text-white max-w-md mx-auto"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Start Your LogBox Migration
            </h2>
            <p className="text-white/90 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
              Upload your LogBox export to Heykudu in under 60 seconds.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://www.heykudu.com/?view=migrate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-primary font-extrabold text-sm hover:bg-white/95 transition-all shadow-md active:scale-95"
              >
                Migrate My Logbook Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://heykudu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/15 text-white font-bold text-sm hover:bg-white/25 transition-all border border-white/20"
              >
                Explore Heykudu App
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
