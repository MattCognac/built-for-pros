import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { v2HeroContent, siteConfig } from "@/content/site";
import { HeroWebsiteMockup } from "@/components/sections/hero-website-mockup";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RotatingText } from "@/components/ui/rotating-text";

export function HeroSection() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-gray-950">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-[0.32]"
        sizes="100vw"
      />

      <div className="pointer-events-none absolute inset-0 bg-gray-950/60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(249_99_2_/_0.12),transparent_65%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-28 text-left sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,400px)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(280px,440px)] xl:gap-16">
        <div className="min-w-0 max-w-2xl lg:max-w-none">
          <ScrollReveal animation="fade-in">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
              Contractor Marketing, Simplified
            </p>
            <h1 className="text-pretty text-[2.3rem] font-bold leading-[1.14] tracking-tight text-white sm:text-[3.1rem] md:text-[3.35rem] lg:text-[3.55rem] xl:text-[3.75rem]">
              <span className="block">We help <RotatingText /></span>
              <span className="block">book more customers.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              {v2HeroContent.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={420}>
            <div className="mt-9 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center">
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
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition hover:border-white/40 sm:px-8"
              >
                Learn more
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          delay={280}
          animation="fade-left"
          className="flex justify-center lg:justify-end"
        >
          <HeroWebsiteMockup />
        </ScrollReveal>
      </div>
    </section>
  );
}
