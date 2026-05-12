import { ServicesGrid } from "@/components/sections/services-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="anchor-target section-shell border-t border-[color:var(--border-subtle)]"
    >
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
          <ServicesGrid />
        </ScrollReveal>
      </div>
    </section>
  );
}
