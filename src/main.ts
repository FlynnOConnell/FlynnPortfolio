import { app } from './plugins/main-app';

import './plugins/router';
import './plugins/pinia';
import './plugins/formkit';
import './plugins/fontawesome';
import './plugins/vuefeather';
import './assets/css/imports.css';
import './assets/scss/_tooltip.scss';

import directives from './directives/';

directives(app);
app.config.globalProperties.$log = console.log;
app.mount('#app');
