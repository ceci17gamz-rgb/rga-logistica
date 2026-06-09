"use client";

import { motion } from "framer-motion";
import {
  Ship,
  Plane,
  Train,
  Globe2,
  Container,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const transportModes = [
  { icon: Ship, label: "Marítimo" },
  { icon: Plane, label: "Aéreo" },
  { icon: Train, label: "Terrestre" },
  { icon: Container, label: "Contenedores" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      <div className="absolute inset-0 pattern-bg opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(74,154,202,0.2),transparent_50%)]" />

      <div className="section-container relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm mb-6"
            >
              <Globe2 className="h-4 w-4 text-brand-blue-light" />
              Logística internacional · Comercio exterior · Aduanas
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Movemos tu carga,{" "}
              <span className="text-brand-blue-light">impulsamos</span> tu
              negocio.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed"
            >
              Soluciones integrales en logística internacional, comercio
              exterior y despacho aduanal para importadores y exportadores.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#cotizacion" className="btn-primary bg-white text-brand-navy hover:bg-brand-blue hover:text-white">
                Solicitar Cotización
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50"
              >
                Conocer Servicios
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-6 text-white/70"
            >
              {transportModes.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-brand-blue-light" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <AnimateOnScroll className="relative hidden lg:block" delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-brand-lg border border-white/15 bg-brand-navy/40 backdrop-blur-sm">
              <div className="absolute inset-0 pattern-bg opacity-40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(74,154,202,0.35),transparent_55%)]" />

              <svg
                className="absolute inset-0 h-full w-full text-brand-blue-light/25"
                viewBox="0 0 400 300"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M40 220 C120 180, 200 240, 280 160 S 360 120, 380 80"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                />
                <path
                  d="M60 260 C140 200, 220 220, 300 180"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                />
                <circle cx="380" cy="80" r="6" fill="currentColor" />
                <circle cx="40" cy="220" r="6" fill="currentColor" />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                  className="h-56 w-56 rounded-full border border-dashed border-white/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                  className="absolute h-40 w-40 rounded-full border border-brand-blue-light/30"
                />
                <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Globe2 className="h-10 w-10 text-brand-blue-light" />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-12 rounded-xl bg-brand-navy/80 border border-brand-blue/30 p-3 shadow-glow"
              >
                <Ship className="h-7 w-7 text-brand-blue-light" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-16 left-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-3"
              >
                <Plane className="h-6 w-6 text-brand-blue-light" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 p-2.5"
              >
                <Train className="h-5 w-5 text-brand-blue-light" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-10 right-16 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 p-2.5"
              >
                <Container className="h-5 w-5 text-brand-blue-light" />
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-brand-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/15">
                  <Globe2 className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">+500</p>
                  <p className="text-xs text-brand-navy/60">Operaciones coordinadas</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 rounded-xl bg-white p-4 shadow-brand-lg"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-blue" />
                <div>
                  <p className="text-xs font-semibold text-brand-navy">Cobertura global</p>
                  <p className="text-[10px] text-brand-navy/60">MX · Internacional</p>
                </div>
              </div>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
