import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { Container } from "@/components/common/container";
import { PrimaryButton } from "@/components/common/primary-button";
import { SecondaryButton } from "@/components/common/secondary-button";
import { SectionHeading } from "@/components/common/section-heading";
import { demonstrationImages } from "@/config/media";

export function HeroSection() {
  return (
    <section className="border-b border-sage">
      <div className="relative aspect-[4/5] min-h-72 w-full sm:aspect-[3/2] sm:min-h-80 lg:aspect-[16/8] lg:max-h-[70vh] lg:min-h-[28rem]">
        <Image
          src={demonstrationImages.hero}
          alt="Demonstration photograph of a sunlit living room with a leather sofa, pale walls, and a large window."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ivory/80 to-transparent sm:h-28" />
      </div>
      <div className="bg-ivory">
        <Container className="py-8 sm:py-12 lg:py-16">
          <AnimatedSection>
            <SectionHeading
              as="h1"
              title="Transform Your Space Into Something Extraordinary."
              description="We create timeless interiors that blend comfort, functionality, and elegance."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SecondaryButton href="/portfolio" className="w-full sm:w-auto">
                Explore Our Work
              </SecondaryButton>
              <PrimaryButton href="/contact" className="w-full sm:w-auto">
                Book a Consultation
              </PrimaryButton>
            </div>
            <p className="mt-6 font-nav text-xs tracking-[0.14em] text-charcoal uppercase sm:tracking-[0.16em]">
              Demonstration photograph
            </p>
          </AnimatedSection>
        </Container>
      </div>
    </section>
  );
}
