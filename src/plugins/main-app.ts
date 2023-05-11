import { createApp } from 'vue';
import App from '../App.vue';
import { Vue3Mq } from "vue3-mq";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMobile, faMobileAlt, faMobileRetro, faDownload, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane, faCopy, faEnvelope, faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCopy, faPaperPlane, faEnvelope, faMobile, faMobileAlt,
  faMobileRetro, faCircleCheck, faDownload, faUpRightFromSquare,
faGithub, faLinkedin, faTwitter)
export const app = createApp(App, {
    compilerOptions: {
    isCustomElement: (tag: string) => tag === 'ui',
  },
});
app.use(Vue3Mq, {
  preset: "vuetify",
});
app.component('font-awesome-icon', FontAwesomeIcon) // register the FontAwesomeIcon component globally
export default app
