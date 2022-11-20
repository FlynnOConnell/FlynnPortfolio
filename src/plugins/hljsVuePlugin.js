import Vue from 'vue';
import VueHighlightJS from 'highlight.js';

import javascript from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'
import cpp from 'highlight.js/lib/languages/cpp'
import c from 'highlight.js/lib/languages/c'

import 'highlight.js/styles/night-owl.css'


Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    cpp,
    c,
    javascript,
    python,
  }
});

Vue.component("hljs", VueHighlightJS);