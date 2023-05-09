<template>
    <v-container class="rounded-lg elevation-6 my-10">
        <v-toolbar rounded="2x" style="background-color: transparent">
            <v-toolbar-title class="text-center" rounded="2x">Publications</v-toolbar-title>
            <!-- <v-spacer></v-spacer> -->
            <v-btn variant="text" icon="mdi-magnify"></v-btn>
            <v-btn variant="text" icon="mdi-view-module"></v-btn>
        </v-toolbar>
        <v-sheet class="rounded-lg" style="background-color: transparent">
            <v-card v-for="(item, index) in publications" :key="index" :value="item" rounded="x2" class="mb-8">
                <v-card-item>
                    <v-card-title class="wrap-title pb-4">{{ item.title }}</v-card-title>
                    <v-card-subtitle v-text="item.description"></v-card-subtitle>
                    <template v-slot:prepend>
                        <v-btn size="small" density="comfortable" icon="mdi-open-in-new"></v-btn>
                    </template>
                </v-card-item>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <div>
                        <v-btn size="small" density="compact"
                            :icon="expandedStates[index] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="expandedStates[index] = !expandedStates[index]" variant="tonal" color="teal-accent-4">
                        </v-btn>
                    </div>
                    <v-spacer></v-spacer>
                </v-card-actions>
                <v-expand-transition>
                    <div v-show="expandedStates[index]">
                        <v-card-text> {{ item.moretype }}</v-card-text>
                        <v-card-text>
                            {{ item.more }}
                        </v-card-text>
                    </div>
                </v-expand-transition>

            </v-card>
        </v-sheet>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { publications } from '@/data/publicationData';


const show = ref(false);
const expandedStates = ref([]);
const emit = defineEmits(['change-sidebar-content']);

</script>

<style scoped>
.wrap-title {
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
}
</style>
