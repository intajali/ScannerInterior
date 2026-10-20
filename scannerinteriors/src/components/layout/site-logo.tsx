import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <Link href="/" className={cn("inline-flex flex-col rounded-sm leading-none", className)}>
      {siteConfig.logoLines.map((line) => (
        <span
          key={line}
          className="font-nav text-[0.68rem] font-medium tracking-[0.32em] text-charcoal uppercase sm:text-xs"
        >
          {line}
        </span>
      ))}
    </Link>
  );
}
