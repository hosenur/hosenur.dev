// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/static';


import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';


import db from '@astrojs/db';


// https://astro.build/config
export default defineConfig({
    site: 'https://hosenur.dev',
    integrations: [mdx(), sitemap(), tailwind(), db()],
    adapter: vercel({
        webAnalytics: { enabled: true }
    }),
    markdown:{
        shikiConfig:{
            theme: 'catppuccin-latte'
        }
    }
});