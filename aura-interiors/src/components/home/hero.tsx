import { PrimaryButton } from "@/components/common/primary-button";
import { SecondaryButton } from "@/components/common/secondary-button";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <SectionWrapper
      bordered
      containerClassName="flex min-h-[calc(100svh-8.5rem)] flex-col justify-end"
    >
      <SectionHeading
        as="h1"
        eyebrow="Interior design & decoration"
        title={siteConfig.tagline}
        description={`${siteConfig.description} We design spaces that feel settled from the first visit and still feel right years later.`}
      />
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <PrimaryButton href="/contact">Begin a consultation</PrimaryButton>
        <SecondaryButton href="/#approach">Our approach</SecondaryButton>
      </div>
    </SectionWrapper>
  );
}
