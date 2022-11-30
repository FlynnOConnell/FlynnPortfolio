import { Quasar } from 'quasar';
import { app } from './main-app';
import quasarIconSet from 'quasar/icon-set/svg-fontawesome-v6';

// Import icon libraries
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';
import '@quasar/extras/line-awesome/line-awesome.css';

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import 'quasar/src/css/index.sass';

app.use(Quasar, {
    plugins: {},
    iconSet: quasarIconSet,
});
