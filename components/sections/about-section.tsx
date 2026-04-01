import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { founderStory, siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function AboutSection() {
  return (
    <section id="about" className="anchor-target section-shell">
      <div className="content-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <ScrollReveal animation="fade-left">
            <div>
              <SectionHeading
                eyebrow="About"
                title="Built by someone who understands contractor work."
              />

              <div className="mt-8 grid gap-5 text-lg leading-8 text-gray-600">
                {founderStory.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={150}>
            <aside className="overflow-hidden rounded-2xl bg-gray-950 text-white">
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
                  {[
                    "You work directly with me.",
                    "Professional from day one.",
                    "Designed to stay simple on your side.",
                  ].map((item) => (
                    <p
                      key={item}
                      className="border-l-2 border-[color:var(--brand)] pl-4 text-sm leading-6 text-gray-300"
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
