"use client";

import Image from "next/image";
import { CheckCircle2, Shield, Users, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Logo } from "@/components/ui/Logo";

const highlights = [
  { icon: Shield, text: "Operaciones seguras y cumplimiento normativo" },
  { icon: TrendingUp, text: "Reducción de tiempos, costos y riesgos" },
  { icon: Users, text: "Seguimiento constante de punta a punta" },
  { icon: CheckCircle2, text: "Coordinación integral origen–destino" },
];

export function About() {
  return (
    <section id="nosotros" className="section-padding pattern-bg bg-slate-50/80">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateOnScroll>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-brand-lg">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                  alt="Operaciones logísticas internacionales"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-brand-lg border border-brand-navy/5 max-w-[200px]">
                <Logo size="sm" />
                <p className="mt-3 text-xs text-brand-navy/60 leading-relaxed">
                  Tu aliado en comercio exterior
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <div>
            <SectionHeader
              align="left"
              label="Quiénes somos"
              title="Expertos en logística internacional y comercio exterior"
            />

            <div className="space-y-4 text-body">
              <p>
                Brindamos soluciones integrales en logística internacional,
                comercio exterior y despacho aduanal para importadores y
                exportadores.
              </p>
              <p>
                Facilitamos el movimiento de mercancías a nivel internacional,
                reduciendo tiempos, costos y riesgos operativos en toda la
                cadena logística.
              </p>
              <p>
                Ofrecemos atención personalizada, seguimiento constante de cada
                operación y coordinación integral desde el origen hasta la
                entrega final.
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {highlights.map((item, i) => (
                <AnimateOnScroll key={item.text} delay={i * 0.1}>
                  <li className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/15">
                      <item.icon className="h-5 w-5 text-brand-blue-dark" />
                    </div>
                    <span className="text-brand-navy font-medium pt-2">
                      {item.text}
                    </span>
                  </li>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
