import { AnimatedSection } from "@/components/common/animated-section";
import type { Principle } from "@/types";

type PrincipleListProps = {
  principles: readonly Principle[];
};

export function PrincipleList({ principles }: PrincipleListProps) {
  return (
    <ol className="space-y-8">
      {principles.map((principle) => (
        <li key={principle.number}>
          <AnimatedSection className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-t border-sage pt-6">
            <span className="pt-1 text-2xl font-medium text-bronze">
              {principle.number}
            </span>
            <div>
              <h3 className="font-heading text-2xl font-medium tracking-tight">
                {principle.title}
              </h3>
              <p className="mt-2 max-w-xl text-base leading-7">
                {principle.description}
              </p>
            </div>
          </AnimatedSection>
        </li>
      ))}
    </ol>
  );
}
