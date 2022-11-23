<script setup lang="ts">
import { ref } from 'vue';

defineProps({
    dataindex: String,
    datastatus: String,
    backgroundUrl: String,
});

</script>

<template>
        <div class="article-image-section article-section" :style="{ background: backgroundUrl }">
        </div>
</template>

