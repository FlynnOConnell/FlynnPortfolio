<script setup lang="ts">
import type { path } from 'd3-path';
import { defineAsyncComponent, computed } from 'vue';
import SVGFilter from './SVGFIlter.vue';

const svgprops = defineProps({
    name: {
        type: String,
        required: true,
    },
    filter: {
        type: Boolean,
        default: false,
    },
    subfolder: {
        type: String,
        required: true,
    },
});

const icon = defineAsyncComponent(
    () =>
        import(`@/components/icons/${svgprops.subfolder}/${svgprops.name}.vue`)
);
</script>

<template>
    <component class="svg-holder" :is="icon">
        <SVGFilter :v-if="svgprops.filter" />
    </component>
</template>

<style>
.svg-holder:hover {
    filter: url(#hoverFilter);
}
</style>
