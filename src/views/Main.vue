<script setup lang="ts">
import { links } from '@/data/links';
import SidebarRoute from "@/components/navigation/SidebarRoute.vue";
import { computed, onMounted, nextTick } from 'vue';
import { useExperienceContentStore } from '@/stores/experienceContentStore';


const onsidebarClick = (repo) => {
    scrollTo(repo);
};

const scrollTo = (projectId) => {
    const target = document.getElementById(projectId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
};

const sidebarStore = useExperienceContentStore();

const sidebarWidth = computed(() => {
    const expandedWidth = 256;
    const collapsedWidth = 72;
    const margin = 32;
    const isExpanded = true;
    return isExpanded ? expandedWidth + margin : collapsedWidth + margin;
});

onMounted(async () => {


    // Wait for the next DOM update cycle
    await nextTick();
    let minId = null;
    let maxId = null;
    let debounceTimeout = null;
    function applyChanges() {
        const sections = [...document.querySelectorAll('section')];
        minId = null;
        maxId = null;
    }

    function reportIntersection(entries: any[]) {
        clearTimeout(debounceTimeout);
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const entryId = parseInt(entry.target.id);
                const id = entry.target.getAttribute('id');
                console.log(id);
                sidebarStore.setActiveId(id);
                if (minId === null || maxId === null) {
                    minId = entryId;
                    maxId = entryId;
                } else {
                    minId = Math.min(minId, entryId);
                    maxId = Math.max(maxId, entryId);
                }
            }
        });
        debounceTimeout = setTimeout(applyChanges, 500);
    }
    const io = new IntersectionObserver(reportIntersection, { threshold: 0.1, root: null, rootMargin: "0px" });
    const sections = [...document.querySelectorAll('section')];

    sections.forEach((section) => {
        io.observe(section);
    });
});

</script>

<template>
    <v-app class="grey-darken-1 code-family">
        <SidebarRoute :links="links" :sidebarWidth="sidebarWidth"></SidebarRoute>
        <component v-if="sidebarStore.isComponentLoaded" @link-clicked="onsidebarClick" :is="sidebarStore.loadedComponent"
            v-bind="sidebarStore.props" />
        <v-main>
            <v-container>
                <v-row justify="space-around">
                    <v-col cols="8">
                        <router-view v-slot="{ Component }">
                            <transition :duration="{ enter: 600, leave: 200 }" name="fade" mode="out-in" appear>
                                <component :is="Component" />
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
