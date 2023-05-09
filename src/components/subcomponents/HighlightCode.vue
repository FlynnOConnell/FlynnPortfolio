<script>
import hljs from 'highlight.js/lib/core';
import hljsVuePlugin from '@highlightjs/vue-plugin'

import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import cpp from 'highlight.js/lib/languages/cpp';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('xml', xml);
hljs.listLanguages();

export default {
    props: [
        'code',
        'language',
    ],
    components: {
        highlightjs: hljsVuePlugin.component
    },
}
</script>

<template>
    <v-sheet class="hljs-container pa-2">
        <highlightjs :code="code" :language="language" :autodetect=false />
    </v-sheet>
</template>

<style lang="scss"></style>