import { services } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { renderServiceIcon } from "@/components/sections/section-icons";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ServicesSection() {
  return (
    <section id="services" className="anchor-target section-shell">
      <div className="content-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Services"
            title="The full system behind your lead flow."
            description="From your website to ads and reviews — one coordinated system, tuned every month."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-14 grid items-stretch gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full min-h-0 flex-col bg-white p-7 transition-colors hover:bg-gray-50"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                  {renderServiceIcon(service.icon)}
                </div>
                <h3 className="mt-5 shrink-0 text-lg font-bold text-gray-950">
                  {service.title}
                </h3>
                <p className="mt-2 min-h-0 flex-1 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
