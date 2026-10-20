import type { ReactNode } from "react";
import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

type SectionTone = "ivory" | "white" | "sand" | "charcoal";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: SectionTone;
  bordered?: boolean;
};

const toneClass: Record<SectionTone, string> = {
  ivory: "bg-ivory text-charcoal",
  white: "bg-white text-charcoal",
  sand: "bg-sand text-charcoal",
  charcoal: "bg-charcoal text-ivory",
};

export function SectionWrapper({
  id,
  children,
  className,
  containerClassName,
  tone = "ivory",
  bordered = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-32",
        toneClass[tone],
        bordered && "border-b border-sage",
        className,
      )}
    >
      <Container className={cn("py-16 sm:py-24", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
