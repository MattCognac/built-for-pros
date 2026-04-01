import { leadMagnet } from "@/content/site";
import { LeadForm } from "@/components/ui/lead-form";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function LeadMagnetSection() {
  return (
    <section
      id="lead-magnet"
      className="anchor-target section-shell bg-gray-950"
    >
      <div className="content-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal animation="fade-left">
            <div>
              <p className="eyebrow">
                Free guide
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {leadMagnet.title}
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-8 text-gray-400">
                {leadMagnet.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={150}>
            <div className="rounded-2xl bg-white p-6 sm:p-8">
              <LeadForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
