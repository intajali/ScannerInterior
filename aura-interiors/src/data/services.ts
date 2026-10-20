import type { Service } from "@/types";

export const services: readonly Service[] = [
  {
    slug: "residential",
    title: "Residential Interior Design",
    summary:
      "Homes planned around daily life, with rooms that feel comfortable and composed.",
    description:
      "Apartments and houses are designed as one composition: the plan, joinery, lighting, and furnishings.",
  },
  {
    slug: "commercial",
    title: "Commercial Interior Design",
    summary:
      "Studios, offices, and guest spaces with a clear welcome and materials that hold up to use.",
    description:
      "Commercial work covers workplaces and hospitality rooms. Light, acoustics, and circulation are resolved before furniture is chosen.",
  },
  {
    slug: "renovation",
    title: "Space Renovation",
    summary:
      "Existing rooms reworked so the plan, finishes, and light feel settled again.",
    description:
      "Renovation keeps what is sound and replaces what is not. The new work is drawn to sit quietly with the building.",
  },
  {
    slug: "styling",
    title: "Interior Styling",
    summary:
      "Furniture, textiles, and objects chosen once the room itself is already calm.",
    description:
      "Styling is the last layer: pieces selected for proportion and use, not as a substitute for the plan.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
