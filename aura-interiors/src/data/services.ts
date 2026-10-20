import type { Service } from "@/types";

export const services: readonly Service[] = [
  {
    slug: "homes",
    title: "Homes",
    summary:
      "Apartments and houses arranged around daily rituals — arrival, cooking, rest, and the quiet rooms in between.",
    description:
      "Residential work covers full homes and single rooms. The plan, joinery, lighting, and furnishings are drawn as one composition.",
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    summary:
      "Hotels, dining rooms, and guest spaces with a clear sense of welcome and a material palette that holds up to use.",
    description:
      "Guest spaces are designed for repeated use: durable finishes, calm lighting, and a sequence that makes arrival feel considered.",
  },
  {
    slug: "workplaces",
    title: "Workplaces",
    summary:
      "Studios and offices that feel considered rather than corporate, with light, acoustics, and focus built into the plan.",
    description:
      "Workplace projects balance focus and gathering. Acoustics, daylight, and storage are resolved before furniture is chosen.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
