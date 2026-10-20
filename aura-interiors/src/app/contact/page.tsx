import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { ContactDetails } from "@/components/contact/contact-details";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Scanner Interiors Pvt Ltd about a residential, hospitality, or workplace commission.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about the space."
        description="Commissions are limited each season. A short note is enough to begin."
      />
      <section>
        <Container className="py-16 sm:py-20">
          <ContactDetails />
        </Container>
      </section>
    </>
  );
}
