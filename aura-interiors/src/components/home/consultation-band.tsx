import { SecondaryButton } from "@/components/common/secondary-button";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { siteConfig } from "@/config/site";

export function ConsultationBand() {
  return (
    <SectionWrapper id="consultation" tone="charcoal">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          tone="inverse"
          title="Tell us about the space."
          description="We take a limited number of commissions each season. Write with the location, the timeline, and what you want the room to feel like."
        />
        <SecondaryButton href={`mailto:${siteConfig.email}`} tone="inverse">
          {siteConfig.email}
        </SecondaryButton>
      </div>
    </SectionWrapper>
  );
}
