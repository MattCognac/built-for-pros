import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border-subtle)] bg-[color:var(--canvas)] px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:gap-12">
          <div>
            <BrandLogo className="text-sm tracking-[0.14em] text-[color:var(--fg)]" />
            <p className="mt-3 max-w-md text-sm leading-7 text-[color:var(--faint)]">
              Marketing for contractors who want more calls without the agency
              overhead.
            </p>
          </div>

          <div className="grid gap-2 text-sm">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[color:var(--faint)]">
              Contact
            </span>
            <a
              href={siteConfig.emailHref}
              className="text-[color:var(--muted)] transition hover:text-[color:var(--fg)]"
            >
              {siteConfig.emailDisplay}
            </a>
          </div>

          <div className="grid gap-2 text-sm">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[color:var(--faint)]">
              Legal
            </span>
            <Link
              href="/privacy"
              className="text-[color:var(--muted)] transition hover:text-[color:var(--fg)]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[color:var(--muted)] transition hover:text-[color:var(--fg)]"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-[color:var(--border-subtle)] pt-8 text-sm text-[color:var(--faint)]">
          <p>&copy; 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
