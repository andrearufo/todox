import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            includeAssets: [
                'robots.txt',
                'favicons/favicon.ico',
                'favicons/apple-touch-icon.png'
            ],
            manifest: {
                name: 'Todox',
                short_name: 'Todox',
                description: 'Simple todo app',
                theme_color: '#ffffff',
                start_url: "/",
                icons: [
                    {
                        src: 'favicons/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'favicons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'favicons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    }
                ]
            },
            workbox: {
                cleanupOutdatedCaches: false,
                sourcemap: true
            },
            strategies: 'injectManifest',
            registerType: 'autoUpdate'
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
