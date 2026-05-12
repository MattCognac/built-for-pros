"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

import { siteConfig } from "@/content/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    if (!name || !email) {
      setStatus("error");
      setMessage("Please enter your name and email.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed.");
      }

      setStatus("success");
      setMessage(siteConfig.leadFormSuccess);
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again or call instead.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[color:var(--fg)]">
            Name
          </span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            className="min-h-12 rounded-xl border border-[color:var(--input-border)] bg-[color:var(--input-bg)] px-4 text-base text-[color:var(--fg)] outline-none transition placeholder:text-[color:var(--faint)] focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/25"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[color:var(--fg)]">
            Email
          </span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="min-h-12 rounded-xl border border-[color:var(--input-border)] bg-[color:var(--input-bg)] px-4 text-base text-[color:var(--fg)] outline-none transition placeholder:text-[color:var(--faint)] focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/25"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-6 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-strong)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle className="size-4 animate-spin" strokeWidth={2} />
            Sending
          </>
        ) : (
          <>
            Send Me the Guide
            <ArrowRight className="size-4" strokeWidth={2} />
          </>
        )}
      </button>

      {message ? (
        <p
          className={`text-sm leading-6 ${
            status === "error" ? "text-rose-500" : "text-emerald-500"
          }`}
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
