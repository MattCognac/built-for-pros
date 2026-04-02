import { processSteps } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { renderProcessIcon } from "@/components/sections/section-icons";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="anchor-target section-shell bg-gray-50"
    >
      <div className="content-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="How it works"
            title="From call to launch."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand)] text-white shadow-[0_8px_24px_-8px_rgb(249_99_2_/_0.35)]">
                    {renderProcessIcon(step.icon)}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Step {index + 1}
                  </p>
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
