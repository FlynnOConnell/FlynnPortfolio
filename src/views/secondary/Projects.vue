<script setup lang="ts">
import GitCode from '@/components/subcomponents/GitCode.vue'
import Icon from '@/components/subcomponents/SVGComponent.vue';
import { projects } from '@/data/projectData';
import { links } from '@/data/links';
import SidebarContent from "@/components/maincomponents/SidebarContent.vue";
import SidebarRoute from "@/components/maincomponents/SidebarRoute.vue";
import { onMounted, inject, ref, computed, nextTick, provide } from 'vue'

const intersectingProjectId = ref('');
provide('intersectingProjectId', intersectingProjectId);
const preloadedGitfiles: PreloadedGitFilesType = inject('preloadedGitfiles');

const getPreloadedContent = (path: string) => {
    return preloadedGitfiles.value[path];
};

onMounted(async () => {
    // Wait for the next DOM update cycle
    await nextTick();
    let minId = null;
    let maxId = null;
    let debounceTimeout = null;
    function applyChanges() {
        const sections = [...document.querySelectorAll('.container-project-selector')];
        // perform action on elements with Id between min and max
        minId = null;
        maxId = null;
    }

    function reportIntersection(entries: any[]) {
        clearTimeout(debounceTimeout);
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const entryId = parseInt(entry.target.id);
                const id = entry.target.getAttribute('data-id');
                intersectingProjectId.value = id;
                if (minId === null || maxId === null) {
                    minId = entryId;
                    maxId = entryId;
                } else {
                    minId = Math.min(minId, entryId);
                    maxId = Math.max(maxId, entryId);
                }
            }
        });
        debounceTimeout = setTimeout(applyChanges, 500);
    }
    const io = new IntersectionObserver(reportIntersection, { threshold: 0.1, root: null, rootMargin: "0px" });
    const sections = [...document.querySelectorAll('.container-project-selector')];

    sections.forEach((section) => {
        io.observe(section);
    });

});

const sidebarWidth = computed(() => {
    const expandedWidth = 256;
    const collapsedWidth = 72;
    const margin = 32;

    // Adjust this logic if you have a condition to switch between expanded and collapsed states
    const isExpanded = true;
    return isExpanded ? expandedWidth + margin : collapsedWidth + margin;
});

const gistContentRef = ref({} as string);
const copyGistContent = () => {
    const gistContent = gistContentRef.value;
    if (gistContent) {
        navigator.clipboard.writeText(gistContent)
            .then(() => {
                console.log('Gist content copied to clipboard');
            })
            .catch((error) => {
                console.error('Failed to copy gist content to clipboard:', error);
            });
    }
};

</script>

<template>
    <v-app class="grey-darken-1 code-family">
        <SidebarRoute :links="links" :sidebarWidth="sidebarWidth"></SidebarRoute>
        <SidebarContent :projects="projects" :intersectingProjectId="intersectingProjectId">
        </SidebarContent>
        <v-main class="">
            <v-container>
                <v-row justify="space-around">
                    <v-col cols="8">
                        <v-container v-for="project in projects" :key="project.repo" :ref="project.repo"
                            class="bg-background rounded-lg my-2 container-project-selector">
                            <!-- HEADER -->
                            <v-card class="mb-4 mx-6 elevation-6" style="background-color: transparent;">
                                <v-card-title>
                                    <v-row class="inline-flex" align="center" no-gutters>
                                        <v-col cols="auto" class="d-flex">
                                            <a :link="`${project.fulllink}`" aria-label="GitHub" target="_blank"
                                                rel="noreferrer">
                                                <v-icon size="x-small" class=""> mdi-github </v-icon>
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
                            <v-card flat class="mb-4 mx-6" style="background-color: transparent;">
                                <v-card-text>
                                    <div v-html="project.description" class="project-text-outer"></div>
                                </v-card-text>
                            </v-card>
                            <!-- CODE SNIPPETS -->
                            <v-card border style="background-color: transparent;">
                                <v-card-title align-content="center">
                                    <v-tabs v-model="project.activeTab.value">
                                        <v-tab v-for="(file, index) in project.files" :key="index"
                                            class="rounded bg-surface elevation-16 mx-2 my-2 justify-center">
                                            {{ file.title }}
                                        </v-tab>
                                    </v-tabs>
                                </v-card-title>
                                <v-card-text class="rounded-lg my-1 mx-6 elevation-1">
                                    <v-sheet v-for="(file, index) in project.files" :key="file.filename">

                                        <v-card v-show="project.activeTab.value === index">

                                            <v-card-text class="scrollable-content">
                                                <div>
                                                    <!-- <GitCode :content="getPreloadedContent(project.files[index].path)"
                                                        :language="project.files[index].language" /> -->
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-sheet>
                                </v-card-text>

                            </v-card>
                            <!-- VIDEO/IMAGE -->
                            <v-card flat class="relative h-full mb-4 mx-6">
                                <v-responsive>
                                    <template v-if="project.sourcetype === 'image'">
                                        <v-img :src="project.source" width="auto" height="auto" class="mx-2"></v-img>
                                    </template>
                                    <template v-else-if="project.sourcetype === 'video'">
                                        <video ref="videoplayer" class="w-full h-auto object-cover" autoplay muted loop>
                                            <source :src="project.source" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </template>
                                </v-responsive>
                            </v-card>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
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
    /* Subtract the height of the card title and subtitle */
}

.copy-button {
    position: absolute;
    right: 0;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    color: var(--text-color);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        color: var(--accent-color);
    }
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
</style>
