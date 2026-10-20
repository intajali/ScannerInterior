import { PrincipleList } from "@/components/common/principle-list";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { principles } from "@/data/home";

export function DesignPhilosophy() {
  return (
    <SectionWrapper id="philosophy" bordered tone="white">
      <SectionHeading
        eyebrow="Philosophy"
        title="Design Philosophy"
        description="Proportion, material, and light are decided before decoration is added."
      />
      <div className="mt-10 max-w-3xl">
        <PrincipleList principles={principles} />
      </div>
    </SectionWrapper>
  );
}
