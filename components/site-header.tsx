"use client";

import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { navItems, siteConfig } from "@/content/site";

/** Glass ramps from 0→1 as scroll passes between these fractions of viewport height. */
const GLASS_SCROLL_START = 0.02;
const GLASS_SCROLL_END = 0.05;

/** Max opacity for the gray-950 tint (higher = darker on light page sections). */
const GLASS_BG_ALPHA = 0.9;

const desktopNavLinkClassName =
  "rounded-full px-3 py-2 text-sm font-medium text-gray-300 transition hover:text-white md:px-4";

const ctaClassName =
  "inline-flex min-w-0 items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] text-sm font-semibold text-white transition hover:bg-[color:var(--brand-strong)]";

function glassProgress(scrollY: number, viewportHeight: number): number {
  const startPx = viewportHeight * GLASS_SCROLL_START;
  const endPx = viewportHeight * GLASS_SCROLL_END;
  const spanPx = Math.max(1, endPx - startPx);
  if (scrollY <= startPx) return 0;
  if (scrollY >= endPx) return 1;
  return (scrollY - startPx) / spanPx;
}

export function SiteHeader() {
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
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10"
      style={{
        backgroundColor: `rgb(3 7 18 / ${GLASS_BG_ALPHA * p})`,
        boxShadow:
          p > 0 ? `0 8px 32px rgb(0 0 0 / ${0.32 * p})` : "none",
        backdropFilter: `blur(${16 * p}px) saturate(${100 + 50 * p}%)`,
        WebkitBackdropFilter: `blur(${16 * p}px) saturate(${100 + 50 * p}%)`,
      }}
    >
      <div className="mx-auto grid h-16 w-full max-w-none grid-cols-[1fr_auto] items-center gap-x-4 px-5 sm:px-8 md:h-[4.5rem] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-8 lg:px-12 xl:px-16">
        <Link
          href="/"
          className="col-start-1 row-start-1 justify-self-start transition-opacity hover:opacity-80"
        >
          <BrandLogo className="text-sm tracking-[0.2em] text-white md:text-base lg:text-[1.0625rem]" />
        </Link>

        <nav className="col-start-2 row-start-1 hidden min-w-0 items-center justify-center gap-1 md:flex lg:gap-3">
          {navItems.map((item) => (
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
            <ArrowUpRight className="size-4 shrink-0 md:size-[1.125rem]" strokeWidth={2} />
          </a>
        </div>

        <div className="col-start-2 row-start-1 flex items-center justify-self-end md:hidden">
          <details className="relative [&_summary::-webkit-details-marker]:hidden">
            <summary className="inline-flex list-none cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2.5 text-white backdrop-blur-md transition hover:border-white/30">
              <Menu className="size-5" strokeWidth={1.8} />
              <span className="sr-only">Open navigation</span>
            </summary>

            <div className="absolute right-0 top-12 w-[min(16rem,calc(100vw-2rem))] rounded-xl border border-gray-800 bg-gray-950/95 p-3 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-3 border-t border-gray-800 pt-3">
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
