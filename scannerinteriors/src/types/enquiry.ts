export type {
  EnquiryFieldName as EnquiryField,
  EnquiryFormValues as EnquiryInput,
} from "@/features/enquiries/enquiry-schema";

import type { EnquiryFieldName } from "@/features/enquiries/enquiry-schema";

export type EnquiryErrors = Partial<Record<EnquiryFieldName, string>>;
