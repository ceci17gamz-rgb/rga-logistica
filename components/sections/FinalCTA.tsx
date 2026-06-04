"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { ContactLinks } from "@/components/ui/ContactLinks";
import { contact, contactLinks } from "@/lib/contact";

export function FinalCTA() {
  return (
    <section className="section-padding bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(74,154,202,0.25),transparent_60%)]" />

      <div className="section-container relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Tu operación logística en manos expertas.
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            No solo movemos mercancías; acompañamos a nuestros clientes durante
            todo el proceso para garantizar operaciones seguras, eficientes y
            exitosas.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#cotizacion"
              className="inline-flex btn-primary bg-white text-brand-navy hover:bg-brand-blue hover:text-white"
            >
              Solicitar Cotización
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={contactLinks.tel}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              aria-label={`Llamar al ${contact.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Llamar: {contact.phone}
            </a>
            <a
              href={contactLinks.mailto}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              aria-label={`Enviar correo a ${contact.email}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {contact.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-12 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-6 sm:p-8 max-w-xl mx-auto"
        >
          <ContactLinks variant="light" showRole />
        </motion.div>
      </div>
    </section>
  );
}
