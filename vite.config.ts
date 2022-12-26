import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({}), vueJsx(), svgLoader()],
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: '@import "./src/assets/scss/main.scss";',
    //         },
    //     },
    // },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            stream: 'stream-browserify',
        },
    },
    build: {
        chunkSizeWarningLimit: 1600,
    },
    define: {
        // By default, Vite doesn't include shims for NodeJS/
        // necessary for segment analytics lib to work
        // global: {},
    },
});
