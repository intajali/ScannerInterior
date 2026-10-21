import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { SecondaryButton } from "@/components/common/secondary-button";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { mediaFrameClass, splitLayoutClass } from "@/components/common/styles";
import { demonstrationImages } from "@/config/media";
import { aboutPreview } from "@/data/home";

export function AboutPreview() {
  return (
    <SectionWrapper id="about" bordered tone="white">
      <div className={splitLayoutClass}>
        <figure className="relative min-w-0">
          <div className={mediaFrameClass}>
            <Image
              src={demonstrationImages.about}
              alt="Demonstration photograph of a pale living room with a sectional sofa, a round table, and daylight from tall windows."
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 font-nav text-xs tracking-[0.16em] text-charcoal uppercase">
            Demonstration photograph
          </figcaption>
        </figure>
        <AnimatedSection className="min-w-0">
          <SectionHeading title={aboutPreview.title} description={aboutPreview.introduction} />
          <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg">{aboutPreview.detail}</p>
          <SecondaryButton href="/about" className="mt-8 w-full sm:w-auto">
            About the studio
          </SecondaryButton>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
