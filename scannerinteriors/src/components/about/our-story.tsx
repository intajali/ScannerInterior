import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { aboutContent } from "@/data/about";

export function OurStory() {
  const { story } = aboutContent;

  return (
    <SectionWrapper id="story" bordered tone="white">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft lg:aspect-[4/5]">
            <Image
              src={story.image}
              alt={story.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 font-nav text-xs tracking-[0.16em] uppercase">
            Demonstration photograph
          </figcaption>
        </figure>
        <AnimatedSection>
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
