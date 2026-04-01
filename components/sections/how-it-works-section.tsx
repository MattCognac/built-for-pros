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
            title={<>You run your crew.<br />We run your marketing.</>}
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 120}>
              <div className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[color:var(--brand)] text-white">
                  {renderProcessIcon(step.icon)}
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-gray-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
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
