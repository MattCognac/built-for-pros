"use client";

import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/content/site";

/** v2 page sections only — avoids dead anchors from the main site nav. */
const v2NavItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Free guide", href: "#lead-magnet" },
  { label: "FAQ", href: "#faq" },
] as const;

const GLASS_SCROLL_START = 0.02;
const GLASS_SCROLL_END = 0.05;
const GLASS_BG_ALPHA = 0.92;

const desktopNavLinkClassName =
  "rounded-full px-3 py-2 text-sm font-medium text-zinc-400 transition hover:text-zinc-100 md:px-4";

const ctaClassName =
  "inline-flex min-w-0 items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] text-sm font-semibold text-white shadow-[0_1px_0_rgb(0_0_0_/_0.2)] transition hover:bg-[color:var(--brand-strong)]";

function glassProgress(scrollY: number, viewportHeight: number): number {
  const startPx = viewportHeight * GLASS_SCROLL_START;
  const endPx = viewportHeight * GLASS_SCROLL_END;
  const spanPx = Math.max(1, endPx - startPx);
  if (scrollY <= startPx) return 0;
  if (scrollY >= endPx) return 1;
  return (scrollY - startPx) / spanPx;
}

export function V2SiteHeader() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      setP(glassProgress(scrollY, vh));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06]"
      style={{
        backgroundColor: `rgb(var(--v2-header-tint) / ${GLASS_BG_ALPHA * p})`,
        boxShadow:
          p > 0 ? `0 12px 40px rgb(0 0 0 / ${0.35 * p})` : "none",
        backdropFilter: `blur(${18 * p}px) saturate(${100 + 40 * p}%)`,
        WebkitBackdropFilter: `blur(${18 * p}px) saturate(${100 + 40 * p}%)`,
      }}
    >
      <div className="mx-auto grid h-16 w-full max-w-none grid-cols-[1fr_auto] items-center gap-x-4 px-5 sm:px-8 md:h-[4.5rem] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-8 lg:px-12 xl:px-16">
        <Link
          href="/v2"
          className="col-start-1 row-start-1 justify-self-start transition-opacity hover:opacity-85"
        >
          <BrandLogo className="text-sm tracking-[0.2em] text-zinc-100 md:text-base lg:text-[1.0625rem]" />
        </Link>

        <nav className="col-start-2 row-start-1 hidden min-w-0 items-center justify-center gap-0.5 md:flex lg:gap-2">
          {v2NavItems.map((item) => (
            <a key={item.href} href={item.href} className={desktopNavLinkClassName}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="col-start-3 row-start-1 hidden justify-self-end md:block">
          <a
            href={siteConfig.primaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className={`${ctaClassName} px-6 py-2.5 md:px-8 md:py-3 lg:px-10`}
          >
            {siteConfig.primaryCtaLabel}
            <ArrowUpRight
              className="size-4 shrink-0 md:size-[1.125rem]"
              strokeWidth={2}
            />
          </a>
        </div>

        <div className="col-start-2 row-start-1 flex items-center justify-self-end md:hidden">
          <details className="relative [&_summary::-webkit-details-marker]:hidden">
            <summary className="inline-flex list-none cursor-pointer items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] p-2.5 text-zinc-100 backdrop-blur-md transition hover:border-white/[0.18] hover:bg-white/[0.07]">
              <Menu className="size-5" strokeWidth={1.8} />
              <span className="sr-only">Open navigation</span>
            </summary>

            <div className="absolute right-0 top-12 w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-white/[0.08] bg-[var(--v2-elevated)]/95 p-3 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-0.5">
                {v2NavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-3 border-t border-white/[0.06] pt-3">
                <a
                  href={siteConfig.primaryCtaHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`${ctaClassName} w-full px-4 py-2.5`}
                >
                  {siteConfig.primaryCtaLabel}
                  <ArrowUpRight className="size-4" strokeWidth={2} />
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
