import svelte from '@sveltejs/vite-plugin-svelte';
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
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, './src'),
            },
        ],
    },
    plugins: [svelte(require('./svelte.config.js'))],
});
