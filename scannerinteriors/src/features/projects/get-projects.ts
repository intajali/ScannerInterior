import { projects } from "@/data/projects";
import type { Project } from "@/types";

export function getPublishedProjects(): readonly Project[] {
  return projects.filter((project) => project.status === "published");
}

export function getFeaturedProjects(): readonly Project[] {
  return getPublishedProjects().filter((project) => project.featured);
}
