import { NextResponse, type NextRequest } from "next/server";

import {
  DEFAULT_HERO_VARIANT_ID,
  HERO_VARIANT_COOKIE,
  HERO_VARIANT_HEADER,
  isHeroVariantId,
  type HeroVariantId,
} from "@/lib/hero-test";

const HERO_VARIANT_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 90;

function pickHeroVariant(): HeroVariantId {
  return Math.random() < 0.5 ? DEFAULT_HERO_VARIANT_ID : "secondary";
}

function getHeroVariantId(request: NextRequest): HeroVariantId {
  const requestedVariant = request.nextUrl.searchParams.get("hero");

  if (isHeroVariantId(requestedVariant)) {
    return requestedVariant;
  }

  const storedVariant = request.cookies.get(HERO_VARIANT_COOKIE)?.value;

  if (isHeroVariantId(storedVariant)) {
    return storedVariant;
  }

  return pickHeroVariant();
}

export function proxy(request: NextRequest) {
  const variantId = getHeroVariantId(request);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(HERO_VARIANT_HEADER, variantId);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.cookies.set(HERO_VARIANT_COOKIE, variantId, {
    maxAge: HERO_VARIANT_COOKIE_MAX_AGE_SECONDS,
    path: "/",
    sameSite: "lax",
  });

  response.headers.set(HERO_VARIANT_HEADER, variantId);

  return response;
}

export const config = {
  matcher: "/",
};
