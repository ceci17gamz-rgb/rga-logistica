# RGA Logística — Sitio Web Corporativo

Sitio web oficial de **RGA Logística**: logística internacional, comercio exterior y despacho aduanal.

**URL pública objetivo:** `https://rga-logistica.vercel.app` (o tu dominio personalizado en Vercel)

---

## Requisitos

- [Node.js](https://nodejs.org/) 18.18 o superior (recomendado: 20 LTS)
- [Git](https://git-scm.com/)
- Cuenta gratuita en [GitHub](https://github.com) y [Vercel](https://vercel.com)

---

## Instalación

```bash
cd "RGA Logística"
npm install
```

Esto instala dependencias y sincroniza el logo oficial desde `Imagenes/` hacia `public/Imagenes/` automáticamente.

---

## Ejecutar localmente

```bash
npm run dev
```

Abre **http://localhost:3000** en tu navegador.

Para build de producción local:

```bash
npm run build
npm start
```

---

## Contacto oficial (configurado en el sitio)

| Campo | Valor |
|-------|-------|
| Correo | [Rgalogisticsal@gmail.com](mailto:Rgalogisticsal@gmail.com) |
| Teléfono | [+52 55 7834 0580](tel:+525578340580) |
| Cargo | Jefe de Operaciones y Logística |
| Ubicación | Ciudad de México y Lázaro Cárdenas, Michoacán, México |

---

## Formulario de cotización

Las solicitudes se envían a **Rgalogisticsal@gmail.com** mediante [FormSubmit](https://formsubmit.co/) (sin costo).

### Activación (solo la primera vez)

1. Despliega el sitio en Vercel (pasos abajo).
2. Envía una cotización de prueba desde el sitio publicado.
3. Revisa la bandeja de **Rgalogisticsal@gmail.com** y **confirma el enlace de FormSubmit**.
4. A partir de ese momento, todos los envíos llegarán automáticamente.

### Variables de entorno opcionales (Vercel)

Copia `.env.example` a `.env.local` para desarrollo local:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
CONTACT_EMAIL=Rgalogisticsal@gmail.com
```

En Vercel: **Project → Settings → Environment Variables**

| Variable | Valor | Entorno |
|----------|-------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://rga-logistica.vercel.app` | Production |
| `CONTACT_EMAIL` | `Rgalogisticsal@gmail.com` | Production |

> **Nota:** Tras el primer despliegue, actualiza `NEXT_PUBLIC_SITE_URL` con la URL real que asigne Vercel para que SEO, Open Graph y WhatsApp muestren enlaces correctos al compartir.

---

## Subir el proyecto a GitHub

### 1. Inicializar repositorio (si aún no existe)

```bash
cd "RGA Logística"
git init
git add .
git commit -m "Sitio corporativo RGA Logística — listo para producción"
```

### 2. Crear repositorio en GitHub

1. Entra a [github.com/new](https://github.com/new)
2. Nombre sugerido: `rga-logistica`
3. Visibilidad: **Public** o **Private**
4. **No** marques “Add README” (ya existe uno)
5. Clic en **Create repository**

### 3. Conectar y subir

```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/rga-logistica.git
git push -u origin main
```

Reemplaza `TU_USUARIO` por tu usuario de GitHub.

---

## Desplegar en Vercel (URL pública)

### Opción A — Desde la web (recomendada)

1. Entra a [vercel.com](https://vercel.com) e inicia sesión (puedes usar tu cuenta de GitHub).
2. Clic en **Add New… → Project**.
3. **Import** el repositorio `rga-logistica` desde GitHub.
4. Vercel detecta **Next.js** automáticamente. No cambies:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** (dejar por defecto)
5. En **Environment Variables**, agrega:
   - `NEXT_PUBLIC_SITE_URL` = `https://rga-logistica.vercel.app` (ajústala después si Vercel asigna otro nombre)
   - `CONTACT_EMAIL` = `Rgalogisticsal@gmail.com`
6. Clic en **Deploy**.
7. En 1–3 minutos obtienes una URL pública, por ejemplo:
   ```
   https://rga-logistica.vercel.app
   ```
   o
   ```
   https://rga-logistica-tuusuario.vercel.app
   ```

**Esa URL la puedes compartir con clientes, proveedores y cualquier persona desde cualquier dispositivo.**

### Opción B — Desde terminal (CLI)

```bash
npm i -g vercel
cd "RGA Logística"
vercel login
vercel
```

Sigue las preguntas. Para producción:

```bash
vercel --prod
```

---

## Publicar nuevas versiones

Cada vez que actualices el sitio:

```bash
git add .
git commit -m "Describe tu cambio"
git push origin main
```

Si el proyecto está conectado a Vercel, **se redespliega automáticamente** y la misma URL pública muestra la versión nueva.

---

## Estructura del proyecto

```
RGA Logística/
├── Imagenes/              # Logo oficial (fuente)
├── public/Imagenes/       # Copia servida en producción
├── app/                   # Páginas, API, SEO (sitemap, robots)
├── components/            # UI y secciones
├── lib/                   # Brand, contacto, configuración
├── scripts/sync-assets.js # Sincroniza logo antes del build
├── vercel.json            # Configuración Vercel
├── .env.example           # Variables de entorno de ejemplo
└── package.json
```

---

## SEO y compartir enlaces

Configurado en `app/layout.tsx`:

- Title y meta description
- Open Graph (WhatsApp, Facebook, LinkedIn)
- Twitter Card
- Favicon desde logo oficial
- `sitemap.xml` y `robots.txt`
- JSON-LD (Organization)

---

## Redes sociales

Actualmente **ocultas** (no hay perfiles oficiales). Para agregarlas después, edita `lib/social.tsx` y el componente `components/ui/SocialLinks.tsx`.

---

## Identidad visual

Paleta extraída del logo `Imagenes/Logo RGA.png`:

| Color | Hex |
|-------|-----|
| Navy (primario) | `#0a2a56` |
| Azul (secundario) | `#4a9aca` |
| Navy oscuro | `#061d3d` |

---

## Solución de problemas

| Problema | Solución |
|----------|----------|
| Logo no aparece en producción | Ejecuta `npm run build` localmente; verifica que `public/Imagenes/Logo RGA.png` exista |
| Formulario no envía | Confirma FormSubmit en el correo la primera vez |
| Preview OG incorrecta | Actualiza `NEXT_PUBLIC_SITE_URL` en Vercel y redespliega |
| Build falla | Ejecuta `npm run lint` y `npm run build` localmente para ver el error |

---

## Licencia

© RGA Logística. Todos los derechos reservados.
