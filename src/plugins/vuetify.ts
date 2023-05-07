
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.min.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
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

const myCustomDarkTheme = {
  dark: true,
  colors: {
    backdrop: '#292929',
    background: '#121212',
    surface: '#1d1d1d',
    primary: '#bb86fc',
    'primary-darken-1': '#3700B3',
    secondary: '#03dac6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export function setupVuetify(app: any) {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
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



