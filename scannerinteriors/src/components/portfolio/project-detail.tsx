import { ConsultationCTA } from "@/components/home/consultation-cta";
import { Container } from "@/components/common/container";
import { ProjectCard } from "@/components/common/project-card";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ProjectGallery } from "@/components/portfolio/project-gallery";
import type { Project } from "@/types";

type ProjectDetailProps = {
  project: Project;
  related: readonly Project[];
};

export function ProjectDetail({ project, related }: ProjectDetailProps) {
  return (
    <>
      <article>
        <header className="border-b border-sage bg-ivory">
          <Container className="py-16 sm:py-24">
            <SectionHeading
              as="h1"
              eyebrow={`${project.category} · ${project.location}`}
              title={project.title}
              description={project.summary}
            />
            <p className="mt-6 font-nav text-xs tracking-[0.16em] uppercase">
              Demonstration project · {project.year}
            </p>
          </Container>
        </header>
        <Container className="py-16 sm:py-20">
          <p className="max-w-2xl text-base leading-7">{project.description}</p>
          <ProjectGallery title={project.title} images={project.images} />
          <section className="mt-16" aria-labelledby="design-highlights">
            <h2
              id="design-highlights"
              className="font-heading text-3xl font-medium tracking-tight"
            >
              Design highlights
            </h2>
            <ul className="mt-6 max-w-2xl space-y-4">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="border-t border-sage pt-4 text-base leading-7">
                  {highlight}
                </li>
              ))}
            </ul>
          </section>
        </Container>
        {related.length > 0 ? (
          <SectionWrapper bordered tone="white">
            <h2 className="font-heading text-3xl font-medium tracking-tight">Related projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <ProjectCard key={item.slug} project={item} />
              ))}
            </div>
          </SectionWrapper>
        ) : null}
      </article>
      <ConsultationCTA />
    </>
  );
}
