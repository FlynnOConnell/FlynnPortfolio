<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive, watch } from 'vue';
import LinksComponent from '../subcomponents/LinksComponent.vue';
import QuestionIcon from '../icons/nav/QuestionIcon.vue';
import Icon from '../subcomponents/SVGComponent.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const navref = ref<any>(null);

const state = reactive({
    headerHeight: 0,
});

const updateHeaderHeight = () => {
    if (navref.value) {
        state.headerHeight = navref.value.offsetHeight;
    }
};

const handleNavToggle = () => {
    if (navref.value != null) {
        navref.value.dataset.transitionable = 'true';
        navref.value.dataset.toggled =
            navref.value.dataset.toggled === 'true' ? 'false' : 'true';
    } else {
        console.log('nav is null');
    }
};

const emit = defineEmits(['update-header-height']);

onMounted(() => {
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    emit('update-header-height', state.headerHeight);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateHeaderHeight);
});

watch(
    () => window.matchMedia('(max-width: 800px)'),
    (query) => {
        if (navref.value != null) {
            navref.value.dataset.transitionable = 'true';
            navref.value.dataset.toggled =
                navref.value.dataset.toggled === 'true' ? 'false' : 'true';
        } else {
            console.log('nav is null');
        }
    },
    { immediate: true }
);

</script>

<template>
    <header>
        <nav ref="navref" data-toggled="false" data-transitionable="false">
            <div id="nav-logo-section" class="nav-section">
                <router-link to="/home" class="w-full h-full">
                    <Icon subfolder="other" name="signature" class="temp" />
                </router-link>
            </div>
            <div id="nav-mobile-section">
                <div id="nav-link-section" class="nav-section">
                    <div id="nav-link-section" class="">
                        <button class="animation-underline" @click="router.push('/projects')">PROJECTS</button>
                    </div>
                    <div id="nav-link-section" class="">
                        <button class="animation-underline" @click="router.push('/resume')">RESUME</button>
                    </div>
                    <div id="nav-link-section" class="">
                        <button class="animation-underline" @click="router.push('/publications')">PUBLICATIONS</button>
                    </div>
                    <div id="nav-link-section" class="">
                        <QuestionIcon link="/why-though?"></QuestionIcon>
                    </div>
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

