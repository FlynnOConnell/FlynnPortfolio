<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const header = ref<any>(null);
let scrollPosition = ref(0);

function updateScroll() {
    window.addEventListener('scroll', () => {
        scrollPosition.value = window.scrollY;
    });
}

onMounted(() => {
    window.addEventListener('scroll', updateScroll);
});

// onUnmounted(() => {
//     window.removeEventListener('scroll', updateScroll);
// }),

</script>

<template>
    <div ref="header" class="header z-10 sticky top-0 self-stretch lg:h-auto"
        :class="[scrollPosition >= 120 ? 'shrink' : '', '']" id="myHeader">
        <div
            class="header-inner flex relative items-center lg:justify-between px-2 lg:px-4 xl:px-12 lg:text-2xl leading-6 h-full lg:h-auto">

            <router-link class="animation-underline" to="/">PremierSuite</router-link>
            <router-link class="animation-underline" to="/project">Canalysis</router-link>
            <router-link class="animation-underline" to="/resume">Machine Learning</router-link>
            <router-link class="animation-underline" to="/resume">Cloud Dataviewer</router-link>

        </div>
    </div>
</template>

<style scoped>
.header {
    height: 70vh;
}

.sticky {
    position: sticky;
    top: 0;
    width: 100%;
}

.header-inner {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    background: var(--background-color) !important;
    font-size: x-large;
    color: #f1f1f1;
    transition: all 250ms cubic-bezier(0.33, 1, 0.68, 1);
}

.shrink .header-inner {
    padding-top: .35rem !important;
    padding-bottom: .35rem;
    font-size: larger !important;
}
</style>
