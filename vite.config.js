import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    server: {
        port: 5000,
    },
    build: {
        cssCodeSplit: false,
        target: ['es2015'],
    },
    optimizeDeps: {
        exclude: ['@roxi/routify'],
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, './src'),
            },
        ],
    },
    plugins: [
        svelte(require('./svelte.config.js')),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Tasks',
                short_name: 'Tasks',
                start_url: '/',
                theme_color: '#2885d6',
                background_color: '#1e1e1e',
                display: 'fullscreen',
                icons: [
                    {
                        src: 'icons/manifest-icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'maskable any',
                    },
                    {
                        src: 'icons/manifest-icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable any',
                    },
                ],
            },
        }),
    ],
});
