<script setup lang="ts">
import { RouterView } from 'vue-router';
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
@import "./assets/scss/main.scss";
@import "./assets/css/tailwind.css";
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
