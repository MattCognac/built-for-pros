export function HeroMockup() {
  return (
    <div className="hero-mockup-wrapper">
      <div className="hero-mockup-browser">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-gray-700/60 bg-gray-800/80 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-yellow-400/70" />
            <span className="size-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="ml-2 flex-1 rounded-md bg-gray-900/60 px-3 py-1">
            <span className="text-[10px] text-gray-500">
              summitexteriors.com
            </span>
          </div>
        </div>

        {/* Site content */}
        <div className="bg-white">
          {/* Nav */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
            <div className="flex items-center gap-1.5">
              <div className="size-5 rounded bg-amber-600" />
              <span className="text-[11px] font-bold tracking-tight text-gray-900">
                Summit Exteriors
              </span>
            </div>
            <div className="flex gap-3">
              <span className="hidden text-[9px] font-medium text-gray-400 sm:inline">
                Services
              </span>
              <span className="hidden text-[9px] font-medium text-gray-400 sm:inline">
                Projects
              </span>
              <span className="hidden text-[9px] font-medium text-gray-400 sm:inline">
                About
              </span>
              <span className="rounded-full bg-amber-600 px-2.5 py-0.5 text-[9px] font-semibold text-white">
                Get a Quote
              </span>
            </div>
          </div>

          {/* Hero area */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-5 py-8">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-60" />
            <div className="relative">
              <p className="text-[8px] font-semibold uppercase tracking-widest text-amber-400">
                Trusted since 2008
              </p>
              <p className="mt-1.5 text-sm font-bold leading-tight text-white sm:text-base">
                Roofing & Siding
                <br />
                <span className="text-amber-400">Done Right.</span>
              </p>
              <p className="mt-1.5 max-w-[180px] text-[9px] leading-relaxed text-gray-400">
                Expert craftsmanship for homeowners across the greater Denver
                area. Licensed, insured, and built on referrals.
              </p>
              <div className="mt-3 flex gap-2">
                <span className="rounded bg-amber-600 px-2.5 py-1 text-[9px] font-semibold text-white">
                  Free Estimate
                </span>
                <span className="rounded border border-white/20 px-2.5 py-1 text-[9px] font-medium text-white">
                  Our Work
                </span>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 bg-gray-50">
            {[
              { value: "500+", label: "Projects" },
              { value: "4.9★", label: "Rating" },
              { value: "15+", label: "Years" },
            ].map((stat) => (
              <div key={stat.label} className="px-3 py-2.5 text-center">
                <p className="text-[11px] font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="text-[8px] text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-3 gap-2.5 px-4 py-4">
            {[
              { icon: "◆", title: "Roofing", color: "bg-amber-50" },
              { icon: "■", title: "Siding", color: "bg-blue-50" },
              { icon: "▲", title: "Gutters", color: "bg-green-50" },
            ].map((svc) => (
              <div
                key={svc.title}
                className={`rounded-lg ${svc.color} p-2.5 text-center`}
              >
                <span className="text-[13px]">{svc.icon}</span>
                <p className="mt-0.5 text-[9px] font-semibold text-gray-700">
                  {svc.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
