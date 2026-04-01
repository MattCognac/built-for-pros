import { ArrowRight } from "lucide-react";

import { pricingPlans, siteConfig } from "@/content/site";
import { V2SectionHeading } from "@/components/v2/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function V2PricingSection() {
  return (
    <section
      id="pricing"
      className="anchor-target border-t border-white/[0.05] bg-[var(--v2-canvas-soft)] px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <V2SectionHeading
            eyebrow="Pricing"
            title="You're one choice away from a pipeline that delivers."
            description="We've built flexible plans that are designed to support your business wherever it's at."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 120}>
              <div
                className={`flex h-full flex-col rounded-2xl p-7 sm:p-8 ${
                  plan.featured
                    ? "relative border border-[color:var(--brand)]/35 bg-[var(--v2-elevated)] text-zinc-50 shadow-[0_0_0_1px_rgb(249_99_2_/_0.12),0_24px_48px_-16px_rgb(0_0_0_/_0.55)]"
                    : "border border-white/[0.07] bg-[var(--v2-elevated-deep)] text-zinc-50 shadow-[0_1px_0_rgb(255_255_255_/_0.04)_inset] transition hover:border-white/[0.1]"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--brand)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
                    Popular
                  </span>
                ) : null}

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    {plan.name}
                  </p>
                  <div className="mt-3 flex flex-wrap items-baseline gap-2">
                    <p className="text-4xl font-bold tracking-tight text-[color:var(--brand)]">
                      {plan.price}
                    </p>
                    {plan.priceSuffix ? (
                      <span className="rounded-md border border-white/[0.1] bg-white/[0.04] px-2 py-0.5 text-[0.65rem] font-semibold leading-none tracking-wide text-zinc-400">
                        {plan.priceSuffix}
                      </span>
                    ) : null}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {plan.summary}
                </p>

                <ul className="mt-6 grid gap-2.5">
                  {plan.features.map((feature, i) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm leading-6 ${
                        i === 0
                          ? "font-semibold text-zinc-100"
                          : "text-zinc-300"
                      }`}
                    >
                      <span className="shrink-0 font-medium text-[color:var(--brand)]">
                        +
                      </span>
                      <span className="min-w-0 flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <a
                    href={siteConfig.primaryCtaHref}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                      plan.featured
                        ? "bg-[color:var(--brand)] text-white shadow-[0_2px_0_rgb(0_0_0_/_0.12)] hover:bg-[color:var(--brand-strong)]"
                        : "border border-white/[0.14] text-zinc-100 hover:border-white/25 hover:bg-white/[0.05]"
                    }`}
                  >
                    {siteConfig.primaryCtaLabel}
                    <ArrowRight className="size-4" strokeWidth={2} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200} animation="fade-in">
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-7 text-zinc-500">
            12-month commitment, no setup fees. Accelerator ad spend paid
            directly to Google (recommended $200–300/mo). Most clients see
            their plan pay for itself with a single job.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
