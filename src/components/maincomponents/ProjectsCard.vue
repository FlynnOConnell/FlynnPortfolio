<script setup lang="ts">

import Slides from '@/components/maincomponents/Slides.vue';
defineProps({
    dataindex: String,
    datastatus: String,
});
</script>

<template name="Home">
    <article>
        <Slides></Slides>
    </article>
</template>
