import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { PrincipleList } from "@/components/common/principle-list";
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
      <section className="border-b border-border">
        <Container className="grid gap-6 py-16 sm:py-20 lg:grid-cols-2">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </Container>
      </section>
      <section className="border-b border-border">
        <Container className="py-16 sm:py-20">
          <h2 className="font-heading text-4xl font-medium tracking-tight">
            How the work is approached
          </h2>
          <div className="mt-10 max-w-3xl">
            <PrincipleList principles={principles} />
          </div>
        </Container>
      </section>
      {testimonials.length > 0 ? (
        <section>
          <Container className="py-16 sm:py-20">
            <TestimonialList testimonials={testimonials} />
          </Container>
        </section>
      ) : null}
    </>
  );
}
