import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
  tone?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
  className,
  tone = "default",
}: SectionHeadingProps) {
  const Title = as;
  const inverse = tone === "inverse";

  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "font-nav text-xs font-medium tracking-[0.22em] uppercase",
            inverse ? "text-sand" : "text-charcoal",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Title
        className={cn(
          "font-heading font-medium tracking-tight text-balance",
          as === "h1"
            ? "text-4xl leading-[1.08] sm:text-6xl lg:text-7xl"
            : "text-3xl leading-tight sm:text-5xl",
          inverse ? "text-ivory" : "text-charcoal",
          eyebrow ? "mt-4" : undefined,
        )}
      >
        {title}
      </Title>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-base leading-7 sm:text-lg",
            inverse ? "text-ivory" : "text-charcoal",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
