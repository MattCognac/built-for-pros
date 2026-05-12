export type HeroVariantId = "main" | "secondary";

export const HERO_VARIANT_COOKIE = "bfp-hero-variant";
export const HERO_VARIANT_HEADER = "x-bfp-hero-variant";
export const DEFAULT_HERO_VARIANT_ID: HeroVariantId = "main";

export function isHeroVariantId(value: string | null | undefined): value is HeroVariantId {
  return value === "main" || value === "secondary";
}
