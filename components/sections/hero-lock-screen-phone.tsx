"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

const STEP_MS = 10_000;
const MAX_VISIBLE = 5;

type Lead = {
  id: string;
  service: string;
  source: string;
  delivery: string;
  iconSrc: string;
};

const LEADS: readonly Lead[] = [
  {
    id: "1",
    service: "Panel upgrade (200A)",
    source: "LSA",
    delivery: "Google Guaranteed call",
    iconSrc: "/notification-icons/google-ads.svg",
  },
  {
    id: "2",
    service: "Kitchen remodel estimate",
    source: "Google Business Profile",
    delivery: "Message",
    iconSrc: "/notification-icons/google-maps.svg",
  },
  {
    id: "3",
    service: "Roof inspection (storm)",
    source: "Website",
    delivery: "Contact form",
    iconSrc: "/notification-icons/google-chrome.svg",
  },
  {
    id: "4",
    service: "Reply posted",
    source: "Google Business Profile",
    delivery: "5-star review",
    iconSrc: "/notification-icons/google-maps.svg",
  },
  {
    id: "5",
    service: "AC tune-up",
    source: "Google Ads",
    delivery: "Call",
    iconSrc: "/notification-icons/google-ads.svg",
  },
];

const progressStyle = {
  ["--hero-lock-cycle" as string]: `${STEP_MS}ms`,
} as CSSProperties;

function formatLockScreenDate(date: Date) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(date);
  } catch (error) {
    console.warn("Unable to format lock screen date.", error);
    return date.toDateString();
  }
}

function formatLockScreenTime(date: Date) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  } catch (error) {
    console.warn("Unable to format lock screen time.", error);
    const hours = `${date.getHours()}`.padStart(2, "0");
    const minutes = `${date.getMinutes()}`.padStart(2, "0");
    return `${hours}:${minutes}`;
  }
}

function getVisibleLeads(batchStart: number, count: number): Lead[] {
  const out: Lead[] = [];

  for (let i = 0; i < count; i++) {
    out.push(LEADS[(batchStart + i) % LEADS.length]);
  }

  out.reverse();
  return out;
}

