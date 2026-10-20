import { AnimatedSection } from "@/components/common/animated-section";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ServiceCard } from "@/components/common/service-card";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <SectionWrapper id="services" bordered>
      <AnimatedSection>
        <SectionHeading eyebrow="Services" title="From the plan to the last object." />
      </AnimatedSection>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <AnimatedSection key={service.slug} className="h-full">
            <ServiceCard
              title={service.title}
              summary={service.summary}
              href={`/services#${service.slug}`}
            />
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
