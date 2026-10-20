import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { Container } from "@/components/common/container";
import { PrimaryButton } from "@/components/common/primary-button";
import { SecondaryButton } from "@/components/common/secondary-button";
import { SectionHeading } from "@/components/common/section-heading";
import { demonstrationImages } from "@/config/media";

export function HeroSection() {
  return (
    <section className="relative min-h-svh border-b border-sage">
      <Image
        src={demonstrationImages.hero}
        alt="Demonstration photograph of a sunlit living room with a leather sofa, pale walls, and a large window."
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative flex min-h-svh flex-col justify-end">
        <div className="bg-ivory">
          <Container className="py-8 sm:py-12">
            <AnimatedSection>
              <SectionHeading
                as="h1"
                title="Transform Your Space Into Something Extraordinary."
                description="We create timeless interiors that blend comfort, functionality, and elegance."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <SecondaryButton href="/portfolio">Explore Our Work</SecondaryButton>
                <PrimaryButton href="/contact">Book a Consultation</PrimaryButton>
              </div>
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
