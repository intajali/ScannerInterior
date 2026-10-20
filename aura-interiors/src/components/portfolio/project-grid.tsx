import { ProjectCard } from "@/components/portfolio/project-card";
import type { Project } from "@/types";

type ProjectGridProps = {
  projects: readonly Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="max-w-xl text-base leading-7 text-muted-foreground">
        Selected projects will be published here.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
