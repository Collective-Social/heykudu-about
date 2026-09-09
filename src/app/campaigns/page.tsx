"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  Mic,
  MicOff,
  Send,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Copy,
  Layers,
  FileText,
  Mail,
  Megaphone,
  Share2,
  Lock,
  Eye,
  RefreshCw,
} from "lucide-react";

interface DeliverableElement {
  id: string;
  channel: "web_article" | "email_sequence" | "pr_stunt" | "social_package";
  title: string;
  content_payload: Record<string, any>;
  status: string;
  published_url?: string;
  gatekeeper_report?: Record<string, any>;
}

interface Campaign {
  id: string;
  title: string;
  concept_prompt: string;
  source: string;
  status:
    | "draft"
    | "researching"
    | "pending_approval"
    | "approved_in_timer"
    | "in_gatekeeper_audit"
    | "live"
    | "completed"
    | "quarantined"
    | "cancelled";
  research_dossier?: Record<string, any>;
  scheduled_go_live_at?: string;
  went_live_at?: string;
  all_channels_published?: boolean;
  created_at: string;
  elements?: DeliverableElement[];
}

export default function CampaignCommandCenter() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [authError, setAuthError] = useState("");

  // Campaign State
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(null);
  const [activeChannelTab, setActiveChannelTab] = useState<
    "web_article" | "email_sequence" | "pr_stunt" | "social_package"
  >("web_article");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // New Campaign Form State
  const [promptInput, setPromptInput] = useState("");
  const [customTitle, setCustomTitle] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Timer Delay Configuration (minutes)
  const [selectedDelayMinutes, setSelectedDelayMinutes] = useState(30);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Check PIN from sessionStorage on mount
  useEffect(() => {
    const storedPin = sessionStorage.getItem("heykudu_campaign_pin");
    if (storedPin) {
      verifyPin(storedPin);
    } else {
      setLoading(false);
    }
  }, []);

  // Poll campaigns every 10 seconds to update countdowns and research statuses
  useEffect(() => {
    if (!isAuthenticated) return;
    fetchCampaigns();
    const interval = setInterval(fetchCampaigns, 10000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  async function verifyPin(pinToVerify: string) {
    try {
      const res = await fetch("/api/verify-pin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: pinToVerify }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem("heykudu_campaign_pin", pinToVerify);
        fetchCampaigns();
      } else {
        // Fallback check against local campaign pin if endpoint is presentation specific
        if (pinToVerify.toLowerCase() === "wits2026" || pinToVerify.toLowerCase() === "kudu2026") {
          setIsAuthenticated(true);
          sessionStorage.setItem("heykudu_campaign_pin", pinToVerify);
          fetchCampaigns();
        } else {
          setAuthError("Invalid access passcode. Please enter the founder PIN.");
        }
      }
    } catch {
      if (pinToVerify.toLowerCase() === "wits2026" || pinToVerify.toLowerCase() === "kudu2026") {
        setIsAuthenticated(true);
        sessionStorage.setItem("heykudu_campaign_pin", pinToVerify);
        fetchCampaigns();
      } else {
        setAuthError("Authentication failed. Please verify credentials.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function fetchCampaigns() {
    try {
      const res = await fetch("/api/marketing/campaigns");
      const data = await res.json();
      if (data.campaigns) {
        setCampaigns(data.campaigns);
        // Default select the first campaign if none selected
        if (!selectedCampaignId && data.campaigns.length > 0) {
          setSelectedCampaignId(data.campaigns[0].id);
        }
      }
    } catch (err) {
      console.error("Failed to load campaigns:", err);
    } finally {
      setLoading(false);
    }
  }

  // Handle Voice Recording
  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        setRecordingStatus("Transcribing memo via Gemini Multimodal...");
        const formData = new FormData();
        formData.append("audio", audioBlob, "memo.webm");

        try {
          const res = await fetch("/api/marketing/ingest-memo", {
            method: "POST",
            body: formData,
          });
          const data = await res.json();
          if (data.success) {
            setPromptInput(data.concept || data.transcript);
            if (data.title) setCustomTitle(data.title);
            setRecordingStatus("Voice memo transcribed!");
          } else {
            setRecordingStatus("Could not transcribe memo. Please type your idea.");
          }
        } catch (err) {
          console.error(err);
          setRecordingStatus("Transcription error.");
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingStatus("Listening... speak your campaign idea or proof-of-work update.");
    } catch {
      alert("Microphone access was denied or is unavailable.");
    }
  }

  function stopRecording() {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  }

  // Create Campaign & Start Research
  async function handleCreateCampaign(e: React.FormEvent) {
    e.preventDefault();
    if (!promptInput.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/marketing/campaigns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: customTitle.trim() || undefined,
          prompt: promptInput,
          source: isRecording ? "voice_memo" : "ui_prompt",
        }),
      });

      const data = await res.json();
      if (data.campaign) {
        setPromptInput("");
        setCustomTitle("");
        setRecordingStatus("");
        await fetchCampaigns();
        setSelectedCampaignId(data.campaign.id);
      } else {
        alert(data.error || "Failed to create campaign");
      }
    } catch (err) {
      console.error(err);
      alert("Error initiating campaign research.");
    } finally {
      setSubmitting(false);
    }
  }

  // Approve Campaign to Start (Triggers Timer Delay)
  async function handleApproveCampaign(id: string) {
    try {
      const res = await fetch(`/api/marketing/campaigns/${id}/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ delayMinutes: selectedDelayMinutes }),
      });
      const data = await res.json();
      if (data.success) {
        await fetchCampaigns();
      } else {
        alert(data.error || "Approval failed");
      }
    } catch (err) {
      console.error(err);
    }
  }

  // Immediate Go-Live (Bypasses timer or finishes countdown)
  async function handleTriggerGoLive(id: string) {
    if (!confirm("Run pre-flight Gatekeeper safety check and publish all channels simultaneously?")) {
      return;
    }
    try {
      const res = await fetch(`/api/marketing/campaigns/${id}/go-live`, {
        method: "POST",
      });
      const data = await res.json();
      if (data.success) {
        alert("Campaign is LIVE! All channels published successfully.");
        await fetchCampaigns();
      } else {
        alert(`Go-Live Halted: ${data.error}`);
        await fetchCampaigns();
      }
    } catch (err) {
      console.error(err);
      alert("Error executing Go-Live.");
    }
  }

  function copyToClipboard(text: string, id: string) {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="text-center font-mono text-xs text-slate-500 flex items-center gap-2">
          <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
          Initializing Campaign Command Center...
        </div>
      </div>
    );
  }

  // Render PIN Gate if unauthenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl text-center">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Campaign Command Center</h1>
          <p className="text-slate-400 text-sm mb-6">
            Enter the authorized founder PIN to manage autonomous marketing swarms and publish channels.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              verifyPin(pinInput);
            }}
          >
            <input
              type="password"
              placeholder="Enter PIN (e.g. wits2026)"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-center text-lg tracking-widest font-mono focus:outline-none focus:border-emerald-500 mb-4"
              autoFocus
            />
            {authError && <p className="text-rose-400 text-xs mb-4">{authError}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20"
            >
              Authenticate Swarm
            </button>
          </form>
        </div>
      </div>
    );
  }

  const selectedCampaign = campaigns.find((c) => c.id === selectedCampaignId) || campaigns[0];
  const webArticle = selectedCampaign?.elements?.find((e) => e.channel === "web_article");
  const emailSequence = selectedCampaign?.elements?.find((e) => e.channel === "email_sequence");
  const prStunt = selectedCampaign?.elements?.find((e) => e.channel === "pr_stunt");
  const socialPackage = selectedCampaign?.elements?.find((e) => e.channel === "social_package");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Header Bar */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
            HK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-base">Campaign Command Center</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Antigravity Swarm Live
              </span>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              about.heykudu.com / Autonomous BD & PR Engine
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchCampaigns}
            className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 transition-colors"
            title="Refresh Campaigns"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <Link
            href="/articles"
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-xs font-medium text-slate-300 border border-slate-700/60 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-emerald-400" />
            View Public Articles
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Sidebar: Campaigns List & New Campaign Creator */}
        <div className="w-full lg:w-96 border-r border-slate-800/80 bg-slate-900/30 flex flex-col p-4 overflow-y-auto">
          {/* New Campaign Intake Form */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                <Sparkles className="w-3.5 h-3.5" /> Propose Campaign Idea
              </div>
              {recordingStatus && (
                <span className="text-[10px] text-emerald-300 font-mono animate-pulse">
                  {recordingStatus}
                </span>
              )}
            </div>

            <form onSubmit={handleCreateCampaign} className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Campaign Title (optional)"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="relative">
                <textarea
                  placeholder="Describe your campaign idea, contrarian angle, or target university faculty..."
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  rows={3}
                  className="w-full p-3 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none pr-10"
                />
                <button
                  type="button"
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`absolute right-2.5 bottom-3.5 p-1.5 rounded-full transition-all ${
                    isRecording
                      ? "bg-rose-500 text-white animate-pulse"
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                  title={isRecording ? "Stop voice memo" : "Record voice memo"}
                >
                  {isRecording ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                </button>
              </div>

              <button
                type="submit"
                disabled={submitting || !promptInput.trim()}
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10"
              >
                {submitting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    Deploying Agent Swarm...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Create Campaign & Deep Research
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Campaigns Pipeline List */}
          <div className="flex-1">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 px-1">
              Campaigns Pipeline ({campaigns.length})
            </h2>

            {campaigns.length === 0 ? (
              <div className="text-center py-10 text-slate-500 text-xs">
                No campaigns yet. Propose an idea above or push a commit to main.
              </div>
            ) : (
              <div className="space-y-2">
                {campaigns.map((c) => {
                  const isSelected = c.id === selectedCampaignId;
                  const isLive = c.status === "live";
                  const inTimer = c.status === "approved_in_timer";
                  const isPending = c.status === "pending_approval";

                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCampaignId(c.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-slate-800/90 border-emerald-500/40 shadow-sm"
                          : "bg-slate-900/40 border-slate-800/60 hover:bg-slate-900/80"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                            isLive
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                              : inTimer
                              ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                              : isPending
                              ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                              : "bg-slate-800 text-slate-400 border-slate-700"
                          }`}
                        >
                          {c.status.replace(/_/g, " ")}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {c.source === "github_merge" ? "🐙 GitHub" : "💡 Prompt"}
                        </span>
                      </div>

                      <div className="font-semibold text-xs text-white line-clamp-1 mb-1">
                        {c.title}
                      </div>

                      <div className="text-[11px] text-slate-400 line-clamp-2">
                        {c.concept_prompt}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel: Campaign Detail, Research Dossier & Channels Studio */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-slate-950 p-6 lg:p-8">
          {selectedCampaign ? (
            <div className="max-w-5xl w-full mx-auto space-y-6">
              {/* Campaign Header & Workflow Bar */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-slate-400 uppercase">
                        Campaign ID: {selectedCampaign.id.slice(0, 8)}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs font-mono text-emerald-400">
                        Source: {selectedCampaign.source}
                      </span>
                    </div>
                    <h1 className="text-2xl font-extrabold text-white tracking-tight">
                      {selectedCampaign.title}
                    </h1>
                  </div>

                  {/* Actions / Status Control */}
                  <div className="flex flex-wrap items-center gap-3">
                    {selectedCampaign.status === "pending_approval" && (
                      <div className="flex items-center gap-2">
                        <select
                          value={selectedDelayMinutes}
                          onChange={(e) => setSelectedDelayMinutes(Number(e.target.value))}
                          className="px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none"
                        >
                          <option value={5}>5m Delay</option>
                          <option value={15}>15m Delay</option>
                          <option value={30}>30m Delay</option>
                          <option value={60}>60m Delay</option>
                          <option value={0}>Instant Go-Live</option>
                        </select>
                        <button
                          onClick={() => handleApproveCampaign(selectedCampaign.id)}
                          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/20"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          Approve Campaign to Start
                        </button>
                      </div>
                    )}

                    {selectedCampaign.status === "approved_in_timer" && (
                      <div className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-xl">
                        <Clock className="w-4 h-4 text-amber-400 animate-spin" />
                        <div className="text-xs text-amber-300">
                          Scheduled Go-Live:{" "}
                          <span className="font-mono font-bold">
                            {selectedCampaign.scheduled_go_live_at
                              ? new Date(selectedCampaign.scheduled_go_live_at).toLocaleTimeString()
                              : "Pending"}
                          </span>
                        </div>
                        <button
                          onClick={() => handleTriggerGoLive(selectedCampaign.id)}
                          className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs ml-2 transition-colors"
                        >
                          Go Live Now
                        </button>
                      </div>
                    )}

                    {selectedCampaign.status === "live" && (
                      <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-xl text-emerald-400 text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        ALL CHANNELS LIVE
                      </div>
                    )}
                  </div>
                </div>

                {/* Workflow Progression Stepper */}
                <div className="grid grid-cols-4 gap-2 pt-4 border-t border-slate-800/80 text-center text-xs">
                  <div
                    className={`py-2 px-3 rounded-lg border font-mono ${
                      selectedCampaign.status === "researching"
                        ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300 animate-pulse"
                        : "bg-slate-950/60 border-slate-800 text-slate-400"
                    }`}
                  >
                    1. Deep Research
                  </div>
                  <div
                    className={`py-2 px-3 rounded-lg border font-mono ${
                      selectedCampaign.status === "pending_approval"
                        ? "bg-amber-500/20 border-amber-500/50 text-amber-300"
                        : "bg-slate-950/60 border-slate-800 text-slate-400"
                    }`}
                  >
                    2. Human Approval
                  </div>
                  <div
                    className={`py-2 px-3 rounded-lg border font-mono ${
                      selectedCampaign.status === "approved_in_timer"
                        ? "bg-purple-500/20 border-purple-500/50 text-purple-300 animate-pulse"
                        : "bg-slate-950/60 border-slate-800 text-slate-400"
                    }`}
                  >
                    3. Timer Delay & Gatekeeper
                  </div>
                  <div
                    className={`py-2 px-3 rounded-lg border font-mono ${
                      selectedCampaign.status === "live"
                        ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 font-bold"
                        : "bg-slate-950/60 border-slate-800 text-slate-400"
                    }`}
                  >
                    4. Synchronized Go-Live
                  </div>
                </div>
              </div>

              {/* Research Dossier Overview */}
              {selectedCampaign.research_dossier && (
                <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3">
                    <Layers className="w-3.5 h-3.5" />
                    Deep Research Dossier (Institutional & Strategic Context)
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <div className="text-slate-400 font-medium mb-1">Target Institution & Personas</div>
                      <div className="font-semibold text-white">
                        {selectedCampaign.research_dossier.target_audience?.primary_institution || "Academic Health Sciences"}
                      </div>
                      <div className="text-slate-400 text-[11px] mt-1">
                        {selectedCampaign.research_dossier.target_audience?.target_personas?.join(", ")}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <div className="text-slate-400 font-medium mb-1">Contrarian Truth</div>
                      <div className="text-slate-300 italic">
                        &ldquo;{selectedCampaign.research_dossier.creative_angle?.contrarian_truth}&rdquo;
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <div className="text-slate-400 font-medium mb-1">PR Stunt Concept</div>
                      <div className="font-semibold text-emerald-400">
                        {selectedCampaign.research_dossier.creative_angle?.pr_stunt_concept?.headline}
                      </div>
                      <div className="text-slate-400 text-[11px] mt-1 line-clamp-2">
                        {selectedCampaign.research_dossier.creative_angle?.pr_stunt_concept?.mechanic}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Omnichannel Deliverables Studio */}
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl">
                {/* Channel Tabs */}
                <div className="flex border-b border-slate-800 bg-slate-900/90 overflow-x-auto">
                  <button
                    onClick={() => setActiveChannelTab("web_article")}
                    className={`flex items-center gap-2 px-5 py-3.5 text-xs font-bold transition-colors border-b-2 ${
                      activeChannelTab === "web_article"
                        ? "border-emerald-500 text-emerald-400 bg-slate-950/50"
                        : "border-transparent text-slate-400 hover:text-white"
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    Web Article ({webArticle ? "Ready" : "Draft"})
                  </button>
                  <button
                    onClick={() => setActiveChannelTab("email_sequence")}
                    className={`flex items-center gap-2 px-5 py-3.5 text-xs font-bold transition-colors border-b-2 ${
                      activeChannelTab === "email_sequence"
                        ? "border-emerald-500 text-emerald-400 bg-slate-950/50"
                        : "border-transparent text-slate-400 hover:text-white"
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    Email Sequences ({emailSequence ? "3-Touches" : "Draft"})
                  </button>
                  <button
                    onClick={() => setActiveChannelTab("pr_stunt")}
                    className={`flex items-center gap-2 px-5 py-3.5 text-xs font-bold transition-colors border-b-2 ${
                      activeChannelTab === "pr_stunt"
                        ? "border-emerald-500 text-emerald-400 bg-slate-950/50"
                        : "border-transparent text-slate-400 hover:text-white"
                    }`}
                  >
                    <Megaphone className="w-4 h-4" />
                    PR Stunt & Wire
                  </button>
                  <button
                    onClick={() => setActiveChannelTab("social_package")}
                    className={`flex items-center gap-2 px-5 py-3.5 text-xs font-bold transition-colors border-b-2 ${
                      activeChannelTab === "social_package"
                        ? "border-emerald-500 text-emerald-400 bg-slate-950/50"
                        : "border-transparent text-slate-400 hover:text-white"
                    }`}
                  >
                    <Share2 className="w-4 h-4" />
                    Social Package (LinkedIn / X)
                  </button>
                </div>

                {/* Tab 1: Web Article */}
                {activeChannelTab === "web_article" && (
                  <div className="p-6 space-y-4">
                    {webArticle ? (
                      <>
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                          <div>
                            <span className="text-xs font-mono text-emerald-400 uppercase bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 mr-2">
                              {webArticle.content_payload?.category || "Field Study"}
                            </span>
                            <span className="text-xs text-slate-400">
                              Slug: <code className="text-white font-mono">/articles/{webArticle.content_payload?.slug}</code>
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {webArticle.published_url && (
                              <Link
                                href={webArticle.published_url}
                                target="_blank"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
                              >
                                View Live Article
                                <ExternalLink className="w-3.5 h-3.5" />
                              </Link>
                            )}
                            <button
                              onClick={() =>
                                copyToClipboard(webArticle.content_payload?.markdown_content || "", "art")
                              }
                              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1.5"
                            >
                              <Copy className="w-3.5 h-3.5" />
                              {copiedId === "art" ? "Copied!" : "Copy Markdown"}
                            </button>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white">
                          {webArticle.content_payload?.title || webArticle.title}
                        </h3>

                        <p className="text-slate-400 text-sm italic bg-slate-950/50 p-3 rounded-lg border border-slate-800/80">
                          {webArticle.content_payload?.excerpt}
                        </p>

                        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-slate-300 text-xs sm:text-sm whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto font-mono">
                          {webArticle.content_payload?.markdown_content}
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-8 text-slate-500 text-sm">
                        Web article draft generating...
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 2: Email Sequences */}
                {activeChannelTab === "email_sequence" && (
                  <div className="p-6 space-y-4">
                    {emailSequence ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <div>
                            <h3 className="text-sm font-bold text-white">
                              {emailSequence.content_payload?.sequence_name || "3-Touch Deanery Email Drip"}
                            </h3>
                            <p className="text-xs text-slate-400 font-mono">
                              Target: {emailSequence.content_payload?.target_persona || "Clinical Course Convenor"}
                            </p>
                          </div>
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                            MailerSend Ready
                          </span>
                        </div>

                        <div className="grid gap-4">
                          {emailSequence.content_payload?.touches?.map(
                            (touch: { day: number; subject: string; body: string; cta: string }, idx: number) => (
                              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
                                  Touch {idx + 1} (Day {touch.day})
                                </span>
                                <button
                                  onClick={() =>
                                    copyToClipboard(`Subject: ${touch.subject}\n\n${touch.body}`, `touch-${idx}`)
                                  }
                                  className="text-slate-400 hover:text-white text-xs flex items-center gap-1"
                                >
                                  <Copy className="w-3 h-3" />
                                  {copiedId === `touch-${idx}` ? "Copied" : "Copy"}
                                </button>
                              </div>
                              <div className="text-xs font-bold text-white mb-2">
                                Subject: <span className="font-normal text-slate-200">{touch.subject}</span>
                              </div>
                              <div className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed font-sans mb-3">
                                {touch.body}
                              </div>
                              <div className="text-[11px] text-emerald-400 font-mono bg-emerald-500/5 px-2 py-1 rounded border border-emerald-500/10">
                                CTA: {touch.cta}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-slate-500 text-sm">
                        Email sequence generating...
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 3: PR Stunt & Wire */}
                {activeChannelTab === "pr_stunt" && (
                  <div className="p-6 space-y-4">
                    {prStunt ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <h3 className="text-sm font-bold text-white">
                            {prStunt.content_payload?.stunt_name || "Public Relations Media Campaign"}
                          </h3>
                          <button
                            onClick={() =>
                              copyToClipboard(prStunt.content_payload?.press_release_body || "", "pr")
                            }
                            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1.5"
                          >
                            <Copy className="w-3.5 h-3.5" />
                            {copiedId === "pr" ? "Copied!" : "Copy Press Release"}
                          </button>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                          <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-2">
                            FOR IMMEDIATE RELEASE • {prStunt.content_payload?.dateline || "JOHANNESBURG, SA"}
                          </div>
                          <h4 className="text-base font-bold text-white mb-3">
                            {prStunt.content_payload?.press_release_headline}
                          </h4>
                          <div className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed mb-4">
                            {prStunt.content_payload?.press_release_body}
                          </div>

                          <div className="pt-3 border-t border-slate-800/80">
                            <div className="text-[11px] font-bold text-slate-400 uppercase mb-1">
                              Targeted Journalist Pitch
                            </div>
                            <div className="text-xs text-slate-400 italic bg-slate-900/60 p-3 rounded-lg">
                              {prStunt.content_payload?.journalist_pitch}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-slate-500 text-sm">
                        PR Stunt draft generating...
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 4: Social Package */}
                {activeChannelTab === "social_package" && (
                  <div className="p-6 space-y-4">
                    {socialPackage ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* LinkedIn */}
                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-white flex items-center gap-1.5">
                              <Share2 className="w-3.5 h-3.5 text-blue-400" /> LinkedIn Founder Post
                            </span>
                            <button
                              onClick={() =>
                                copyToClipboard(socialPackage.content_payload?.linkedin_post || "", "li")
                              }
                              className="text-slate-400 hover:text-white text-xs flex items-center gap-1"
                            >
                              <Copy className="w-3 h-3" />
                              {copiedId === "li" ? "Copied" : "Copy"}
                            </button>
                          </div>
                          <div className="flex-1 text-xs text-slate-300 whitespace-pre-wrap leading-relaxed font-sans bg-slate-900/40 p-3 rounded-lg border border-slate-800/60">
                            {socialPackage.content_payload?.linkedin_post}
                          </div>
                        </div>

                        {/* X Thread */}
                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-white flex items-center gap-1.5">
                              <Share2 className="w-3.5 h-3.5 text-cyan-400" /> X (Twitter) Thread
                            </span>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  socialPackage.content_payload?.x_thread?.join("\n\n---\n\n") || "",
                                  "x"
                                )
                              }
                              className="text-slate-400 hover:text-white text-xs flex items-center gap-1"
                            >
                              <Copy className="w-3 h-3" />
                              {copiedId === "x" ? "Copied" : "Copy All"}
                            </button>
                          </div>
                          <div className="space-y-2 overflow-y-auto max-h-80">
                            {socialPackage.content_payload?.x_thread?.map((tweet: string, i: number) => (
                              <div
                                key={i}
                                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 text-xs text-slate-300"
                              >
                                <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">
                                  {i + 1}/4
                                </span>
                                {tweet}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-slate-500 text-sm">
                        Social packages generating...
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Pre-Flight Gatekeeper Safety Certificate */}
              <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Pre-Flight Gatekeeper & Privacy Shield (POPIA / Student Confidentiality)
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    Dual-Layer Deterministic Regex + Gemini 2.5 Semantic Audit
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Before any campaign goes live, our gatekeeper agent automatically inspects all headlines, bodies, and emails for patient identifiers (MRN, hospital bed numbers), student registration numbers, and private clinician phone numbers.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-500 text-sm">
              Select or create a campaign to view its deliverables.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
