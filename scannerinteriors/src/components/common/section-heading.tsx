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
            "font-nav text-xs font-medium tracking-[0.16em] uppercase sm:tracking-[0.22em]",
            inverse ? "text-sand" : "text-charcoal",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Title
        className={cn(
          "max-w-full font-heading font-medium tracking-tight text-balance",
          as === "h1" ? "aura-display" : "aura-title",
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
