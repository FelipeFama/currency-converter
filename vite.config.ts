import { defineConfig } from "vite";

import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: { enabled: true },
      manifest: {
        name: "currency converter",
        short_name: "currency converter",
        description: "currency converter app",
        theme_color: "#fff",
        start_url: "/",
        display: "standalone",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
