import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  FileSpreadsheet,
  Zap,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Clock,
  HelpCircle,
  Sparkles,
  Download,
  MousePointerClick,
  Database,
  WifiOff,
  Flame,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Liberate Your Medical Logbook: How to Migrate from LogBox to Heykudu",
  description:
    "A 90-second, zero-data-loss technical guide for South African medical interns and registrars exporting their clinical procedures from LogBox to Heykudu.",
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
    "Heykudu guide",
  ],
  authors: [{ name: "Heykudu Engineering & Clinical Team" }],
  alternates: {
    canonical: "https://about.heykudu.com/articles/how-to-migrate-from-logbox-to-heykudu",
  },
  openGraph: {
    title: "Liberate Your Medical Logbook: How to Migrate from LogBox to Heykudu",
    description:
      "A fast, witty, step-by-step technical guide for medical trainees exporting procedures from LogBox (.xls) to Heykudu.",
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
      "Export your LogBox procedures in 4 easy clicks and start logging on Heykudu with instant QR sign-offs.",
    images: ["https://about.heykudu.com/images/blog/logbox-procedures-view.png"],
  },
};

export default function LogBoxMigrationPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Liberate Your Medical Logbook: How to Migrate from LogBox to Heykudu",
    description:
      "A fast, 4-step technical guide for South African medical interns and registrars exporting procedure logs from LogBox in XLS format to Heykudu.",
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
    name: "How to Export Your Procedures from LogBox for Heykudu Migration",
    description:
      "Step-by-step instructions to export clinical procedures from LogBox in raw Excel (.xls) format.",
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
        text: "Click the LogBook section to display your recorded procedures table.",
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
          text: "XLS contains raw structured data (columns for timestamps, procedure names, supervision roles, and supervisor names). Heykudu's automated ingestion engine can parse this spreadsheet in milliseconds. A PDF is a static printable layout that machines cannot reliably parse.",
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
            If you have ever spent 20 minutes coaxing a legacy portal to save an intubation log while your consultant heads to tea, this guide is for you. Here is how to export your entire procedural history from LogBox with zero data loss.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-on-surface-variant">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-primary" />
              90-second export
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
          {/* Direct Link Banner */}
          <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/30 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] uppercase font-extrabold tracking-wider text-primary">
                Direct Portal Link
              </div>
              <div
                className="text-base font-bold text-on-surface"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                LogBox Default LogBook View
              </div>
              <div className="text-xs text-on-surface-variant font-mono break-all select-all">
                https://logbook.logbox.co.za/#/logbook/default
              </div>
            </div>
            <a
              href="https://logbook.logbox.co.za/#/logbook/default"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary font-bold text-xs hover:opacity-90 transition-all shadow-sm shrink-0 active:scale-95"
            >
              Open LogBox Portal
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
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

          {/* Section: Spacer for Heykudu Steps */}
          <section className="bg-gradient-to-br from-primary/10 via-surface-container-low to-surface-container-lowest p-6 sm:p-10 rounded-[32px] border-2 border-dashed border-primary/40 text-center space-y-5 shadow-soft">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider">
              <Database className="w-3.5 h-3.5" />
              Heykudu Automated Import Pipeline
            </div>

            <h2
              className="text-2xl sm:text-3xl font-extrabold text-on-surface max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              What Happens Next in Heykudu?
            </h2>

            <p className="text-xs sm:text-sm text-on-surface-variant max-w-lg mx-auto leading-relaxed">
              We are finalizing our 1-click spreadsheet ingestion wizard. Soon, you will simply drag and drop your exported <code className="text-primary font-mono font-bold bg-primary/10 px-1 py-0.5 rounded">.xls</code> file into Heykudu, and our parser will automatically map every historical procedure to your HPCSA/CMSA Entrustable Professional Activities (EPAs).
            </p>

            <div className="p-3.5 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 max-w-md mx-auto text-xs text-on-surface-variant leading-relaxed">
              🔒 <strong>In the meantime:</strong> Keep your exported <code className="font-mono">.xls</code> file safe. You can already start logging all your live daily cases directly on Heykudu right now!
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://heykudu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary text-on-primary font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-md active:scale-95"
              >
                Open Heykudu App
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/guide"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface-container text-on-surface font-semibold text-xs sm:text-sm hover:bg-surface-container-high transition-colors"
              >
                Read Trainee Guide
              </Link>
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
              Start Logging on Heykudu
            </h2>
            <p className="text-white/90 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
              Create your free trainee account in under 30 seconds.
            </p>
            <div className="pt-2">
              <a
                href="https://heykudu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-primary font-extrabold text-sm hover:bg-white/95 transition-all shadow-md active:scale-95"
              >
                Go to Heykudu App
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
