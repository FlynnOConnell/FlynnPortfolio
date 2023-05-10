<template>
    <v-card>
        <v-tabs center-active align-tabs="center">
            <v-tab v-for="resume in versions" color="deep-purple-accent-4 text-bold text-white" align-tabs="center"
                @click="changeTabResume(resume.id)">
                {{ resume.name }}
            </v-tab>
        </v-tabs>
        <v-window v-model="activeTabResume" class="resume-window">
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
import SkeletonLoader from "@/components/navigation/SkeletonLoader.vue";

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

interface ResumeVersion {
    id: number;
    name: string;
    pdfUrl: string;
}

const versions: ResumeVersion[] = [
    {
        id: 1,
        name: 'Software/Data Science',
        pdfUrl: '/pdf/FlynnOConnell_Resume_DS.pdf',
    },
    {
        id: 2,
        name: 'Software/WebDev',
        pdfUrl: '/pdf/FlynnOConnell_Resume_WD.pdf',
    },
    {
        id: 3,
        name: 'Software/DataAnalytics',
        pdfUrl: '/pdf/FlynnOConnell_Resume_DSM.pdf',
    },
];

</script>
// function downloadResume(): void 
//     if (selectedResume.value) {
//         const link = document.createElement('a');
//         link.href = selectedResume.value.pdfUrl;
//         link.download = 'resume.pdf';
//         link.click();
//     }



<style scoped>
.resume-container {
    min-height: 100vh;
}
</style>

