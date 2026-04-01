"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

import { scrollToSectionTarget } from "@/lib/scroll-to-section-target";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function applyHashScroll(smooth: boolean) {
  const hash = window.location.hash;
  if (!hash || hash === "#") return;
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  const behavior: ScrollBehavior = smooth && !prefersReducedMotion() ? "smooth" : "auto";
  scrollToSectionTarget(el, behavior);
}

export function ScrollAnchorHandler() {
  const didInitialScrollRef = useRef(false);

  useLayoutEffect(() => {
    if (!window.location.hash || didInitialScrollRef.current) return;
    didInitialScrollRef.current = true;
    applyHashScroll(false);
  }, []);

  useEffect(() => {
    const onClickCapture = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!anchor || !(anchor instanceof HTMLAnchorElement)) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const id = decodeURIComponent(href.slice(1));
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      window.history.pushState(null, "", href);
      scrollToSectionTarget(el, prefersReducedMotion() ? "auto" : "smooth");

      const details = anchor.closest("details");
      if (details) details.open = false;
    };

    const onHashChange = () => applyHashScroll(!prefersReducedMotion());

    document.addEventListener("click", onClickCapture, true);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      document.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return null;
}
