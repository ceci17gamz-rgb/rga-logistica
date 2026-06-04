"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Cuánto tarda una importación?",
    answer:
      "El tiempo depende del origen, modalidad de transporte (marítimo, aéreo o terrestre), tipo de mercancía y requisitos aduanales. Una importación marítima desde Asia puede tomar entre 25 y 45 días; operaciones aéreas urgentes pueden completarse en 3 a 7 días. En la cotización personalizada te proporcionamos tiempos estimados según tu operación específica.",
  },
  {
    question: "¿Qué documentos necesito para importar?",
    answer:
      "Generalmente se requiere factura comercial, lista de empaque, conocimiento de embarque (BL o AWB), pedimento aduanal y documentos específicos según el producto (certificados, permisos, NOMs, etc.). Nuestro equipo te indica el expediente completo según tu mercancía y régimen aduanero aplicable.",
  },
  {
    question: "¿Puedo importar desde China?",
    answer:
      "Sí. Coordinamos operaciones de importación desde China y otros mercados asiáticos, incluyendo gestión documental, clasificación arancelaria, coordinación de transporte marítimo o aéreo y despacho aduanal en México.",
  },
  {
    question: "¿Qué impuestos debo pagar?",
    answer:
      "En importaciones aplican el Impuesto General de Importación (IGI) o arancel preferencial según tratados, el IVA (16%) y, en algunos casos, cuotas compensatorias o impuestos especiales. Calculamos una estimación en la cotización y te asesoramos para optimizar costos dentro del marco legal.",
  },
  {
    question: "¿Cómo puedo rastrear mi mercancía?",
    answer:
      "Brindamos seguimiento operativo constante: estatus del embarque, arribo a puerto o aeropuerto, gestión aduanal y entrega final. Tendrás comunicación directa con tu coordinador asignado en cada etapa del proceso.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="section-container max-w-3xl">
        <SectionHeader
          label="FAQ"
          title="Preguntas frecuentes"
          description="Respuestas claras sobre importación, exportación y nuestros servicios logísticos."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-brand-navy/10 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-brand-navy hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-brand-blue transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-6 pb-5 text-brand-navy/70 leading-relaxed border-t border-brand-navy/5 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
