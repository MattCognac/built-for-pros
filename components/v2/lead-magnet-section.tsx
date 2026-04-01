import { leadMagnet } from "@/content/site";
import { V2LeadForm } from "@/components/v2/lead-form";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function V2LeadMagnetSection() {
  return (
    <section
      id="lead-magnet"
      className="anchor-target border-t border-white/[0.05] bg-[var(--v2-canvas-soft)] px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal animation="fade-left">
            <div>
              <p className="eyebrow">
                Free guide
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
                {leadMagnet.title}
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-8 text-zinc-400">
                {leadMagnet.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={150}>
            <div className="rounded-2xl border border-white/[0.08] bg-[var(--v2-elevated)] p-6 shadow-[0_24px_48px_-24px_rgb(0_0_0_/_0.5)] sm:p-8">
              <V2LeadForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
