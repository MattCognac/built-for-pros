import { faqItems } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="anchor-target section-shell border-t border-[color:var(--border-subtle)] bg-[color:var(--canvas-soft)]"
    >
      <div className="content-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="What to expect from us."
            align="center"
          />
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-3">
          {faqItems.map((item, index) => (
            <ScrollReveal key={item.question} delay={index * 80}>
              <details className="group rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--elevated-deep)] transition hover:border-[color:var(--border-hover)] open:border-[color:var(--border-hover)] open:bg-[color:var(--elevated)]">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 text-base font-semibold text-[color:var(--fg)] [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--elevated)] text-sm font-medium text-[color:var(--brand)] transition group-open:rotate-45 group-open:border-[color:var(--brand)]/30">
                    +
                  </span>
                </summary>
                <p className="border-t border-[color:var(--border-subtle)] px-6 pb-5 pt-4 text-base leading-7 text-[color:var(--muted)]">
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
