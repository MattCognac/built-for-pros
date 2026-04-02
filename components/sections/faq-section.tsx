import { faqItems } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FaqSection() {
  return (
    <section id="faq" className="anchor-target section-shell bg-gray-50">
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
              <details className="group rounded-xl border border-gray-200 bg-white transition hover:border-gray-300 open:border-gray-300">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 text-base font-semibold text-gray-950 [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-sm font-medium text-[color:var(--brand)] transition group-open:rotate-45 group-open:border-[color:var(--brand)]/30">
                    +
                  </span>
                </summary>
                <p className="border-t border-gray-100 px-6 pb-5 pt-4 text-base leading-7 text-gray-600">
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
