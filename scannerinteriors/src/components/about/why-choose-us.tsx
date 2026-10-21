import { AnimatedSection } from "@/components/common/animated-section";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { aboutContent } from "@/data/about";

export function WhyChooseUs() {
  return (
    <SectionWrapper id="why" bordered tone="white">
      <AnimatedSection>
        <SectionHeading eyebrow="Practice" title="Why Choose Us" />
      </AnimatedSection>
      <ol className="mt-10 grid gap-6 *:min-w-0 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {aboutContent.reasons.map((reason) => (
          <li key={reason.number} className="border-t border-sage pt-6">
            <AnimatedSection>
              <p className="text-2xl font-medium text-bronze">{reason.number}</p>
              <h3 className="mt-3 font-heading text-2xl font-medium tracking-tight text-balance">{reason.title}</h3>
              <p className="mt-3 max-w-xl text-base leading-7">{reason.description}</p>
            </AnimatedSection>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
