<script setup lang="ts">
import { links } from '@/data/links';
import SidebarRoute from "@/components/navigation/SidebarRoute.vue";
import { computed, onMounted, nextTick, ref } from 'vue';
import { useDisplay } from 'vuetify'

const { mobile, mdAndUp } = useDisplay();

const sidebarWidth = computed(() => {
    const expandedWidth = 256;
    const collapsedWidth = 72;
    const margin = 32;
    const isExpanded = true;
    return isExpanded ? expandedWidth + margin : collapsedWidth + margin;
});

</script>

<template>
    <SidebarRoute v-if="!mobile" :links="links" :sidebarWidth="sidebarWidth"></SidebarRoute>
    <v-main>
        <v-container fluid class="pa-4 pa-sm-6 pa-md-8" style="max-width: 960px">
            <router-view v-slot="{ Component }">
                <transition :duration="{ enter: 600, leave: 200 }" name="fade" mode="out-in" appear>
                    <component :is="Component" />
                </transition>
            </router-view>
        </v-container>
    </v-main>
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
