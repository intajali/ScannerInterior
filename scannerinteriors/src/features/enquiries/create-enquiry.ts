import { getPrismaClient } from "@/lib/prisma";
import type { EnquirySubmission } from "@/features/enquiries/enquiry-schema";

const recentWindowMs = 60 * 60 * 1000;
const recentLimit = 5;

export type CreateEnquiryResult =
  | { ok: true; id: string }
  | { ok: false; formError: string };

function blankToNull(value: string) {
  return value.length > 0 ? value : null;
}

function isUniqueConflict(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "P2002"
  );
}

export async function createEnquiry(input: EnquirySubmission): Promise<CreateEnquiryResult> {
  const prisma = getPrismaClient();
  const email = input.email.toLowerCase();

  const existing = await prisma.enquiry.findUnique({
    where: { submissionKey: input.submissionKey },
    select: { id: true },
  });

  if (existing) {
    return { ok: true, id: existing.id };
  }

  const recentCount = await prisma.enquiry.count({
    where: {
      email,
      createdAt: { gte: new Date(Date.now() - recentWindowMs) },
    },
  });

  if (recentCount >= recentLimit) {
    return {
      ok: false,
      formError:
        "We already have several notes from this email. Please wait a little while, or write to us directly.",
    };
  }

  const service = await prisma.service.findUnique({
    where: { slug: input.service },
    select: { id: true },
  });

  if (!service) {
    return {
      ok: false,
      formError:
        "We could not save your enquiry because the service list is not ready. Please write to us by email.",
    };
  }

  try {
    const enquiry = await prisma.enquiry.create({
      data: {
        name: input.name,
        email,
        phone: `${input.countryCode} ${input.phone}`,
        serviceId: service.id,
        projectLocation: input.projectLocation,
        budget: blankToNull(input.budget),
        message: input.message,
        submissionKey: input.submissionKey,
      },
      select: { id: true },
    });

    return { ok: true, id: enquiry.id };
  } catch (error) {
    if (!isUniqueConflict(error)) {
      throw error;
    }

    const saved = await prisma.enquiry.findUnique({
      where: { submissionKey: input.submissionKey },
      select: { id: true },
    });

    if (saved) {
      return { ok: true, id: saved.id };
    }

    throw error;
  }
}
