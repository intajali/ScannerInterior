import { secondaryButtonClass } from "@/components/common/styles";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  className?: string;
};

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="currentColor">
      <path d="M12 3.2A8.7 8.7 0 0 0 5.1 16.6L4 20.8l4.3-1.1A8.7 8.7 0 1 0 12 3.2zm0 1.6a7.1 7.1 0 0 1 0 14.2 7 7 0 0 1-3.6-1l-.3-.2-2.5.7.7-2.5-.2-.3A7.1 7.1 0 0 1 12 4.8zm-2.3 3.3c-.2 0-.4 0-.6.3-.2.3-.7.7-.7 1.7s.8 2 1 2.1c.1.2 1.5 2.4 3.7 3.3 1.8.7 2.2.6 2.6.5.4 0 1.2-.5 1.4-1s.2-.9.1-1-.2-.2-.4-.3-.8-.4-.9-.4-.2-.1-.4.1-.4.4-.5.6-.2.2-.4.1-.8-.3-1.5-.9a5 5 0 0 1-1.1-1.3c-.1-.2 0-.3.1-.4l.3-.4.1-.2a.4.4 0 0 0 0-.4l-.5-1.1c-.1-.3-.3-.3-.5-.3z" />
    </svg>
  );
}

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");

  if (!number) {
    return null;
  }

  const href = `https://wa.me/${number}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(secondaryButtonClass, "gap-2", className)}
    >
      <WhatsAppMark />
      WhatsApp
    </a>
  );
}
