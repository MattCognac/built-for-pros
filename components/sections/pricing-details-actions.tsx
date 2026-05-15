"use client";

import { Fragment, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, ChevronDown, CircleHelp, Minus, X } from "lucide-react";

import {
  adsBoltOn,
  pricingComparisonGroups,
  pricingPlans,
  siteConfig,
  type PricingComparisonCell,
} from "@/content/site";

const comparisonGroups = pricingComparisonGroups.filter(
  (group) => group.category !== "Ads Add-On",
);

const pricingFeatureDescriptions = new Map(
  pricingPlans.flatMap((plan) =>
    plan.features.flatMap((feature) =>
      feature.description ? [[feature.label, feature.description]] : [],
    ),
  ),
);

function getComparisonFeatureDescription(feature: string) {
  return pricingFeatureDescriptions.get(feature);
}

function FeatureTooltip({
  feature,
  description,
}: {
  feature: string;
  description: string;
}) {
  return (
    <span className="group relative ml-1.5 inline-flex align-middle">
      <button
        type="button"
        aria-label={`More about ${feature}`}
        className="inline-flex rounded-full text-[color:var(--feature-faint)] transition hover:text-[color:var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]/40"
      >
        <CircleHelp className="size-3.5" strokeWidth={2} aria-hidden="true" />
      </button>
      <span className="invisible absolute bottom-full left-1/2 z-50 mb-2 w-80 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-lg border border-[color:var(--feature-border-subtle)] bg-[color:var(--feature-elevated-strong)] px-3 py-2 text-xs font-normal leading-5 text-[color:var(--feature-fg)] opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {description}
      </span>
    </span>
  );
}

function ComparisonValue({ value }: { value: PricingComparisonCell }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center text-[color:var(--brand)]">
        <Check className="size-5" strokeWidth={2.5} aria-hidden="true" />
        <span className="sr-only">Included</span>
      </span>
    );
  }

  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center text-[color:var(--feature-faint)]">
        <Minus className="size-5" strokeWidth={2} aria-hidden="true" />
        <span className="sr-only">Not included</span>
      </span>
    );
  }

  return (
    <span className="inline-flex rounded-full border border-[color:var(--brand)]/25 bg-[color:var(--brand)]/10 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-[color:var(--brand)]">
      {value}
    </span>
  );
}

