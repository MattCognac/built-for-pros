export function HeroWebsiteMockup() {
  return (
    <div
      className="w-full max-w-[min(100%,420px)] select-none rounded-xl border border-white/15 bg-gray-900/80 shadow-[0_24px_80px_-12px_rgb(0_0_0_/_0.65)] ring-1 ring-white/5 backdrop-blur-sm lg:max-w-none"
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400/90" />
          <span className="size-2.5 rounded-full bg-amber-400/90" />
          <span className="size-2.5 rounded-full bg-emerald-400/90" />
        </div>
        <div className="ml-1 flex min-w-0 flex-1 items-center rounded-md border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] text-gray-500">
          <span className="truncate text-gray-400">https://</span>
          <span className="truncate font-medium text-gray-300">yoursite.com</span>
        </div>
      </div>

      {/* Fake page — light “customer site” */}
      <div className="overflow-hidden rounded-b-[11px] bg-white p-3 sm:p-4">
        <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-[color:var(--brand)] text-[10px] font-bold text-white">
              YS
            </div>
            <div className="hidden text-[10px] font-semibold text-gray-900 sm:block">
              Your Site
            </div>
          </div>
          <div className="hidden gap-3 text-[9px] font-medium text-gray-500 sm:flex">
            <span>Services</span>
            <span>Reviews</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="pt-3">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-[color:var(--brand)]">
            Licensed & insured
          </p>
          <p className="mt-1 text-sm font-bold leading-tight text-gray-900 sm:text-base">
            Quality work. Fair quotes.
          </p>
          <p className="mt-1.5 text-[10px] leading-relaxed text-gray-600 sm:text-[11px]">
            Book online in minutes — we&apos;ll call you back same day.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-[color:var(--brand)] px-3 py-1.5 text-[10px] font-bold text-white shadow-sm">
              Get a free estimate
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-[10px] font-semibold text-gray-700">
              Call now
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { label: "Emergency", tone: "bg-orange-50 text-orange-800" },
            { label: "Financing", tone: "bg-slate-100 text-slate-700" },
            { label: "Warranty", tone: "bg-emerald-50 text-emerald-800" },
          ].map((card) => (
            <div
              key={card.label}
              className={`rounded-lg px-2 py-2 text-center text-[9px] font-semibold ${card.tone}`}
            >
              {card.label}
            </div>
          ))}
        </div>

        <div className="mt-3 h-14 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 ring-1 ring-inset ring-gray-200/80" />
      </div>
    </div>
  );
}
