
import { createVuetify } from 'vuetify';
import type { ThemeDefinition } from 'vuetify';
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

const darkBlueTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#030865',
    'on-background': '#050b18',
    surface: '#001849',
    'on-surface': '#dbe1ff',
    primary: '#381e72',
    secondary: '#cbc2db',
    outline: '#948f99',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

export function setupVuetify(app: any) {
  const vuetify = createVuetify({
    display: {
      mobileBreakpoint: 'sm',
      
    },
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
    //   themes: { darkBlueTheme },
    //    variations: {
    //     colors: ['primary', 'secondary'],
    //     lighten: 1,
    //     darken: 2,
    //  },
    },
  });

  // Check if properties are already registered on app
  if (!('$vuetify' in app.config.globalProperties)) {
    app.provide('$vuetify', vuetify);
  }

  app.use(vuetify);
  return vuetify;
}



