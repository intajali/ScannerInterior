import type { Project, ProjectImage } from "@/types";

function photo(name: string, alt: string): ProjectImage {
  return { src: `/images/projects/${name}.jpg`, alt };
}

export const projects: readonly Project[] = [
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    location: "Coast",
    category: "Residential",
    summary:
      "A family house organised around a shaded court, with rooms that open to the garden.",
    description:
      "The plan puts circulation around an open court so every main room takes daylight from two sides. Joinery is in oiled timber, and the palette stays close to the stone and plaster.",
    highlights: [
      "Rooms arranged around an open court",
      "Daylight from two sides in the main rooms",
      "Timber joinery kept close to the stone and plaster",
    ],
    year: 2025,
    status: "published",
    featured: true,
    frame: "tall",
    serviceSlug: "residential",
    coverImage: "/images/projects/courtyard-house.jpg",
    images: [
      photo(
        "courtyard-house",
        "Demonstration photograph of a modern house at dusk, with a tree in the garden and rooms open to the lawn.",
      ),
      photo(
        "garden-house",
        "Demonstration photograph of a dark-clad house entrance with a timber door and a warm interior light.",
      ),
    ],
  },
  {
    slug: "linen-dining-room",
    title: "Linen Dining Room",
    location: "City",
    category: "Commercial",
    summary:
      "A dining room for a small hotel, lined in limewash and dressed with linen, timber, and low evening light.",
    description:
      "The room is planned for long sittings. Seating, acoustics, and the fall of evening light were resolved together so the space stays calm when it is full.",
    highlights: [
      "Seating planned for long sittings",
      "Evening light kept low and even",
      "Limewash, linen, and timber used as one palette",
    ],
    year: 2024,
    status: "published",
    featured: true,
    frame: "wide",
    serviceSlug: "commercial",
    coverImage: "/images/projects/linen-dining-room.jpg",
    images: [
      photo(
        "linen-dining-room",
        "Demonstration photograph of a dining room with a pale table, green chairs, and a round mirror.",
      ),
    ],
  },
  {
    slug: "north-studio",
    title: "North Studio",
    location: "Studio building",
    category: "Minimalist",
    summary:
      "An open room with a quiet sofa, a timber wall, and storage held in the depth of the joinery.",
    description:
      "North light sets the orientation. The room stays clear, and materials sit in a single run of joinery rather than being scattered through the space.",
    highlights: [
      "A clear floor and a single seating group",
      "Timber used on one wall only",
      "Storage built into the joinery, not added as furniture",
    ],
    year: 2026,
    status: "published",
    featured: true,
    frame: "square",
    serviceSlug: "residential",
    coverImage: "/images/projects/north-studio.jpg",
    images: [
      photo(
        "north-studio",
        "Demonstration photograph of an open living room with a grey sofa, timber wall, and a view to the kitchen.",
      ),
    ],
  },
  {
    slug: "stone-suite",
    title: "Stone Suite",
    location: "Hill house",
    category: "Luxury",
    summary:
      "A dining room in grey stone and a bedroom in charcoal, both kept spare and carefully lit.",
    description:
      "The suite is two rooms with one material idea. Stone and dark paint do the work, and the furniture is limited to what each room needs.",
    highlights: [
      "Stone wall carried from the dining room toward the stair",
      "A bedroom planned around one bed and low lamps",
      "Black, grey, and timber held to a short palette",
    ],
    year: 2025,
    status: "published",
    featured: false,
    frame: "tall",
    serviceSlug: "residential",
    coverImage: "/images/projects/stone-suite.jpg",
    images: [
      photo(
        "stone-suite",
        "Demonstration photograph of a dining room with a black table, grey chairs, and a stone wall beside a stair.",
      ),
      photo(
        "evening-bedroom",
        "Demonstration photograph of a bedroom with a pale upholstered bed, dark walls, and a brass light.",
      ),
    ],
  },
  {
    slug: "city-reception",
    title: "City Reception",
    location: "Office floor",
    category: "Commercial",
    summary:
      "A reception and pantry along a glazed corridor, with a long bench for waiting.",
    description:
      "The arrival sequence is one straight view. Glazing, a dark wall, and a low bench give the room a clear front without adding a separate lobby.",
    highlights: [
      "A straight view from the door to the far room",
      "Waiting kept to one bench and a low shelf",
      "Pantry joinery finished in the same dark tone as the wall",
    ],
    year: 2024,
    status: "published",
    featured: false,
    frame: "wide",
    serviceSlug: "commercial",
    coverImage: "/images/projects/reception.jpg",
    images: [
      photo(
        "reception",
        "Demonstration photograph of an office reception with a teal bench, dark walls, and a glazed corridor.",
      ),
    ],
  },
  {
    slug: "timber-house",
    title: "Timber House",
    location: "Garden suburb",
    category: "Residential",
    summary:
      "A timber-clad house with a living room facing the garden and a kitchen kept light.",
    description:
      "The house is entered under a timber canopy. Inside, the living room takes the long garden wall, and the kitchen stays white so the timber reads as the accent.",
    highlights: [
      "Arrival under a timber canopy",
      "Living room oriented to the garden windows",
      "Kitchen joinery kept pale against the timber",
    ],
    year: 2023,
    status: "published",
    featured: false,
    frame: "square",
    serviceSlug: "residential",
    coverImage: "/images/projects/bath.jpg",
    images: [
      photo(
        "bath",
        "Demonstration photograph of a timber and white house with a paved court and a black fence.",
      ),
      photo(
        "lounge",
        "Demonstration photograph of a living room with a grey sofa, leather chairs, and tall garden windows.",
      ),
      photo(
        "kitchen",
        "Demonstration photograph of a white kitchen with a marble island and hexagonal wall tiles.",
      ),
    ],
  },
  {
    slug: "window-room",
    title: "Window Room",
    location: "Apartment",
    category: "Minimalist",
    summary:
      "A living room reduced to one sofa, one table, and a wall of glass.",
    description:
      "The room is planned around the window. Furniture stays low, and the joinery is pushed to the side wall so the glass remains the main surface.",
    highlights: [
      "One seating group facing the glass",
      "Joinery kept to the side wall",
      "A short list of materials: leather, oak, and painted plaster",
    ],
    year: 2026,
    status: "published",
    featured: false,
    frame: "wide",
    serviceSlug: "styling",
    coverImage: "/images/projects/pale-apartment.jpg",
    images: [
      photo(
        "pale-apartment",
        "Demonstration photograph of a living room with a leather sofa, a wood ceiling, and a wall of windows.",
      ),
    ],
  },
];
