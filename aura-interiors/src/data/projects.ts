import type { Project } from "@/types";

export const projects: readonly Project[] = [
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    location: "Coast",
    summary:
      "A family house organised around a shaded court, with stone floors and rooms that open to the garden.",
    description:
      "The plan puts circulation around an open court so every main room takes daylight from two sides. Joinery is in oiled timber, and the palette stays close to the stone and plaster.",
    year: 2025,
    status: "published",
    featured: true,
    serviceSlug: "homes",
    coverImage: null,
    images: [],
  },
  {
    slug: "linen-dining-room",
    title: "Linen Dining Room",
    location: "City",
    summary:
      "A dining room for a small hotel, lined in limewash and dressed with linen, timber, and low evening light.",
    description:
      "The room is planned for long sittings. Seating, acoustics, and the fall of evening light were resolved together so the space stays calm when it is full.",
    year: 2024,
    status: "published",
    featured: true,
    serviceSlug: "hospitality",
    coverImage: null,
    images: [],
  },
  {
    slug: "north-studio",
    title: "North Studio",
    location: "Studio building",
    summary:
      "A workplace with a quiet work room, a shared table, and storage built into the depth of the walls.",
    description:
      "North light sets the orientation. The work room stays clear, while materials and samples live in joinery along the inner wall.",
    year: 2026,
    status: "published",
    featured: false,
    serviceSlug: "workplaces",
    coverImage: null,
    images: [],
  },
];
