import Link from "next/link";
import { Container } from "@/components/common/container";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-sage bg-ivory">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-heading text-3xl tracking-tight">{siteConfig.name}</p>
          <p className="max-w-sm text-sm leading-6">{siteConfig.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 font-nav text-sm tracking-wide">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm underline-offset-4 hover:underline hover:decoration-bronze"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-2 text-sm leading-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block underline decoration-sage underline-offset-4 hover:decoration-bronze"
          >
            {siteConfig.email}
          </a>
          <p>Commissions by appointment.</p>
          <p>
            <Link href="/" className="hover:underline hover:decoration-bronze">
              {siteConfig.name}
            </Link>
            <span aria-hidden="true"> · </span>
            <span>2026</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
