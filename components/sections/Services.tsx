"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceCategories } from "@/lib/services-data";

export function Services() {
  const [active, setActive] = useState(serviceCategories[0].id);
  const current = serviceCategories.find((s) => s.id === active)!;

  return (
    <section id="servicios" className="section-padding bg-slate-50/80 pattern-bg">
      <div className="section-container">
        <SectionHeader
          label="Servicios"
          title="Soluciones integrales para tu cadena de suministro"
          description="Desde aduanas hasta transporte multimodal, cubrimos cada etapa de tu operación internacional."
        />

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-3 rounded-xl px-5 py-4 text-left transition-all ${
                  active === cat.id
                    ? "bg-brand-navy text-white shadow-brand"
                    : "bg-white text-brand-navy hover:bg-brand-blue/10 border border-brand-navy/8"
                }`}
              >
                <cat.icon
                  className={`h-5 w-5 shrink-0 ${
                    active === cat.id ? "text-brand-blue-light" : "text-brand-blue"
                  }`}
                />
                <span className="font-semibold text-sm sm:text-base flex-1">
                  {cat.title}
                </span>
                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    active === cat.id ? "rotate-90 opacity-100" : "opacity-40"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25 }}
                className="card-premium h-full min-h-[320px]"
              >
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-brand-navy/8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue text-white">
                    <current.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-navy">
                    {current.title}
                  </h3>
                </div>

                <ul className="grid sm:grid-cols-2 gap-4">
                  {current.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="h-5 w-5 shrink-0 text-brand-blue mt-0.5" />
                      <span className="text-brand-navy/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
