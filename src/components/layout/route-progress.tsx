"use client";

import * as React from "react";
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const TRICKLE_INTERVAL_MS = 200;
const TRICKLE_TARGET = 88;
const SAFETY_TIMEOUT_MS = 8000;

function isNavigableClick(event: MouseEvent) {
  // Next.js Link already calls preventDefault() to do client-side routing,
  // so defaultPrevented is expected here and must not disqualify the click.
  if (event.button !== 0) return false;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;

  const anchor = (event.target as HTMLElement)?.closest?.("a");
  if (!anchor) return false;
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasAttribute("download")) return false;

  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }

  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return false;
  }
  if (url.origin !== window.location.origin) return false;

  const isSamePage =
    url.pathname === window.location.pathname && url.search === window.location.search;
  if (isSamePage) return false;

  return true;
}

function RouteProgressInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const trickleRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const safetyRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const routeKey = `${pathname}?${searchParams.toString()}`;
  const previousRouteKey = React.useRef(routeKey);

  const clearTimers = React.useCallback(() => {
    if (trickleRef.current) clearInterval(trickleRef.current);
    if (safetyRef.current) clearTimeout(safetyRef.current);
    trickleRef.current = null;
    safetyRef.current = null;
  }, []);

  const start = React.useCallback(() => {
    clearTimers();
    setVisible(true);
    setProgress(12);
    trickleRef.current = setInterval(() => {
      setProgress((current) => {
        const next = current + (TRICKLE_TARGET - current) * 0.15;
        return next >= TRICKLE_TARGET ? TRICKLE_TARGET : next;
      });
    }, TRICKLE_INTERVAL_MS);
    safetyRef.current = setTimeout(() => {
      clearTimers();
      setVisible(false);
      setProgress(0);
    }, SAFETY_TIMEOUT_MS);
  }, [clearTimers]);

  const finish = React.useCallback(() => {
    clearTimers();
    setProgress(100);
    const hideTimeout = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 250);
    return () => clearTimeout(hideTimeout);
  }, [clearTimers]);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (isNavigableClick(event)) start();
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [start]);

  React.useEffect(() => {
    if (previousRouteKey.current === routeKey) return;
    previousRouteKey.current = routeKey;
    return finish();
  }, [routeKey, finish]);

  React.useEffect(() => clearTimers, [clearTimers]);

  return (
    <div
      aria-hidden
      data-route-progress
      className="pointer-events-none fixed top-0 left-0 z-100 h-0.75 w-full bg-transparent"
    >
      <div
        data-route-progress-bar
        className="h-full bg-teal-400 shadow-[0_0_8px_rgba(61,214,194,0.7)] transition-[width,opacity] duration-200 ease-out"
        style={{
          width: `${progress}%`,
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  );
}

export function RouteProgress() {
  return (
    <Suspense fallback={null}>
      <RouteProgressInner />
    </Suspense>
  );
}
