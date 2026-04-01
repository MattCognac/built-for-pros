import type { ReactNode } from "react";

type V2SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function V2SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: V2SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="eyebrow">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-lg leading-8 text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
