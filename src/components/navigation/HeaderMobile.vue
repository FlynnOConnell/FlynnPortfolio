<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive, watch } from 'vue';
import LinksComponent from '../subcomponents/LinksComponent.vue';
import Icon from '../subcomponents/SVGComponent.vue';
import { useRouter } from 'vue-router';
import { useClipboard } from '@vueuse/core'
import { useElementHover } from '@vueuse/core'
import { useDisplay } from 'vuetify'
import { GithubIcon } from 'vue-feather-icons';
import { LinkedinIcon } from 'vue-feather-icons';
import type { TwitterIcon } from 'vue-feather-icons';
const { mobile, lgAndUp } = useDisplay()
console.log(mobile.value)
console.log(lgAndUp.value)

const CopyListItem = ref()
const isPhoneHovered = useElementHover(CopyListItem)

const SendMailItem = ref()
const isMailHovered = useElementHover(SendMailItem)

const isSent = ref(false);
const showPlaneIcon = () => {
    isSent.value = true;
    setTimeout(() => {
        isSent.value = false;
    }, 2000);
};

const phonenumber = ref('5189181741');
const { copy } = useClipboard();

const isCopied = ref(false);
const showCopyIcon = () => {
    copy(phonenumber.value)
    isCopied.value = true;
    setTimeout(() => {
        isCopied.value = false;
    }, 2000);
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


const handleNavToggle = () => {
    if (navref.value != null) {
        navref.value.dataset.transitionable = 'true';
        navref.value.dataset.toggled =
            navref.value.dataset.toggled === 'true' ? 'false' : 'true';
    } else {
        console.log('nav is null');
    }
};


watch(
    () => window.matchMedia('(max-width: 800px)'),
    (query) => {
        if (navref.value != null) {
            navref.value.dataset.transitionable = 'true';
            navref.value.dataset.toggled =
                navref.value.dataset.toggled === 'true' ? 'false' : 'true';
        }
    },
    { immediate: true }
);

</script>

<template>
    <v-layout>
        <header>
            <nav ref="navref" data-toggled="false" data-transitionable="false">
                <v-app-bar :elevation="16" rounded back density="compact" class="bg-dark-blue">
                    <template v-slot:append>
                        <a href="http://www.github.com/NeuroPyPy" target="_blank">
                            <v-icon icon="fa:fab fa-github" class="mr-5"></v-icon>
                        </a>
                        <a href="https://www.linkedin.com/in/flynnoconnell/" target="_blank">
                            <v-icon icon="fa:fab fa-linkedin" class="mr-5"></v-icon>
                        </a>
                        <a href="https://twitter.com/FlynnNeuro" target="_blank">
                            <v-icon icon="fa:fab fa-twitter" class="mr-5"></v-icon>
                        </a>
                    </template>
                    <template v-slot:prepend>
                        <v-btn id="menu-activator">
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                    </template>
                    <v-menu activator="#menu-activator">
                        <v-list class="bg-dark-blue">
                            <v-list-item class="bg-dark-blue">
                                <v-btn variant="outlined" class="animation-underline"
                                    @click="router.push('experience/projects')">PROJECTS</v-btn>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item class="bg-dark-blue">
                                <v-btn variant="outlined" class="animation-underline"
                                    @click="router.push('/experience/publications')">PUBLICATIONS</v-btn>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item class="bg-dark-blue">
                                <v-btn variant="outlined" class="animation-underline"
                                    @click="router.push('experience/resume')">
                                    RESUME</v-btn>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-app-bar>
                <div id="nav-mobile-section">
                    <div id="nav-link-section" class="nav-section">
                        <div id="nav-link-section" class="">
                            <button class="animation-underline"
                                @click="router.push('experience/projects')">PROJECTS</button>
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
                        <v-list class="no-bg" rounded>
                            <v-list-item :href="items[0].href" ref="SendMailItem" @click="showPlaneIcon">
                                <template v-slot:prepend>
                                    <font-awesome-icon v-if="!isMailHovered && !isSent" :icon="['far', 'envelope']"
                                        class="mr-5" />
                                    <font-awesome-icon v-if="isMailHovered && !isSent" :icon="['far', 'fa-paper-plane']"
                                        class="mr-5" />
                                    <font-awesome-icon v-if="isSent" :icon="['far', 'fa-circle-check']" class="mr-5" />
                                </template>
                                <v-list-item-title>{{ items[0].title }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="hoverable" ref="CopyListItem" @click="showCopyIcon">
                                <template v-slot:prepend>
                                    <font-awesome-icon v-if="!isPhoneHovered && !isCopied" :icon="['fas', 'mobile-alt']"
                                        class="mr-6" />
                                    <font-awesome-icon v-if="isPhoneHovered && !isCopied" :icon="['far', 'fa-copy']"
                                        class="mr-5" />
                                    <font-awesome-icon v-if="isCopied" :icon="['far', 'fa-circle-check']" class="mr-5" />
                                </template>
                                <v-list-item-title>
                                    (518)-918-1741
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </div>
                </div>
                <button id="nav-toggle-button" type="button" @click="handleNavToggle()">
                    <span>Menu</span>
                    <i class="fas:fa-solid fa-bars"></i>
                </button>
            </nav>
        </header>
    </v-layout>
</template>

<style scoped lang="scss">
.hoverable {
    color: inherit;
    transition: color 0.5s ease;
    cursor: pointer;
}

.hoverable:hover {
    color: var(--highlight-color);
    transition: color 0.5s ease;
}
</style>

