import { AnimatedSection } from "@/components/common/animated-section";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ServiceCard } from "@/components/common/service-card";
import { services } from "@/data/services";

export function Disciplines() {
  return (
    <SectionWrapper id="disciplines">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Disciplines"
          title="Spaces for living, hosting, and work."
        />
      </AnimatedSection>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
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
