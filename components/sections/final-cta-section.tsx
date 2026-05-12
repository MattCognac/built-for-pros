import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { siteConfig } from "@/content/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const defaultImageSrc =
  "https://images.unsplash.com/photo-1575839127400-6b9e36bf97f8?auto=format&fit=crop&w=2400&q=80";

const defaultImageAlt =
  "Assorted tools in a workshop representing hands-on trade expertise";

const defaultTitle = (
  <>
    Stop chasing leads.
    <br />
    <span className="text-[color:var(--brand)]">Start booking jobs.</span>
  </>
);

const defaultDescription =
  "Schedule your free 15-minute growth audit. We'll look at your current presence and show you exactly what's missing from your pipeline.";

type FinalCtaSectionProps = {
  title?: ReactNode;
  description?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function FinalCtaSection({
  title = defaultTitle,
  description = defaultDescription,
  ctaLabel = "Let's Talk Growth",
  ctaHref = siteConfig.primaryCtaHref,
  imageSrc = defaultImageSrc,
  imageAlt = defaultImageAlt,
}: FinalCtaSectionProps = {}) {
  return (
    <section className="relative overflow-hidden border-t border-[color:var(--feature-border-subtle)] px-5 py-24 sm:px-8 md:py-32">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center opacity-[0.26]"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--feature-canvas)] via-[var(--feature-canvas)]/85 to-[var(--feature-canvas)]/55" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--feature-canvas)] to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[color:var(--feature-fg)] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[color:var(--feature-muted)]">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10 flex justify-center">
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-bold text-white shadow-[0_2px_0_rgb(0_0_0_/_0.15)] transition hover:bg-[color:var(--brand-strong)] active:translate-y-px sm:w-auto sm:px-8"
            >
              {ctaLabel}
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
