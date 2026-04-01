import { v2WhyItMatters } from "@/content/site";
import { WhyItMattersStatGrid } from "@/components/v2/why-it-matters-stat-grid";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function V2WhyItMattersSection() {
  return (
    <section
      id="why-it-matters"
      className="anchor-target border-t border-white/[0.05] px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center xl:gap-16">
        {/* Stats (left) */}
        <ScrollReveal>
          <WhyItMattersStatGrid />
        </ScrollReveal>

        {/* Copy (right) */}
        <div>
          <ScrollReveal delay={120}>
            <p className="eyebrow">
              {v2WhyItMatters.eyebrow}
            </p>
            <h2 className="mt-3 text-pretty text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
              {v2WhyItMatters.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-6 space-y-4 text-lg leading-8 text-zinc-400">
              {v2WhyItMatters.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