function PricingComparisonTable() {
  return (
    <div className="w-max min-w-full rounded-2xl border border-[color:var(--pricing-card-border)] bg-[color:var(--pricing-card-bg)] shadow-[0_1px_0_rgb(255_255_255_/_0.04)_inset]">
      <table className="w-full min-w-[820px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-[color:var(--feature-border-subtle)]">
            <th className="sticky top-0 z-20 w-[40%] bg-[color:var(--pricing-card-bg)] px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[color:var(--pricing-card-faint)] shadow-[0_1px_0_rgb(255_255_255_/_0.08)]">
              Feature
            </th>
            {pricingPlans.map((plan) => (
              <th
                key={plan.name}
                className="sticky top-0 z-20 bg-[color:var(--pricing-card-bg)] px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-[color:var(--pricing-card-faint)] shadow-[0_1px_0_rgb(255_255_255_/_0.08)]"
              >
                <span>{plan.name}</span>
                <span className="mt-1 block text-sm font-bold tracking-tight text-[color:var(--brand)]">
                  {plan.price}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonGroups.map((group) => (
            <Fragment key={group.category}>
              <tr>
                <td
                  colSpan={4}
                  className="border-b border-[color:var(--feature-border-subtle)] px-5 pb-2 pt-6 text-xs font-semibold uppercase tracking-wider text-[color:var(--pricing-card-faint)]"
                >
                  {group.category}
                </td>
              </tr>
              {group.rows.map((row) => {
                const description = getComparisonFeatureDescription(row.feature);

                return (
                  <tr
                    key={`${group.category}-${row.feature}`}
                    className="border-b border-white/5 transition hover:bg-white/[0.02]"
                  >
                    <td className="px-5 py-3 text-[color:var(--pricing-card-muted)]">
                      <span>{row.feature}</span>
                      {description ? (
                        <FeatureTooltip
                          feature={row.feature}
                          description={description}
                        />
                      ) : null}
                    </td>
                    <td className="px-5 py-3 text-center text-[color:var(--pricing-card-muted)]">
                      <ComparisonValue value={row.foundation} />
                    </td>
                    <td className="px-5 py-3 text-center text-[color:var(--pricing-card-muted)]">
                      <ComparisonValue value={row.growth} />
                    </td>
                    <td className="px-5 py-3 text-center text-[color:var(--pricing-card-muted)]">
                      <ComparisonValue value={row.accelerator} />
                    </td>
                  </tr>
                );
              })}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdsAddOnCard() {
  return (
    <div className="border-t border-[color:var(--feature-border-subtle)] px-4 py-4 text-left text-[color:var(--pricing-card-fg)] sm:px-5">
      <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
        <div className="py-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand)]">
            Best for
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--feature-faint)]">
            {adsBoltOn.summary}
          </p>
          <p className="mt-4 max-w-xl text-xs leading-6 text-[color:var(--feature-faint)]">
            Ad spend paid directly to Google. Recommended $200-300/mo budget
            minimum, but varies by trade and market.
          </p>
        </div>

        <div className="py-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand)]">
            Deliverables
          </p>
          <ul className="grid gap-2.5">
            {adsBoltOn.features.map((feature) => (
              <li
                key={feature.label}
                className="flex items-start gap-2 text-sm leading-6 text-[color:var(--feature-faint)]"
              >
                <span className="shrink-0 font-medium text-[color:var(--brand)]">
                  +
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={
                      feature.emphasized
                        ? "font-bold text-[color:var(--feature-fg)]"
                        : undefined
                    }
                  >
                    {feature.label}
                  </span>
                  {feature.description ? (
                    <FeatureTooltip
                      feature={feature.label}
                      description={feature.description}
                    />
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function PricingDetailsActions() {
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [showAddOns, setShowAddOns] = useState(false);
  const addOnsId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isCompareOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsCompareOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCompareOpen]);

  const comparisonModal = isCompareOpen
    ? createPortal(
        <div
          className="fixed inset-0 z-50 flex min-h-dvh items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setIsCompareOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Plan comparison"
            className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-[color:var(--pricing-card-border)] bg-[color:var(--pricing-section-bg)] text-left text-[color:var(--feature-fg)] shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close plan comparison"
              onClick={() => setIsCompareOpen(false)}
              className="absolute right-3 top-3 z-30 inline-flex rounded-full border border-[color:var(--feature-border-subtle)] bg-[color:var(--pricing-section-bg)] p-2 text-[color:var(--feature-faint)] shadow-lg transition hover:border-[color:var(--brand)]/35 hover:text-[color:var(--brand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]/40 sm:right-4 sm:top-4"
            >
              <X className="size-5" strokeWidth={2} aria-hidden="true" />
            </button>

            <div className="h-16 shrink-0" aria-hidden="true" />

            <div className="min-h-0 flex-1 overflow-auto px-5 pb-16 [scrollbar-width:none] sm:px-8 sm:pb-20 [&::-webkit-scrollbar]:hidden">
              <PricingComparisonTable />
            </div>

            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[color:var(--pricing-section-bg)] via-[color:var(--pricing-section-bg)]/70 to-transparent backdrop-blur-sm [-webkit-mask-image:linear-gradient(to_top,black_0%,black_55%,transparent_100%)] [mask-image:linear-gradient(to_top,black_0%,black_55%,transparent_100%)]"
              aria-hidden="true"
            />
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <div className="mx-auto mt-6 max-w-6xl text-center">
      <div className="overflow-visible rounded-2xl border border-[color:var(--feature-border-subtle)] bg-transparent text-[color:var(--pricing-card-fg)]">
        <button
          type="button"
          aria-expanded={showAddOns}
          aria-controls={addOnsId}
          onClick={() => setShowAddOns((current) => !current)}
          className="flex w-full flex-col gap-3 px-4 py-3.5 text-left transition hover:bg-white/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]/40 sm:flex-row sm:items-center sm:justify-between sm:px-5"
        >
          <span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-[color:var(--pricing-card-faint)]">
              Optional add-on
            </span>
            <span className="mt-1 block text-sm font-semibold tracking-tight text-[color:var(--feature-fg)]">
              {adsBoltOn.name}
            </span>
            <span className="mt-1 hidden items-center gap-2 text-xs font-medium text-[color:var(--feature-faint)] sm:inline-flex">
              <span>{adsBoltOn.availability}</span>
              <span aria-hidden="true">·</span>
              <span>Pause or restart anytime</span>
            </span>
          </span>
          <span className="flex items-center justify-between gap-4 sm:justify-end">
            <span className="text-lg font-bold text-[color:var(--brand)]">
              {adsBoltOn.price}
            </span>
            <ChevronDown
              className={`size-5 text-[color:var(--feature-faint)] transition ${showAddOns ? "rotate-180" : ""}`}
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>
        </button>

        <div id={addOnsId}>{showAddOns ? <AdsAddOnCard /> : null}</div>
      </div>

      <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-[color:var(--feature-faint)]">
        12-month commitment, no setup fees. Month-to-month after the first year.
        Most clients see their plan pay for itself with a single job.
      </p>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setIsCompareOpen(true)}
          className="inline-flex w-full items-center justify-center rounded-full border border-[color:var(--feature-border-hover)] px-6 py-3 text-sm font-semibold text-[color:var(--feature-fg)] transition hover:border-[color:var(--brand)]/35 hover:bg-[color:var(--feature-elevated-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]/40 sm:w-auto"
        >
          Compare plans
        </button>
        <a
          href={siteConfig.primaryCtaHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_rgb(0_0_0_/_0.12)] transition hover:bg-[color:var(--brand-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]/40 sm:w-auto"
        >
          {siteConfig.primaryCtaLabel}
          <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
        </a>
      </div>

      {comparisonModal}
    </div>
  );
}
