import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { company, LOGO_PATH } from "@/lib/brand";
import { contact } from "@/lib/contact";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = `${company.name} | Logística Internacional y Comercio Exterior`;
const description = `${company.tagline} Atención personalizada. Tel: ${contact.phone}. ${contact.location}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${company.name}`,
  },
  description,
  keywords: [
    "logística internacional",
    "comercio exterior",
    "despacho aduanal",
    "importación",
    "exportación",
    "freight forwarding",
    "RGA Logística",
    "transporte marítimo",
    "transporte aéreo",
    "Lázaro Cárdenas",
    "Ciudad de México",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  category: "Logistics",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title,
    description: company.tagline,
    siteName: company.name,
    images: [
      {
        url: LOGO_PATH,
        width: 512,
        height: 512,
        alt: `${company.name} — Logística internacional`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: company.tagline,
    images: [LOGO_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: LOGO_PATH, type: "image/png" }],
    apple: [{ url: LOGO_PATH, type: "image/png" }],
    shortcut: LOGO_PATH,
  },
  verification: {},
  other: {
    "contact:email": contact.email,
    "contact:phone_number": contact.phone,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
