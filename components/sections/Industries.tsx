"use client";

import { motion } from "framer-motion";
import {
  Car,
  Building2,
  Cpu,
  ShoppingBag,
  Shirt,
  Factory,
  Cog,
  Smartphone,
  Wrench,
  Package,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const industries: { name: string; icon: LucideIcon }[] = [
  { name: "Automotriz", icon: Car },
  { name: "Construcción", icon: Building2 },
  { name: "Tecnología", icon: Cpu },
  { name: "Retail", icon: ShoppingBag },
  { name: "Textil", icon: Shirt },
  { name: "Manufactura", icon: Factory },
  { name: "Maquinaria industrial", icon: Cog },
  { name: "Electrónicos", icon: Smartphone },
  { name: "Refacciones", icon: Wrench },
  { name: "Productos de consumo", icon: Package },
];

export function Industries() {
  return (
    <section className="section-padding bg-slate-50/80 pattern-bg">
      <div className="section-container">
        <SectionHeader
          label="Sectores"
          title="Industrias que atendemos"
          description="Experiencia en múltiples sectores productivos con requerimientos aduanales y logísticos específicos."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="card-premium flex flex-col items-center text-center gap-3 py-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-navy transition-colors group-hover:bg-brand-navy group-hover:text-white">
                <industry.icon className="h-6 w-6 text-brand-blue-dark" />
              </div>
              <span className="text-sm font-semibold text-brand-navy leading-tight">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
