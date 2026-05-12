import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { founderStory, siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stats = [
  { value: "10+", label: "Years in the trades" },
  { value: "100%", label: "Hands-on, every client" },
  { value: "24/7", label: "Site monitoring" },
] as const;

const aboutHighlights = [
  "You work directly with me.",
  "Professional from day one.",
  "Designed to stay simple on your side.",
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="anchor-target section-shell border-t border-[color:var(--border-subtle)]"
    >
      <div className="content-shell">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <ScrollReveal animation="fade-left">
            <div>
              <SectionHeading
                eyebrow="About"
                title={
                  <>
                    The &ldquo;Built for Pros&rdquo;
                    <br />
                    Mission
                  </>
                }
              />

              <div className="mt-8 grid gap-5 text-lg leading-8 text-[color:var(--muted)]">
                {founderStory.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <blockquote className="mt-8 rounded-r-xl border-l-2 border-[color:var(--brand)] bg-[color:var(--about-quote-bg)] py-4 pl-5 pr-5 text-base italic leading-7 text-[color:var(--about-quote-text)]">
                &ldquo;The good contractors don&rsquo;t need another agency.
                They need one person who gets it and handles the whole
                thing.&rdquo;
              </blockquote>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[color:var(--border-subtle)] pt-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold tabular-nums text-[color:var(--fg)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[color:var(--faint)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={150}>
            <aside className="overflow-hidden rounded-2xl border border-[color:var(--about-card-border)] bg-[color:var(--about-card-bg)] shadow-[var(--about-card-shadow)]">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/founder.png"
                  alt="Matt Hennessy, founder of Built for Pros"
                  width={576}
                  height={576}
                  className="size-full object-cover"
                  priority={false}
                />
              </div>

              <div className="p-7">
                <p className="eyebrow">
                  Why it works
                </p>
                <div className="mt-5 grid gap-4">
                  {aboutHighlights.map((item) => (
                    <p
                      key={item}
                      className="border-l-2 border-[color:var(--brand)]/80 pl-4 text-sm leading-6 text-[color:var(--about-card-muted)]"
                    >
                      {item}
                    </p>
                  ))}
                </div>

                <a
                  href={siteConfig.primaryCtaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-strong)]"
                >
                  {siteConfig.primaryCtaLabel}
                  <ArrowRight className="size-4" strokeWidth={2} />
                </a>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
