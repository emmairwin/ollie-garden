// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ollie-garden.com',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [sitemap()],
});
