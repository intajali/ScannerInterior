import { getProjectBySlug } from "@/features/projects/get-project-by-slug";
import { getPublishedProjects } from "@/features/projects/get-projects";
import type { Project } from "@/types";

export function getRelatedProjects(slug: string, limit = 2): readonly Project[] {
  const current = getProjectBySlug(slug);

  if (!current) {
    return [];
  }

  const others = getPublishedProjects().filter((project) => project.slug !== slug);
  const sameCategory = others.filter((project) => project.category === current.category);
  const rest = others.filter((project) => project.category !== current.category);

  return [...sameCategory, ...rest].slice(0, limit);
}
