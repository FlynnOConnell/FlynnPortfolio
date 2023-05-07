<script setup lang="ts">
import { Octokit } from 'octokit';
import { provide, ref, onMounted } from 'vue';
import { projects } from '@/data/projectData';
import type { Ref } from 'vue';

type PreloadedGitFilesType = {
    [key: string]: string;
};

const preloadedGitfiles: Ref<PreloadedGitFilesType> = ref({});
provide('preloadedGitfiles', preloadedGitfiles);

const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN
})

onMounted(async () => {
    for (const project of projects) {
        for (const file of project.files) {
            try {
                const response = await octokit.request('GET /repos/NeuroPyPy/{repo}/contents/{path}', {
                    repo: project.repo,
                    path: file.path,
                });
                const content = atob(response.data.content);
                preloadedGitfiles.value[file.path] = content;
            } catch (error) { console.log("octokit error", error); }
        }
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
