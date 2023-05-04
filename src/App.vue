<script setup lang="ts">
import { ref, provide } from 'vue';
import { useRoute } from 'vue-router';
import HeaderComponent from '@/components/maincomponents/HeaderComponent.vue';

const route = useRoute();
const headerHeight = ref(0);
provide('headerHeight', headerHeight);

const updateHeaderHeight = (value: number) => {
    headerHeight.value = value;
};
</script>


<template>
    <div class="slider-container" :class="{ 'no-overflow': !(route.path === '/' || route.path === '/home') }">
        <HeaderComponent @update-header-height="updateHeaderHeight"></HeaderComponent>
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

.slider-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0px;
    overflow: hidden;
}

.no-overflow {
    overflow: initial;
    height: auto;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
