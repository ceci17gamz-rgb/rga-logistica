"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Calculator,
  Map,
  Truck,
  FileCheck,
  Radar,
  PackageCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps: { step: number; title: string; icon: LucideIcon }[] = [
  { step: 1, title: "Análisis de requerimientos", icon: ClipboardList },
  { step: 2, title: "Cotización personalizada", icon: Calculator },
  { step: 3, title: "Planeación logística", icon: Map },
  { step: 4, title: "Coordinación de transporte", icon: Truck },
  { step: 5, title: "Gestión aduanal", icon: FileCheck },
  { step: 6, title: "Seguimiento de operación", icon: Radar },
  { step: 7, title: "Entrega final", icon: PackageCheck },
];

export function Process() {
  return (
    <section id="proceso" className="section-padding bg-slate-50/80 pattern-bg">
      <div className="section-container">
        <SectionHeader
          label="Metodología"
          title="Nuestro proceso"
          description="Un flujo estructurado que garantiza transparencia y control en cada etapa de tu operación."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border-2 border-brand-navy shadow-brand transition-all hover:border-brand-blue hover:shadow-brand-lg">
                    <item.icon className="h-7 w-7 text-brand-blue-dark" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-brand-navy leading-snug px-1">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
