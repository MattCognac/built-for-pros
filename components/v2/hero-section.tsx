import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { HeroLockScreenPhone } from "@/components/v2/hero-lock-screen-phone";
import { v2HeroContent, siteConfig } from "@/content/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function V2HeroSection() {
  return (
    <section className="v2-hero relative flex min-h-dvh items-center overflow-hidden bg-[var(--v2-canvas)]">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-[0.32]"
        sizes="100vw"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--v2-canvas)] via-[var(--v2-canvas)]/88 to-[var(--v2-canvas)]/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--v2-canvas)] via-transparent to-[var(--v2-canvas)]/40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(249_99_2_/_0.12),transparent_65%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 lg:px-12 xl:px-16">
        <div className="max-w-2xl">
          <ScrollReveal animation="fade-in">
            <h1 className="flex flex-col gap-1 text-pretty text-[2.3rem] font-bold leading-[1.14] tracking-tight text-zinc-50 sm:text-[3.1rem] md:text-[3.35rem] lg:text-[3.55rem] xl:text-[3.75rem]">
              <span className="min-w-0">{v2HeroContent.titleLine1}</span>
              <span className="min-w-0 text-[color:var(--brand)]">
                {v2HeroContent.titleLine2Lead}
                {v2HeroContent.titleEmphasis}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {v2HeroContent.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={420}>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={siteConfig.primaryCtaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-bold text-white shadow-[0_2px_0_rgb(0_0_0_/_0.15)] transition hover:bg-[color:var(--brand-strong)] active:translate-y-px sm:px-8"
              >
                Let&apos;s Talk Growth
                <ArrowRight className="size-4" strokeWidth={2.5} />
              </a>
              <a
                href="#why-it-matters"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-7 text-sm font-semibold text-zinc-200 shadow-[0_1px_0_rgb(255_255_255_/_0.04)_inset] transition hover:border-white/[0.18] hover:bg-white/[0.07] hover:text-white sm:px-8"
              >
                Learn more
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          delay={580}
          animation="fade-left"
          className="hidden md:block md:justify-self-center lg:justify-self-end"
        >
          <HeroLockScreenPhone />
        </ScrollReveal>
      </div>
    </section>
  );
}
