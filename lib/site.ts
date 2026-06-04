/** Configuración del sitio para SEO y despliegue */
export const siteConfig = {
  name: "RGA Logística",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://rga-logistica.vercel.app",
  locale: "es_MX",
} as const;
