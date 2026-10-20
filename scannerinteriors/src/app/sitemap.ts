import type { MetadataRoute } from "next";
import { publicRoutes } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getPublishedProjects } from "@/features/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = publicRoutes.map((route) => ({
    url: new URL(route.href, siteConfig.url).toString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projects: MetadataRoute.Sitemap = getPublishedProjects().map((project) => ({
    url: new URL(`/portfolio/${project.slug}`, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...projects];
}
