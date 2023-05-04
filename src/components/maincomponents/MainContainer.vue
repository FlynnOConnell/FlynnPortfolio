<template>
    <Component :is="tag" class="relative w-full d-container-content">
        <slot />
    </Component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    tag: {
        type: String,
        default: 'div',
    },
});

</script>

<style scoped>
/* Add your styles here */
</style>
