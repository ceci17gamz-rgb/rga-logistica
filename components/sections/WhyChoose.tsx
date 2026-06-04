"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  UserCheck,
  MessageCircle,
  Layers,
  Zap,
  ShieldCheck,
  Award,
  Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const benefits: { title: string; description: string; icon: LucideIcon }[] = [
  {
    icon: UserCheck,
    title: "Atención personalizada",
    description: "Un equipo dedicado conoce tu operación y te acompaña en cada etapa.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación directa",
    description: "Respuestas claras y oportunas sin intermediarios innecesarios.",
  },
  {
    icon: Layers,
    title: "Soluciones integrales",
    description: "Aduanas, transporte y logística bajo una sola coordinación.",
  },
  {
    icon: Zap,
    title: "Coordinación eficiente",
    description: "Optimizamos tiempos y recursos en toda la cadena logística.",
  },
  {
    icon: ShieldCheck,
    title: "Reducción de riesgos",
    description: "Cumplimiento normativo y control documental riguroso.",
  },
  {
    icon: Award,
    title: "Experiencia operativa",
    description: "Más de 500 operaciones coordinadas con resultados comprobados.",
  },
  {
    icon: Handshake,
    title: "Compromiso con el cliente",
    description: "Tu éxito operativo es nuestra prioridad en cada embarque.",
  },
];

export function WhyChoose() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeader
              align="left"
              label="Ventajas"
              title="¿Por qué elegir RGA Logística?"
              description="Combinamos experiencia operativa, tecnología y servicio humano para que tu comercio exterior sea predecible y rentable."
            />

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-white">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">{benefit.title}</h4>
                    <p className="text-sm text-brand-navy/60 mt-0.5">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden shadow-brand-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1578575437136-9c13ef8c4b8e?w=800&q=80"
              alt="Equipo de logística internacional"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-display text-xl font-bold">
                Tu operación, nuestra prioridad
              </p>
              <p className="text-sm text-white/80 mt-1">
                Seguridad · Eficiencia · Confianza
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
