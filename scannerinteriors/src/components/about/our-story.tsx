import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { mediaFrameClass, splitLayoutClass } from "@/components/common/styles";
import { aboutContent } from "@/data/about";

export function OurStory() {
  const { story } = aboutContent;

  return (
    <SectionWrapper id="story" bordered tone="white">
      <div className={splitLayoutClass}>
        <figure className="min-w-0">
          <div className={mediaFrameClass}>
            <Image
              src={story.image}
              alt={story.imageAlt}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 font-nav text-xs tracking-[0.16em] uppercase">
            Demonstration photograph
          </figcaption>
        </figure>
        <AnimatedSection className="min-w-0">
          <SectionHeading title={story.title} />
          <div className="mt-5 max-w-xl space-y-5">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
