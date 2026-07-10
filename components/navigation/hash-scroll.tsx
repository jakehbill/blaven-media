"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { scrollToHash } from "@/lib/navigation";

/**
 * Handles App Router navigations to `/#section` by scrolling after mount/route change.
 */
function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => {
      scrollToHash(hash, reduced ? "auto" : "smooth");
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      scrollToHash(hash, reduced ? "auto" : "smooth");
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}

export { HashScroll };
