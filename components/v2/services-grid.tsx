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

export function V2ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

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
      const maxH = Math.max(...heights);
      for (const el of cards) {
        el.style.minHeight = `${maxH}px`;
      }
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(grid);

    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = () => measure();
    mqMd.addEventListener("change", onBreakpoint);
    mqLg.addEventListener("change", onBreakpoint);

    return () => {
      ro.disconnect();
      mqMd.removeEventListener("change", onBreakpoint);
      mqLg.removeEventListener("change", onBreakpoint);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="mt-14 grid items-stretch gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] shadow-[0_1px_0_rgb(255_255_255_/_0.03)_inset] md:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => (
        <div
          key={service.title}
          data-service-card
          className="flex h-full min-h-0 flex-col bg-[var(--v2-elevated-deep)] p-7 transition-colors hover:bg-[var(--v2-elevated)]"
        >
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--v2-icon-secondary-bg)] text-[color:var(--brand)] ring-1 ring-[color:var(--v2-icon-secondary-ring)]">
            {renderServiceIcon(service.icon)}
          </div>
          <h3 className="mt-5 shrink-0 text-lg font-bold text-zinc-50">
            {service.title}
          </h3>
          <p className="mt-2 min-h-0 flex-1 text-base leading-7 text-zinc-400">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
