import Link from "next/link";
import { imagePaths } from "@/config/media";
import { getServiceBySlug } from "@/data/services";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

function coverSource(project: Project): string | null {
  if (!project.coverImage) {
    return null;
  }

  return project.coverImage.startsWith("/")
    ? project.coverImage
    : `${imagePaths.projects}/${project.coverImage}`;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const service = getServiceBySlug(project.serviceSlug);
  const cover = coverSource(project);

  return (
    <article className="flex h-full flex-col border border-border bg-card">
      <Link href={`/portfolio/${project.slug}`} className="flex h-full flex-col">
        <div
          className="flex aspect-[4/3] items-end bg-secondary p-6"
          style={cover ? { backgroundImage: `url(${cover})`, backgroundSize: "cover" } : undefined}
        >
          <span className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            {project.location}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h2 className="font-heading text-3xl font-medium tracking-tight">
            {project.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {project.summary}
          </p>
          <p className="mt-4 text-xs tracking-[0.16em] text-muted-foreground uppercase">
            {service?.title ?? "Interior"} · {project.year}
          </p>
        </div>
      </Link>
    </article>
  );
}
