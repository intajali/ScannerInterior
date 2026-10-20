import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { getServiceBySlug } from "@/data/services";
import type { Project } from "@/types";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const service = getServiceBySlug(project.serviceSlug);

  return (
    <article>
      <header className="border-b border-sage bg-ivory">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow={`${project.location} · ${project.year}`}
            title={project.title}
            description={project.summary}
          />
          {service ? (
            <p className="mt-6 font-nav text-sm tracking-wide">
              <Link
                href={`/services#${service.slug}`}
                className="underline decoration-sage underline-offset-4 hover:decoration-bronze"
              >
                {service.title}
              </Link>
            </p>
          ) : null}
        </Container>
      </header>
      <Container className="py-16 sm:py-20">
        <p className="max-w-2xl text-base leading-7">{project.description}</p>
        {project.images.length > 0 ? (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.images.map((image) => (
              <li key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </article>
  );
}
