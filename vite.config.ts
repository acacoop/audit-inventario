/// <reference types="vitest" />
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// Migración del monolito HTML a build propio:
// - Dependencias empaquetadas por Vite (sin CDN ni SRI en runtime).
// - Offline real mediante Service Worker (Workbox) en lugar del eval-cache.
export default defineConfig({
  base: "./",
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: ["pwa-icon.svg"],
      manifest: {
        name: "Inventario - ACA",
        short_name: "Inventario",
        start_url: ".",
        display: "standalone",
        background_color: "#f1f5f9",
        theme_color: "#1a2e6b",
        orientation: "portrait",
        icons: [
          { src: "pwa-icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,woff,woff2}"],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
      },
    }),
  ],
  test: {
    environment: "node",
    include: ["test/**/*.test.{js,ts}"],
  },
});
