import { socialProofBrands } from "@/content/site";

const brandStyles: Record<string, string> = {
  Structura: "font-light tracking-[0.25em] uppercase",
  Forge_Co: "font-medium uppercase tracking-[0.15em]",
  "Iron&Oak": "italic font-semibold",
  Apex_Build: "font-light uppercase tracking-[0.2em]",
  Core_Site: "font-bold uppercase tracking-[0.18em]",
};

export function SocialProofBanner() {
  return (
    <section className="border-y border-white/[0.06] bg-gray-950 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
          Trusted by the industry&apos;s best builders
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14 md:gap-x-20">
          {socialProofBrands.map((brand) => (
            <span
              key={brand}
              className={`text-base text-gray-500 sm:text-lg ${brandStyles[brand] ?? "font-medium uppercase tracking-wider"}`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
