import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto_auto]">
          <div>
            <BrandLogo className="text-sm tracking-[0.2em] text-gray-950" />
            <p className="mt-2 max-w-md text-sm leading-7 text-gray-500">
              Marketing for contractors who want more calls without the agency
              overhead.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-gray-500">
            <a
              href={siteConfig.emailHref}
              className="transition hover:text-gray-950"
            >
              {siteConfig.emailDisplay}
            </a>
          </div>

          <div className="grid gap-2 text-sm text-gray-500">
            <Link href="/privacy" className="transition hover:text-gray-950">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-gray-950">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-5">
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
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
