import { faqItems } from "@/content/site";
import { V2SectionHeading } from "@/components/v2/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function V2FaqSection() {
  return (
    <section id="faq" className="anchor-target px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <V2SectionHeading eyebrow="FAQ" title="What to expect from us." />
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-3">
          {faqItems.map((item, index) => (
            <ScrollReveal key={item.question} delay={index * 80}>
              <details className="group rounded-xl border border-white/[0.07] bg-[var(--v2-elevated-deep)] transition hover:border-white/[0.11] open:border-white/[0.12] open:bg-[var(--v2-elevated)]">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 text-base font-semibold text-zinc-100 [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-sm font-medium text-[color:var(--brand)] transition group-open:rotate-45 group-open:border-[color:var(--brand)]/30">
                    +
                  </span>
                </summary>
                <p className="border-t border-white/[0.05] px-6 pb-5 pt-4 text-base leading-7 text-zinc-400">
                  {item.answer}
                </p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
