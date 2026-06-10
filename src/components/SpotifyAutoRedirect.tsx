"use client";

import { useEffect } from "react";

const STORAGE_KEY = "atlantico:me-quiero-ir:redirected";

/**
 * Redirects to the given URL once per session.
 *
 * On the first visit to the page where this is mounted, the user is sent to
 * `url`. A flag is stored in sessionStorage so subsequent visits in the same
 * tab/session render normally and let the user interact with the page.
 *
 * Uses `window.location.href` (not `replace`) so the browser's back button
 * still returns the user to wherever they came from before this page.
 */
export function SpotifyAutoRedirect({ url }: { url: string }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let alreadyRedirected = false;
    try {
      alreadyRedirected = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // sessionStorage blocked (private browsing / strict cookie policies).
    }

    if (alreadyRedirected) return;

    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Best-effort. Fall through and still redirect.
    }

    // Small delay so the Meta Pixel PageView request has time to leave the
    // page before the browser navigates away.
    const timeout = setTimeout(() => {
      window.location.href = url;
    }, 600);

    return () => clearTimeout(timeout);
  }, [url]);

  return null;
}
