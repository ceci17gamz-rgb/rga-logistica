"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactLinks } from "@/components/ui/ContactLinks";
import { contact } from "@/lib/contact";
import { cn } from "@/lib/utils";

interface FormData {
  nombre: string;
  empresa: string;
  telefono: string;
  email: string;
  paisOrigen: string;
  paisDestino: string;
  tipoMercancia: string;
  peso: string;
  volumen: string;
  cantidad: string;
  comentarios: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialData: FormData = {
  nombre: "",
  empresa: "",
  telefono: "",
  email: "",
  paisOrigen: "",
  paisDestino: "",
  tipoMercancia: "",
  peso: "",
  volumen: "",
  cantidad: "",
  comentarios: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.nombre.trim()) errors.nombre = "Ingresa tu nombre completo";
  if (!data.empresa.trim()) errors.empresa = "Ingresa el nombre de tu empresa";
  if (!data.telefono.trim()) errors.telefono = "Ingresa un teléfono válido";
  else if (!/^[\d\s+()-]{8,}$/.test(data.telefono))
    errors.telefono = "Formato de teléfono inválido";
  if (!data.email.trim()) errors.email = "Ingresa tu correo electrónico";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Correo electrónico inválido";
  if (!data.paisOrigen.trim()) errors.paisOrigen = "Indica el país de origen";
  if (!data.paisDestino.trim()) errors.paisDestino = "Indica el país de destino";
  if (!data.tipoMercancia.trim())
    errors.tipoMercancia = "Describe el tipo de mercancía";
  return errors;
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-brand-navy mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-sm text-red-600">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (hasError: boolean) =>
  cn(
    "w-full rounded-lg border px-4 py-3 text-brand-navy placeholder:text-brand-navy/40 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent",
    hasError
      ? "border-red-400 bg-red-50/50"
      : "border-brand-navy/15 bg-white hover:border-brand-blue/40"
  );

export function QuoteForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (touched.has(name)) {
      const next = { ...data, [name]: value };
      setErrors(validate(next));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => new Set(prev).add(name));
    setErrors(validate(data));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(data);
    setErrors(validationErrors);
    setTouched(new Set(Object.keys(data)));
    setSubmitError(null);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch("/api/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const result = await response.json().catch(() => ({}));
          throw new Error(result.error || "Error al enviar la solicitud");
        }

