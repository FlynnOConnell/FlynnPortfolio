import { app } from './plugins/main-app';

import './plugins/router';
import './plugins/pinia';
import './plugins/formkit';
import './plugins/fontawesome';
import './plugins/vuefeather';

// import './assets/css/hljs_obsidian.css';
// import './plugins/highlightjs';
// import '@/assets/scss/style.scss';
app.config.globalProperties.$log = console.log;
app.mount('#app');