export function HeroLockScreenPhone() {
  const [batchStart, setBatchStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [stepKey, setStepKey] = useState(0);
  const [dateLabel, setDateLabel] = useState("");
  const [timeLabel, setTimeLabel] = useState("");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setDateLabel(formatLockScreenDate(now));
      setTimeLabel(formatLockScreenTime(now));
    };

    updateClock();

    let intervalId: number | undefined;
    const now = new Date();
    const msUntilNextMinute =
      60_000 - (now.getSeconds() * 1000 + now.getMilliseconds());
    const timeoutId = window.setTimeout(() => {
      updateClock();
      intervalId = window.setInterval(updateClock, 60_000);
    }, msUntilNextMinute);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);

    sync();
    mq.addEventListener("change", sync);

    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const id = window.setInterval(() => {
      setStepKey((k) => k + 1);
      setVisibleCount((c) => {
        if (c < MAX_VISIBLE) {
          return c + 1;
        }

        setBatchStart((s) => (s + MAX_VISIBLE) % LEADS.length);
        return 1;
      });
    }, STEP_MS);

    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const count = reducedMotion ? MAX_VISIBLE : visibleCount;
  const visibleLeads = getVisibleLeads(batchStart, count);

  return (
    <div
      aria-hidden="true"
      className="hero-lock-float pointer-events-none relative mx-auto flex w-[290px] flex-col items-center sm:w-[312px]"
    >
      <div className="absolute inset-x-4 top-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_0%,rgb(249_99_2_/_0.14),transparent_55%)] blur-2xl" />

      <div className="relative w-full overflow-hidden rounded-[2.65rem] border border-white/[0.14] bg-zinc-900 p-[10px] shadow-[0_32px_64px_-12px_rgb(0_0_0_/_0.65)]">
        <div className="relative flex aspect-[9/17] w-full flex-col overflow-hidden rounded-[2.1rem] border border-white/[0.06] bg-zinc-950">
          <div className="absolute left-1/2 top-2.5 z-20 h-[26px] w-[34%] max-w-[132px] -translate-x-1/2 rounded-full bg-black shadow-inner" />

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(165deg, rgb(24 24 27 / 0.92) 0%, rgb(9 9 11 / 0.96) 45%, rgb(39 39 42 / 0.35) 100%), radial-gradient(ellipse 80% 50% at 50% 0%, rgb(249 99 2 / 0.12), transparent 55%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/90" />

          <div className="relative z-10 flex items-center justify-between px-5 pb-0.5 pt-3 text-[11px] font-semibold tabular-nums text-white/55">
            <span>Verizon</span>
            <div className="flex items-center gap-1.5">
              <div className="flex items-end gap-[2px]">
                <div className="h-[4px] w-[3px] rounded-[0.5px] bg-white/70" />
                <div className="h-[6px] w-[3px] rounded-[0.5px] bg-white/70" />
                <div className="h-[8px] w-[3px] rounded-[0.5px] bg-white/70" />
                <div className="h-[10px] w-[3px] rounded-[0.5px] bg-white/25" />
              </div>
              <svg viewBox="0 0 16 12" className="h-[10px] w-[12px] text-white/70" fill="currentColor">
                <path d="M8 9.6a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zM4.3 7.2a5.2 5.2 0 017.4 0 .6.6 0 01-.85.85 4 4 0 00-5.7 0 .6.6 0 01-.85-.85zM1.5 4.4a9.1 9.1 0 0113 0 .6.6 0 01-.85.85 7.9 7.9 0 00-11.3 0 .6.6 0 01-.85-.85z" />
              </svg>
              <div className="h-[10px] w-[22px] rounded-[2px] border border-white/30 p-[1.5px]">
                <div className="h-full w-full rounded-[1px] bg-white/75" />
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-5 px-4 text-center">
            <p className="text-[11px] font-medium tracking-wide text-white/50 sm:text-[12px]">
              {dateLabel || "-"}
            </p>
            <p className="mt-1 text-[2.75rem] font-light leading-none tracking-[-0.02em] text-white/40 sm:text-[3rem]">
              {timeLabel || "-"}
            </p>
          </div>

          <div className="relative z-10 mt-5 flex min-h-0 flex-1 flex-col gap-1.5 overflow-hidden px-2.5 pb-1.5">
            {visibleLeads.map((lead, i) => (
              <div
                key={`${stepKey}-${lead.id}-${i}`}
                className={`rounded-[1.15rem] border border-white/[0.08] bg-white/[0.08] px-2.5 py-2 backdrop-blur-xl ${
                  !reducedMotion && i === 0 && visibleCount > 1
                    ? "hero-lock-notif-enter"
                    : ""
                }`}
              >
                <div className="flex gap-2.5">
                  <Image
                    src={lead.iconSrc}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8 shrink-0 object-contain"
                    unoptimized={lead.iconSrc.endsWith(".svg")}
                  />
                  <div className="min-w-0 flex-1 text-left">
                    <div className="flex items-start justify-between gap-2">
                      <p className="min-w-0 text-[11px] font-semibold leading-snug text-white/95 sm:text-[12px]">
                        {lead.service}
                      </p>
                      <span className="shrink-0 text-[10px] text-white/35">
                        now
                      </span>
                    </div>
                    <p className="mt-0.5 text-[10px] text-white/45">
                      {lead.source} &middot; {lead.delivery}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <p className="mt-0.5 text-center text-[8px] font-medium uppercase tracking-[0.2em] text-white/25">
              Lead alerts
            </p>
          </div>

          <div className="relative z-10 mx-4 mb-2 h-px overflow-hidden rounded-full bg-white/[0.08]">
            <div
              key={stepKey}
              className="hero-lock-progress h-full rounded-full bg-[color:var(--brand)]/45"
              style={progressStyle}
            />
          </div>

          <div className="relative z-10 flex items-center justify-between px-5 pb-1.5">
            <div className="flex size-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06]">
              <svg viewBox="0 0 24 24" className="size-[14px] text-white/60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6l-2 4h-1V4a1 1 0 00-1-1H10a1 1 0 00-1 1v6H8L6 6" />
                <path d="M9 10v8a2 2 0 002 2h2a2 2 0 002-2v-8" />
              </svg>
            </div>
            <div className="flex size-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06]">
              <svg viewBox="0 0 24 24" className="size-[14px] text-white/60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.91.33 1.79.62 2.63a2 2 0 01-.45 2.11L8 9.7a16 16 0 006.3 6.3l1.24-1.23a2 2 0 012.11-.45c.84.29 1.72.5 2.63.62A2 2 0 0122 16.92z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
