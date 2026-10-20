import type { EnquiryErrors, EnquiryInput } from "@/types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEnquiry(input: EnquiryInput): EnquiryErrors | null {
  const errors: EnquiryErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();
  const phone = input.phone?.trim() ?? "";

  if (name.length < 2) {
    errors.name = "Enter your name.";
  }

  if (!emailPattern.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (phone.length > 0 && phone.length < 7) {
    errors.phone = "Enter a valid phone number.";
  }

  if (message.length < 10) {
    errors.message = "Tell us a little more about the space.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}
