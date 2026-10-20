import { z } from "zod";
import { services } from "@/data/services";

const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const countryCodePattern = /^\+[1-9]\d{0,3}$/;
const phonePattern = /^\d{10}$/;

export const serviceOptions = services.map((service) => ({
  value: service.slug,
  label: service.title,
}));

const serviceSlugs: readonly string[] = serviceOptions.map((service) => service.value);

export function digitsOnly(value: string, maxLength: number) {
  return value.replace(/\D/g, "").slice(0, maxLength);
}

export function countryCodeInput(value: string) {
  return `+${digitsOnly(value, 4)}`;
}

export const enquiryFieldsSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(120, "Use a shorter name."),
  email: z
    .string()
    .trim()
    .max(254, "Enter a valid email address.")
    .regex(emailPattern, "Enter a valid email address."),
  countryCode: z
    .string()
    .trim()
    .regex(countryCodePattern, "Enter a country code such as +971."),
  phone: z.string().trim().regex(phonePattern, "Enter a 10-digit phone number."),
  service: z
    .string()
    .trim()
    .min(1, "Choose a service.")
    .refine((value) => serviceSlugs.includes(value), "Choose a listed service."),
  projectLocation: z
    .string()
    .trim()
    .min(2, "Enter the project location.")
    .max(160, "Use a shorter location."),
  budget: z.string().trim().max(80, "Use a shorter budget."),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more about the space.")
    .max(5000, "Use a shorter description."),
});

export const enquirySubmissionSchema = enquiryFieldsSchema.extend({
  companyWebsite: z.string().max(200),
  startedAt: z.number().int(),
  submissionKey: z.uuid("The form could not be submitted. Refresh the page and try again."),
});

export type EnquiryFormValues = z.infer<typeof enquiryFieldsSchema>;
export type EnquirySubmission = z.infer<typeof enquirySubmissionSchema>;

export const enquiryFieldNames = [
  "name",
  "email",
  "countryCode",
  "phone",
  "service",
  "projectLocation",
  "budget",
  "message",
] as const;

export type EnquiryFieldName = (typeof enquiryFieldNames)[number];

export function enquiryFieldErrors(error: z.ZodError) {
  const fieldErrors: Partial<Record<EnquiryFieldName, string>> = {};

  for (const issue of error.issues) {
    const field = issue.path[0];

    if (
      typeof field === "string" &&
      enquiryFieldNames.includes(field as EnquiryFieldName) &&
      !fieldErrors[field as EnquiryFieldName]
    ) {
      fieldErrors[field as EnquiryFieldName] = issue.message;
    }
  }

  return fieldErrors;
}
