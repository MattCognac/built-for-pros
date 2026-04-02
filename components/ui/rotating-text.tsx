"use client";

import { useEffect, useState, useCallback } from "react";

const WORDS = [
  "painters",
  "electricians",
  "plumbers",
  "remodelers",
  "roofers",
  "landscapers",
  "HVAC pros",
  "cleaners",
  "handymen",
  "flooring pros",
  "concrete pros",
  "fencing pros",
  "arborists",
];

const INTERVAL_MS = 5_000;

export function RotatingText() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  const advance = useCallback(() => {
    setPhase("out");
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
      setPhase("in");
    }, 400);
    return timeout;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      advance();
    }, INTERVAL_MS);
    return () => clearInterval(interval);
  }, [advance]);

  return (
    <span className="inline-flex overflow-hidden text-[color:var(--brand)]">
      <span
        className={`inline-block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          phase === "in"
            ? "translate-y-0 opacity-100"
            : "translate-y-[0.25em] opacity-0"
        }`}
      >
        {WORDS[index]}
      </span>
    </span>
  );
}
