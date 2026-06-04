import { NextResponse } from "next/server";
import { contact } from "@/lib/contact";

const recipientEmail =
  process.env.CONTACT_EMAIL?.trim() || contact.email;
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const required = ["nombre", "empresa", "telefono", "email", "paisOrigen", "paisDestino", "tipoMercancia"];
    for (const field of required) {
      if (!String(data[field] ?? "").trim()) {
        return NextResponse.json(
          { error: `El campo "${field}" es obligatorio.` },
          { status: 400 }
        );
      }
    }

    const payload = {
      _subject: `Nueva solicitud de cotización — ${data.empresa}`,
      _template: "table",
      _captcha: "false",
      _replyto: data.email,
      "Nombre completo": data.nombre,
      Empresa: data.empresa,
      Teléfono: data.telefono,
      "Correo del cliente": data.email,
      "País de origen": data.paisOrigen,
      "País de destino": data.paisDestino,
      "Tipo de mercancía": data.tipoMercancia,
      Peso: data.peso || "No especificado",
      Volumen: data.volumen || "No especificado",
      "Cantidad de carga": data.cantidad || "No especificado",
      Comentarios: data.comentarios || "Sin comentarios adicionales",
    };

    const response = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("FormSubmit error:", errorText);
      return NextResponse.json(
        {
          error:
            "No se pudo enviar la solicitud. Intenta de nuevo o contáctanos directamente por teléfono o correo.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, recipient: recipientEmail });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: "Error interno al procesar la solicitud." },
      { status: 500 }
    );
  }
}
