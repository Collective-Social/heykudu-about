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
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Database,
  Users2,
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
    <div className="min-h-screen bg-slate-100 text-slate-900 py-6 px-3 sm:px-6 print:p-0 print:bg-white print:min-h-0 print:h-auto">
      {/* Inline Print Optimization Rules */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 8mm 10mm;
          }
          html,
          body {
            height: 100%;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            color: #0f172a !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .one-page-container {
            max-height: 277mm !important;
            height: auto !important;
            padding: 0 !important;
            margin: 0 auto !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            overflow: hidden !important;
          }
        }
      `}</style>

      {/* Floating Web Action Toolbar (Hidden in Print) */}
      <div className="max-w-4xl mx-auto mb-4 flex items-center justify-between gap-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-slate-200/80 shadow-sm print:hidden">
        <Link
          href="/sangomed"
          className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-purple-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Interactive Overview</span>
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
                <span>Copied Link!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share URL</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-extrabold shadow-sm active:scale-95 transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Print 1-Page PDF</span>
          </button>
        </div>
      </div>

      {/* Main Single-Page Document Container (Strictly Fits 1 Page) */}
      <div className="one-page-container max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between gap-4">
        
        {/* 1. Header Row */}
        <div className="flex justify-between items-center gap-4 border-b-2 border-slate-900 pb-3.5">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 inline-block shadow-sm" />
                SANGOMED
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-black uppercase tracking-wider border border-emerald-300">
                TRL 2 &bull; Concept Formulated
              </span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-purple-900">
              Bridging Traditional &amp; Biomedical Healthcare in Maternal Health
            </p>
            <p className="text-[10px] text-slate-500 font-medium">
              Shared knowledge &bull; Safer pregnancies &bull; Healthier women &bull; Stronger communities
            </p>
          </div>

          {/* Scannable Live URL Badge */}
          <div className="flex items-center gap-2.5 bg-slate-50 p-2 rounded-xl border border-slate-200 shrink-0">
            <img
              src="/images/sangomed-qr.svg"
              alt="SANGOMED QR Code"
              className="w-12 h-12 object-contain"
            />
            <div className="text-[9px] leading-tight space-y-0.5">
              <div className="font-extrabold text-slate-900">Scan for Live Brief</div>
              <div className="font-mono text-purple-700 font-bold">about.heykudu.com</div>
              <div className="text-slate-500 font-mono">/sangomed</div>
            </div>
          </div>
        </div>

        {/* 2. Visual Shared Decision Equation */}
        <div className="bg-gradient-to-r from-emerald-50 via-purple-50 to-teal-50 rounded-xl p-2.5 border border-emerald-200/80 text-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] font-extrabold text-slate-800">
            <span className="px-2 py-0.5 bg-white rounded-lg border border-emerald-300 text-emerald-800 shadow-2xs flex items-center gap-1">
              <Leaf className="w-3 h-3 text-emerald-600" /> Traditional Wisdom
            </span>
            <span className="text-slate-400 font-black">+</span>
            <span className="px-2 py-0.5 bg-white rounded-lg border border-purple-300 text-purple-800 shadow-2xs flex items-center gap-1">
              <Users2 className="w-3 h-3 text-purple-600" /> Patient Voice
            </span>
            <span className="text-slate-400 font-black">+</span>
            <span className="px-2 py-0.5 bg-white rounded-lg border border-blue-300 text-blue-800 shadow-2xs flex items-center gap-1">
              <Stethoscope className="w-3 h-3 text-blue-600" /> Clinical Evidence
            </span>
            <span className="text-slate-400 font-black">=</span>
            <span className="px-2.5 py-0.5 bg-emerald-700 text-white rounded-lg shadow-sm flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Safer Pregnancies &amp; Healthier Mothers
            </span>
          </div>
        </div>

        {/* 3. Challenge vs Solution (Crisp Visual Split) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {/* Challenge */}
          <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-1.5">
            <div className="flex items-center gap-1.5 font-black text-rose-950 text-xs">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>The Healthcare Challenge</span>
            </div>
            <div className="space-y-1 text-[11px] text-slate-700 leading-snug">
              <div className="flex items-start gap-1.5">
                <span className="text-rose-500 font-bold shrink-0">&bull;</span>
                <span><strong>Concealed Usage:</strong> Pregnant mothers frequently use herbal remedies (<em>isihlambezo</em>) but hide it due to fear of judgment.</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-rose-500 font-bold shrink-0">&bull;</span>
                <span><strong>Information Void:</strong> Clinicians lack accessible, verified pharmacology on herb-drug safety and interactions.</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-rose-500 font-bold shrink-0">&bull;</span>
                <span><strong>Healer Exclusion:</strong> Traditional practitioners are isolated from formal hospital healthcare systems.</span>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-1.5">
            <div className="flex items-center gap-1.5 font-black text-emerald-950 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>The SANGOMED Solution</span>
            </div>
            <div className="space-y-1 text-[11px] text-slate-700 leading-snug">
              <div className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold shrink-0">&bull;</span>
                <span><strong>Stigma-Free Logging:</strong> Safe, POPIA-compliant portal for mothers to disclose traditional medicine use.</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold shrink-0">&bull;</span>
                <span><strong>Clinical Safety Engine:</strong> Instant flagging of oxytocic uterine risks and adverse interactions.</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold shrink-0">&bull;</span>
                <span><strong>Collaborative Care:</strong> Empowers respectful, shared clinical dialogue between healers and doctors.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. The 4 Collaborative Pillars */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center justify-between">
            <span>4 Collaborative Pillars</span>
            <span className="text-slate-400 lowercase font-normal font-mono">interconnected care loop</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
            {/* 1. Patient */}
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-emerald-100 flex items-center justify-center shrink-0">
                  <Heart className="w-3 h-3 text-emerald-700" />
                </div>
                <span className="font-extrabold text-slate-900 text-[11px]">1. Pregnant Patient</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                Records herbal use privately; receives non-judgmental guidance and safe antenatal monitoring.
              </p>
            </div>

            {/* 2. Platform */}
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-purple-100 flex items-center justify-center shrink-0">
                  <Activity className="w-3 h-3 text-purple-700" />
                </div>
                <span className="font-extrabold text-slate-900 text-[11px]">2. Platform Hub</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                Bridges traditional recipes with biomedical pharmacology and alerts for herb-drug interactions.
              </p>
            </div>

            {/* 3. Traditional Practitioner */}
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-amber-100 flex items-center justify-center shrink-0">
                  <Leaf className="w-3 h-3 text-amber-700" />
                </div>
                <span className="font-extrabold text-slate-900 text-[11px]">3. Traditional Healer</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                Provides authentic preparation context and cultural wisdom, strengthening community trust.
              </p>
            </div>

            {/* 4. Biomedical Clinician */}
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-blue-100 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-3 h-3 text-blue-700" />
                </div>
                <span className="font-extrabold text-slate-900 text-[11px]">4. Obstetrician/Doctor</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-snug">
                Assesses uterine safety, documents with patient consent, and coordinates harm-free birth plans.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Proof of Concept: Isihlambezo in Antenatal Care */}
        <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5 text-left">
            <div className="flex items-center gap-2">
              <span className="font-black text-purple-950 text-xs">
                Antenatal Pilot: <em>Isihlambezo</em>
              </span>
              <span className="text-[9px] font-bold text-purple-700 bg-white px-2 py-0.5 rounded-full border border-purple-200">
                Initial Use Case
              </span>
            </div>
            <p className="text-[10px] text-slate-600 leading-tight">
              Demonstrates real-world feasibility: Expectant mothers log traditional mixture &bull; System screens for uterine hyper-stimulation &bull; Clinicians build collaborative delivery plans.
            </p>
          </div>
          
          <div className="flex items-center gap-1.5 shrink-0 bg-white px-2.5 py-1.5 rounded-xl border border-purple-200/70 text-[10px] font-bold text-purple-900">
            <span>Disclose</span>
            <ArrowRight className="w-3 h-3 text-purple-400" />
            <span>Screen</span>
            <ArrowRight className="w-3 h-3 text-purple-400" />
            <span>Protect</span>
          </div>
        </div>

        {/* 6. Compact Footer & Stakeholders */}
        <div className="border-t-2 border-slate-900 pt-2.5 flex items-center justify-between gap-3 text-[9px] text-slate-500">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 font-bold text-slate-700 flex-wrap">
              <span>Stakeholders:</span>
              <span className="font-normal text-slate-500">
                Patients &bull; THPs &bull; Obstetricians &bull; SAHPRA &bull; HPCSA &bull; National Dept of Health &bull; Wits &bull; UCT
              </span>
            </div>
            <div className="text-slate-400">
              SANGOMED Executive Brief &bull; Contact: dl@thesocialcollective.co &bull; Powered by Heykudu Health Infrastructure
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="font-mono font-bold text-slate-800 text-[10px]">
              about.heykudu.com/sangomed
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
