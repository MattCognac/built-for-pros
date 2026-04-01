import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms of service placeholder for Built for Pros.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="section-shell">
      <article className="content-shell surface-card rounded-[32px] p-7 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-strong)]">
          Terms of Service
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Terms of Service
        </h1>
        <div className="mt-8 grid gap-5 text-base leading-8 text-slate-600">
          <p>
            This is a launch placeholder terms page for Built for Pros. It should be
            replaced with a final service agreement or public-facing terms page that
            matches your real contract language before the site goes live.
          </p>
          <p>
            The website references subscription plans, 12-month commitments, and
            early cancellation terms. Those details should be reviewed alongside
            your final legal agreement so the public site stays aligned with the
            actual client contract.
          </p>
          <p>
            If you want, I can turn this into a fuller public terms page after the
            homepage and design are locked in.
          </p>
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-black/8 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-black/14 hover:text-slate-950"
        >
          Back to home
        </Link>
      </article>
    </main>
  );
}
