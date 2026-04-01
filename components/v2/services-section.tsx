import { V2ServicesGrid } from "@/components/v2/services-grid";
import { V2SectionHeading } from "@/components/v2/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function V2ServicesSection() {
  return (
    <section
      id="services"
      className="anchor-target border-t border-white/[0.05] px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <V2SectionHeading
            eyebrow="Services"
            title="The full system behind your lead flow."
            description="From your website to ads and reviews — one coordinated system, tuned every month."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <V2ServicesGrid />
        </ScrollReveal>
      </div>
    </section>
  );
}
