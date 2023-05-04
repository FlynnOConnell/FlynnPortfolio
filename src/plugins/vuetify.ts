
import { createVuetify, type ThemeDefinition } from 'vuetify'
import 'vuetify/dist/vuetify.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'


export function setupVuetify(app: any) {
  const vuetify = createVuetify({
    components,
    directives,
    defaults: {
        global: {
          ripple: false,
        },
        VSheet: {
          elevation: 4,
        },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
     theme: {
      defaultTheme: 'dark'
  }
  });

  // Check if properties are already registered on app
  if (!('$vuetify' in app.config.globalProperties)) {
    app.provide('$vuetify', vuetify);
  }

  app.use(vuetify);
  return vuetify;
}



