// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://uklocksmithdirectory.com',
    output: 'static',
    compressHTML: true,
    build: {
        inlineStylesheets: 'auto',
    },
    vite: {
        plugins: [tailwindcss()],
        build: {
            cssMinify: 'lightningcss',
        },
    },
    experimental: {
        contentIntellisense: true,
    },
});
