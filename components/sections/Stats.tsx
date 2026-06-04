"use client";

import { motion } from "framer-motion";
import {
  PackageCheck,
  Globe,
  Headphones,
  Network,
  Ship,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const stats = [
  {
    icon: PackageCheck,
    value: "+500",
    label: "Operaciones coordinadas",
    description: "Experiencia comprobada en comercio exterior",
  },
  {
    icon: Globe,
    value: "Nacional e internacional",
    label: "Cobertura global",
    description: "Puertos, aduanas y rutas estratégicas",
  },
  {
    icon: Headphones,
    value: "100%",
    label: "Atención personalizada",
    description: "Comunicación directa en cada operación",
  },
  {
    icon: Network,
    value: "Red estratégica",
    label: "Proveedores aliados",
    description: "Partners logísticos de confianza",
  },
  {
    icon: Ship,
    value: "Multimodal",
    label: "Marítimo · Aéreo · Terrestre",
    description: "Soluciones integrales de transporte",
  },
];

export function Stats() {
  return (
    <section className="section-padding bg-white relative -mt-8 z-20">
      <div className="section-container">
        <SectionHeader
          label="Nuestra capacidad"
          title="Resultados que respaldan nuestra experiencia"
          description="Operamos con eficiencia, seguridad y un enfoque centrado en el cliente."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="card-premium group text-center lg:text-left"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy to-brand-blue-dark text-white transition-transform group-hover:scale-110">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="font-display text-2xl font-bold text-brand-navy">
                {stat.value}
              </p>
              <p className="mt-1 font-semibold text-brand-navy">{stat.label}</p>
              <p className="mt-2 text-sm text-brand-navy/60">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
