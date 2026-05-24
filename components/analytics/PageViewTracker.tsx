"use client";

import { pageview } from "@/lib/gtag";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    pageview(url, document.title);
  }, [pathname, searchParams]);

  return null;
}
