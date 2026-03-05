import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://eayurveda.co',
  adapter: netlify(),
});