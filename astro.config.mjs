import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tvmaia.github.io',
  base: '/simple-maia',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
