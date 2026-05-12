"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { foundingOffer, navItems, siteConfig } from "@/content/site";
import {
  DEFAULT_HERO_VARIANT_ID,
  HERO_VARIANT_COOKIE,
  isHeroVariantId,
  type HeroVariantId,
} from "@/lib/hero-test";

const GLASS_SCROLL_START = 0.02;
const GLASS_SCROLL_END = 0.05;

const GLASS_BG_ALPHA = 0.92;

const desktopNavLinkClassName =
  "rounded-full px-3 py-2 text-sm font-medium text-[color:var(--header-muted)] transition hover:text-[color:var(--header-fg)] md:px-4";

const ctaClassName =
  "inline-flex min-w-0 items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] text-sm font-semibold text-white shadow-[0_1px_0_rgb(0_0_0_/_0.2)] transition hover:bg-[color:var(--brand-strong)]";

function getCookieValue(name: string): string | undefined {
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split("=")[1];
}

function getStoredHeroVariant(): HeroVariantId {
  const value = getCookieValue(HERO_VARIANT_COOKIE);
  return isHeroVariantId(value) ? value : DEFAULT_HERO_VARIANT_ID;
}

function getNextHeroVariant(value: HeroVariantId): HeroVariantId {
  return value === "main" ? "secondary" : "main";
}

function glassProgress(scrollY: number, viewportHeight: number): number {
  const startPx = viewportHeight * GLASS_SCROLL_START;
  const endPx = viewportHeight * GLASS_SCROLL_END;
  const spanPx = Math.max(1, endPx - startPx);
  if (scrollY <= startPx) return 0;
  if (scrollY >= endPx) return 1;
  return (scrollY - startPx) / spanPx;
}

function PartnerDealBar() {
  const spotsLabel = `${foundingOffer.spotsRemaining} of ${foundingOffer.spotsTotal} spots left`;

  return (
    <a
      href={siteConfig.primaryCtaHref}
      target="_blank"
      rel="noreferrer"
      className="group block border-b border-white/15 bg-[color:var(--brand)] text-white transition hover:bg-[color:var(--brand-strong)]"
      aria-label={`Schedule a call for the partner deal: ${foundingOffer.price}, normally ${foundingOffer.originalPrice}. ${spotsLabel}.`}
    >
      <div className="mx-auto flex min-h-10 w-full max-w-none items-center justify-center gap-2 px-5 py-2 text-center text-xs font-semibold sm:px-8 sm:text-sm lg:px-12 xl:px-16">
        <span className="hidden rounded-full bg-white/18 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] sm:inline-flex">
          Partner deal
        </span>
        <span className="min-w-0">
          <span className="font-bold">Accelerator for {foundingOffer.price}</span>
          <span className="hidden sm:inline">
            {" "}
            instead of {foundingOffer.originalPrice}
          </span>
          <span className="mx-2 text-white/55">|</span>
          <span>{spotsLabel}</span>
        </span>
        <span className="hidden items-center gap-1 whitespace-nowrap text-white/90 transition group-hover:translate-x-0.5 md:inline-flex">
          Schedule call
          <ArrowRight className="size-3.5" strokeWidth={2.4} />
        </span>
      </div>
    </a>
  );
}

type SiteHeaderVariant = "default" | "partner";

type SiteHeaderProps = {
  variant?: SiteHeaderVariant;
};

export function SiteHeader({ variant = "default" }: SiteHeaderProps = {}) {
  const [p, setP] = useState(0);
  const isPartner = variant === "partner";
  const ctaLabel = isPartner ? "Claim a Spot" : siteConfig.primaryCtaLabel;

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

  const handleHeroToggle = () => {
    const nextVariant = getNextHeroVariant(getStoredHeroVariant());
    const url = new URL(window.location.href);
    url.pathname = "/";
    url.searchParams.set("hero", nextVariant);
    url.hash = "";
    window.location.assign(url.toString());
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--header-border)]"
      style={{
        backgroundColor: `rgb(var(--header-tint) / ${GLASS_BG_ALPHA * p})`,
        boxShadow:
          p > 0 ? `0 12px 40px rgb(0 0 0 / ${0.35 * p})` : "none",
        backdropFilter: `blur(${18 * p}px) saturate(${100 + 40 * p}%)`,
        WebkitBackdropFilter: `blur(${18 * p}px) saturate(${100 + 40 * p}%)`,
      }}
    >
      {isPartner ? null : <PartnerDealBar />}
      <div className="mx-auto grid h-16 w-full max-w-none grid-cols-[1fr_auto] items-center gap-x-4 px-5 sm:px-8 md:h-[4.5rem] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-8 lg:px-12 xl:px-16">
        <div className="col-start-1 row-start-1 flex items-center gap-2 justify-self-start">
          <Link href="/" className="transition-opacity hover:opacity-85">
            <BrandLogo className="text-sm tracking-[0.14em] text-[color:var(--header-fg)] md:text-base lg:text-[1.0625rem]" />
          </Link>
          {isPartner ? null : (
            <button
              type="button"
              onClick={handleHeroToggle}
              className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              title="Switch hero variant"
            >
              Hero
            </button>
          )}
        </div>

        {isPartner ? null : (
          <nav className="col-start-2 row-start-1 hidden min-w-0 items-center justify-center gap-0.5 md:flex lg:gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={desktopNavLinkClassName}>
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <div className="col-start-3 row-start-1 hidden justify-self-end md:block">
          <a
            href={siteConfig.primaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className={`${ctaClassName} px-6 py-2.5 md:px-8 md:py-3 lg:px-10`}
          >
            {ctaLabel}
            <ArrowUpRight className="size-4 shrink-0 md:size-[1.125rem]" strokeWidth={2} />
          </a>
        </div>

        <div className="col-start-2 row-start-1 flex items-center justify-self-end md:hidden">
          {isPartner ? (
            <a
              href={siteConfig.primaryCtaHref}
              target="_blank"
              rel="noreferrer"
              className={`${ctaClassName} px-4 py-2`}
            >
              {ctaLabel}
              <ArrowUpRight className="size-4" strokeWidth={2} />
            </a>
          ) : (
            <details className="relative [&_summary::-webkit-details-marker]:hidden">
              <summary className="inline-flex list-none cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2.5 text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/10">
                <Menu className="size-5" strokeWidth={1.8} />
                <span className="sr-only">Open navigation</span>
              </summary>

              <div className="absolute right-0 top-12 w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-gray-950/95 p-3 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col gap-0.5">
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

                <div className="mt-3 border-t border-white/10 pt-3">
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
          )}
        </div>
      </div>
    </header>
  );
}
