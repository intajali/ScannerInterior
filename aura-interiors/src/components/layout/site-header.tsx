"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PrimaryButton } from "@/components/common/primary-button";
import { Container } from "@/components/common/container";
import { SiteLogo } from "@/components/layout/site-logo";
import { mainNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

const linkClass =
  "relative font-nav text-sm tracking-wide text-charcoal transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:bg-bronze after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 motion-reduce:transition-none";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const isHome = pathname === "/";
  const solid = !isHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none",
        isHome && "-mb-20",
        solid
          ? "border-b border-sage bg-ivory/95 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <SiteLogo />
        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {mainNav.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(linkClass, active && "after:scale-x-100")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <PrimaryButton href="/contact" className="hidden whitespace-nowrap lg:inline-flex">
            Book Consultation
          </PrimaryButton>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg text-charcoal transition-colors duration-300 hover:text-bronze focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-bronze lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>
      <div
        id="mobile-navigation"
        inert={open ? undefined : true}
        className={cn(
          "absolute inset-x-0 top-full border-b border-sage bg-ivory shadow-soft transition-all duration-300 motion-reduce:transition-none lg:hidden",
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {mainNav.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex h-11 items-center font-nav text-sm tracking-wide underline-offset-4",
                  active ? "underline decoration-bronze" : "hover:underline hover:decoration-bronze",
                )}
                onClick={() => setOpenPath(null)}
              >
                {item.label}
              </Link>
            );
          })}
          <PrimaryButton
            href="/contact"
            className="mt-3 w-full"
            onClick={() => setOpenPath(null)}
          >
            Book Consultation
          </PrimaryButton>
        </Container>
      </div>
    </header>
  );
}
