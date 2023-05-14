<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive, watch } from 'vue';
import LinksComponent from '../subcomponents/LinksComponent.vue';
import Icon from '../subcomponents/SVGComponent.vue';
import { useRouter } from 'vue-router';
import { useClipboard } from '@vueuse/core'
import { useElementHover } from '@vueuse/core'
import { useDisplay } from 'vuetify'

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
    <v-app-bar tag="header" :elevation="16" rounded back density="compact" class="bg-dark-blue">
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
            <v-app-bar-nav-icon border density="compact" variant="outlined" rounded class="rounded-sm"
                id="menu-activator"></v-app-bar-nav-icon>
        </template>
        <v-menu activator="#menu-activator">
            <v-list class="bg-dark-blue w-full">
                <v-list-item class="bg-dark-blue">
                    <v-btn variant="outlined" class="animation-underline w-full"
                        @click="router.push('/experience/projects')">PROJECTS</v-btn>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="bg-dark-blue">
                    <v-btn variant="outlined" class="animation-underline  w-full"
                        @click="router.push('/experience/publications')">PUBLICATIONS</v-btn>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="bg-dark-blue">
                    <v-btn variant="outlined" class="animation-underline w-full text-left"
                        @click="router.push('/experience/resume')">
                        RESUME</v-btn>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
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

