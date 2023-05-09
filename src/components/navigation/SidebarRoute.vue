<template>
    <v-navigation-drawer app permanent :width="drawerWidth" :class="{ 'collapsed': collapsed }" @mouseenter="expandDrawer"
        @mouseleave="collapseDrawer">
        <v-list active-class="active-link">
            <v-list-item v-for="(link, i) in links" :key="i" :to="link.to">
                <v-list-item-title style="var(--vt-font-family-base)">
                    {{ link.text }}
                </v-list-item-title>
                <template v-slot:prepend>
                    <v-icon>{{ link.icon }}</v-icon>
                </template>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { defineProps, ref } from 'vue';

defineProps({
    links: Array,
    drawerWidth: {
        type: Number,
        default: 72,
    },
});

const collapsed = ref(false);
const drawerWidth = ref(72);

const expandDrawer = () => {
    drawerWidth.value = 256;
    collapsed.value = false;
};

const collapseDrawer = () => {
    drawerWidth.value = 72;
    collapsed.value = true;
};

</script>

<style scoped>
.collapsed {
    display: none;
}
</style>
