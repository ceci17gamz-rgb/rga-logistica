"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const values = [
  "Compromiso",
  "Transparencia",
  "Responsabilidad",
  "Integridad",
  "Profesionalismo",
  "Eficiencia",
  "Orientación al cliente",
];

const cards = [
  {
    icon: Target,
    title: "Misión",
    content:
      "Proporcionar soluciones logísticas y aduanales confiables que permitan a nuestros clientes desarrollar sus operaciones internacionales de manera eficiente, segura y rentable.",
  },
  {
    icon: Eye,
    title: "Visión",
    content:
      "Convertirnos en un referente nacional en logística internacional y comercio exterior, destacando por nuestra calidad de servicio, innovación y atención personalizada.",
  },
];

export function MissionVision() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionHeader
          label="Identidad corporativa"
          title="Misión, visión y valores"
          description="Los principios que guían cada operación que coordinamos."
        />

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-card-gradient rounded-bl-full" />
              <div className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white">
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-body">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-premium bg-gradient-to-br from-brand-navy to-brand-blue-dark text-white"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Heart className="h-7 w-7 text-brand-blue-light" />
            </div>
            <h3 className="font-display text-xl font-bold">Valores</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                {value}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
