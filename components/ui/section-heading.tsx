type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "feature";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const titleColor =
    tone === "feature" ? "text-[color:var(--feature-fg)]" : "text-[color:var(--fg)]";
  const descriptionColor =
    tone === "feature" ? "text-[color:var(--feature-muted)]" : "text-[color:var(--muted)]";

  return (
    <div className={alignment}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-pretty text-lg leading-8 ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
