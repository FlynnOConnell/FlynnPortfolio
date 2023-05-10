<!-- SkeletonLoader.vue -->
<template>
    <div class="skeleton-loader" :style="loaderStyle"></div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
    width: {
        type: String,
        default: '100%',
    },
    height: {
        type: String,
        default: '100%',
    },
});

const loaderStyle = computed(() => {
    return {
        width: props.width,
        height: props.height,
        backgroundColor: '#ccc',
        borderRadius: '4px',
        animation: 'loading 1.5s infinite',
    };
});

</script>

<style scoped>
@keyframes loading {
    0% {
        background-color: #ccc;
    }

    50% {
        background-color: #ddd;
    }

    100% {
        background-color: #ccc;
    }
}
</style>
