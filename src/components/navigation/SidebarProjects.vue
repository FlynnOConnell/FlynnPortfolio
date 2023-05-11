<template>
    <v-navigation-drawer tag="aside" sticky color="transparent" app floating location="right">
        <v-spacer></v-spacer>
        <v-list class="no-bg">
            <v-list-subheader class="links-subhead">Projects</v-list-subheader>
            <v-spacer></v-spacer>
            <v-list-item v-for="project in projectArray" :key="project.repo" class="item-outer"
                :class="{ 'active': sidebarStore.getActiveId === project.repo }" @click="handleClick(project.repo)">
                <v-list-item-title :class="{ 'active': sidebarStore.getActiveId === project.repo }" class="item-title">
                    {{ project.repo }}
                </v-list-item-title>
                <template v-slot:prepend>
                    <div class="item-marker" :class="{ 'active': sidebarStore.getActiveId === project.repo }"></div>
                </template>
            </v-list-item>
        </v-list>
        <v-spacer></v-spacer>
    </v-navigation-drawer>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';
import { useExperienceContentStore } from '@/stores/experienceContentStore';
const emit = defineEmits(['link-clicked']);

const sidebarStore = useExperienceContentStore();
let activeProjectId = sidebarStore.getActiveId;

const handleClick = (repo) => {
    emit('link-clicked', repo);
};

defineProps({
    projectArray: Array
});

onMounted(() => {
    console.log(activeProjectId)
});

</script>

<style scoped lang="scss">
.item-marker {
    margin-right: 6px;
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
}

.item-outer {
    color: var(--vt-c-text-2);
    transition: color .25s;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        color: var(--vt-c-text-1);
        transition: color .25s;
    }

    &.active {
        color: var(--highlight-color);
        transition: color .25s;
    }
}

.item-title {
    margin-bottom: 0.1rem;
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
        color: var(--highlight-color);
        transition: color .25s;
    }
}

.links-subhead {
    margin-left: 2rem;
    text-decoration: underline;
    text-decoration-style: solid;
    font-weight: 700;
    margin-bottom: 4px;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: .4px;
}
</style>
