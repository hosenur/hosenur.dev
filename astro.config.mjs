// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/static';


import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';




import react from '@astrojs/react';




// https://astro.build/config
export default defineConfig({
    site: 'https://hosenur.dev',
    integrations: [mdx(), sitemap(), tailwind(), react()],
    adapter: vercel({
        webAnalytics: { enabled: true }
    }),
    markdown:{
        shikiConfig:{
            theme: 'catppuccin-latte'
        }
    }
});