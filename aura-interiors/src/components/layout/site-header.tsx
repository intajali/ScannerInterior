import Link from "next/link";
import { PrimaryButton } from "@/components/common/primary-button";
import { Container } from "@/components/common/container";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-sage bg-ivory/90 backdrop-blur-md">
      <Container className="flex flex-col gap-3 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0 rounded-lg">
            <span className="block font-heading text-[1.35rem] leading-tight font-medium tracking-tight sm:text-[1.6rem]">
              {siteConfig.mark}
            </span>
            <span className="mt-1 block font-nav text-[0.62rem] font-medium tracking-[0.14em] uppercase sm:text-[0.68rem]">
              {siteConfig.markDetail}
            </span>
          </Link>
          <PrimaryButton href="/contact" className="shrink-0 px-4">
            <span className="sm:hidden">Consult</span>
            <span className="hidden sm:inline">Book a consultation</span>
          </PrimaryButton>
        </div>
        <nav aria-label="Primary" className="-mx-1 flex gap-x-5 overflow-x-auto px-1 pb-1">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-sm font-nav text-sm tracking-wide text-charcoal underline-offset-4 transition-colors duration-300 hover:underline hover:decoration-bronze"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
