<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/maincomponents/HeaderComponent.vue';
</script>

<template>
    <HeaderComponent />
    <router-view v-slot="{ Component }">
        <transition
            :duration="{ enter: 600, leave: 200 }"
            name="fade"
            mode="out-in"
            appear
        >
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
