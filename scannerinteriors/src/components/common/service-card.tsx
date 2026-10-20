import Link from "next/link";
import { interactiveCardClass } from "@/components/common/styles";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  summary: string;
  description?: string;
  href?: string;
  id?: string;
  className?: string;
  as?: "h2" | "h3";
};

export function ServiceCard({
  title,
  summary,
  description,
  href,
  id,
  className,
  as = "h3",
}: ServiceCardProps) {
  const Heading = as;
  const heading = href ? (
    <Link href={href} className="transition-colors duration-300 hover:text-bronze">
      {title}
    </Link>
  ) : (
    title
  );

  return (
    <article id={id} className={cn("scroll-mt-32 flex h-full flex-col p-6 sm:p-8", interactiveCardClass, className)}>
      <Heading className="font-heading text-3xl font-medium tracking-tight">{heading}</Heading>
      <p className="mt-4 text-base leading-7">{summary}</p>
      {description ? <p className="mt-3 text-base leading-7">{description}</p> : null}
    </article>
  );
}
