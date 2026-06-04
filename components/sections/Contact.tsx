"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactLinks } from "@/components/ui/ContactLinks";
import { contact, contactLinks } from "@/lib/contact";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeader
          label="Contacto"
          title="Hablemos de tu operación logística"
          description="Comunícate directamente con nuestro equipo. Te atenderá personalmente el Jefe de Operaciones y Logística."
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium"
          >
            <h3 className="font-display text-xl font-bold text-brand-navy mb-6">
              Datos de contacto
            </h3>
            <ContactLinks showCallButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium bg-gradient-to-br from-brand-navy to-brand-blue-dark text-white flex flex-col justify-center"
          >
            <p className="text-white/80 mb-6 leading-relaxed">
              ¿Prefieres contactarnos de inmediato? Utiliza los accesos directos
              o completa el formulario de cotización más abajo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={contactLinks.tel}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-brand-navy transition-all hover:bg-brand-blue-light"
                aria-label={`Llamar al ${contact.phone}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {contact.phone}
              </a>
              <a
                href={contactLinks.mailto}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                aria-label={`Enviar correo a ${contact.email}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Enviar correo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
