// src/components/subcomponents/PdfViewer.vue

<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <pdf :src="pdfSource" @num-pages="1" @error="onError" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { pdf } from 'vue-pdf';

defineProps({
    pdfSource: String
});

function onError(error) {
    console.error(error);
}

</script>
