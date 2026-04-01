import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/content/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FinalCtaSection() {
  return (
    <section className="section-shell">
      <div className="content-shell">
        <ScrollReveal>
          <div className="rounded-2xl bg-[color:var(--brand)] px-8 py-14 text-center text-white sm:px-12 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Let&apos;s talk
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to start getting the calls you deserve?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
              No pressure, no pitch deck — just an honest conversation about
              whether this is the right fit.
            </p>

            <div className="mt-10">
              <a
                href={siteConfig.primaryCtaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-gray-950 transition hover:bg-gray-100"
              >
                {siteConfig.primaryCtaLabel}
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
