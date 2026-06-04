"use client";

import { motion } from "framer-motion";
import { MapPin, Anchor, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const mexicoLocations = [
  "Lázaro Cárdenas",
  "Manzanillo",
  "Veracruz",
  "Altamira",
  "Nuevo Laredo",
  "Tijuana",
];

const internationalOrigins = [
  { country: "China", flag: "🇨🇳" },
  { country: "Estados Unidos", flag: "🇺🇸" },
  { country: "España", flag: "🇪🇸" },
  { country: "Alemania", flag: "🇩🇪" },
  { country: "Corea del Sur", flag: "🇰🇷" },
  { country: "Japón", flag: "🇯🇵" },
  { country: "Vietnam", flag: "🇻🇳" },
];

export function Coverage() {
  return (
    <section id="cobertura" className="section-padding bg-white overflow-hidden">
      <div className="section-container">
        <SectionHeader
          label="Cobertura"
          title="Presencia en puertos, aduanas y mercados clave"
          description="Coordinamos operaciones en México y conectamos con los principales mercados de origen y destino a nivel mundial."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium"
          >
            <div className="flex items-center gap-3 mb-6">
              <Anchor className="h-6 w-6 text-brand-blue" />
              <h3 className="font-display text-xl font-bold text-brand-navy">
                Puertos y Aduanas en México
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {mexicoLocations.map((loc, i) => (
                <motion.div
                  key={loc}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 rounded-lg bg-brand-navy/5 px-4 py-3 hover:bg-brand-blue/10 transition-colors"
                >
                  <MapPin className="h-4 w-4 text-brand-blue shrink-0" />
                  <span className="text-sm font-medium text-brand-navy">{loc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium bg-gradient-to-br from-brand-navy/5 to-brand-blue/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <ArrowUpRight className="h-6 w-6 text-brand-blue" />
              <h3 className="font-display text-xl font-bold text-brand-navy">
                Operaciones internacionales desde
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {internationalOrigins.map((item, i) => (
                <motion.div
                  key={item.country}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm border border-brand-navy/5"
                >
                  <span className="text-2xl">{item.flag}</span>
                  <span className="text-sm font-medium text-brand-navy">
                    {item.country}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-sm text-brand-navy/60 border-t border-brand-navy/10 pt-4">
              También coordinamos <strong className="text-brand-navy">exportaciones internacionales</strong> hacia mercados globales con la misma atención personalizada.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 relative rounded-2xl overflow-hidden bg-brand-navy p-8 lg:p-12"
        >
          <div className="absolute inset-0 pattern-bg opacity-20" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Red logística global
              </h3>
              <p className="text-white/70 max-w-lg">
                Conectamos importaciones y exportaciones entre México y los
                principales hubs comerciales del mundo.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 rounded-full border-2 border-brand-blue/30 flex items-center justify-center">
                <div className="absolute inset-4 rounded-full border border-dashed border-brand-blue/40 animate-pulse-slow" />
                <div className="text-center">
                  <p className="text-4xl font-bold text-brand-blue-light">MX</p>
                  <p className="text-xs text-white/60 mt-1">Hub central</p>
                </div>
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <motion.div
                    key={deg}
                    className="absolute w-3 h-3 rounded-full bg-brand-blue"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${deg}deg) translateY(-110px) translate(-50%, -50%)`,
                    }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
