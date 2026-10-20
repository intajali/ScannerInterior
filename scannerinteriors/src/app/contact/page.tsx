import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ConsultationForm } from "@/components/contact/consultation-form";
import { ContactDetails } from "@/components/contact/contact-details";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Scanner Interiors Pvt Ltd. Share the service, location, and the room you want to create.",
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
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)] lg:gap-16">
          <ConsultationForm />
          <ContactDetails />
        </div>
      </SectionWrapper>
    </>
  );
}
