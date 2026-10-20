import type { Project } from "@/types";
import { getPublishedProjects } from "@/features/projects/get-projects";

export function getProjectBySlug(slug: string): Project | undefined {
  return getPublishedProjects().find((project) => project.slug === slug);
}
