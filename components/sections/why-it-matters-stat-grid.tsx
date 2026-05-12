import { whyItMatters } from "@/content/site";

const stats = whyItMatters.stats;

export function WhyItMattersStatGrid() {
  return (
    <div className="grid grid-cols-2 gap-4" role="list" aria-label="Marketing stats">
      {stats.map((stat) => (
        <div
          key={stat.value}
          role="listitem"
          className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--elevated)] px-5 py-6 shadow-[0_1px_0_rgb(255_255_255_/_0.04)_inset]"
        >
          <span className="block text-3xl font-bold tracking-tight text-[color:var(--brand)] sm:text-4xl">
            {stat.value}
          </span>
          <p className="mt-1.5 text-sm leading-snug text-[color:var(--muted)]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
