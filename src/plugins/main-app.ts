import { createApp } from 'vue';
import App from '../App.vue';

export const app = createApp(App, {
    compilerOptions: {
    isCustomElement: (tag: string) => tag === 'ui',
  },
});
