import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug } from "@/data/services";
import type { Project } from "@/types";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const service = getServiceBySlug(project.serviceSlug);

  return (
    <article>
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
            {project.location} · {project.year}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {project.summary}
          </p>
          {service ? (
            <p className="mt-4 text-sm">
              <Link href={`/services#${service.slug}`} className="underline underline-offset-4">
                {service.title}
              </Link>
            </p>
          ) : null}
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="max-w-2xl text-base leading-7">{project.description}</p>
        {project.images.length > 0 ? (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.images.map((image) => (
              <li key={image.src} className="relative aspect-[4/3]">
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
      </div>
    </article>
  );
}
