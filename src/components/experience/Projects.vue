<script setup lang="ts">
import GitCode from '@/components/subcomponents/GitCode.vue'
import Icon from '@/components/subcomponents/SVGComponent.vue';
import SkeletonLoader from '@/components/navigation/LoadingSkeleton.vue';
import { projects } from '@/data/projectData';
import { Octokit } from 'octokit';
import { onMounted, onBeforeMount, ref, computed, toRef, watchEffect } from 'vue'
import type { Ref } from 'vue';
import { useDisplay } from 'vuetify'

const { mobile, mdAndUp } = useDisplay();

const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN
})


type PreloadedGitFilesType = Ref<Record<string, string>>;
const preloadedGitfiles: PreloadedGitFilesType = ref({});

onBeforeMount(async () => {
    for (const project of projects) {
        for (const file of project.files) {
            try {
                const response = await octokit.request('GET /repos/NeuroPyPy/{repo}/contents/{path}', {
                    repo: project.repo,
                    path: file.path,
                });
                const content = atob(response.data.content);
                file.content.value = content;
                preloadedGitfiles.value[file.path] = content;
            } catch (error) { console.log("octokit error", error); }
        }
    }
});

const imageLoaded = ref([]);
const videoLoaded = ref([]);
const expandedCodeStates = ref([]);
const expandedVideoStates = ref([...Array(projects.length)].map(() => false));

function handleVideoState(index: number) {
    expandedVideoStates.value[index] = !expandedVideoStates.value[index];
    console.log(expandedVideoStates.value[index]);
}

</script>

<template>
    <v-container class="rounded-lg elevation-6 my-10 bg-dark-blue">
        <v-card tag="section" v-for="(project, index) in projects" :key="project.repo" :ref="project.repo"
            :data-id="project.repo" :id="project.repo" rounded="x2" class="mb-8">
            <v-toolbar density="compact" :elevation="8" class="">

                <template v-slot:prepend>
                    <a :href="`${project.fulllink}`" aria-label="GitHub" target="_blank" rel="noreferrer">
                        <v-icon size="large"> mdi-github </v-icon>
                    </a>
                </template>
                <v-toolbar-title class="ml-3 mr-6">
                    <p>{{ project.repo }}</p>
                </v-toolbar-title>

                <template v-if="!mobile">
                    <Icon v-for="(language, index) in project.languages" :subfolder="project.subfolder[index]"
                        :name="language" filter true style="max-width: 20px; max-height: 22px;" class="mx-2" />
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                </template>
                <template v-slot:append>
                    <v-btn size="small" density="comfortable"
                        :icon="expandedCodeStates[index] ? 'mdi-chevron-up' : 'mdi-code-tags'"
                        @click="expandedCodeStates[index] = !expandedCodeStates[index]">
                    </v-btn>
                    <v-btn v-if="project.source !== ''" size="small" density="comfortable"
                        :icon="expandedVideoStates[index] ? 'mdi-chevron-up' : 'mdi-image'"
                        @click="handleVideoState(index)">
                    </v-btn>
                </template>

            </v-toolbar>
            <!-- DESCRIPTION -->
            <v-card class="m-4 elevation-6">
                <div v-if="mobile" class="d-flex flex-row justify-evenly">
                    <Icon v-for="(language, index) in project.languages" :subfolder="project.subfolder[index]"
                        :name="language" filter true style="max-width: 20px; max-height: 22px;" class="mx-1" />
                </div>
                <v-card-text>
                    <p v-html="project.description" class="project-text-outer">
                    </p>
                </v-card-text>
            </v-card>
            <v-expand-transition>
                <!-- EXPANDED CODE -->
                <template v-if="expandedCodeStates[index]">
                    <v-card class="bg-none">
                        <v-card-title>
                            <v-tabs v-model="project.activeTab.value" align-tabs="center" selected-class="active-text"
                                center-active>
                                <v-tab v-for="(file, index) in project.files" :key="index" class="justify-center">
                                    {{ file.title }}
                                </v-tab>
                            </v-tabs>
                        </v-card-title>
                        <v-card-text class="rounded-lg my-1">
                            <template v-for="(file, index) in project.files" :key="file.filename">
                                <transition name="fade" mode="out-in">
                                    <v-sheet v-if="project.activeTab.value === index">
                                        <v-card v-show="project.activeTab.value === index"
                                            class="scrollable-content elevation-6">
                                            <v-card v-if="project.files[index].content.value"
                                                class="scrollable-content elevation-6">
                                                <GitCode :content="project.files[index].content.value"
                                                    :language="project.files[index].language" />
                                            </v-card>
                                            <v-card v-else class="scrollable-content">
                                                <SkeletonLoader class="bg-none"></SkeletonLoader>
                                            </v-card>
                                        </v-card>
                                    </v-sheet>
                                </transition>
                            </template>
                        </v-card-text>
                    </v-card>
                </template>
                <!-- EXPANDED VIDEO -->
                <template v-if="expandedVideoStates[index]">
                    <v-card class="bg-none">
                        <v-responsive>
                            <template v-if="project.sourcetype === 'image'">
                                <v-img :src="project.source" width="auto" height="auto" class="mx-2"
                                    @load="imageLoaded[index] = true"></v-img>
                            </template>
                            <template v-else-if="project.sourcetype === 'video'">
                                <video ref="videoplayer" class="w-full h-auto object-cover" autoplay muted loop
                                    @loadedmetadata="videoLoaded[index] = true">
                                    <source :src="project.source" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </template>
                        </v-responsive>
                    </v-card>
                </template>
            </v-expand-transition>
            <v-divider></v-divider>
        </v-card>
    </v-container>
</template>

<style lang="scss" scoped>
a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
}

.techicon {
    height: 20px;
    width: 22px;
}

.scrollable-content {
    overflow: auto;
    max-height: 90vh;
    min-height: 40vh;
    scrollbar-color: var(--vt-scroll-bar-color) var(--vt-scroll-bar-bg-color);
    scrollbar-width: thin;
}

#row-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}

#headwithicon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 25px;
    max-height: 60px;
    margin-top: 2rem;
    align-items: center;
}

.project-label {
    font-size: 1.5rem;
    font-weight: 600;
    color: inherit;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.project-text-outer {
    font-weight: bold;
}
</style>
