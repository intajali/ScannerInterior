import { AnimatedSection } from "@/components/common/animated-section";
import { ImageCompare } from "@/components/common/image-compare";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";

export function RoomCompare() {
  return (
    <SectionWrapper id="compare" bordered>
      <AnimatedSection>
        <SectionHeading
          eyebrow="Comparison"
          title="Move between two readings of a room."
          description="Drag the divider, or use the arrow keys. These are demonstration photographs, not a record of one renovation."
        />
      </AnimatedSection>
      <div className="mt-10">
        <ImageCompare
          beforeSrc="/images/projects/lounge.jpg"
          beforeAlt="Demonstration photograph of a living room with a grey sofa, leather chairs, and tall garden windows."
          afterSrc="/images/projects/north-studio.jpg"
          afterAlt="Demonstration photograph of an open living room with a grey sofa, timber wall, and a view to the kitchen."
        />
      </div>
    </SectionWrapper>
  );
}
