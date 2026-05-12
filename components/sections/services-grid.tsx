"use client";

import { useLayoutEffect, useRef } from "react";

import { renderServiceIcon } from "@/components/sections/section-icons";
import { services } from "@/content/site";

function gridColumnCount(): number {
  if (typeof window === "undefined") return 1;
  if (window.matchMedia("(min-width: 1024px)").matches) return 3;
  if (window.matchMedia("(min-width: 768px)").matches) return 2;
  return 1;
}

export function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let raf = 0;

    const measure = () => {
      const cards = [
        ...grid.querySelectorAll<HTMLElement>("[data-service-card]"),
      ];
      if (cards.length === 0) return;

      for (const el of cards) {
        el.style.minHeight = "";
      }
      void grid.offsetHeight;

      if (gridColumnCount() === 1) return;

      const heights = cards.map((c) => c.getBoundingClientRect().height);
      const maxHeight = Math.max(...heights);

      for (const el of cards) {
        el.style.minHeight = `${maxHeight}px`;
      }
    };

    const scheduleMeasure = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();

    window.addEventListener("resize", scheduleMeasure, { passive: true });

    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqLg = window.matchMedia("(min-width: 1024px)");
    mqMd.addEventListener("change", scheduleMeasure);
    mqLg.addEventListener("change", scheduleMeasure);

    const visualViewport = window.visualViewport;
    if (visualViewport) {
      visualViewport.addEventListener("resize", scheduleMeasure);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", scheduleMeasure);
      mqMd.removeEventListener("change", scheduleMeasure);
      mqLg.removeEventListener("change", scheduleMeasure);
      if (visualViewport) {
        visualViewport.removeEventListener("resize", scheduleMeasure);
      }
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="mt-14 grid items-stretch gap-px overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--border-subtle)] shadow-[0_1px_0_rgb(255_255_255_/_0.03)_inset] md:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => (
        <div
          key={service.title}
          data-service-card
          className="flex h-full min-h-0 flex-col bg-[color:var(--elevated-deep)] p-7 transition-colors hover:bg-[color:var(--elevated-strong)]"
        >
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--icon-secondary-bg)] text-[color:var(--brand)] ring-1 ring-[color:var(--icon-secondary-ring)]">
            {renderServiceIcon(service.icon)}
          </div>
          <h3 className="mt-5 shrink-0 text-lg font-bold text-[color:var(--fg)]">
            {service.title}
          </h3>
          <p className="mt-2 min-h-0 flex-1 text-base leading-7 text-[color:var(--muted)]">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
