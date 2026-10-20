import type { Principle, Testimonial } from "@/types";

export const principles: readonly Principle[] = [
  {
    number: "01",
    title: "Proportion before decoration",
    description:
      "Rooms are composed first. Furniture, color, and objects arrive only after the architecture of the space feels calm.",
  },
  {
    number: "02",
    title: "Materials that age well",
    description:
      "Stone, timber, linen, and metal are chosen for how they wear, not for how they photograph on the first day.",
  },
  {
    number: "03",
    title: "Light as the first material",
    description:
      "Daylight, shade, and evening light decide the palette. Every finish is tested against the hours you actually live there.",
  },
];

export const aboutPreview = {
  title: "Creating Beautiful Spaces",
  introduction:
    "Scanner Interiors Pvt Ltd designs residential and commercial interiors that hold comfort, function, and elegance in the same room.",
  detail:
    "The work starts with how a space is used. Proportion, material, and light are settled before furniture and objects are chosen, so the room still feels right years later.",
} as const;

export const designProcess = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with the site, the way the room is lived in, and what you want it to feel like.",
  },
  {
    number: "02",
    title: "Concept Design",
    description:
      "A first plan, palette, and material direction set the character of the space before detail is drawn.",
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "Joinery, lighting, and finishes are resolved together so each decision supports the one before it.",
  },
  {
    number: "04",
    title: "Execution & Delivery",
    description:
      "The drawings are carried through installation, with the studio reviewing the room as it is completed.",
  },
] as const;

export const demonstrationTestimonials: readonly Testimonial[] = [
  {
    id: "demo-calm-room",
    quote:
      "The rooms feel calm the moment you walk in, and they still work on an ordinary Tuesday.",
    author: "Sample client",
    role: "Demonstration",
    featured: true,
  },
  {
    id: "demo-plan-and-light",
    quote:
      "Nothing was added for effect. The plan, the light, and the furniture finally agree.",
    author: "Sample client",
    role: "Demonstration",
    featured: true,
  },
  {
    id: "demo-sequence",
    quote:
      "We knew what we wanted the house to feel like. The studio turned that into a sequence of rooms we actually live in.",
    author: "Sample client",
    role: "Demonstration",
    featured: true,
  },
];
