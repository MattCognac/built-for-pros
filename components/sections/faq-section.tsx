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
            title="Straight answers, no back-and-forth."
            align="center"
          />
        </ScrollReveal>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3">
          {faqItems.map((item, index) => (
            <ScrollReveal key={item.question} delay={index * 80}>
              <details className="group rounded-xl border border-gray-200 bg-white">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 text-base font-semibold text-gray-950 [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="mt-0.5 shrink-0 text-[color:var(--brand)] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-base leading-7 text-gray-600">
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
