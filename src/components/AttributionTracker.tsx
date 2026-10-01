"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { captureAttribution } from "@/lib/attribution";

function AttributionTrackerInner() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    captureAttribution();
  }, [searchParams, pathname]);

  return null;
}

export default function AttributionTracker() {
  return (
    <Suspense fallback={null}>
      <AttributionTrackerInner />
    </Suspense>
  );
}
