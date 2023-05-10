<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive, watch } from 'vue';
import LinksComponent from '../subcomponents/LinksComponent.vue';
import Icon from '../subcomponents/SVGComponent.vue';
import { useRouter } from 'vue-router';
import { useClipboard } from '@vueuse/core'

const phonenumber = ref('5189181741');
const { copy } = useClipboard();
const isCopied = ref(false);
const showCopy = ref(false);

const overlay = ref(false);

const showcopied = () => {
    copy(phonenumber.value)
    isCopied.value = true;
    setTimeout(() => {
        isCopied.value = false;
    }, 2000);
};

const showCopyTooltip = () => {
    showCopy.value = true;
};

const hideCopyTooltip = () => {
    showCopy.value = false;
};

const router = useRouter();
const navref = ref<any>(null);

const state = reactive({
    headerHeight: 0,
});

const items = [
    {
        title: 'FlynnOConnell@gmail.com',
        value: 1,
        icon: 'mdi-email-outline',
        href: 'mailto:FlynnOConnell@gmail.com',
    },
    {
        title: '(518)-918-1741',
        value: 2,
        icon: 'mdi-content-copy',
        icon2: 'far: fa-copy',
        icon3: 'fas: fa-copy',
    },
];

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
                        <button class="animation-underline" @click="router.push('experience/projects')">PROJECTS</button>
                    </div>
                    <div id="nav-link-section" class="">
                        <button class="animation-underline"
                            @click="router.push('/experience/publications')">PUBLICATIONS</button>
                    </div>
                    <div id="nav-link-section" class="">
                        <button class="animation-underline" @click="router.push('experience/resume')">RESUME</button>
                    </div>
                </div>
                <div id="nav-social-section" class="nav-section">
                    <LinksComponent />
                </div>
                <div ref="nav-contact-ref" id="nav-contact-section" class="nav-section">
                    <v-overlay v-model="overlay" contained class="align-center justify-center">
                        <template v-slot:activator="{ props }">
                            <v-btn color="blue" v-bind="props">
                                <p class="font-semibold">Contact Me</p>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item :href="items[0].href">
                                <template v-slot:prepend>
                                    <font-awesome-icon :icon="['far', 'paper-plane']" class="mr-5" />
                                </template>
                                <v-list-item-title>{{ items[0].title }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="showcopied" @mouseenter="showCopyTooltip" @mouseleave="hideCopyTooltip">
                                <template v-slot:prepend>
                                    <font-awesome-icon :icon="['fas', 'mobile-alt']" class="mr-6" />
                                </template>
                                <v-list-item-title>
                                    (518)-918-1741
                                </v-list-item-title>
                                <v-tooltip text="Copy" location="bottom" :value="!isCopied && showCopy" />
                                <v-tooltip text="Copied!" location="bottom" :value="isCopied" />
                            </v-list-item>
                        </v-list>
                    </v-overlay>


                </div>
            </div>
            <button id="nav-toggle-button" type="button" @click="handleNavToggle()">
                <span>Menu</span>
                <i class="fas:fa-solid fa-bars"></i>
            </button>
        </nav>
    </header>
</template>

