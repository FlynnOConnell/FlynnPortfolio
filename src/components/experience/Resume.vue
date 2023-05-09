<template>
    <v-card>
        <v-tabs center-active>
            <v-tab v-for="(resume, index) in versions" color="deep-purple-accent-4 text-bold text-white" align-tabs="center"
                @click="changeTabResume">
                {{ resume.name }}
            </v-tab>
        </v-tabs>
        <v-window>
            <v-window-item v-for="(resume, index) in versions" :key="index" :value="resume.name">
                <v-container fluid>
                    <vue-pdf-embed :source="resume.pdfUrl" />
                </v-container>
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed'

const activeTabResume = ref(1);

function changeTabResume(tab: number): void {
    activeTabResume.value = tab;
}

interface ResumeVersion {
    id: number;
    name: string;
    pdfUrl: string;
}

const versions: ResumeVersion[] = [
    {
        id: 1,
        name: 'Data Science Resume',
        pdfUrl: '/pdf/FlynnOConnell_Resume_DS.pdf',
    },
    {
        id: 2,
        name: 'Web Development Resume',
        pdfUrl: '/pdf/FlynnOConnell_Resume_WD.pdf',
    },
    {
        id: 3,
        name: 'Data Science Math Resume',
        pdfUrl: '/pdf/FlynnOConnell_Resume_DSM.pdf',
    },
];

const selectedResume = ref<ResumeVersion | null>(versions[0]);

function selectResume(version: ResumeVersion): void {
    selectedResume.value = version;
}

function downloadResume(): void {
    if (selectedResume.value) {
        const link = document.createElement('a');
        link.href = selectedResume.value.pdfUrl;
        link.download = 'resume.pdf';
        link.click();
    }
}

const resumeIframe = ref<HTMLIFrameElement | null>(null);

onMounted(() => {
    resizeIframe();
});

function resizeIframe(): void {
    if (resumeIframe.value) {
        resumeIframe.value.style.height = resumeIframe.value.contentWindow?.document.body.scrollHeight + 'px';
    }
}

</script>


<style>
.resume {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.resume-preview {
    width: 100%;
    padding-bottom: calc(100vh - 200px);
    position: relative;
    overflow: hidden;
}

.paper-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: calc(100% / 1.4142);
    /* Aspect ratio: 1.4142 (square root of 2) for A4 or letter size */
}

.paper-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.iframe-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.resume-preview iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}
</style>

