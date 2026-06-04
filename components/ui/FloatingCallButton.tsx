"use client";

import { Phone } from "lucide-react";
import { contact, contactLinks } from "@/lib/contact";

export function FloatingCallButton() {
  return (
    <a
      href={contactLinks.tel}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-brand-lg transition-all hover:bg-brand-blue hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 lg:hidden"
      aria-label={`Llamar a RGA Logística al ${contact.phone}`}
    >
      <Phone className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
