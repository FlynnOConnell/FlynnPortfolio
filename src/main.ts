import { app } from './plugins/main-app';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';

import './plugins/router';
import './plugins/pinia';
import './plugins/formkit';
import { setupVuetify } from './plugins/vuetify';

setupVuetify(app);
app.config.globalProperties.$log = console.log;
app.mount('#app');
