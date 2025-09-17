// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({}),
  redirects: {
    '/archive': '/releases',         // exact match
    '/archive/[slug]': '/releases/[slug]',     // wildcard catch-all
  },
  vite: {
    plugins: [tailwindcss()]
  }
});