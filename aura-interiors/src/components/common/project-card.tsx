import Link from "next/link";
import { interactiveCardClass } from "@/components/common/styles";
import { imagePaths } from "@/config/media";
import { getServiceBySlug } from "@/data/services";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

function coverSource(project: Project): string | null {
  if (!project.coverImage) {
    return null;
  }

  return project.coverImage.startsWith("/")
    ? project.coverImage
    : `${imagePaths.projects}/${project.coverImage}`;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const service = getServiceBySlug(project.serviceSlug);
  const cover = coverSource(project);

  return (
    <article className={cn(interactiveCardClass, "flex h-full flex-col overflow-hidden p-0", className)}>
      <Link href={`/portfolio/${project.slug}`} className="flex h-full flex-col rounded-lg">
        <div
          className="flex aspect-[4/3] items-end bg-sand p-6"
          style={
            cover
              ? { backgroundImage: `url(${cover})`, backgroundSize: "cover" }
              : undefined
          }
        >
          <span className="font-nav text-xs font-medium tracking-[0.18em] text-charcoal uppercase">
            {project.location}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h2 className="font-heading text-3xl font-medium tracking-tight">{project.title}</h2>
          <p className="mt-3 text-base leading-7">{project.summary}</p>
          <p className="mt-4 font-nav text-xs tracking-[0.16em] uppercase">
            {service?.title ?? "Interior"} · {project.year}
          </p>
        </div>
      </Link>
    </article>
  );
}
