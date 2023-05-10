
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import { VApp, VContainer, VBtn } from 'vuetify/components';
import { Scroll } from 'vuetify/directives';

const components = {
  VApp,
  VContainer,
  VBtn,
};

const directives = {
  Scroll,
};

export function setupVuetify(app: any) {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
        fa
      }
    },
     theme: {
       defaultTheme: 'dark',
    },
  });

  // Check if properties are already registered on app
  if (!('$vuetify' in app.config.globalProperties)) {
    app.provide('$vuetify', vuetify);
  }

  app.use(vuetify);
  return vuetify;
}



