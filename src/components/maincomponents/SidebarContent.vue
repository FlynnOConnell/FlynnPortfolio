<template>
    <v-navigation-drawer sticky color="transparent" app floating location="right" width="600">
        <v-list bg-color="transparent">
            <v-list-subheader class="links-subhead">Projects</v-list-subheader>
            <v-spacer></v-spacer>
            <v-list-item v-for="project in projects" :key="project.title" :name="project.title" class="outline-link"
                :class="{ 'active': activeProjectId === project.title }"> <v-list-item-title style="color: grey;">
                    {{ project.title }}
                </v-list-item-title>
                <template v-slot:prepend>
                    <div v-if="activeProjectId === project.title" class="outline-marker active"></div>
                    <div v-else class="outline-marker"></div>
                </template>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { defineProps, computed, inject, ref, watchEffect } from 'vue';
const intersectingProjectId = inject('intersectingProjectId', ref(''));

defineProps({
    projects: Array
});


const activeProjectId = computed(() => {
    return intersectingProjectId.value || '';
});

const activeProjectIndex = computed(() => {
    if (!activeProjectId) return null;
    return projects.findIndex((project) => project.title === activeProjectId);
});

watchEffect(() => {
    console.log(activeProjectId.value);
});

</script>

<style scoped lang="scss">
.links-subhead {
    font-weight: 700;
    margin-bottom: 4px;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: .4px;
}

.outline-marker {
    opacity: 0;
    border-radius: 4px;
    width: 4px;
    height: 20px;
    background-color: transparent;
    transition: opacity 2s, background-color 2s, height 2s, width 2s;

    &.active {
        opacity: 1 !important;
        background-color: var(--highlight-color);
    }

    &:hover {
        width: 6px;
        height: 25px;
    }
}

.outline-link {
    color: var(--vt-c-text-2);
    transition: color .5s;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        color: var(--vt-c-text-1);
        transition: color .25s;
    }

    &.active {
        color: var(--vt-c-text-1);
        transition: color .25s;
    }
}
</style>
