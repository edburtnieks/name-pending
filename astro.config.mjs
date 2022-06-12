import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
    experimental: {
        integrations: true,
    },
    integrations: [
        astroI18next({
            resourcesPath: "./src/locales/",
            i18next: {
                fallbackLng: "en",
                supportedLngs: ["en", "lv"],
            },
        }),
    ],
});
