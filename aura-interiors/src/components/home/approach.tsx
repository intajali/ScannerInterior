import { AnimatedSection } from "@/components/common/animated-section";
import { PrincipleList } from "@/components/common/principle-list";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { principles } from "@/data/home";
import { siteConfig } from "@/config/site";

export function Approach() {
  return (
    <SectionWrapper id="approach" bordered>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <AnimatedSection className="lg:col-span-5">
          <SectionHeading
            eyebrow="Approach"
            title="A quieter kind of luxury."
            description={`${siteConfig.name} works with homeowners and hospitality teams who want rooms with restraint, warmth, and a clear point of view.`}
          />
        </AnimatedSection>
        <div className="lg:col-span-7">
          <PrincipleList principles={principles} />
        </div>
      </div>
    </SectionWrapper>
  );
}
