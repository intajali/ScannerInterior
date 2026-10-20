import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { PrincipleList } from "@/components/common/principle-list";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { TestimonialList } from "@/components/common/testimonial-list";
import { aboutContent } from "@/data/about";
import { principles } from "@/data/home";
import { getTestimonials } from "@/features/testimonials";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.description,
};

export default function AboutPage() {
  const testimonials = getTestimonials();

  return (
    <>
      <PageHeader
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
        description={aboutContent.description}
      />
      <SectionWrapper bordered tone="white">
        <div className="grid gap-6 lg:grid-cols-2">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper bordered>
        <SectionHeading title="How the work is approached" />
        <div className="mt-10 max-w-3xl">
          <PrincipleList principles={principles} />
        </div>
      </SectionWrapper>
      {testimonials.length > 0 ? (
        <SectionWrapper>
          <TestimonialList testimonials={testimonials} />
        </SectionWrapper>
      ) : null}
    </>
  );
}
