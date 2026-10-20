import type { Principle } from "@/types";

export const aboutContent = {
  eyebrow: "About",
  title: "A practice built around how a room is lived in.",
  description:
    "Scanner Interiors Pvt Ltd designs residential and commercial spaces with proportion, material, and light held in balance.",
  image: "/images/projects/courtyard-house.jpg",
  imageAlt:
    "Demonstration photograph of a modern house at dusk, with a tree in the garden and rooms open to the lawn.",
  story: {
    title: "Our Story",
    paragraphs: [
      "Scanner Interiors Pvt Ltd designs homes, workplaces, and guest rooms for people who want comfort and elegance in the same space.",
      "The practice begins with the way a room is used. Decoration follows that structure. It does not lead it.",
      "There is no published founding story beyond the work itself. The notes below describe how the studio approaches a commission.",
    ],
    image: "/images/projects/pale-apartment.jpg",
    imageAlt:
      "Demonstration photograph of a living room with a leather sofa, a wood ceiling, and a wall of windows.",
  },
  mission: {
    title: "Mission",
    text: "To plan rooms that are comfortable to use, clear in proportion, and calm enough to live with every day.",
  },
  vision: {
    title: "Vision",
    text: "Spaces that still feel right years later, because the plan, the materials, and the light were decided together.",
  },
  reasons: [
    {
      number: "01",
      title: "The plan comes first",
      description:
        "Furniture and finishes wait until the routes, the light, and the way the room is used are already clear.",
    },
    {
      number: "02",
      title: "A short list of materials",
      description:
        "Stone, timber, linen, and metal are chosen for how they wear, then held to a palette the room can sustain.",
    },
    {
      number: "03",
      title: "Few commissions at a time",
      description:
        "The studio takes a limited amount of work each season so each room can be drawn and reviewed with care.",
    },
    {
      number: "04",
      title: "One composition",
      description:
        "Joinery, lighting, and furniture are specified together, so the finished room does not look assembled from parts.",
    },
  ] as const satisfies readonly Principle[],
} as const;

export const teamRoles = [
  {
    role: "Design lead",
    focus: "Holds the plan, the proportion, and the first material direction.",
  },
  {
    role: "Project lead",
    focus: "Carries the drawings through decisions, samples, and installation.",
  },
  {
    role: "Materials",
    focus: "Reviews stone, timber, textile, and furniture in the light of the room.",
  },
  {
    role: "Site review",
    focus: "Checks the finished work against the drawings before the room is handed over.",
  },
] as const;
