"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PresentationDeck {
  id: string;
  title: string;
  client: string;
  faculty: string;
  date: string;
  status: "Active Executive Deal" | "In Review" | "Proposal Template";
  statusColor: string;
  viewUrl: string;
  standaloneUrl: string;
  description: string;
  slidesCount: number;
}

export default function PresentationHubPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const decks: PresentationDeck[] = [
    {
      id: "uct-general-surgery-2026",
      title: "UCT General Surgery & Health Sciences Digital Migration & Pricing Strategy",
      client: "University of Cape Town (UCT)",
      faculty: "Department of Surgery • Dr M. Visser (Convenor)",
      date: "August 2026",
      status: "Active Executive Deal",
      statusColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      viewUrl: "/uct-presentation",
      standaloneUrl: "/uct-strategy-2026-2030.html",
      description:
        "Focused briefing for Dr M. Visser detailing General Surgery no-cost pilot structure, NFC ward check-ins, transparent per-student licensing, and zero implementation setup fees.",
      slidesCount: 11,
    },
    {
      id: "wits-2026-2030",
      title: "Wits University 2026–2030 Top-Down Digital Migration & Real-Time AI Strategy",
      client: "University of the Witwatersrand (Wits)",
      faculty: "VC & Deans Council • All 5 Faculties",
      date: "August 2026",
      status: "Active Executive Deal",
      statusColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      viewUrl: "/presentation",
      standaloneUrl: "/wits-strategy-2026-2030.html",
      description:
        "Comprehensive executive deck outlining Health Sciences 500+ DAU traction, Ulwazi (Canvas LMS) integration, and 2026–2030 multi-year expansion.",
      slidesCount: 11,
    },
    {
      id: "health-sciences-gemp",
      title: "Faculty of Health Sciences GEMP Logbook & Hospital Geofencing Blueprint",
      client: "Wits Faculty of Health Sciences",
      faculty: "Health Sciences (MBBCh & Allied Health)",
      date: "July 2026",
      status: "In Review",
      statusColor: "bg-purple-100 text-purple-900 border-purple-300",
      viewUrl: "/presentation",
      standaloneUrl: "/wits-strategy-2026-2030.html",
      description:
        "Detailed operational breakdown of 569 active students, 40,800+ logbook submissions, and hospital ward GPS verification.",
      slidesCount: 11,
    },
    {
      id: "clm-law-accounting",
      title: "Commerce, Law & Management (CLM) Mandatory Attendance Roadmap",
      client: "Wits CLM Faculty",
      faculty: "Commerce, Law & Management",
      date: "Scheduled Q3 2026",
      status: "Proposal Template",
      statusColor: "bg-amber-100 text-amber-900 border-amber-300",
      viewUrl: "/presentation",
      standaloneUrl: "/wits-strategy-2026-2030.html",
      description:
        "Strategic rollout plan for 2027 lecture/exam check-ins and 2028 Court Moot & BAccSc audit firm practicum tracking.",
      slidesCount: 11,
    },
  ];

  const copyOneClickLink = (deck: PresentationDeck) => {
    const origin = typeof window !== "undefined" ? window.location.origin : "http://localhost:3010";
    const shareableUrl = `${origin}${deck.viewUrl}`;
    navigator.clipboard.writeText(shareableUrl);
    setCopiedId(deck.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownloadPDF = (deck: PresentationDeck) => {
    // Open deck window with print command
    const printUrl = `${deck.standaloneUrl}?print=true`;
    const win = window.open(printUrl, "_blank");
    if (win) {
      win.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans flex flex-col pt-20">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-black uppercase tracking-wider mb-2 border border-purple-300">
              <span className="material-symbols-outlined text-sm">folder_open</span>
              Executive Client Briefing Directory
            </div>
            <h1 className="font-display font-black text-3xl md:text-4xl text-slate-900 tracking-tight">
              Presentation Management Hub
            </h1>
            <p className="text-slate-700 text-sm font-bold mt-1">
              Access, view, export, and download client-facing executive decks and deal proposals.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleDownloadPDF(decks[0])}
              className="h-12 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all active:scale-95 shrink-0 border border-emerald-400"
            >
              <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
              Download Active Deck PDF
            </button>
          </div>
        </div>

        {/* High-Contrast Protocol Security Banner */}
        <div className="bg-[#1e0a52] text-white p-6 rounded-3xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl border-2 border-purple-500/30">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl text-emerald-400">verified_user</span>
            </div>
            <div>
              <h3 className="font-display font-black text-lg text-white">Protected Client Access & PDF Downloads</h3>
              <p className="text-xs text-purple-200 font-bold">
                Access executive briefings or export pixel-perfect 16:9 PDF decks for executive review.
              </p>
            </div>
          </div>

          <div className="bg-white/10 px-4 py-2 rounded-2xl border border-white/20 text-xs font-mono font-bold shrink-0 text-emerald-300 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span>Passcode Protected Access</span>
          </div>
        </div>

        {/* Clean, High-Contrast Presentation List Table */}
        <div className="bg-white border-2 border-slate-300 rounded-3xl overflow-hidden shadow-xl mb-12">
          <div className="p-6 bg-slate-900 text-white border-b-2 border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-400">format_list_bulleted</span>
              <h2 className="font-display font-black text-lg">Client Presentations Directory ({decks.length})</h2>
            </div>
            <span className="text-xs text-slate-300 font-bold">Updated August 2026</span>
          </div>

          <div className="divide-y divide-slate-200">
            {decks.map((deck) => (
              <div
                key={deck.id}
                className="p-6 hover:bg-purple-50/50 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Left: Info */}
                <div className="space-y-2 flex-1 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-black border ${deck.statusColor}`}
                    >
                      ● {deck.status}
                    </span>
                    <span className="text-xs font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-full border border-slate-300">
                      {deck.client}
                    </span>
                    <span className="text-xs font-extrabold text-slate-700">{deck.date}</span>
                  </div>

                  <h3 className="font-display font-black text-xl text-slate-900 leading-tight">
                    {deck.title}
                  </h3>

                  <p className="text-xs text-slate-700 font-extrabold leading-relaxed">
                    {deck.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-bold text-slate-700 pt-1">
                    <span className="flex items-center gap-1 text-slate-900 font-black">
                      <span className="material-symbols-outlined text-base text-purple-700">layers</span>
                      {deck.slidesCount} Slides
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-900 font-black">
                      <span className="material-symbols-outlined text-base text-emerald-700">lock</span>
                      <span>Passcode Protected</span>
                    </span>
                    <span>•</span>
                    <span className="text-slate-800 font-extrabold">{deck.faculty}</span>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
                  <button
                    onClick={() => handleDownloadPDF(deck)}
                    title="Download as PDF"
                    className="h-11 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all active:scale-95 border border-emerald-400"
                  >
                    <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                    <span>Download PDF</span>
                  </button>

                  <Link
                    href={deck.viewUrl}
                    className="h-11 px-4 rounded-2xl bg-[#630ed4] hover:bg-[#4c05a7] text-white font-black text-xs flex items-center gap-1.5 shadow-md shadow-purple-700/20 transition-all active:scale-95"
                  >
                    <span className="material-symbols-outlined text-base">play_arrow</span>
                    <span>View Deck</span>
                  </Link>

                  <button
                    onClick={() => copyOneClickLink(deck)}
                    className="h-11 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-xs flex items-center gap-1.5 border border-slate-300 transition-all active:scale-95"
                  >
                    <span className="material-symbols-outlined text-base">content_copy</span>
                    <span>{copiedId === deck.id ? "Copied!" : "Copy Link"}</span>
                  </button>

                  <a
                    href={deck.standaloneUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open standalone HTML file"
                    className="h-11 w-11 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center border border-slate-300 transition-all active:scale-95"
                  >
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
