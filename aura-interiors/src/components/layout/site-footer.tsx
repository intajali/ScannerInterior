import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode, SVGProps } from "react";
import { Container } from "@/components/common/container";
import { BackToTop } from "@/components/layout/back-to-top";
import { SiteLogo } from "@/components/layout/site-logo";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

type SocialLabel = (typeof siteConfig.social)[number]["label"];

function SocialIcon({ label, ...props }: { label: SocialLabel } & SVGProps<SVGSVGElement>) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.5 9H4V20h2.5V9zM5.2 4C4.3 4 3.6 4.7 3.6 5.6S4.3 7.2 5.2 7.2 6.8 6.5 6.8 5.6 6.1 4 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9h2.4v1.5c.4-.7 1.4-1.8 3.3-1.8 2.4 0 4.3 1.6 4.3 5V20z" />
    </svg>
  );
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-nav text-xs font-medium tracking-[0.2em] text-charcoal uppercase">
      {children}
    </h2>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-sage bg-ivory">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="space-y-4">
          <SiteLogo />
          <p className="max-w-xs font-heading text-2xl leading-snug">{siteConfig.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <FooterHeading>Explore</FooterHeading>
          <ul className="mt-4 space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-nav text-sm tracking-wide underline-offset-4 hover:underline hover:decoration-bronze"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services">
          <FooterHeading>Services</FooterHeading>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-sm leading-6 underline-offset-4 hover:underline hover:decoration-bronze"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <FooterHeading>Contact</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm leading-6">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline hover:decoration-bronze"
              >
                <Mail className="size-4 shrink-0 text-bronze" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.phone ? (
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 underline-offset-4 hover:underline hover:decoration-bronze"
                >
                  <Phone className="size-4 shrink-0 text-bronze" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
            ) : null}
            <li className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-bronze" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
          <ul className="mt-5 flex gap-2">
            {siteConfig.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex size-11 items-center justify-center rounded-lg border border-sage text-charcoal transition-colors duration-300 hover:border-bronze hover:text-bronze"
                >
                  <SocialIcon label={item.label} className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-sage">
        <Container className="flex items-center justify-between gap-4 py-5">
          <p className="text-sm leading-6">
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <BackToTop />
        </Container>
      </div>
    </footer>
  );
}
