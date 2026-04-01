import { socialProofBrands } from "@/content/site";

const brandStyles: Record<string, string> = {
  Structura: "font-light tracking-[0.25em] uppercase",
  Forge_Co: "font-medium uppercase tracking-[0.15em]",
  "Iron&Oak": "italic font-semibold",
  Apex_Build: "font-light uppercase tracking-[0.2em]",
  Core_Site: "font-bold uppercase tracking-[0.18em]",
};

const brands = [...socialProofBrands, ...socialProofBrands];

export function V2SocialProofBanner() {
  return (
    <section className="border-y border-[var(--v2-border)] bg-[var(--v2-canvas-soft)] py-12 sm:py-14">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
        Trusted by the industry&apos;s best builders
      </p>

      <div className="relative mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 sm:gap-16 md:gap-24">
          {brands.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className={`shrink-0 text-base text-zinc-500 sm:text-lg ${brandStyles[brand] ?? "font-medium uppercase tracking-wider"}`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
