import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ContactDetails } from "@/components/contact/contact-details";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Scanner Interiors Pvt Ltd about a residential, commercial, renovation, or styling commission.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about the space."
        description="Commissions are limited each season. A short note is enough to begin."
      />
      <SectionWrapper>
        <ContactDetails />
      </SectionWrapper>
    </>
  );
}
