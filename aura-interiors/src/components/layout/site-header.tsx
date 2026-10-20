import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0 rounded-sm">
            <span className="block font-heading text-[1.35rem] leading-tight tracking-tight sm:text-[1.6rem]">
              {siteConfig.mark}
            </span>
            <span className="mt-1 block text-[0.62rem] font-medium tracking-[0.14em] text-muted-foreground uppercase sm:text-[0.68rem]">
              {siteConfig.markDetail}
            </span>
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "h-11 shrink-0 px-4")}
          >
            <span className="sm:hidden">Consult</span>
            <span className="hidden sm:inline">Book a consultation</span>
          </Link>
        </div>
        <nav aria-label="Primary" className="-mx-1 flex gap-x-5 overflow-x-auto px-1 pb-1">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
