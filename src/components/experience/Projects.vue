<script setup lang="ts">
import GitCode from '@/components/subcomponents/GitCode.vue'
import Icon from '@/components/subcomponents/SVGComponent.vue';
import SkeletonLoader from '@/components/navigation/LoadingSkeleton.vue';
import { projects } from '@/data/projectData';
import { Octokit } from 'octokit';
import { useExperienceContentStore } from '@/stores/experienceContentStore';
import { onMounted, onBeforeMount, ref, computed } from 'vue'
import type { Ref } from 'vue';

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

onMounted(() => {
    const sidebarStore = useExperienceContentStore();
    sidebarStore.loadComponent("SidebarProjects", { 'projectArray': projects });
});
const imageLoaded = ref([]);
const videoLoaded = ref([]);
const expandedCodeStates = ref([]);
const expandedVideoStates = ref([]);


</script>

<template>
    <v-container class="rounded-lg elevation-6 my-10 no-bg">
        <v-sheet class="rounded-lg no-bg">
            <v-card tag="section" v-for="(project, index) in projects" :key="project.repo" :ref="project.repo"
                :data-id="project.repo" :id="project.repo" rounded="x2" class="mb-8 mx-auto"
                style="background-color: transparent" variant="flat">
                <!-- TITLE -->
                <v-card class="mb-4 mx-auto no-bg" variant="tonal">
                    <v-card-title>
                        <v-row class="inline-flex justify-center" align="center" no-gutters>
                            <v-col cols="auto" class="d-flex">
                                <a :href="`${project.fulllink}`" aria-label="GitHub" target="_blank" rel="noreferrer">
                                    <v-icon size="x-small"> mdi-github </v-icon>
                                </a>
                            </v-col>
                            <v-col cols="auto" class="d-flex mx-6">
                                <h3 class="project-label">{{ project.repo }}</h3>
                            </v-col>
                            <v-col cols="auto" class="d-flex" style="height: 22px; width: 20px">
                                <div v-for="(language, index) in project.languages" class="techicon">
                                    <Icon :subfolder="project.subfolder[index]" :name="language" filter true
                                        style="width: 20px: height: 22px;" />
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-title>
                </v-card>
                <!-- DESCRIPTION -->
                <v-card class="mb-4 mx-6 no-bg elevation-6">
                    <v-card-text>
                        <p v-html="project.description" class="project-text-outer">
                        </p>
                    </v-card-text>
                </v-card>
                <!-- CODE EXAMPLES -->
                <v-row>
                    <v-col>
                        <v-sheet class="d-flex justify-center align-center no-bg">
                            <v-card-subtitle>
                                <p>Source</p>
                            </v-card-subtitle>
                            <v-card-actions>
                                <v-btn size="x-small" density="comfortable"
                                    :icon="expandedCodeStates[index] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                    @click="expandedCodeStates[index] = !expandedCodeStates[index]" variant="tonal"
                                    color="teal-accent-4">
                                </v-btn>
                            </v-card-actions>
                        </v-sheet>
                    </v-col>
                    <!-- VIDEO EXAMPLES -->
                    <v-col v-if="project.source !== ''">
                        <v-sheet class="d-flex justify-center align-center no-bg">
                            <v-card-subtitle>
                                <p>Example</p>
                            </v-card-subtitle>
                            <v-card-actions>
                                <v-btn size="small" density="compact"
                                    :icon="expandedVideoStates[index] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                    @click="expandedVideoStates[index] = !expandedVideoStates[index]" variant="tonal"
                                    color="teal-accent-4"></v-btn>
                            </v-card-actions>
                        </v-sheet>
                    </v-col>
                </v-row>
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
                                    <v-img v-if="imageLoaded[index]" :src="project.source" width="auto" height="auto"
                                        class="mx-2" @load="imageLoaded[index] = true"></v-img>
                                    <SkeletonLoader v-else class="bg-none"></SkeletonLoader>
                                </template>
                                <template v-else-if="project.sourcetype === 'video'">
                                    <video v-if="videoLoaded[index]" ref="videoplayer" class="w-full h-auto object-cover"
                                        autoplay muted loop @loadedmetadata="videoLoaded[index] = true">
                                        <source :src="project.source" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <SkeletonLoader v-else class="bg-none"></SkeletonLoader>
                                </template>
                            </v-responsive>
                        </v-card>
                    </template>

                </v-expand-transition>
                <v-divider></v-divider>
            </v-card>
        </v-sheet>
    </v-container>
</template>

<style lang="scss" scoped>
.code-family {
    font-family: var(--vt-font-family-base);
}

a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-leave {
    transition-delay: 0.15s;
}
</style>
