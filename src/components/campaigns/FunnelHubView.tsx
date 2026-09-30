"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FUNNEL_MATRIX } from "@/lib/marketing/funnelMatrix";
import {
  ExternalLink,
  Copy,
  Check,
  Users,
  Layers,
  Sparkles,
  RefreshCw,
  BookOpen,
  Building,
  Cpu,
  Sliders,
} from "lucide-react";

interface Lead {
  id: string;
  full_name: string;
  email: string;
  institution: string;
  role: string;
  phone?: string;
  funnel_variant: string;
  utm_source?: string;
  utm_campaign?: string;
  deliverable_requested?: string;
  status: string;
  created_at: string;
}

export default function FunnelHubView() {
  const [activeTab, setActiveTab] = useState<"landing_pages" | "google_ads" | "scripts" | "leads" | "agui">("landing_pages");
  const [selectedVariantKey, setSelectedVariantKey] = useState<string>("departmental");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // AGUI Playground State
  const [aguiQuery, setAguiQuery] = useState("Occupational Therapy clinical hours tracking Stellenbosch");
  const [aguiRole, setAguiRole] = useState("Clinical Course Convenor");
  const [generatingAgui, setGeneratingAgui] = useState(false);
  const [aguiPreview, setAguiPreview] = useState<any>(null);
  const [aguiError, setAguiError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    setLoadingLeads(true);
    try {
      const res = await fetch("/api/marketing/leads");
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Failed to load leads:", err);
    } finally {
      setLoadingLeads(false);
    }
  }

  function handleCopy(text: string, id: string) {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  }

  async function handleGenerateAgui() {
    if (!aguiQuery.trim()) return;
    setGeneratingAgui(true);
    setAguiError(null);
    try {
      const res = await fetch("/api/marketing/agui", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: aguiQuery.trim(),
          targetRole: aguiRole.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to generate AGUI payload");
      }
      setAguiPreview(data);
    } catch (err: unknown) {
      console.error("AGUI generation failed:", err);
      setAguiError(err instanceof Error ? err.message : "Failed to synthesize AGUI page");
    } finally {
      setGeneratingAgui(false);
    }
  }

  const variants = Object.values(FUNNEL_MATRIX);
  const currentVariant = FUNNEL_MATRIX[selectedVariantKey] || variants[0];

  return (
    <div className="flex-1 flex flex-col bg-slate-950 overflow-y-auto">
      {/* Subheader Navigation */}
      <div className="border-b border-slate-800/80 bg-slate-900/40 px-6 py-3 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab("landing_pages")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors ${
              activeTab === "landing_pages"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            {variants.length} Landing Pages & CTAs
          </button>

          <button
            onClick={() => setActiveTab("google_ads")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors ${
              activeTab === "google_ads"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {variants.reduce((acc, v) => acc + v.googleAdHeadlines.length, 0)} Google Ads (RSAs)
          </button>

          <button
            onClick={() => setActiveTab("scripts")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors ${
              activeTab === "scripts"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Closing Scripts & HOD Memo
          </button>

          <button
            onClick={() => setActiveTab("leads")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors ${
              activeTab === "leads"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            Captured Leads ({leads.length})
          </button>

          <button
            onClick={() => setActiveTab("agui")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors ${
              activeTab === "agui"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            ✨ AGUI Engine & Playground
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-500">
            {variants.length}-Angle B2B Testing Matrix Active
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 max-w-7xl mx-auto w-full">
        {/* TAB 1: LANDING PAGES */}
        {activeTab === "landing_pages" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">{variants.length} University Landing Pages & CTAs</h2>
              <p className="text-xs text-slate-400">
                Persona-targeted landing pages on <span className="font-mono text-slate-300">about.heykudu.com/lp/[angle]</span>. Covers Health Sciences, Law, Engineering, Science & Humanities with 10/10 Google Ads Quality Score alignment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {variants.map((v) => (
                <div
                  key={v.slug}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {v.slug.toUpperCase()}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {v.category === "medical"
                            ? "Medical Faculty"
                            : v.category === "student_led"
                            ? "Student & Class Referral"
                            : "University-Wide"}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">
                        Target: <span className="text-slate-200">{v.targetRole}</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                      {v.heroHeadline}
                    </h3>
                    <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                      {v.heroSubhead}
                    </p>

                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4 space-y-2">
                      <div className="text-[11px] text-slate-400">
                        <strong className="text-slate-300">Call-to-Action:</strong> {v.primaryCta.label}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        <strong className="text-emerald-400">Lead Magnet:</strong> {v.deliverable.title}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-800/60">
                    <Link
                      href={`/lp/${v.slug}`}
                      target="_blank"
                      className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      View Live Landing Page
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() =>
                        handleCopy(
                          `https://about.heykudu.com/lp/${v.slug}?utm_source=google_ads&utm_campaign=${v.slug}`,
                          `url_${v.slug}`
                        )
                      }
                      className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      title="Copy URL with UTM tags"
                    >
                      {copiedKey === `url_${v.slug}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy UTM URL
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: 50 GOOGLE ADS (RSA COPY VAULT) */}
        {activeTab === "google_ads" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">
                  {variants.reduce((acc, v) => acc + v.googleAdHeadlines.length, 0)} Google Responsive Search Ads (RSAs)
                </h2>
                <p className="text-xs text-slate-400">
                  {variants.length} focused Thematic Ad Groups across Medical and University-Wide faculties. Copy headlines and descriptions straight into Google Ads Manager.
                </p>
              </div>

              {/* Selector Pills */}
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl flex-wrap">
                {variants.map((v) => (
                  <button
                    key={v.slug}
                    onClick={() => setSelectedVariantKey(v.slug)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      selectedVariantKey === v.slug
                        ? "bg-emerald-500 text-slate-950 shadow-md font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className="text-[10px] opacity-70">
                      {v.category === "medical"
                        ? "Med"
                        : v.category === "student_led"
                        ? "Student"
                        : "Uni"}
                    </span>
                    <span>{v.slug}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Ad Group Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <div className="text-xs font-mono uppercase text-emerald-400 font-bold mb-1">
                    Ad Group: {currentVariant.badge}
                  </div>
                  <div className="text-sm text-slate-300">
                    Destination: <span className="text-emerald-400 font-mono">about.heykudu.com/lp/{currentVariant.slug}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleCopy(
                        currentVariant.googleAdHeadlines.join("\n"),
                        `all_h_${currentVariant.slug}`
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5"
                  >
                    {copiedKey === `all_h_${currentVariant.slug}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    Copy 10 Headlines
                  </button>

                  <button
                    onClick={() =>
                      handleCopy(
                        currentVariant.googleAdDescriptions.join("\n\n"),
                        `all_d_${currentVariant.slug}`
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5"
                  >
                    {copiedKey === `all_d_${currentVariant.slug}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    Copy 4 Descriptions
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 10 Headlines */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-3 flex items-center justify-between">
                    <span>10 Tested Headlines (Max 30 chars each)</span>
                    <span className="text-emerald-400">10 Variations</span>
                  </h4>
                  <div className="space-y-2">
                    {currentVariant.googleAdHeadlines.map((headline, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between group hover:border-slate-700"
                      >
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-[10px] font-mono text-slate-500 w-5">#{idx + 1}</span>
                          <span className="text-white font-medium">{headline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-slate-500">
                            {headline.length}/30
                          </span>
                          <button
                            onClick={() => handleCopy(headline, `h_${idx}`)}
                            className="text-slate-500 hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {copiedKey === `h_${idx}` ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4 Descriptions */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-3 flex items-center justify-between">
                    <span>4 High-Intent Descriptions (Max 90 chars each)</span>
                    <span className="text-emerald-400">4 Variations</span>
                  </h4>
                  <div className="space-y-3">
                    {currentVariant.googleAdDescriptions.map((desc, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 group hover:border-slate-700"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono text-emerald-400 font-bold">
                            Description {idx + 1}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-slate-500">
                              {desc.length}/90 chars
                            </span>
                            <button
                              onClick={() => handleCopy(desc, `d_${idx}`)}
                              className="text-slate-500 hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              {copiedKey === `d_${idx}` ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CLOSING SCRIPTS & MEMO */}
        {activeTab === "scripts" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Closing Scripts & The Lecturer-to-HOD Permission Memo</h2>
              <p className="text-xs text-slate-400">
                Tailored discovery questions and pilot memorandum terms to close medical faculties and empower clinical lecturers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {variants.map((v) => (
                <div
                  key={v.slug}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                        {v.closingScript.title}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {v.closingScript.targetRole}
                      </span>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Discovery Questions:
                      </div>
                      {v.closingScript.discoveryQuestions.map((q, i) => (
                        <div
                          key={i}
                          className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300"
                        >
                          <span className="text-emerald-400 font-bold mr-1.5">{i + 1}.</span>
                          &ldquo;{q}&rdquo;
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Pilot Memorandum Terms:
                      </div>
                      {v.closingScript.pilotMemorandumTerms.map((term, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{term}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      handleCopy(
                        `Closing Script: ${v.closingScript.title}\nTarget: ${v.closingScript.targetRole}\n\nQuestions:\n${v.closingScript.discoveryQuestions.map((q, i) => `${i + 1}. ${q}`).join("\n")}\n\nTerms:\n${v.closingScript.pilotMemorandumTerms.join("\n")}`,
                        `script_${v.slug}`
                      )
                    }
                    className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    {copiedKey === `script_${v.slug}` ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied Script
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Discovery Script
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CAPTURED LEADS TABLE */}
        {activeTab === "leads" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Captured University Leads</h2>
                <p className="text-xs text-slate-400">
                  Real-time submissions from landing page lead magnets and consultation requests.
                </p>
              </div>

              <button
                onClick={fetchLeads}
                disabled={loadingLeads}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loadingLeads ? "animate-spin" : ""}`} />
                Refresh
              </button>
            </div>

            {leads.length === 0 ? (
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-12 text-center text-slate-500">
                <Users className="w-10 h-10 mx-auto mb-3 opacity-40" />
                <h3 className="text-base font-bold text-slate-300 mb-1">No Leads Recorded Yet</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Leads submitted through any of the 4 landing pages will automatically appear here with their UTM campaign and requested deliverable.
                </p>
              </div>
            ) : (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-950/80 border-b border-slate-800 text-[10px] uppercase font-mono text-slate-400">
                      <tr>
                        <th className="py-3 px-4">Name & Title</th>
                        <th className="py-3 px-4">University / Hospital</th>
                        <th className="py-3 px-4">Role</th>
                        <th className="py-3 px-4">Contact</th>
                        <th className="py-3 px-4">Variant / Deliverable</th>
                        <th className="py-3 px-4">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="py-3 px-4 font-semibold text-white">
                            {lead.full_name}
                          </td>
                          <td className="py-3 px-4">
                            <span className="flex items-center gap-1.5">
                              <Building className="w-3.5 h-3.5 text-slate-500" />
                              {lead.institution}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px]">
                              {lead.role}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div>{lead.email}</div>
                            {lead.phone && (
                              <div className="text-[10px] text-slate-500">{lead.phone}</div>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-emerald-400 font-mono text-[11px] block">
                              /lp/{lead.funnel_variant}
                            </span>
                            <span className="text-[10px] text-slate-500">
                              {lead.deliverable_requested || "Standard Kit"}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-mono text-[10px] text-slate-500">
                            {new Date(lead.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 5: AGUI GENERATIVE ENGINE & PLAYGROUND */}
        {activeTab === "agui" && (
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>Next-Gen Paradigm: AGUI vs GUI</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">
                AI Generative User Interface (AGUI) Engine
              </h2>
              <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
                Rather than static landing pages where visitors must mentally translate generic software features into their faculty's terminology, Heykudu's AGUI engine synthesizes bespoke landing pages and interactive simulators dynamically in real time. It tailors headlines, pain points, proof metrics, and DP thresholds specifically to whatever the user searches for, while strictly grounded in verified Heykudu architectural capabilities.
              </p>
            </div>

            {/* Interactive Playground Box */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Synthesize Any Persona / Faculty Query</span>
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Visitor Search Query / Intent Prompt
                  </label>
                  <input
                    type="text"
                    value={aguiQuery}
                    onChange={(e) => setAguiQuery(e.target.value)}
                    placeholder="e.g. Occupational therapy clinical hours tracking Stellenbosch"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Target Role (Optional)
                  </label>
                  <input
                    type="text"
                    value={aguiRole}
                    onChange={(e) => setAguiRole(e.target.value)}
                    placeholder="e.g. Clinical Course Convenor"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex items-center gap-2 flex-wrap text-xs">
                <span className="text-slate-500 text-[11px]">Quick Tests:</span>
                {[
                  {
                    q: "Occupational Therapy clinical hours tracking Stellenbosch",
                    role: "Clinical Course Convenor",
                  },
                  {
                    q: "400-seat law lecture hall proxy sign-in anti-cheat",
                    role: "Lead Law Lecturer",
                  },
                  {
                    q: "Nursing clinical practical skills logbook at Sefako Makgatho",
                    role: "Nursing Clinical Facilitator",
                  },
                  {
                    q: "Lost medical student logbook card in scrubs pocket",
                    role: "Student / Class Rep",
                  },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setAguiQuery(item.q);
                      setAguiRole(item.role);
                    }}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-300 text-[11px] border border-slate-700 transition-colors"
                  >
                    {item.q.slice(0, 32)}...
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleGenerateAgui}
                  disabled={generatingAgui || !aguiQuery.trim()}
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-xs flex items-center gap-2 shadow-md shadow-emerald-500/20 disabled:opacity-50 transition-all"
                >
                  {generatingAgui ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Synthesizing via Gemini Flash...</span>
                    </>
                  ) : (
                    <>
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Synthesize AGUI Page & Warm Cache</span>
                    </>
                  )}
                </button>

                <a
                  href={`/lp/ai?q=${encodeURIComponent(aguiQuery)}&role=${encodeURIComponent(aguiRole)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-700"
                >
                  <span>Open Live in /lp/ai</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>

              {aguiError && (
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs">
                  {aguiError}
                </div>
              )}
            </div>

            {/* Generated Preview Card */}
            {aguiPreview?.variant && (
              <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/30 shadow-2xl space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                      {aguiPreview.variant.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Role: {aguiPreview.variant.targetRole}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">
                      {aguiPreview.cached ? "⚡ Loaded from Supabase Cache" : "🧠 Fresh Gemini Synthesis"}
                    </span>
                    <a
                      href={`/lp/ai?q=${encodeURIComponent(aguiQuery)}&role=${encodeURIComponent(aguiRole)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs flex items-center gap-1 transition-colors"
                    >
                      <span>Preview Live Page</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {aguiPreview.variant.heroHeadline}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                    {aguiPreview.variant.heroSubhead}
                  </p>
                </div>

                {/* Proof Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {aguiPreview.variant.proofStats?.map((s: any, idx: number) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-xl font-bold text-emerald-400">{s.value}</div>
                      <div className="text-xs font-medium text-slate-200">{s.label}</div>
                      <div className="text-[10px] text-slate-500">{s.subtext}</div>
                    </div>
                  ))}
                </div>

                {/* Adaptive Simulator Spec */}
                {aguiPreview.variant.simulatorConfig && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                        Adaptive DP Simulator Calibrated
                      </span>
                      <span className="text-slate-400 font-mono">
                        Metric: {aguiPreview.variant.simulatorConfig.metricName} (Cutoff:{" "}
                        {aguiPreview.variant.simulatorConfig.thresholdPct}%)
                      </span>
                    </div>
                    <div className="text-xs text-emerald-300 font-medium">
                      ✓ Green: {aguiPreview.variant.simulatorConfig.greenStatusText}
                    </div>
                    <div className="text-xs text-amber-300">
                      ⚠ Amber: {aguiPreview.variant.simulatorConfig.amberStatusText}
                    </div>
                    <div className="text-xs text-rose-300">
                      ✕ Red: {aguiPreview.variant.simulatorConfig.redStatusText}
                    </div>
                  </div>
                )}

                {/* Closing Script & HOD Angle */}
                {aguiPreview.variant.closingScript && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-xs font-semibold text-slate-300 block">
                      Target Closing Questions for {aguiPreview.variant.closingScript.targetPersona}:
                    </span>
                    <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                      {aguiPreview.variant.closingScript.keyQuestions?.map((q: string, i: number) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                    <div className="text-xs text-emerald-400 pt-1 font-medium">
                      Closing Angle: {aguiPreview.variant.closingScript.closingAngle}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
