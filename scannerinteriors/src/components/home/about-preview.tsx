import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { SecondaryButton } from "@/components/common/secondary-button";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { demonstrationImages } from "@/config/media";
import { aboutPreview } from "@/data/home";

export function AboutPreview() {
  return (
    <SectionWrapper id="about" bordered tone="white">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <figure className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft lg:aspect-[4/5]">
            <Image
              src={demonstrationImages.about}
              alt="Demonstration photograph of a pale living room with a sectional sofa, a round table, and daylight from tall windows."
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 font-nav text-xs tracking-[0.16em] text-charcoal uppercase">
            Demonstration photograph
          </figcaption>
        </figure>
        <AnimatedSection>
          <SectionHeading title={aboutPreview.title} description={aboutPreview.introduction} />
          <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg">{aboutPreview.detail}</p>
          <SecondaryButton href="/about" className="mt-8">
            About the studio
          </SecondaryButton>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
