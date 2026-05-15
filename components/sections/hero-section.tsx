import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { HeroLockScreenPhone } from "@/components/sections/hero-lock-screen-phone";
import { RotatingText } from "@/components/ui/rotating-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { siteConfig, type HeroLayout, type HeroVariant } from "@/content/site";

type HeroSectionProps = {
  variant: HeroVariant;
};

function getContentClassName(layout: HeroLayout): string {
  switch (layout) {
    case "split":
      return "relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-20 pt-28 text-left sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 lg:px-12 xl:px-16";
    case "centered":
      return "relative z-10 mx-auto flex min-h-dvh w-full max-w-7xl flex-col items-center justify-center px-5 pb-20 pt-28 text-center sm:px-8 lg:px-12 xl:px-16";
    default: {
      const exhaustiveCheck: never = layout;
      return exhaustiveCheck;
    }
  }
}

function getCopyClassName(layout: HeroLayout): string {
  switch (layout) {
    case "split":
      return "max-w-2xl";
    case "centered":
      return "mx-auto max-w-6xl";
    default: {
      const exhaustiveCheck: never = layout;
      return exhaustiveCheck;
    }
  }
}

function getTitleClassName(layout: HeroLayout): string {
  const baseClassName =
    "flex flex-col gap-1 text-pretty font-bold leading-[1.08] tracking-tight text-[color:var(--hero-fg)]";

  switch (layout) {
    case "split":
      return `${baseClassName} text-[2.45rem] sm:text-[3.15rem] md:text-[3.35rem] lg:text-[3.55rem] xl:text-[3.75rem]`;
    case "centered":
      return `${baseClassName} text-[2.7rem] sm:text-[4.2rem] md:text-[5rem] lg:text-[5.75rem]`;
    default: {
      const exhaustiveCheck: never = layout;
      return exhaustiveCheck;
    }
  }
}

function getDescriptionClassName(layout: HeroLayout): string {
  const baseClassName =
    "mt-5 text-base leading-relaxed text-[color:var(--hero-muted)] sm:text-lg";

  switch (layout) {
    case "split":
      return `${baseClassName} max-w-2xl`;
    case "centered":
      return `${baseClassName} mx-auto max-w-2xl`;
    default: {
      const exhaustiveCheck: never = layout;
      return exhaustiveCheck;
    }
  }
}

function getCtaGroupClassName(layout: HeroLayout): string {
  switch (layout) {
    case "split":
      return "mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center";
    case "centered":
      return "mt-8 flex flex-col justify-center gap-3.5 sm:flex-row sm:items-center";
    default: {
      const exhaustiveCheck: never = layout;
      return exhaustiveCheck;
    }
  }
}

function HeroTitle({ variant }: HeroSectionProps) {
  if (variant.layout === "split") {
    return (
      <>
        <span className="min-w-0">
          We help <RotatingText />
        </span>
        <span className="min-w-0">book more customers.</span>
      </>
    );
  }

  return variant.titleLines?.map((line) => (
    <span key={line} className="min-w-0 md:whitespace-nowrap">
      {line}
    </span>
  ));
}

export function HeroSection({ variant }: HeroSectionProps) {
  return (
    <section
      className="hero-section relative flex min-h-dvh items-center overflow-hidden bg-[color:var(--hero-canvas)]"
      data-hero-variant={variant.id}
    >
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-[0.32]"
        sizes="100vw"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--hero-canvas)] via-[var(--hero-canvas)]/88 to-[var(--hero-canvas)]/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--hero-canvas)] via-transparent to-[var(--hero-canvas)]/40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(249_99_2_/_0.12),transparent_65%)]" />

      <div className={getContentClassName(variant.layout)}>
        <div className={getCopyClassName(variant.layout)}>
          <ScrollReveal animation="fade-in">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
              {variant.eyebrow}
            </p>
            <h1 className={getTitleClassName(variant.layout)}>
              <HeroTitle variant={variant} />
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p className={getDescriptionClassName(variant.layout)}>{variant.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={420}>
            <div className={getCtaGroupClassName(variant.layout)}>
              <a
                href={siteConfig.heroSecondaryCtaHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white shadow-[0_1px_0_rgb(255_255_255_/_0.04)_inset] transition hover:border-white/40 hover:bg-white/10 sm:px-8"
              >
                {siteConfig.heroSecondaryCtaLabel}
              </a>
              <a
                href={siteConfig.primaryCtaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-bold text-white shadow-[0_2px_0_rgb(0_0_0_/_0.15)] transition hover:bg-[color:var(--brand-strong)] active:translate-y-px sm:px-8"
              >
                {siteConfig.heroPrimaryCtaLabel}
                <ArrowRight className="size-4" strokeWidth={2.5} />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {variant.layout === "split" ? (
          <ScrollReveal
            delay={580}
            animation="fade-left"
            className="hidden md:block md:justify-self-center lg:justify-self-end"
          >
            <HeroLockScreenPhone />
          </ScrollReveal>
        ) : null}
      </div>
    </section>
  );
}
