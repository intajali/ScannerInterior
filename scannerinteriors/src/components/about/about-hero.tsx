import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { aboutContent } from "@/data/about";

export function AboutHero() {
  return (
    <section className="relative min-h-[78vh] border-b border-sage">
      <Image
        src={aboutContent.image}
        alt={aboutContent.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative flex min-h-[78vh] flex-col justify-end">
        <div className="bg-ivory">
          <Container className="py-10 sm:py-14">
            <AnimatedSection>
              <SectionHeading
                as="h1"
                eyebrow={aboutContent.eyebrow}
                title={aboutContent.title}
                description={aboutContent.description}
              />
              <p className="mt-6 font-nav text-xs tracking-[0.16em] text-charcoal uppercase">
                Demonstration photograph
              </p>
            </AnimatedSection>
          </Container>
        </div>
      </div>
    </section>
  );
}
