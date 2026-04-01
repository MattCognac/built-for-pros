"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const ROTATION_MS = 3400;
const VISIBLE_COUNT = 3;

type Lead = {
  id: string;
  service: string;
  source: string;
  time: string;
  value: string;
};

const LEADS: readonly Lead[] = [
  { id: "1", service: "Full Roof Replacement", source: "Google Ads", time: "Just now", value: "$18k" },
  { id: "2", service: "Kitchen Remodel", source: "Google Search", time: "4m ago", value: "$24k" },
  { id: "3", service: "Bathroom Renovation", source: "Google Maps", time: "12m ago", value: "$14k" },
  { id: "4", service: "Deck Rebuild", source: "Google Search", time: "23m ago", value: "$9k" },
  { id: "5", service: "Basement Finishing", source: "Google Ads", time: "38m ago", value: "$32k" },
  { id: "6", service: "Siding Replacement", source: "Google Maps", time: "51m ago", value: "$11k" },
];

const progressStyle = {
  ["--lead-flow-duration" as string]: `${ROTATION_MS}ms`,
} as CSSProperties;

export function HeroLeadFlowPhone() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const id = window.setInterval(() => {
      setOffset((o) => (o + 1) % LEADS.length);
    }, ROTATION_MS);

    return () => window.clearInterval(id);
  }, []);

  const visibleLeads = Array.from({ length: VISIBLE_COUNT }, (_, i) =>
    LEADS[(offset + i) % LEADS.length],
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto w-[17rem] lg:mx-0"
    >
      {/* Ambient glow */}
      <div className="absolute inset-4 rounded-[2.4rem] bg-[radial-gradient(circle_at_top,rgba(249,99,2,0.22),transparent_50%)] blur-2xl" />

      {/* Phone shell */}
      <div className="lead-flow-float relative overflow-hidden rounded-[2.2rem] border border-white/[0.12] bg-white/[0.03] p-2 shadow-[0_24px_64px_rgba(0,0,0,0.5)] backdrop-blur-sm">
        <div className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(28,28,32,0.98),rgba(14,14,16,0.98))]">
          {/* Notch + status bar */}
          <div className="flex items-center justify-between px-5 pb-1 pt-3">
            <span className="text-[10px] font-semibold text-gray-500">9:41</span>
            <div className="h-1 w-12 rounded-full bg-white/10" />
            <div className="flex gap-1">
              <span className="h-1 w-4 rounded-full bg-white/[0.14]" />
              <span className="h-1 w-5 rounded-full bg-white/[0.2]" />
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-5 pb-3 pt-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
                <span className="lead-flow-live-dot size-1.5 rounded-full bg-[color:var(--brand)]" />
                Live Lead Flow
              </span>
            </div>
            <ArrowUpRight className="size-3.5 text-gray-500" strokeWidth={2} />
          </div>

          {/* Lead rows */}
          <div className="space-y-1.5 px-3 pb-2">
            {visibleLeads.map((lead, i) => (
              <div
                key={`${offset}-${lead.id}`}
                className={`lead-flow-card-enter flex items-center gap-2.5 rounded-xl px-3 py-2.5 ${
                  i === 0
                    ? "border border-white/10 bg-white/[0.06]"
                    : "bg-white/[0.02]"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`flex size-7 shrink-0 items-center justify-center rounded-full ${
                  i === 0
                    ? "bg-[color:var(--brand)]"
                    : "bg-white/[0.08]"
                }`}>
                  <span className={`text-[10px] font-bold ${
                    i === 0 ? "text-white" : "text-gray-400"
                  }`}>
                    {lead.service[0]}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold leading-tight text-white">
                    {lead.service}
                  </p>
                  <p className="mt-0.5 truncate text-[10px] text-gray-500">
                    {lead.source} · {lead.time}
                  </p>
                </div>
                <span className="shrink-0 text-[11px] font-semibold text-gray-400">
                  {lead.value}
                </span>
              </div>
            ))}
          </div>

          {/* Progress bar (hidden by prefers-reduced-motion CSS) */}
          <div className="mx-5 h-0.5 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              key={offset}
              className="lead-flow-progress h-full rounded-full bg-[color:var(--brand)]/60"
              style={progressStyle}
            />
          </div>

          {/* Revenue footer */}
          <div className="flex items-center justify-between px-5 pb-5 pt-3">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                This Month
              </p>
              <p className="mt-0.5 text-lg font-bold leading-tight text-white">
                +$124k
              </p>
            </div>
            <TrendingUp className="size-4 text-emerald-400/70" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </div>
  );
}
