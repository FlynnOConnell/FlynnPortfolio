<script setup lang="ts">
import { ref } from 'vue';
import LinksComponent from '../subcomponents/LinksComponent.vue';
import Icon from '../subcomponents/SVGComponent.vue';

const navref = ref<any>(null);
const handleNavToggle = () => {
    if (navref.value != null) {
        navref.value.dataset.transitionable = 'true';
        navref.value.dataset.toggled =
            navref.value.dataset.toggled === 'true' ? 'false' : 'true';
    } else {
        console.log('nav is null');
    }
};

window.matchMedia('(max-width: 800px)').onchange = () => {
    if (navref.value != null) {
        navref.value.dataset.transitionable = 'true';
        navref.value.dataset.toggled =
            navref.value.dataset.toggled === 'true' ? 'false' : 'true';
    } else {
        console.log('nav is null');
    }
};
</script>

<template>
    <header>
        <nav ref="navref" data-toggled="false" data-transitionable="false">
            <div id="nav-logo-section" class="nav-section">
                <router-link to="/" class="w-full h-full">
                    <Icon subfolder="other" name="signature" />
                </router-link>
            </div>
            <div id="nav-mobile-section">
                <div id="nav-link-section" class="nav-section">
                    <router-link class="animation-underline" to="/">ABOUT</router-link>
                    <router-link class="animation-underline" to="/project">PROJECTS</router-link>
                    <router-link class="animation-underline" to="/resume">RESUME</router-link>
                </div>
                <div id="nav-social-section" class="nav-section">
                    <LinksComponent />
                </div>
                <div id="nav-contact-section" class="nav-section">
                    <router-link class="animation-underline" to="/contact">CONTACT</router-link>
                </div>
            </div>
            <button id="nav-toggle-button" type="button" @click="handleNavToggle()">
                <span>Menu</span>
                <i class="fa-solid fa-bars"></i>
            </button>
        </nav>
    </header>
</template>

<style scoped>
/* #svg-signature {
    filter: brightness(0) invert(1);
} */
</style>
