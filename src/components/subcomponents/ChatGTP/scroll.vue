<template>
    <div class="scroll-animation" ref="scrollAnimation">
        <slot />
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
const scrollAnimation = ref(null)

onMounted(() => {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        scrollAnimation.value.style.transform = `translateY(${scrollTop * 0.2}px)`
    })
})

</script>

<style>
.scroll-animation {
    transition: transform 0.2s ease;
}
</style>