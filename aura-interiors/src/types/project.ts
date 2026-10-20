export type ProjectStatus = "draft" | "published";

export const projectCategories = [
  "Residential",
  "Commercial",
  "Luxury",
  "Minimalist",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type PortfolioFilter = "all" | ProjectCategory;

export type ProjectFrame = "tall" | "wide" | "square";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  highlights: readonly string[];
  year: number;
  status: ProjectStatus;
  featured: boolean;
  frame: ProjectFrame;
  serviceSlug: string;
  coverImage: string | null;
  images: readonly ProjectImage[];
};
