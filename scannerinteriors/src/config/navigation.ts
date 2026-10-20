import type { MetadataRoute } from "next";

export type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

export type PublicRoute = {
  label: string;
  href: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

export const publicRoutes = [
  { label: "Home", href: "/", changeFrequency: "monthly", priority: 1 },
  { label: "About", href: "/about", changeFrequency: "monthly", priority: 0.8 },
  {
    label: "Services",
    href: "/services",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    label: "Contact",
    href: "/contact",
    changeFrequency: "yearly",
    priority: 0.7,
  },
] as const satisfies readonly PublicRoute[];

export const mainNav = publicRoutes;
