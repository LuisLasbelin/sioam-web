// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
  image: {
    remotePatterns:[{
      protocol: "https",
      hostname: "pub-0b436f949b31421fb72eff5540589489.r2.dev"
    }]
  }
});