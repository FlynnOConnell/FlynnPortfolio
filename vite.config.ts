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
            vuetify({styles: 'expose' }),
  ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            stream: 'stream-browserify',
        },
    },
    build: {
    rollupOptions: {
      treeshake: true,
    },
    minify: true,
    chunkSizeWarningLimit: 800,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    assetsDir: '',
    sourcemap: false,
    manifest: false,
    target: 'modules',
  },
  server: {
    hmr: {
      timeout: 60000, // Increase the HMR timeout if necessary
    },
  },
    base: '/',
});
