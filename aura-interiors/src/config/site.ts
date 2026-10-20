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
  email: "hello@scannerinteriors.com",
  locale: "en_US",
} as const;
