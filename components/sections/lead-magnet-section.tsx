import { leadMagnet } from "@/content/site";
import { LeadForm } from "@/components/ui/lead-form";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function LeadMagnetSection() {
  return (
    <section
      id="lead-magnet"
      className="anchor-target section-shell border-t border-[color:var(--feature-border-subtle)] bg-[color:var(--feature-canvas)]"
    >
      <div className="content-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal animation="fade-left">
            <div>
              <p className="eyebrow">
                Free guide
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[color:var(--feature-fg)] sm:text-4xl lg:text-5xl">
                {leadMagnet.title}
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-8 text-[color:var(--feature-muted)]">
                {leadMagnet.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={150}>
            <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--elevated)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <LeadForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
