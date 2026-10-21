import { AnimatedSection } from "@/components/common/animated-section";
import { SecondaryButton } from "@/components/common/secondary-button";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";

export function ConsultationCTA() {
  return (
    <SectionWrapper id="consultation" tone="charcoal">
      <AnimatedSection>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            className="min-w-0 md:flex-1"
            tone="inverse"
            title="Let's Create Something Beautiful Together."
            description="Write with the location, the timeline, and what you want the room to feel like."
          />
          <SecondaryButton href="/contact" tone="inverse" className="w-full shrink-0 md:w-auto">
            Book a Consultation
          </SecondaryButton>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
