import { contact } from "@/lib/contact";

/**
 * Placeholder para redes sociales oficiales.
 * Cuando existan perfiles, descomenta y completa las URLs en socialLinks.
 */
const socialLinks = [] as {
  name: string;
  href: string;
}[];

export function SocialLinks() {
  if (socialLinks.length === 0) return null;

  return (
    <div className="mt-6">
      <h5 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
        Redes sociales
      </h5>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-brand-blue-light transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

/** Datos de contacto exportados para uso en footer y formularios */
export { contact };
