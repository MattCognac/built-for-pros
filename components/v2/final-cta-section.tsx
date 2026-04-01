import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/content/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function V2FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.05] px-5 py-24 sm:px-8 md:py-32">
      <Image
        src="/cta-steel.jpg"
        alt=""
        fill
        className="object-cover opacity-[0.22]"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--v2-canvas)] via-[var(--v2-canvas)]/85 to-[var(--v2-canvas)]/55" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--v2-canvas)] to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
            Stop chasing leads.
            <br />
            <span className="text-[color:var(--brand)]">
              Start booking jobs.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Schedule your free 15-minute growth audit. We&apos;ll look at your
            current presence and show you exactly what&apos;s missing from your
            pipeline.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10 flex justify-center">
            <a
              href={siteConfig.primaryCtaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-bold text-white shadow-[0_2px_0_rgb(0_0_0_/_0.15)] transition hover:bg-[color:var(--brand-strong)] active:translate-y-px sm:w-auto sm:px-8"
            >
              Let&apos;s Talk Growth
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
