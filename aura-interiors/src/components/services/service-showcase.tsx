import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { PrimaryButton } from "@/components/common/primary-button";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

type ServiceShowcaseProps = {
  services: readonly Service[];
};

export function ServiceShowcase({ services }: ServiceShowcaseProps) {
  return (
    <>
      {services.map((service, index) => {
        const reversed = index % 2 === 1;

        return (
          <SectionWrapper
            key={service.slug}
            id={service.slug}
            bordered
            tone={index % 2 === 0 ? "ivory" : "white"}
          >
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <figure className={cn(reversed && "lg:order-2")}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft lg:aspect-[4/5]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-nav text-xs tracking-[0.16em] uppercase">
                  Demonstration photograph
                </figcaption>
              </figure>
              <AnimatedSection className={cn(reversed && "lg:order-1")}>
                <SectionHeading as="h2" title={service.title} description={service.description} />
                <ul className="mt-6 max-w-xl space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="border-t border-sage pt-3 text-base leading-7">
                      {benefit}
                    </li>
                  ))}
                </ul>
                <PrimaryButton href="/contact" className="mt-8">
                  Book a Consultation
                </PrimaryButton>
              </AnimatedSection>
            </div>
          </SectionWrapper>
        );
      })}
    </>
  );
}
