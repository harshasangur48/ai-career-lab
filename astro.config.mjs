// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://aicareerlab.com", // Change to your actual domain
  output: "static",

  i18n: {
    locales: ["en", "kn", "hi"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true, // All locales get prefix: /en/, /kn/, /hi/
    },
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        locales: {
          en: "en",
          kn: "kn",
          hi: "hi",
        },
        defaultLocale: "en",
      },
    }),
  ],

  markdown: {
    shikiConfig: {
      theme: "github-dark",
      langs: ["python", "javascript", "typescript", "html", "css", "sql", "bash", "json", "yaml"],
      wrap: true,
    },
  },

  image: {
    // Optimize images in production
    remotePatterns: [],
  },

  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});