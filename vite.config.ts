import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import { transformAssetUrls } from '@quasar/vite-plugin';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({ template: { transformAssetUrls } }),
        vueJsx(),
        svgLoader(),
        // quasar({
        //     sassVariables: 'src/assets/scss/quasar-variables.sass',
        // }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/assets/scss/main.scss";',
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
        },
    },
    build: {
        chunkSizeWarningLimit: 1600,
    },
});
