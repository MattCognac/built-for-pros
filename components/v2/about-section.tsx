import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { founderStory, siteConfig } from "@/content/site";
import { V2SectionHeading } from "@/components/v2/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stats = [
  { value: "10+", label: "Years in the trades" },
  { value: "100%", label: "Hands-on, every client" },
  { value: "24/7", label: "Site monitoring" },
] as const;

export function V2AboutSection() {
  return (
    <section id="about" className="anchor-target px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <ScrollReveal animation="fade-left">
            <div>
              <V2SectionHeading
                eyebrow="About"
                title={
                  <>
                    The &ldquo;Built for Pros&rdquo;
                    <br />
                    Mission
                  </>
                }
                align="left"
              />

              <div className="mt-8 grid gap-5 text-lg leading-8 text-zinc-300">
                {founderStory.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <blockquote className="mt-8 rounded-r-xl border-l-2 border-[color:var(--brand)] bg-white/[0.02] py-1 pl-5 text-base italic leading-7 text-zinc-400">
                &ldquo;The good contractors don&rsquo;t need another agency.
                They need one person who gets it and handles the whole
                thing.&rdquo;
              </blockquote>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/[0.06] pt-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold tabular-nums text-zinc-50">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={150}>
            <aside className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[var(--v2-elevated)] shadow-[0_1px_0_rgb(255_255_255_/_0.04)_inset]">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/founder.png"
                  alt="Matt Hennessy, founder of Built for Pros"
                  width={576}
                  height={576}
                  className="size-full object-cover"
                />
              </div>

              <div className="p-7">
                <p className="eyebrow">
                  Why it works
                </p>
                <div className="mt-5 grid gap-4">
                  {[
                    "You work directly with me.",
                    "Professional from day one.",
                    "Designed to stay simple on your side.",
                  ].map((item) => (
                    <p
                      key={item}
                      className="border-l-2 border-[color:var(--brand)]/80 pl-4 text-sm leading-6 text-zinc-300"
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
