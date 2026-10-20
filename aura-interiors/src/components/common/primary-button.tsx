import Link from "next/link";
import type { ReactNode } from "react";
import { primaryButtonClass } from "@/components/common/styles";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

function isExternal(href: string): boolean {
  return (
    href.startsWith("mailto:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  );
}

export function PrimaryButton({ href, children, className }: PrimaryButtonProps) {
  const classes = cn(primaryButtonClass, className);

  if (isExternal(href)) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
