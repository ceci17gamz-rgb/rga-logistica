#!/usr/bin/env node
/**
 * Sincroniza assets oficiales desde Imagenes/ hacia public/Imagenes/
 * para que funcionen en producción (Vercel no garantiza symlinks).
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const source = path.join(root, "Imagenes");
const target = path.join(root, "public", "Imagenes");

if (!fs.existsSync(source)) {
  console.warn("[sync-assets] Carpeta Imagenes/ no encontrada, omitiendo.");
  process.exit(0);
}

fs.mkdirSync(target, { recursive: true });

for (const file of fs.readdirSync(source)) {
  if (file.startsWith(".")) continue;
  fs.copyFileSync(path.join(source, file), path.join(target, file));
  console.log(`[sync-assets] Copiado: ${file}`);
}
