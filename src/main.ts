import { app } from './plugins/main-app';

import './plugins/router';
import './plugins/pinia';
import './plugins/formkit';
import './plugins/fontawesome';
import './plugins/vuefeather';
import './plugins/vueuse';

app.config.globalProperties.$log = console.log;
app.mount('#app');
