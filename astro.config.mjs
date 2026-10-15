// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: "https://migueldelgado27.github.io/",
  base: "",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    alpinejs()
  ]
});
