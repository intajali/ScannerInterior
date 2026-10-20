import Link from "next/link";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-heading text-3xl tracking-tight">{siteConfig.name}</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            {siteConfig.tagline}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-2 text-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            {siteConfig.email}
          </a>
          <p className="text-muted-foreground">Commissions by appointment.</p>
          <p className="text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              {siteConfig.name}
            </Link>
            <span aria-hidden="true"> · </span>
            <span>2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
