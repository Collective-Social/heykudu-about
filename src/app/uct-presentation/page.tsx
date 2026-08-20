"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function UCTPresentationPage() {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [printSlidesHtml, setPrintSlidesHtml] = useState<string>("");
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  const verifyPinOnServer = async (pinToVerify: string): Promise<boolean> => {
    try {
      setIsVerifying(true);
      const res = await fetch("/api/verify-pin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: pinToVerify }),
      });
      const data = await res.json();
      setIsVerifying(false);
      return data.success === true;
    } catch {
      setIsVerifying(false);
      return false;
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pinParam = urlParams.get("pin");
    const storedAuth = sessionStorage.getItem("kudu_presentation_unlocked");

    if (storedAuth === "true") {
      setIsUnlocked(true);
    } else if (pinParam) {
      verifyPinOnServer(pinParam).then((isValid) => {
        if (isValid) {
          setIsUnlocked(true);
          sessionStorage.setItem("kudu_presentation_unlocked", "true");
        }
      });
    }

    fetch("/uct-strategy-2026-2030.html")
      .then((res) => res.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const headStyles = Array.from(doc.querySelectorAll("head style, head link"))
          .map((el) => el.outerHTML)
          .join("\n");
        const mainContent = doc.querySelector("main")?.innerHTML || "";
        setPrintSlidesHtml(headStyles + "\n" + mainContent);
      })
      .catch((err) => console.error("Error loading print slides:", err));
  }, []);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim()) return;
    const isValid = await verifyPinOnServer(pinInput.trim());
    if (isValid) {
      setIsUnlocked(true);
      setErrorMsg("");
      sessionStorage.setItem("kudu_presentation_unlocked", "true");
    } else {
      setErrorMsg("Incorrect Access Passcode. Please try again.");
    }
  };

  const copyShareableLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isUnlocked) {
    return (
      <div className="w-screen h-screen bg-gradient-to-br from-[#120826] via-[#630ed4] to-[#0f0919] flex items-center justify-center p-6 text-white font-sans">
        <div className="bg-[#181028]/95 border-2 border-purple-500/40 p-8 rounded-3xl max-w-md w-full shadow-2xl backdrop-blur-xl text-center">
          <div className="w-16 h-16 rounded-3xl bg-[#630ed4] p-3 text-white mx-auto flex items-center justify-center mb-4 border-2 border-purple-400/40 shadow-lg shrink-0">
            <img src="/images/logo-white.png" alt="heykudu logo" className="w-full h-full object-contain" />
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-black bg-purple-500/20 text-purple-200 border border-purple-400/30 uppercase tracking-wider inline-block mb-3">
            UCT General Surgery Briefing
          </span>

          <h1 className="font-display font-black text-2xl text-white mb-2">UCT Strategy & Pricing</h1>
          <p className="text-xs text-purple-200 font-bold mb-6">
            Enter your assigned access passcode to view Dr M. Visser & UCT General Surgery Digital Migration Deck.
          </p>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter Access Passcode"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full h-12 px-4 rounded-2xl bg-white/10 border-2 border-purple-400/40 text-white placeholder-purple-300 text-sm font-bold focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition-all text-center tracking-widest"
                autoFocus
              />
              {errorMsg && (
                <p className="text-xs text-red-400 font-bold mt-2 animate-shake">
                  {errorMsg}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-emerald-500/30 transition-all active:scale-95 flex items-center justify-center gap-2 border border-emerald-300"
            >
              <span className="material-symbols-outlined text-base">
                {isVerifying ? "hourglass_empty" : "lock_open"}
              </span>
              <span>{isVerifying ? "Verifying..." : "Unlock UCT Presentation"}</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-purple-500/20 flex justify-between items-center text-[11px] text-purple-300 font-bold">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-emerald-400">shield</span>
              Authorized Client Access Only
            </span>
            <Link href="/presentations" className="hover:underline text-emerald-400">
              Deck Hub →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          *, *::before, *::after {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            box-sizing: border-box !important;
            box-shadow: none !important;
            text-shadow: none !important;
            filter: none !important;
            backdrop-filter: none !important;
          }
          html, body, #__next {
            background: #090514 !important;
            color: #ffffff !important;
            width: 100% !important;
            height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
          }
          .screen-view-container {
            display: none !important;
          }
          #print-slides-container {
            display: block !important;
            width: 100vw !important;
            height: auto !important;
            background: #090514 !important;
            color: #ffffff !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          #print-slides-container .slide {
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            position: relative !important;
            inset: auto !important;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            page-break-before: always !important;
            page-break-after: always !important;
            break-before: page !important;
            break-after: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            width: 100vw !important;
            height: 100vh !important;
            min-height: 100vh !important;
            max-height: 100vh !important;
            box-sizing: border-box !important;
            padding: 1.5rem 2.5rem !important;
            background: #090514 !important;
            border: none !important;
            margin: 0 !important;
            overflow: hidden !important;
          }
          #print-slides-container .slide:last-child {
            page-break-after: avoid !important;
            break-after: auto !important;
          }
          #print-slides-container .glass-card {
            background: #181028 !important;
            border: 2px solid rgba(139, 92, 246, 0.4) !important;
            color: #ffffff !important;
            padding: 0.45rem 0.75rem !important;
          }
          #print-slides-container .gradient-text {
            background: none !important;
            -webkit-background-clip: unset !important;
            background-clip: unset !important;
            color: #c084fc !important;
            -webkit-text-fill-color: #c084fc !important;
          }
          #print-slides-container .mb-6, #print-slides-container .mb-5 { margin-bottom: 0.35rem !important; }
          #print-slides-container .mb-4, #print-slides-container .mb-3 { margin-bottom: 0.2rem !important; }
          #print-slides-container .mt-6, #print-slides-container .mt-5 { margin-top: 0.3rem !important; }
          #print-slides-container .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.25rem !important; }
          #print-slides-container .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.2rem !important; }
          #print-slides-container .space-y-2.5 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.18rem !important; }
          #print-slides-container .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.15rem !important; }

          #print-slides-container #slide-2 .grid { display: grid !important; grid-template-columns: repeat(4, minmax(0, 1fr)) !important; gap: 0.4rem !important; }
          #print-slides-container #slide-3 .grid { display: grid !important; grid-template-columns: repeat(4, minmax(0, 1fr)) !important; gap: 0.4rem !important; }
          #print-slides-container #slide-5 .grid { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: 0.4rem !important; }
          #print-slides-container #slide-9 .grid-cols-1, #print-slides-container #slide-9 .grid { display: grid !important; grid-template-columns: repeat(4, minmax(0, 1fr)) !important; gap: 0.4rem !important; }
          #print-slides-container #slide-9 .glass-card { padding: 0.45rem 0.6rem !important; }
          #print-slides-container #slide-9 ul { margin-top: 0.2rem !important; }
          #print-slides-container #slide-9 li { font-size: 0.68rem !important; }
          #print-slides-container #slide-11 .grid-cols-1, #print-slides-container #slide-11 .grid { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 1rem !important; }
          #print-slides-container #slide-11 .glass-card { padding: 1rem 1.25rem !important; }
        }
      `}</style>

      <div className="screen-view-container w-screen h-screen bg-[#090514] overflow-hidden flex flex-col">
        <div className="bg-[#630ed4] text-white px-6 py-2.5 flex items-center justify-between z-50 border-b border-white/15 shrink-0 text-xs shadow-md">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-black text-white text-sm hover:opacity-80 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              heykudu
            </Link>
            <span className="text-white/40">|</span>
            <span className="font-extrabold text-white">
              UCT General Surgery & Health Sciences Strategy (Dr M. Visser)
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-500 text-white uppercase tracking-wider">
              Client Access Active
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="bg-emerald-500 hover:bg-emerald-600 px-3.5 py-1.5 rounded-full text-white font-extrabold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              Print / Save as PDF
            </button>

            <button
              onClick={copyShareableLink}
              className="bg-white/15 hover:bg-white/25 px-3.5 py-1.5 rounded-full text-white font-extrabold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">content_copy</span>
              {copied ? "Link Copied!" : "Copy Link"}
            </button>

            <Link
              href="/presentations"
              className="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-full text-white font-bold flex items-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">grid_view</span>
              Deck Hub
            </Link>

            <a
              href="/uct-strategy-2026-2030.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-full text-white font-bold flex items-center gap-1 transition-colors"
            >
              Standalone Deck
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </a>
          </div>
        </div>

        <div className="flex-1 w-full h-full relative">
          <iframe
            src="/uct-strategy-2026-2030.html"
            className="w-full h-full border-0"
            title="UCT General Surgery Digital Migration Strategy Presentation"
            allow="fullscreen"
          />
        </div>
      </div>

      <div
        id="print-slides-container"
        className="dark hidden print:block w-full bg-[#090514] text-white"
        dangerouslySetInnerHTML={{ __html: printSlidesHtml }}
      />
    </>
  );
}
