import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { aboutContent } from "@/data/about";

export function AboutHero() {
  return (
    <section className="border-b border-sage">
      <div className="relative aspect-[4/5] min-h-64 w-full sm:aspect-[3/2] sm:min-h-80 lg:aspect-[16/8] lg:max-h-[64vh] lg:min-h-[24rem]">
        <Image
          src={aboutContent.image}
          alt={aboutContent.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
      </div>
      <div className="bg-ivory">
        <Container className="py-10 sm:py-14 lg:py-16">
          <AnimatedSection>
            <SectionHeading
              as="h1"
              eyebrow={aboutContent.eyebrow}
              title={aboutContent.title}
              description={aboutContent.description}
            />
            <p className="mt-6 font-nav text-xs tracking-[0.14em] text-charcoal uppercase sm:tracking-[0.16em]">
              Demonstration photograph
            </p>
          </AnimatedSection>
        </Container>
      </div>
    </section>
  );
}
