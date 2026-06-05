import { Logo } from "@/components/ui/Logo";
import { ContactLinks } from "@/components/ui/ContactLinks";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { company } from "@/lib/brand";
import { contactLinks } from "@/lib/contact";
import { Phone } from "lucide-react";

const footerServices = [
  "Despacho aduanal",
  "Transporte marítimo",
  "Transporte aéreo",
  "Transporte terrestre",
  "Logística integral",
  "Almacenaje",
  "Consultoría",
];

const footerCoverage = [
  "Lázaro Cárdenas",
  "Manzanillo",
  "Veracruz",
  "Nuevo Laredo",
  "Tijuana",
  "Operaciones internacionales",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="section-container px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="rounded-lg bg-white/95 p-3 inline-block">
              <Logo size="md" />
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              {company.slogan}
            </p>
            <p className="mt-2 text-xs text-white/50 italic">
              {company.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerServices.map((item) => (
                <li key={item}>
                  <a
                    href="#servicios"
                    className="text-sm text-white/60 hover:text-brand-blue-light transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Cobertura</h4>
            <ul className="space-y-2">
              {footerCoverage.map((item) => (
                <li key={item}>
                  <a
                    href="#cobertura"
                    className="text-sm text-white/60 hover:text-brand-blue-light transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Contacto</h4>
            <ContactLinks variant="light" showCallButton />

            <a
              href={contactLinks.tel}
              className="mt-4 inline-flex lg:hidden items-center gap-2 rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-light transition-colors"
              aria-label="Llamar por teléfono"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Llamar ahora
            </a>

            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>
            © {year} {company.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs">
            Logística internacional · Comercio exterior · Despacho aduanal
          </p>
        </div>
      </div>
    </footer>
  );
}
