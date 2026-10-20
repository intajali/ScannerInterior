import Link from "next/link";
import type { ReactNode } from "react";
import {
  secondaryButtonClass,
  secondaryButtonInverseClass,
} from "@/components/common/styles";
import { cn } from "@/lib/utils";

type SecondaryButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "inverse";
};

function isExternal(href: string): boolean {
  return (
    href.startsWith("mailto:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  );
}

export function SecondaryButton({
  href,
  children,
  className,
  tone = "default",
}: SecondaryButtonProps) {
  const classes = cn(
    tone === "inverse" ? secondaryButtonInverseClass : secondaryButtonClass,
    className,
  );

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
