import { AnimatedSection } from "@/components/common/animated-section";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { surfaceCardClass } from "@/components/common/styles";
import { aboutContent } from "@/data/about";

const statements = [aboutContent.mission, aboutContent.vision];

export function MissionVision() {
  return (
    <SectionWrapper id="mission" bordered>
      <AnimatedSection>
        <SectionHeading eyebrow="Direction" title="Mission and Vision" />
      </AnimatedSection>
      <div className="mt-10 grid gap-6 *:min-w-0 md:grid-cols-2">
        {statements.map((statement) => (
          <AnimatedSection key={statement.title} className="h-full">
            <article className={`${surfaceCardClass} h-full p-6 sm:p-8`}>
              <h3 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">{statement.title}</h3>
              <p className="mt-4 text-base leading-7">{statement.text}</p>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
