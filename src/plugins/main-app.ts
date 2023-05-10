import { createApp } from 'vue';
import App from '../App.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMobile, faMobileAlt, faMobileRetro } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane, faCopy, faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCopy, faPaperPlane, faEnvelope, faMobile, faMobileAlt, faMobileRetro )
export const app = createApp(App, {
    compilerOptions: {
    isCustomElement: (tag: string) => tag === 'ui',
  },
});
app.component('font-awesome-icon', FontAwesomeIcon) // register the FontAwesomeIcon component globally
export default app
