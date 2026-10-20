export type ProjectStatus = "draft" | "published";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  description: string;
  year: number;
  status: ProjectStatus;
  featured: boolean;
  serviceSlug: string;
  coverImage: string | null;
  images: readonly ProjectImage[];
};
