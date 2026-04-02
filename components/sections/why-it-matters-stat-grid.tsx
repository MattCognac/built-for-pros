import { v2WhyItMatters } from "@/content/site";

const stats = v2WhyItMatters.stats;

export function WhyItMattersStatGrid() {
  return (
    <div className="grid grid-cols-2 gap-4" role="list" aria-label="Marketing stats">
      {stats.map((stat) => (
        <div
          key={stat.value}
          role="listitem"
          className="rounded-xl border border-gray-200 bg-white px-5 py-6 shadow-sm"
        >
          <span className="block text-3xl font-bold tracking-tight text-[color:var(--brand)] sm:text-4xl">
            {stat.value}
          </span>
          <p className="mt-1.5 text-sm leading-snug text-gray-600">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
