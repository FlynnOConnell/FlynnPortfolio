<template>
    <div style="transform-origin: center center 0px;">
        <v-container fluid class="">
            <v-card>
                <v-toolbar density="compact" flat>
                    <v-tabs align-tabs="start" slot="extension" v-model="currentResume">
                        <v-tab v-for="resume in versions" align-tabs="center" :key="resume.name" :value="resume.name">
                            <p class="text-body-1">
                                {{ resume.name }}
                            </p>
                        </v-tab>
                    </v-tabs>
                    <v-divider vertical></v-divider>
                    <v-btn :size="mobile ? 'x-small' : 'large'" @click="downloadResume">
                        <font-awesome-icon :icon="['fas', 'download']" class="" variant="plain" />
                    </v-btn>
                    <v-btn :size="mobile ? 'x-small' : 'large'" @click="openExternalResume">
                        <font-awesome-icon :icon="['fas', 'up-right-from-square']" class="" variant="plain" />
                    </v-btn>
                </v-toolbar>
                <v-window v-model="currentResume" class="elevation-5">
                    <v-window-item v-for="resume in versions" :key="resume.name" :value="resume.name" class="pa-2">
                        <VuePdfEmbed :source="resume.pdfUrl" @rendered="handleDocumentRender" />
                    </v-window-item>
                </v-window>
                <v-card-text> {{ currentResume }}</v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted, computed } from 'vue';
import { useDisplay } from 'vuetify'
import { useElementSize } from '@vueuse/core'
import VuePdfEmbed from 'vue-pdf-embed';
const { mobile } = useDisplay();
const resumecontainer = ref(null);
const { width, height } = useElementSize(resumecontainer.value);
const vHeight = computed(() => height.value);
const vWidth = computed(() => width.value);
// const currentResume = computed(() => versions.find((resume) => resume.id === activeTabResume.value));

const currentResume = ref('WebDev');
const isLoading = ref(true);

function handleDocumentRender() {
    isLoading.value = false;
}


function openExternalResume() {
    const resume = versions.find((resume) => resume.name === currentResume.value);
    if (resume) {
        window.open(resume.pdfUrl, '_blank');
    }
}

function downloadResume() {
    const resume = versions.find((resume) => resume.name === currentResume.value);
    if (resume) {
        const link = document.createElement('a');
        link.href = resume.pdfUrl;
        link.download = 'resume.pdf';
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
        name: 'WebDev',
        pdfUrl: '/pdf/FlynnOConnell_Resume_WD.pdf',
    },
    {
        id: 2,
        name: 'DataScience',
        pdfUrl: '/pdf/FlynnOConnell_Resume_DS.pdf',
    },
    {
        id: 3,
        name: 'DataAnalytics',
        pdfUrl: '/pdf/FlynnOConnell_Resume_DSM.pdf',
    },
];

</script>


<style scoped></style>

