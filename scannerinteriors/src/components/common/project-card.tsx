import Image from "next/image";
import Link from "next/link";
import { interactiveCardClass } from "@/components/common/styles";
import { imagePaths } from "@/config/media";
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
  const cover = coverSource(project);

  return (
    <article className={cn(interactiveCardClass, "flex h-full flex-col overflow-hidden p-0", className)}>
      <Link href={`/portfolio/${project.slug}`} className="flex h-full flex-col rounded-lg">
        <div className="group relative aspect-[4/3] overflow-hidden bg-sand">
          {cover ? (
            <Image
              src={cover}
              alt=""
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 36rem, (min-width: 768px) 50vw, 100vw"
              className="image-zoom object-cover"
            />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="font-nav text-xs font-medium tracking-[0.18em] text-charcoal uppercase">
            {project.category}
          </p>
          <h2 className="mt-2 font-heading text-2xl font-medium tracking-tight text-balance sm:text-3xl">{project.title}</h2>
          <p className="mt-3 text-base leading-7">{project.summary}</p>
          <p className="mt-4 font-nav text-xs tracking-[0.16em] uppercase">
            {project.location} · {project.year}
          </p>
        </div>
      </Link>
    </article>
  );
}
