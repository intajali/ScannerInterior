import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { ProjectCategory } from "../src/generated/prisma/enums";

type SeedImage = {
  imageUrl: string;
  altText: string;
};

type SeedProject = {
  title: string;
  slug: string;
  description: string;
  category: ProjectCategory;
  coverImage: string;
  images: SeedImage[];
};

type SeedService = {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
};

const services: SeedService[] = [
  {
    slug: "residential",
    title: "Residential Interior Design",
    description:
      "Apartments and houses are designed as one composition. The plan, joinery, lighting, and furnishings are drawn together so arrival, cooking, rest, and the quieter rooms between them feel settled.",
    imageUrl: "/images/projects/lounge.jpg",
  },
  {
    slug: "commercial",
    title: "Commercial Interior Design",
    description:
      "Commercial work covers workplaces and guest rooms. Circulation, acoustics, and daylight are settled before furniture is chosen, so the room can be used every day without looking tired.",
    imageUrl: "/images/projects/reception.jpg",
  },
  {
    slug: "renovation",
    title: "Space Renovation",
    description:
      "Renovation keeps what is sound and replaces what is not. The new work is drawn to sit quietly with the building, so the room feels repaired rather than replaced.",
    imageUrl: "/images/projects/kitchen.jpg",
  },
  {
    slug: "styling",
    title: "Interior Styling",
    description:
      "Styling is the last layer. Pieces are selected for proportion and use, and they are edited until the room feels complete without being crowded.",
    imageUrl: "/images/projects/linen-dining-room.jpg",
  },
  {
    slug: "materials",
    title: "Furniture and Material Selection",
    description:
      "Materials are sampled in the actual light of the room. Furniture is specified for scale and comfort, so each piece supports the composition instead of competing with it.",
    imageUrl: "/images/projects/evening-bedroom.jpg",
  },
  {
    slug: "planning",
    title: "Space Planning",
    description:
      "Planning decides where people sit, walk, store, and gather. The drawing is tested against daily use so the later choices of finish and furniture have a clear structure to follow.",
    imageUrl: "/images/projects/north-studio.jpg",
  },
];

const projects: SeedProject[] = [
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    category: ProjectCategory.RESIDENTIAL,
    description:
      "The plan puts circulation around an open court so every main room takes daylight from two sides. Joinery is in oiled timber, and the palette stays close to the stone and plaster.",
    coverImage: "/images/projects/courtyard-house.jpg",
    images: [
      {
        imageUrl: "/images/projects/courtyard-house.jpg",
        altText:
          "Demonstration photograph of a modern house at dusk, with a tree in the garden and rooms open to the lawn.",
      },
      {
        imageUrl: "/images/projects/garden-house.jpg",
        altText:
          "Demonstration photograph of a dark-clad house entrance with a timber door and a warm interior light.",
      },
    ],
  },
  {
    slug: "linen-dining-room",
    title: "Linen Dining Room",
    category: ProjectCategory.COMMERCIAL,
    description:
      "The room is planned for long sittings. Seating, acoustics, and the fall of evening light were resolved together so the space stays calm when it is full.",
    coverImage: "/images/projects/linen-dining-room.jpg",
    images: [
      {
        imageUrl: "/images/projects/linen-dining-room.jpg",
        altText:
          "Demonstration photograph of a dining room with a pale table, green chairs, and a round mirror.",
      },
    ],
  },
  {
    slug: "north-studio",
    title: "North Studio",
    category: ProjectCategory.MINIMALIST,
    description:
      "North light sets the orientation. The room stays clear, and materials sit in a single run of joinery rather than being scattered through the space.",
    coverImage: "/images/projects/north-studio.jpg",
    images: [
      {
        imageUrl: "/images/projects/north-studio.jpg",
        altText:
          "Demonstration photograph of an open living room with a grey sofa, timber wall, and a view to the kitchen.",
      },
    ],
  },
  {
    slug: "stone-suite",
    title: "Stone Suite",
    category: ProjectCategory.LUXURY,
    description:
      "The suite is two rooms with one material idea. Stone and dark paint do the work, and the furniture is limited to what each room needs.",
    coverImage: "/images/projects/stone-suite.jpg",
    images: [
      {
        imageUrl: "/images/projects/stone-suite.jpg",
        altText:
          "Demonstration photograph of a dining room with a black table, grey chairs, and a stone wall beside a stair.",
      },
      {
        imageUrl: "/images/projects/evening-bedroom.jpg",
        altText:
          "Demonstration photograph of a bedroom with a pale upholstered bed, dark walls, and a brass light.",
      },
    ],
  },
  {
    slug: "city-reception",
    title: "City Reception",
    category: ProjectCategory.COMMERCIAL,
    description:
      "The arrival sequence is one straight view. Glazing, a dark wall, and a low bench give the room a clear front without adding a separate lobby.",
    coverImage: "/images/projects/reception.jpg",
    images: [
      {
        imageUrl: "/images/projects/reception.jpg",
        altText:
          "Demonstration photograph of an office reception with a teal bench, dark walls, and a glazed corridor.",
      },
    ],
  },
  {
    slug: "timber-house",
    title: "Timber House",
    category: ProjectCategory.RESIDENTIAL,
    description:
      "The house is entered under a timber canopy. Inside, the living room takes the long garden wall, and the kitchen stays white so the timber reads as the accent.",
    coverImage: "/images/projects/bath.jpg",
    images: [
      {
        imageUrl: "/images/projects/bath.jpg",
        altText:
          "Demonstration photograph of a timber and white house with a paved court and a black fence.",
      },
      {
        imageUrl: "/images/projects/lounge.jpg",
        altText:
          "Demonstration photograph of a living room with a grey sofa, leather chairs, and tall garden windows.",
      },
      {
        imageUrl: "/images/projects/kitchen.jpg",
        altText:
          "Demonstration photograph of a white kitchen with a marble island and hexagonal wall tiles.",
      },
    ],
  },
  {
    slug: "window-room",
    title: "Window Room",
    category: ProjectCategory.MINIMALIST,
    description:
      "The room is planned around the window. Furniture stays low, and the joinery is pushed to the side wall so the glass remains the main surface.",
    coverImage: "/images/projects/pale-apartment.jpg",
    images: [
      {
        imageUrl: "/images/projects/pale-apartment.jpg",
        altText:
          "Demonstration photograph of a living room with a leather sofa, a wood ceiling, and a wall of windows.",
      },
    ],
  },
];

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL is not set. Copy .env.example to .env and set your PostgreSQL connection string before seeding.",
  );
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

async function main() {
  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {
        title: service.title,
        description: service.description,
        imageUrl: service.imageUrl,
      },
      create: service,
    });
  }

  for (const project of projects) {
    const saved = await prisma.project.upsert({
      where: { slug: project.slug },
      update: {
        title: project.title,
        description: project.description,
        category: project.category,
        coverImage: project.coverImage,
      },
      create: {
        title: project.title,
        slug: project.slug,
        description: project.description,
        category: project.category,
        coverImage: project.coverImage,
      },
    });

    await prisma.projectImage.deleteMany({ where: { projectId: saved.id } });
    await prisma.projectImage.createMany({
      data: project.images.map((image, sortOrder) => ({
        projectId: saved.id,
        imageUrl: image.imageUrl,
        altText: image.altText,
        sortOrder,
      })),
    });
  }
}

try {
  await main();
} finally {
  await prisma.$disconnect();
}
