"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Stethoscope,
  Leaf,
  Activity,
  QrCode,
  Printer,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Download,
  Building2,
  Users,
} from "lucide-react";

export default function SangomedOnePager() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("https://about.heykudu.com/sangomed");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 py-6 px-3 sm:px-6 print:p-0 print:bg-white">
      
      {/* Floating Web Action Toolbar (Hidden in Print) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between gap-3 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-sm print:hidden">
        <Link
          href="/sangomed"
          className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-purple-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Copy URL</span>
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold shadow-sm active:scale-95 transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Main One-Pager Document Container (A4 Printable Aspect) */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl print:shadow-none print:border-none print:rounded-none overflow-hidden p-6 sm:p-10 space-y-6">
        
        {/* Document Header */}
        <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                SANGOMED
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase tracking-wider border border-emerald-300">
                TRL 2 &bull; Concept Formulated
              </span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-purple-900">
              Bridging traditional and biomedical healthcare in maternal and reproductive health
            </p>
            <p className="text-[11px] text-slate-500 font-medium">
              Shared knowledge. Safer pregnancies. Healthier women. Stronger communities.
            </p>
          </div>

          {/* Header QR Code Pill */}
          <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-200 shrink-0">
            <img
              src="/images/sangomed-qr.svg"
              alt="SANGOMED QR Code"
              className="w-14 h-14 object-contain"
            />
            <div className="text-[10px] space-y-0.5">
              <div className="font-extrabold text-slate-900">Scan to View</div>
              <div className="font-mono text-purple-700 font-bold">about.heykudu.com</div>
              <div className="text-slate-400">/sangomed</div>
            </div>
          </div>
        </div>

        {/* The Equation Strip */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-purple-50 rounded-2xl p-3 border border-emerald-200/60 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-extrabold text-slate-800">
            <span className="px-2 py-0.5 bg-white rounded-lg border border-emerald-200 text-emerald-800">
              🌿 Traditional Knowledge
            </span>
            <span>+</span>
            <span className="px-2 py-0.5 bg-white rounded-lg border border-purple-200 text-purple-800">
              👥 Patient Experience
            </span>
            <span>+</span>
            <span className="px-2 py-0.5 bg-white rounded-lg border border-blue-200 text-blue-800">
              🩺 Clinical Evidence
            </span>
            <span>=</span>
            <span className="px-2.5 py-0.5 bg-emerald-700 text-white rounded-lg shadow-sm">
              🛡️ Safer Pregnancies &amp; Healthier Women
            </span>
          </div>
        </div>

        {/* Problem & Solution 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Problem */}
          <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200/70 space-y-2">
            <h3 className="font-bold text-rose-950 text-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              The Clinical Problem
            </h3>
            <ul className="space-y-1.5 text-slate-700 leading-snug list-disc list-inside">
              <li><strong>Concealed Use:</strong> Pregnant mothers frequently take traditional remedies (<em>isihlambezo</em>) but conceal use due to fear of stigma.</li>
              <li><strong>Information Vacuum:</strong> Hospital clinicians lack accessible scientific data on herb pharmacology and interactions.</li>
              <li><strong>Healer Disconnect:</strong> Traditional practitioners are excluded from formal hospital health records.</li>
            </ul>
          </div>

          {/* Solution */}
          <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-2">
            <h3 className="font-bold text-emerald-950 text-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              The SANGOMED Digital Solution
            </h3>
            <ul className="space-y-1.5 text-slate-700 leading-snug list-disc list-inside">
              <li><strong>Shared Repository:</strong> Consolidates ethnobotanical preparation details and clinical pharmacology.</li>
              <li><strong>Safe Reporting:</strong> Voluntary, confidential patient logging with full POPIA/HPCSA protection.</li>
              <li><strong>Culturally Respectful Care:</strong> Fosters collaborative decision-making between doctors and healers.</li>
            </ul>
          </div>
        </div>

        {/* The 4 Core Pillars Grid */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
            The 4 Collaborative Pillars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-600" />
                <h4 className="font-bold text-slate-900">1. Pregnant Patient</h4>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Discloses traditional medicines safely; accesses verified guidance without fear of reprimand.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-600" />
                <h4 className="font-bold text-slate-900">2. Platform Hub</h4>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Consolidates evidence summaries, flags potential drug-herb interactions, and logs safety data.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-amber-600" />
                <h4 className="font-bold text-slate-900">3. Traditional Healer</h4>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Contributes authentic preparation methods, customary wisdom, and builds community trust.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-blue-600" />
                <h4 className="font-bold text-slate-900">4. Clinician (OB/GYN)</h4>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Assesses uterine safety risks, documents with consent, and engages in respectful clinical dialogue.
              </p>
            </div>

          </div>
        </div>

        {/* Initial Use Case: Isihlambezo in Pregnancy */}
        <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-purple-950 text-xs sm:text-sm">
              Proof of Concept: <em>Isihlambezo</em> in Pregnancy
            </h3>
            <span className="text-[10px] font-bold text-purple-700 bg-white px-2 py-0.5 rounded-full border border-purple-200">
              Antenatal Pilot
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Demonstrating feasibility and clinical acceptability in southern African antenatal care: Expectant mothers record <em>isihlambezo</em> usage &bull; Clinicians evaluate pharmacology for oxytocic compounds or interactions &bull; Shared, non-judgmental birth plans prevent adverse outcomes.
          </p>
        </div>

        {/* Stakeholder Alignment & Governance */}
        <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-700">Key Stakeholders:</span>
            <span>Patients &bull; THPs &bull; Obstetricians &bull; SAHPRA &bull; HPCSA &bull; National Dept of Health &bull; Wits &bull; UCT</span>
          </div>
          <div className="font-mono text-[10px] text-slate-400">
            Powered by Heykudu Health Infrastructure
          </div>
        </div>

        {/* Print-Only Bottom QR Section */}
        <div className="hidden print:flex items-center justify-between border-t-2 border-slate-900 pt-4 mt-6">
          <div className="space-y-1 text-xs">
            <div className="font-black text-slate-900">SANGOMED Executive Brief</div>
            <div className="text-slate-500 text-[11px]">Contact: dl@thesocialcollective.co &bull; https://about.heykudu.com/sangomed</div>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/sangomed-qr.svg" alt="QR" className="w-12 h-12" />
            <div className="text-[9px] font-mono font-bold text-slate-700">
              about.heykudu.com<br />/sangomed
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
