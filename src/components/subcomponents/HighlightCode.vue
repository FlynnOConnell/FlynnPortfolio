<script>
import hljs from 'highlight.js/lib/core';
import hljsVuePlugin from '@highlightjs/vue-plugin'

import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
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
    <div class="hljs-container">
        <highlightjs :code="code" :language="language" :autodetect=false />
    </div>
</template>