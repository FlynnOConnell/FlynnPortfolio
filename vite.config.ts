import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({ template: { transformAssetUrls } }),
        vueJsx(),
        svgLoader(),
        quasar({
            sassVariables: 'src/quasar-variables.sass',
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
