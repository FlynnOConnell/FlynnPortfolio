
<template>
    <div>
        <slot /> <!-- Use the Component -->
    </div>
</template>
<script lang="ts">
import App from '@/components/gists/Gist.vue';
import Gist from '../gists/Gist.vue'
export default {
    name: 'App',
    components: { Gist } // Register the Component
}
</script>

<style>
.gist .markdown-body .csv-data th,
.gist .markdown-body .csv-data td,
.gist .markdown-body .csv-data .blob-num {
    background: #000;
    background-color: #000;
}

.gist .blob-interaction-bar .octicon-search>path {
    fill: #fff
}

.gist .blob-interaction-bar>input {
    background: #000
}

.gist .blob-interaction-bar {
    background: #000
}
</style>