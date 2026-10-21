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
  phone: "+91 9831013790" as string,
  address: {
    street: "56, Metcalfe Street",
    unit: "Office Unit No. 3A",
    locality: "Kolkata",
    region: "West Bengal",
    postalCode: "700013",
    country: "India",
  },
  map: {
    lat: 22.5701,
    lng: 88.3547,
  },
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

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${siteConfig.map.lat},${siteConfig.map.lng}`;

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${siteConfig.map.lat},${siteConfig.map.lng}&z=17&output=embed`;
