# Inventario — Auditoría ACA (`audit-cubicaje`)

PWA offline-first para la auditoría de inventario de cooperativas (ACA).
Secciones: conteo de insumos/balanceados, varillaje de combustibles, muestreo,
cubicaje de fertilizantes/semillas a granel y arqueo de cajas, con generación
de informes y firmas.

## Stack

- **Vite 5** + **React 18** (`htm` para las vistas, sin paso de compilación JSX).
- **Vitest** para los tests de la lógica calibrada de parsing numérico.
- **vite-plugin-pwa** (Workbox) para el funcionamiento offline real (Service Worker).
- **Zod** para la validación del archivo de inventario importado.
- Dependencias empaquetadas en el propio bundle: **sin CDN ni `eval` en runtime**.

## Scripts

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo
npm run build    # build de producción (genera dist/ + Service Worker)
npm run preview  # sirve el build de producción
npm test         # ejecuta los tests (Vitest)
```

## Estructura

```
audit-cubicaje/
├─ index.html              # entry mínimo de Vite (<div id="root">)
├─ vite.config.ts          # build + vite-plugin-pwa (offline)
├─ tsconfig.json
├─ package.json
├─ public/
│  └─ pwa-icon.svg         # icono de la PWA
├─ src/
│  ├─ main.js              # bootstrap: estilos + app (SW lo inyecta el plugin PWA)
│  ├─ app.js               # componentes React (htm) + App + render
│  ├─ styles.css           # estilos globales (extraídos del monolito)
│  ├─ schemas.js           # esquema Zod para el import de inventario
│  └─ lib/
│     └─ core.js           # constantes de dominio + utilidades puras (parseNum, csv, etc.)
├─ test/
│  └─ numeric.test.js      # cobertura de la lógica numérica AR/US
└─ legacy/
   └─ index.monolito.html  # monolito original (referencia, no se usa en el build)
```

## Migración desde el monolito

El origen era un único `index.html` (~3172 líneas) con React por CDN, un
mecanismo de `eval` sobre librerías cacheadas en `localStorage` y todo el código
inline. La migración:

1. **Empaqueta las dependencias** (React, ReactDOM, htm, pdf.js, xlsx) vía npm →
   elimina la carga desde CDN sin SRI y el `eval` de arranque.
2. **Offline real** con Service Worker (Workbox) en lugar del `eval`-cache.
3. **Separa** las constantes de dominio y las utilidades puras a `src/lib/core.js`,
   con **tests** (`test/numeric.test.js`) sobre la lógica calibrada de `parseNum`.
4. **Valida** el archivo de inventario importado con Zod (`src/schemas.js`).
5. **Corrige el XSS** en la generación de informes: los `src` de fotos y firmas
   ahora se escapan antes de interpolarse en el HTML del informe.

La lógica de negocio (`parseNum`, `sepDecimalDe`, cálculo de diferencias, etc.)
se preservó **sin cambios** respecto del original; los tests documentan y fijan
su comportamiento para los formatos numéricos reales de las cooperativas.

## Notas de seguridad pendientes

- `npm audit` reporta advisories en `xlsx@0.18.5` y dependencias transitivas de
  `pdf.js`. Ambas se usan solo al importar archivos. Evaluar actualización a una
  versión sin CVE conocido antes de producción.
- Próximo paso de refactor sugerido por la auditoría: dividir el componente `App`
  de `src/app.js` en `features/` por tipo de sección y añadir tipado TypeScript.

## Publicación en `acacoop/audit-cubicaje`

Este proyecto está listo para publicarse. Los comandos de publicación **no se
ejecutan automáticamente** (requieren tus credenciales y es un repo compartido):

```bash
# Sobre un repo remoto vacío ya creado en la organización:
git remote set-url origin https://github.com/acacoop/audit-cubicaje.git
git push -u origin main

# Si preferís revisión por PR, trabajá en una rama:
git switch -c migracion/vite-react
git push -u origin migracion/vite-react
```
