import { app } from './plugins/main-app';

import './plugins/router';
import './plugins/quasar';
import './plugins/pinia';
import './plugins/formkit';
import './plugins/fontawesome';
import './assets/css/main.css';
import './assets/scss/_tooltip.scss';
import directives from './directives/';
import Tooltip from './components/subcomponents/Tooltip.vue';

app.component('Tooltip', Tooltip);
directives(app);
app.config.globalProperties.$log = console.log;
app.mount('#app');
