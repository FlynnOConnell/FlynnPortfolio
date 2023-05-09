<script setup lang="ts">
import { links } from '@/data/links';
import SidebarRoute from "@/components/navigation/SidebarRoute.vue";
import { computed, ref, onMounted, onUnmounted } from 'vue';
import EventBus from '@/composables/eventBus';

const isLoaded = ref(false);
const updateSidebarContent = (sidebarContentData) => {
    selectedSidebarContent.value = sidebarContentData;
    isLoaded.value = true;
    console.log(selectedSidebarContent.value);
};

const isValidSidebarContent = computed(() => {
    const content = selectedSidebarContent.value;
    return (
        content &&
        typeof content === 'object' &&
        content.hasOwnProperty('component') &&
        content.hasOwnProperty('props') &&
        content.hasOwnProperty('listeners')
    );
});


const sidebarWidth = computed(() => {
    const expandedWidth = 256;
    const collapsedWidth = 72;
    const margin = 32;
    const isExpanded = true;
    return isExpanded ? expandedWidth + margin : collapsedWidth + margin;
});

const selectedSidebarContent = ref(null);

onMounted(() => {
    EventBus.on('update-sidebar-content', (sidebarContentData) => {
        selectedSidebarContent.value = sidebarContentData;
    });
});

onUnmounted(() => {
    EventBus.off('update-sidebar-content');
});

</script>

<template>
    <v-app class="grey-darken-1 code-family">
        <v-slot>

        </v-slot>
        <v-main>
            <v-container>
                <v-row justify="space-around">
                    <v-col cols="8">
                        <router-view v-slot="{ Component }" @change-sidebar-content="updateSidebarContent">
                            <transition :duration="{ enter: 600, leave: 200 }" name="fade" mode="out-in" appear>
                                <v-slot>

                                </v-slot>
                            </transition>
                        </router-view>
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
</style>
