<script setup lang="ts">

import '@/assets/scss/secondary.scss';
const tagprops = defineProps({
    tag: {
        type: String,
        default: 'div',
    }
});

</script>

<template>
    <Component :is="tagprops" class="relative w-full d-container-content">
        <slot />
    </Component>
</template>

<style scoped>

</style>

