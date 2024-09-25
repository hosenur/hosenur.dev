// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';


import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), tailwind()],
    adapter: vercel({
        webAnalytics: { enabled: true }
    })
});