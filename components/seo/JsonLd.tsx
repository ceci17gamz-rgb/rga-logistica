import { company, LOGO_PATH } from "@/lib/brand";
import { contact } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${LOGO_PATH}`,
    description: company.tagline,
    email: contact.email,
    telephone: contact.phoneTel,
    areaServed: ["MX", "US", "CN", "ES", "DE", "KR", "JP", "VN"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México y Lázaro Cárdenas",
      addressRegion: "Michoacán",
      addressCountry: "MX",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: contact.role,
      email: contact.email,
      telephone: contact.phoneTel,
      availableLanguage: ["Spanish"],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
