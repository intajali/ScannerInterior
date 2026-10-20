"use server";

import { createEnquiry } from "@/features/enquiries/create-enquiry";
import {
  enquiryFieldErrors,
  enquirySubmissionSchema,
  type EnquiryFieldName,
} from "@/features/enquiries/enquiry-schema";

const minimumFillMs = 2000;
const maximumAgeMs = 12 * 60 * 60 * 1000;

export type SubmitEnquiryResult =
  | { ok: true; id: string }
  | {
      ok: false;
      fieldErrors?: Partial<Record<EnquiryFieldName, string>>;
      formError?: string;
    };

export async function submitEnquiry(payload: unknown): Promise<SubmitEnquiryResult> {
  const parsed = enquirySubmissionSchema.safeParse(payload);

  if (!parsed.success) {
    const fieldErrors = enquiryFieldErrors(parsed.error);
    return {
      ok: false,
      fieldErrors,
      formError:
        Object.keys(fieldErrors).length > 0
          ? "Check the highlighted fields and try again."
          : "The form could not be submitted. Refresh the page and try again.",
    };
  }

  if (parsed.data.companyWebsite.trim().length > 0) {
    return {
      ok: false,
      formError: "We could not send your enquiry. Please write to us by email.",
    };
  }

  const elapsed = Date.now() - parsed.data.startedAt;

  if (elapsed < minimumFillMs || elapsed > maximumAgeMs) {
    return {
      ok: false,
      formError: "Please wait a moment and send the form again.",
    };
  }

  try {
    const saved = await createEnquiry(parsed.data);

    if (!saved.ok) {
      return { ok: false, formError: saved.formError };
    }

    return { ok: true, id: saved.id };
  } catch (error) {
    console.error("Enquiry save failed", error);
    return {
      ok: false,
      formError: "We could not save your enquiry. Please try again, or write to us by email.",
    };
  }
}
