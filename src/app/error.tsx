"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Next.js App Router Error:", error);
  }, [error]);

  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 text-center min-h-screen flex flex-col justify-center items-center px-margin-mobile">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 animate-pulse">
          <span className="material-symbols-outlined text-[40px]">warning</span>
        </div>
        <h1 className="text-4xl font-bold text-on-surface mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
          Something went wrong
        </h1>
        <p className="text-on-surface-variant max-w-md mx-auto mb-8 font-body-md">
          A synchronization issue has occurred. Please try resetting the active connection or reloading the page.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-primary text-on-primary rounded-full font-bold hover:opacity-90 shadow-md transition-all"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-surface-container-high text-on-surface rounded-full font-bold hover:bg-surface-container-highest transition-all border border-outline-variant/30"
          >
            Reload Page
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
