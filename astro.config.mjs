import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://name-pending.netlify.app",
  experimental: {
    integrations: true
  },
  integrations: [
    sitemap(),
    astroI18next({
      resourcesPath: "./src/locales/",
      i18next: {
        supportedLngs: ["en", "lv"]
      }
    }),
  ],
});
