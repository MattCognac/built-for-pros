import { processSteps } from "@/content/site";
import { renderProcessIcon } from "@/components/sections/section-icons";
import { V2SectionHeading } from "@/components/v2/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function V2HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="anchor-target border-t border-white/[0.05] bg-[var(--v2-canvas-soft)] px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <V2SectionHeading
            eyebrow="How it works"
            title="From call to launch."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[var(--v2-elevated)] p-6 shadow-[0_1px_0_rgb(255_255_255_/_0.04)_inset] sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand)] text-white shadow-[var(--v2-icon-main-shadow)]">
                    {renderProcessIcon(step.icon)}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Step {index + 1}
                  </p>
                </div>
                <h3 className="mt-5 text-lg font-bold text-zinc-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-zinc-400">
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
