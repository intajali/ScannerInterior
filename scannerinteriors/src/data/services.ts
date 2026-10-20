import type { Service } from "@/types";

export const services: readonly Service[] = [
  {
    slug: "residential",
    title: "Residential Interior Design",
    summary:
      "Homes planned around daily life, with rooms that feel comfortable and composed.",
    description:
      "Apartments and houses are designed as one composition. The plan, joinery, lighting, and furnishings are drawn together so arrival, cooking, rest, and the quieter rooms between them feel settled.",
    benefits: [
      "A plan based on how the household actually lives",
      "Joinery, light, and furniture resolved as one",
      "Rooms that stay calm after the first month of use",
    ],
    image: "/images/projects/lounge.jpg",
    imageAlt:
      "Demonstration photograph of a living room with a grey sofa, leather chairs, and tall garden windows.",
  },
  {
    slug: "commercial",
    title: "Commercial Interior Design",
    summary:
      "Studios, offices, and guest spaces with a clear welcome and materials that hold up to use.",
    description:
      "Commercial work covers workplaces and guest rooms. Circulation, acoustics, and daylight are settled before furniture is chosen, so the room can be used every day without looking tired.",
    benefits: [
      "A clear arrival and a straightforward route through the space",
      "Finishes chosen for wear, not only for the opening day",
      "Light and acoustics planned with the furniture",
    ],
    image: "/images/projects/reception.jpg",
    imageAlt:
      "Demonstration photograph of an office reception with a teal bench, dark walls, and a glazed corridor.",
  },
  {
    slug: "renovation",
    title: "Space Renovation",
    summary:
      "Existing rooms reworked so the plan, finishes, and light feel settled again.",
    description:
      "Renovation keeps what is sound and replaces what is not. The new work is drawn to sit quietly with the building, so the room feels repaired rather than replaced.",
    benefits: [
      "What should stay is decided before anything is removed",
      "New finishes matched to the light already in the room",
      "Services and storage resolved inside the existing structure",
    ],
    image: "/images/projects/kitchen.jpg",
    imageAlt:
      "Demonstration photograph of a white kitchen with a marble island and hexagonal wall tiles.",
  },
  {
    slug: "styling",
    title: "Interior Styling",
    summary:
      "Furniture, textiles, and objects chosen once the room itself is already calm.",
    description:
      "Styling is the last layer. Pieces are selected for proportion and use, and they are edited until the room feels complete without being crowded.",
    benefits: [
      "Furniture chosen after the plan is already clear",
      "Textiles and objects limited to what the room needs",
      "A palette that can be lived with, not only photographed",
    ],
    image: "/images/projects/linen-dining-room.jpg",
    imageAlt:
      "Demonstration photograph of a dining room with a pale table, green chairs, and a round mirror.",
  },
  {
    slug: "materials",
    title: "Furniture and Material Selection",
    summary:
      "Stone, timber, textile, and furniture chosen for how they wear and how they sit together.",
    description:
      "Materials are sampled in the actual light of the room. Furniture is specified for scale and comfort, so each piece supports the composition instead of competing with it.",
    benefits: [
      "Samples reviewed in the room, not only in a showroom",
      "A short palette of stone, timber, metal, and cloth",
      "Furniture specified for size, comfort, and longevity",
    ],
    image: "/images/projects/evening-bedroom.jpg",
    imageAlt:
      "Demonstration photograph of a bedroom with a pale upholstered bed, dark walls, and a brass light.",
  },
  {
    slug: "planning",
    title: "Space Planning",
    summary:
      "The arrangement of rooms, routes, and furniture before decoration begins.",
    description:
      "Planning decides where people sit, walk, store, and gather. The drawing is tested against daily use so the later choices of finish and furniture have a clear structure to follow.",
    benefits: [
      "Routes and furniture positions drawn before finishes",
      "Storage planned into the walls rather than added later",
      "A layout that still works when the room is full",
    ],
    image: "/images/projects/north-studio.jpg",
    imageAlt:
      "Demonstration photograph of an open living room with a grey sofa, timber wall, and a view to the kitchen.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
