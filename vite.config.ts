import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        commonjs(),
            vueJsx(),
            svgLoader(),
        vue({
                template: { transformAssetUrls },
            }),
            vuetify({styles: 'expose'}),
  ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            stream: 'stream-browserify',
        },
    },
    build: {
        chunkSizeWarningLimit: 1600,
    },
    base: '/',
    define: {
        'global': {},
    },
});
