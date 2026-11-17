// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // The address the site will live at. Change this one line when the custom domain is bought.
  site: 'https://what-is-selim.pages.dev',
  integrations: [mdx()],
  trailingSlash: 'ignore',
});
