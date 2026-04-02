import { ArrowRight } from "lucide-react";

import { pricingPlans, siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="anchor-target section-shell bg-gray-950 text-white"
    >
      <div className="content-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Pricing"
            title="You're one choice away from a pipeline that delivers."
            description="We've built flexible plans that are designed to support your business wherever it's at."
            align="center"
            light
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 120}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-7 sm:p-8 ${
                  plan.featured
                    ? "border border-[color:var(--brand)] bg-white text-gray-950 shadow-[0_0_0_1px_rgb(249_99_2_/_0.12),0_24px_48px_-16px_rgb(0_0_0_/_0.35)]"
                    : "border border-gray-800 bg-gray-900 text-white"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--brand)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
                    Popular
                  </span>
                ) : null}

                <div>
                  <p
                    className={`text-sm font-semibold uppercase tracking-wider ${
                      plan.featured ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <div className="mt-3 flex flex-wrap items-baseline gap-2">
                    <p className="text-4xl font-bold tracking-tight text-[color:var(--brand)]">
                      {plan.price}
                    </p>
                    {plan.priceSuffix ? (
                      <span
                        className={`rounded-md border px-2 py-0.5 text-[0.65rem] font-semibold leading-none tracking-wide ${
                          plan.featured
                            ? "border-gray-200 bg-gray-50 text-gray-500"
                            : "border-gray-600/80 bg-gray-800/50 text-gray-400"
                        }`}
                      >
                        {plan.priceSuffix}
                      </span>
                    ) : null}
                  </div>
                </div>

                <p
                  className={`mt-4 text-sm leading-6 ${plan.featured ? "text-gray-600" : "text-gray-400"}`}
                >
                  {plan.summary}
                </p>

                <ul className="mt-6 grid gap-2.5">
                  {plan.features.map((feature, i) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm leading-6 ${
                        i === 0
                          ? plan.featured
                            ? "font-semibold text-gray-950"
                            : "font-semibold text-white"
                          : plan.featured
                            ? "text-gray-700"
                            : "text-gray-300"
                      }`}
                    >
                      <span className="shrink-0 text-[color:var(--brand)]">
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
                        ? "bg-[color:var(--brand)] text-white hover:bg-[color:var(--brand-strong)]"
                        : "border border-gray-700 text-white hover:border-gray-500 hover:bg-gray-800"
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
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-7 text-gray-500">
            12-month commitment, no setup fees. Accelerator ad spend paid
            directly to Google (recommended $200–300/mo). Most clients see
            their plan pay for itself with a single job.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
