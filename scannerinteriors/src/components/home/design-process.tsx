import { AnimatedSection } from "@/components/common/animated-section";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { designProcess } from "@/data/home";

export function DesignProcess() {
  return (
    <SectionWrapper id="process" bordered>
      <AnimatedSection>
        <SectionHeading eyebrow="Process" title="From the first conversation to the finished room." />
      </AnimatedSection>
      <ol className="mt-10 grid gap-6 *:min-w-0 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {designProcess.map((step) => (
          <li key={step.number} className="border-t border-sage pt-6">
            <AnimatedSection>
              <p className="text-2xl font-medium text-bronze">{step.number}</p>
              <h3 className="mt-3 font-heading text-2xl font-medium tracking-tight text-balance">{step.title}</h3>
              <p className="mt-3 text-base leading-7">{step.description}</p>
            </AnimatedSection>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
