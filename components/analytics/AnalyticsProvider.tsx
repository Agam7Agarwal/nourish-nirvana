"use client";

import { isGaEnabled } from "@/lib/env";
import { Suspense } from "react";
import { PageViewTracker } from "./PageViewTracker";

export function AnalyticsProvider() {
  if (!isGaEnabled) return null;

  return (
    <Suspense fallback={null}>
      <PageViewTracker />
    </Suspense>
  );
}
