import { whyItMatters } from "@/content/site";
import { WhyItMattersStatGrid } from "@/components/sections/why-it-matters-stat-grid";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function WhyItMattersSection() {
  return (
    <section
      id="why-it-matters"
      className="anchor-target section-shell border-t border-[color:var(--border-subtle)]"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center xl:gap-16">
        <ScrollReveal>
          <WhyItMattersStatGrid />
        </ScrollReveal>

        <div>
          <ScrollReveal delay={120}>
            <p className="eyebrow">
              {whyItMatters.eyebrow}
            </p>
            <h2 className="mt-3 text-pretty text-3xl font-bold tracking-tight text-[color:var(--fg)] sm:text-4xl lg:text-5xl">
              {whyItMatters.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-6 space-y-4 text-lg leading-8 text-[color:var(--muted)]">
              {whyItMatters.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
