const FALLBACK_SITE_URL = "http://localhost:3000";

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;

  try {
    return new URL(value).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const siteConfig = {
  name: "Scanner Interiors Pvt Ltd",
  mark: "Scanner Interiors Pvt Ltd",
  markDetail: "Designing Spaces, Inspiring Lives.",
  tagline: "Designing Spaces, Inspiring Lives.",
  description: "Residential and commercial interiors shaped by proportion, material, and light.",
  url: resolveSiteUrl(),
  logoLines: ["Scanner", "Interiors"],
  email: "hello@scannerinteriors.com",
  phone: "" as string,
  address: "By appointment",
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "") as string,
  whatsappMessage:
    "Hello, I would like to book a consultation with Scanner Interiors Pvt Ltd.",
  copyrightYear: 2026,
  social: [
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "Facebook", href: "https://www.facebook.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com" },
  ],
  locale: "en_US",
} as const;
