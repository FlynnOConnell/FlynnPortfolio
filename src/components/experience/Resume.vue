<template>
    <v-card class="elevation-5">
        <v-toolbar>
            <v-tabs align-tabs="start">
                <v-tab v-for="resume in versions" color="deep-purple-accent-4 text-bold text-white" align-tabs="center"
                    @click="changeTabResume(resume.id)">
                    <p class="font-semibold">
                        {{ resume.name }}
                    </p>
                </v-tab>
            </v-tabs>
            <v-divider vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn density="compact" size="large" @click="downloadResume">
                <font-awesome-icon :icon="['fas', 'download']" class="mr-2" />
                Download
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn density="compact" size="large" @click="openExternalResume">
                <font-awesome-icon :icon="['fas', 'up-right-from-square']" class="mr-2" />
                Open
            </v-btn>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-window v-model="activeTabResume" class="resume-window elevation-5">
            <v-window-item v-for="resume in versions" :key="resume.id" :value="resume.id">
                <v-container v-show="activeTabResume === resume.id" fluid class="resume-container">
                    <Suspense>
                        <template #default>
                            <AsyncVuePdfEmbed :source="resume.pdfUrl" />
                        </template>
                        <template #fallback>
                            <SkeletonLoader :width="'100%'" :height="'400px'" />
                        </template>
                    </Suspense>
                </v-container>
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from 'vue';
import SkeletonLoader from "@/components/navigation/LoadingSkeleton.vue";

const AsyncVuePdfEmbed = defineAsyncComponent(() => import('vue-pdf-embed'));
let activeTabResume = ref(1);
let loading = ref({ 1: true, 2: true, 3: true });

function changeTabResume(id: number): void {
    activeTabResume.value = id;
}

function handleLoad(id: number) {
    loading.value[id] = false;
}

onMounted(() => {
    handleLoad(1); // Preload the first resume
});

function openExternalResume() {
    const resume = versions.find((resume) => resume.id === activeTabResume.value);
    if (resume) {
        window.open(resume.pdfUrl, '_blank');
    }
}

function downloadResume() {
    const resume = versions.find((resume) => resume.id === activeTabResume.value);
    if (resume) {
        const link = document.createElement('a');
        link.href = resume.pdfUrl;
        link.download = 'resume.pdf'; // you can set a custom filename here
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

interface ResumeVersion {
    id: number;
    name: string;
    pdfUrl: string;
}

const versions: ResumeVersion[] = [
    {
        id: 1,
        name: 'Software/Data-Science',
        pdfUrl: '/pdf/FlynnOConnell_Resume_DS.pdf',
    },
    {
        id: 2,
        name: 'Software/Web-Dev',
        pdfUrl: '/pdf/FlynnOConnell_Resume_WD.pdf',
    },
    {
        id: 3,
        name: 'Software/Data-Analytics',
        pdfUrl: '/pdf/FlynnOConnell_Resume_DSM.pdf',
    },
];

</script>


<style scoped>
.resume-container {
    min-height: 100vh;
}
</style>

