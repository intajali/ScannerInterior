import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("text-charcoal", className)} aria-hidden="true">
      <rect x="1.25" y="1.25" width="37.5" height="37.5" fill="#f7f4ef" stroke="currentColor" strokeWidth="1.25" />
      <path d="M11 29.5V13.5H29.5" fill="none" className="text-bronze" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17.25" y="17.25" width="9.5" height="9.5" fill="none" stroke="currentColor" strokeWidth="1.15" />
      <path d="M22 17.25v9.5M17.25 22h9.5" fill="none" stroke="currentColor" strokeWidth="1.15" />
    </svg>
  );
}

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5 rounded-sm leading-none", className)}>
      <LogoMark className="size-8 shrink-0 sm:size-10" />
      <span className="inline-flex flex-col">
        {siteConfig.logoLines.map((line) => (
          <span
            key={line}
            className="font-nav text-[0.68rem] font-medium tracking-[0.2em] text-charcoal uppercase min-[380px]:tracking-[0.28em] sm:text-xs sm:tracking-[0.32em]"
          >
            {line}
          </span>
        ))}
      </span>
    </Link>
  );
}
