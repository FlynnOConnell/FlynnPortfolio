<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
    const router = useRouter();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // Redirect to the mobile homepage
        router.push('/mobile-homepage');
    } else {
        // Redirect to the regular homepage
        router.push('/home');
    }
});
</script>

<template>
    <div class="app-container">
        <router-view v-slot="{ Component }">
            <transition :duration="{ enter: 600, leave: 200 }" name="fade" mode="out-in" appear>
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>


<style lang="scss">
@import 'tailwindcss/tailwind.css';
@import "./assets/scss/main.scss";
@import './assets/css/imports.css';
@import 'highlight.js/styles/night-owl.css';

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
