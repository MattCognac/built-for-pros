import { ArrowRight } from "lucide-react";

import { heroContent, siteConfig } from "@/content/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function HeroSection() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center bg-gray-950 px-5 pb-20 pt-28 sm:px-8 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,99,2,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl py-20 text-center">
        <ScrollReveal animation="fade-in">
          <h1 className="flex flex-col items-center gap-1 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="min-w-0">{heroContent.titleLine1}</span>
            <span className="min-w-0">
              {heroContent.titleLine2Lead}
              <span className="text-[color:var(--brand)]">
                {heroContent.titleEmphasis}
              </span>
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-8 text-gray-400">
            {heroContent.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={280}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={siteConfig.primaryCtaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-8 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-strong)]"
            >
              {siteConfig.primaryCtaLabel}
              <ArrowRight className="size-4" strokeWidth={2} />
            </a>
            <a
              href="#lead-magnet"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-medium text-white transition hover:border-white/40"
            >
              Get the Free Guide
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