        setSubmitted(true);
      } catch (error) {
        setSubmitError(
          error instanceof Error
            ? error.message
            : "No se pudo enviar la solicitud. Intenta de nuevo o contáctanos directamente."
        );
      } finally {
        setLoading(false);
      }
    }
  };

  if (submitted) {
    return (
      <section id="cotizacion" className="section-padding bg-slate-50/80">
        <div className="section-container max-w-xl text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="card-premium py-12"
          >
            <CheckCircle className="h-16 w-16 text-brand-blue mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-2">
              Solicitud recibida
            </h3>
            <p className="text-body">
              Gracias por contactarnos. Hemos enviado tu solicitud a{" "}
              <strong>{contact.email}</strong>. Nuestro equipo revisará tu
              información y se comunicará contigo a la brevedad para preparar tu
              cotización personalizada.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="cotizacion" className="section-padding bg-slate-50/80 pattern-bg">
      <div className="section-container">
        <SectionHeader
          label="Cotización"
          title="Solicita tu cotización personalizada"
          description={`Completa el formulario y un especialista evaluará los requerimientos de tu operación. Las solicitudes se envían directamente a ${contact.email}.`}
        />

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium lg:col-span-1 h-fit"
          >
            <h3 className="font-display text-lg font-bold text-brand-navy mb-4">
              Contacto directo
            </h3>
            <ContactLinks showCallButton />
            <p className="mt-6 text-sm text-brand-navy/60 leading-relaxed">
              También puedes escribirnos directamente. Te atiende el{" "}
              <strong className="text-brand-navy">{contact.role}</strong>.
            </p>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="card-premium lg:col-span-2 grid sm:grid-cols-2 gap-6"
            noValidate
          >
          <Field label="Nombre completo *" name="nombre" error={errors.nombre}>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={data.nombre}
              onChange={handleChange}
              onBlur={() => handleBlur("nombre")}
              className={inputClass(!!errors.nombre)}
              placeholder="Juan Pérez García"
            />
          </Field>

          <Field label="Empresa *" name="empresa" error={errors.empresa}>
            <input
              id="empresa"
              name="empresa"
              type="text"
              value={data.empresa}
              onChange={handleChange}
              onBlur={() => handleBlur("empresa")}
              className={inputClass(!!errors.empresa)}
              placeholder="Nombre de la empresa"
            />
          </Field>

          <Field label="Teléfono *" name="telefono" error={errors.telefono}>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              value={data.telefono}
              onChange={handleChange}
              onBlur={() => handleBlur("telefono")}
              className={inputClass(!!errors.telefono)}
              placeholder="+52 (000) 000 0000"
            />
          </Field>

          <Field label="Correo electrónico *" name="email" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              className={inputClass(!!errors.email)}
              placeholder="correo@empresa.com"
            />
          </Field>

          <Field label="País de origen *" name="paisOrigen" error={errors.paisOrigen}>
            <input
              id="paisOrigen"
              name="paisOrigen"
              type="text"
              value={data.paisOrigen}
              onChange={handleChange}
              onBlur={() => handleBlur("paisOrigen")}
              className={inputClass(!!errors.paisOrigen)}
              placeholder="Ej. China, Estados Unidos"
            />
          </Field>

          <Field label="País de destino *" name="paisDestino" error={errors.paisDestino}>
            <input
              id="paisDestino"
              name="paisDestino"
              type="text"
              value={data.paisDestino}
              onChange={handleChange}
              onBlur={() => handleBlur("paisDestino")}
              className={inputClass(!!errors.paisDestino)}
              placeholder="Ej. México"
            />
          </Field>

          <Field label="Tipo de mercancía *" name="tipoMercancia" error={errors.tipoMercancia}>
            <input
              id="tipoMercancia"
              name="tipoMercancia"
              type="text"
              value={data.tipoMercancia}
              onChange={handleChange}
              onBlur={() => handleBlur("tipoMercancia")}
              className={inputClass(!!errors.tipoMercancia)}
              placeholder="Descripción general del producto"
            />
          </Field>

          <Field label="Peso" name="peso" error={errors.peso}>
            <input
              id="peso"
              name="peso"
              type="text"
              value={data.peso}
              onChange={handleChange}
              className={inputClass(false)}
              placeholder="Ej. 2,500 kg"
            />
          </Field>

          <Field label="Volumen" name="volumen" error={errors.volumen}>
            <input
              id="volumen"
              name="volumen"
              type="text"
              value={data.volumen}
              onChange={handleChange}
              className={inputClass(false)}
              placeholder="Ej. 15 m³"
            />
          </Field>

          <Field label="Cantidad de carga" name="cantidad" error={errors.cantidad}>
            <input
              id="cantidad"
              name="cantidad"
              type="text"
              value={data.cantidad}
              onChange={handleChange}
              className={inputClass(false)}
              placeholder="Ej. 2 contenedores 40'"
            />
          </Field>

          <div className="sm:col-span-2">
            <Field label="Comentarios adicionales" name="comentarios" error={errors.comentarios}>
              <textarea
                id="comentarios"
                name="comentarios"
                rows={4}
                value={data.comentarios}
                onChange={handleChange}
                className={cn(inputClass(false), "resize-y min-h-[100px]")}
                placeholder="Detalles adicionales sobre tu operación, fechas, incoterms, etc."
              />
            </Field>
          </div>

          <div className="sm:col-span-2">
            {submitError && (
              <p className="mb-4 flex items-center gap-2 text-sm text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {submitError}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar solicitud de cotización
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </motion.form>
        </div>
      </div>
    </section>
  );
}
