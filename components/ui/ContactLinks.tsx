import { Phone, Mail, MapPin, User } from "lucide-react";
import { contact, contactLinks } from "@/lib/contact";
import { cn } from "@/lib/utils";

interface ContactLinksProps {
  variant?: "default" | "light" | "compact";
  showRole?: boolean;
  showCallButton?: boolean;
  className?: string;
}

export function ContactLinks({
  variant = "default",
  showRole = true,
  showCallButton = false,
  className,
}: ContactLinksProps) {
  const isLight = variant === "light";
  const isCompact = variant === "compact";

  const textClass = isLight ? "text-white/70" : "text-brand-navy/70";
  const linkClass = isLight
    ? "text-brand-blue-light hover:text-white transition-colors"
    : "text-brand-blue hover:text-brand-navy transition-colors";
  const iconClass = isLight ? "text-brand-blue-light" : "text-brand-blue";

  const items = [
    {
      icon: User,
      label: showRole ? contact.role : null,
      content: showRole ? contact.role : null,
      type: "text" as const,
    },
    {
      icon: Phone,
      label: "Teléfono",
      content: contact.phone,
      href: contactLinks.tel,
      type: "link" as const,
    },
    {
      icon: Mail,
      label: "Correo",
      content: contact.email,
      href: contactLinks.mailto,
      type: "link" as const,
    },
    {
      icon: MapPin,
      label: "Ubicación",
      content: contact.location,
      type: "text" as const,
    },
  ].filter((item) => item.content);

  return (
    <div className={cn("space-y-4", className)}>
      <ul className={cn("space-y-3", isCompact && "space-y-2")}>
        {items.map((item) => (
          <li
            key={item.label ?? item.content}
            className={cn(
              "flex items-start gap-3",
              isCompact ? "text-sm" : "text-sm sm:text-base"
            )}
          >
            <item.icon
              className={cn(
                "shrink-0 mt-0.5",
                iconClass,
                isCompact ? "h-4 w-4" : "h-5 w-5"
              )}
              aria-hidden="true"
            />
            <div>
              {item.label && item.type !== "text" && (
                <span className={cn("block text-xs font-medium mb-0.5", textClass)}>
                  {item.label}
                </span>
              )}
              {item.type === "link" && item.href ? (
                <a
                  href={item.href}
                  className={cn("font-medium break-all", linkClass)}
                >
                  {item.content}
                </a>
              ) : (
                <span className={cn("font-medium", isLight ? "text-white/90" : "text-brand-navy")}>
                  {item.content}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>

      {showCallButton && (
        <a
          href={contactLinks.tel}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all",
            isLight
              ? "bg-white text-brand-navy hover:bg-brand-blue-light hover:text-brand-navy"
              : "bg-brand-navy text-white hover:bg-brand-blue shadow-brand hover:shadow-brand-lg"
          )}
          aria-label={`Llamar al ${contact.phone}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Llamar ahora
        </a>
      )}
    </div>
  );
}
