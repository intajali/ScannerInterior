import { Reveal } from "@/components/common/reveal";
import type { Principle } from "@/types";

type PrincipleListProps = {
  principles: readonly Principle[];
};

export function PrincipleList({ principles }: PrincipleListProps) {
  return (
    <ol className="space-y-8">
      {principles.map((principle) => (
        <li key={principle.number}>
          <Reveal className="grid grid-cols-[auto_1fr] gap-4 border-t border-border pt-6">
            <span className="pt-1 font-heading text-lg text-brand">
              {principle.number}
            </span>
            <div>
              <h3 className="font-heading text-2xl font-medium tracking-tight">
                {principle.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {principle.description}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
