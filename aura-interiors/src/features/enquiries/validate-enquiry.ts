import { enquiryFieldErrors, enquiryFieldsSchema } from "@/features/enquiries/enquiry-schema";
import type { EnquiryErrors, EnquiryInput } from "@/types";

export function validateEnquiry(input: EnquiryInput): EnquiryErrors | null {
  const parsed = enquiryFieldsSchema.safeParse(input);

  if (parsed.success) {
    return null;
  }

  const errors = enquiryFieldErrors(parsed.error);
  return Object.keys(errors).length > 0 ? errors : null;
}
