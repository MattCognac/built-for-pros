import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy placeholder for Built for Pros.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="section-shell">
      <article className="content-shell surface-card rounded-[32px] p-7 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-strong)]">
          Privacy Policy
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Privacy Policy
        </h1>
        <div className="mt-8 grid gap-5 text-base leading-8 text-slate-600">
          <p>
            This is a launch placeholder privacy policy for Built for Pros. It should
            be replaced with a final policy that matches your actual data handling,
            analytics, lead capture, and communication practices before publishing.
          </p>
          <p>
            At launch, the website is designed to collect only the contact details
            submitted through the lead magnet form or direct contact actions.
          </p>
          <p>
            If you want, I can replace this page with a more complete privacy policy
            once your final business details and tooling are locked in.
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
