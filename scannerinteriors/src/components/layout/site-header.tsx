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
  "relative font-nav text-sm tracking-wide whitespace-nowrap text-charcoal transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:bg-bronze after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none";

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

    const root = document.documentElement;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      root.style.overflow = previousRootOverflow;
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) {
        setOpenPath(null);
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none",
        isHome && "-mb-16 lg:-mb-20",
        solid
          ? "border-b border-sage bg-ivory/95 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-ivory/80 backdrop-blur-md",
      )}
    >
      <Container className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:h-20 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-6">
        <SiteLogo className="justify-self-start" />
        <nav aria-label="Primary" className="hidden items-center justify-center gap-x-5 lg:flex xl:gap-x-8">
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
            className="inline-flex size-11 touch-manipulation items-center justify-center rounded-lg text-charcoal transition-colors duration-300 hover:text-bronze focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-bronze lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="relative size-5">
              <Menu
                className={cn(
                  "absolute inset-0 size-5 transition-opacity duration-200 motion-reduce:transition-none",
                  open ? "opacity-0" : "opacity-100",
                )}
                aria-hidden="true"
              />
              <X
                className={cn(
                  "absolute inset-0 size-5 transition-opacity duration-200 motion-reduce:transition-none",
                  open ? "opacity-100" : "opacity-0",
                )}
                aria-hidden="true"
              />
            </span>
          </button>
        </div>
      </Container>
      <div
        id="mobile-navigation"
        inert={open ? undefined : true}
        className={cn(
          "absolute inset-x-0 top-full grid overflow-hidden bg-ivory transition-[grid-template-rows,opacity,box-shadow] duration-300 ease-out motion-reduce:transition-none lg:hidden",
          open ? "grid-rows-[1fr] opacity-100 shadow-soft" : "pointer-events-none grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain lg:max-h-[calc(100dvh-5rem)]">
          <Container className="flex flex-col gap-1 border-b border-sage py-4">
          {mainNav.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-12 items-center font-nav text-base tracking-wide underline-offset-4",
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
        </div>
      </div>
    </header>
  );
}
