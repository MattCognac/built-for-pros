import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:gap-12">
          <div>
            <BrandLogo className="text-sm tracking-[0.2em] text-gray-950" />
            <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
              Marketing for contractors who want more calls without the agency
              overhead.
            </p>
          </div>

          <div className="grid gap-2 text-sm">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Contact
            </span>
            <a
              href={siteConfig.emailHref}
              className="text-gray-500 transition hover:text-gray-950"
            >
              {siteConfig.emailDisplay}
            </a>
          </div>

          <div className="grid gap-2 text-sm">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Legal
            </span>
            <Link href="/privacy" className="text-gray-500 transition hover:text-gray-950">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 transition hover:text-gray-950">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-gray-950"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p>&copy; 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
