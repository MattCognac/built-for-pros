import { valueProposition } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ValuePropositionSection() {
  return (
    <section className="section-shell">
      <div className="content-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow={valueProposition.eyebrow}
            title={valueProposition.title}
            description={valueProposition.description}
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-14 grid overflow-hidden rounded-2xl lg:grid-cols-2">
            <div className="bg-gray-50 p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-950">
                You focus on
              </p>
              <ul className="mt-6 grid gap-4">
                {valueProposition.contractorFocus.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-lg text-gray-700"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-950 p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--brand)]">
                We handle
              </p>
              <ul className="mt-6 grid gap-4">
                {valueProposition.ourFocus.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-lg text-gray-300"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-[color:var(--brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
