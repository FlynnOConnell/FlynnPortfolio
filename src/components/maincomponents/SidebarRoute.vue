<template>
    <v-navigation-drawer app permanent :width="drawerWidth" :class="{ 'collapsed': collapsed }" @mouseenter="expandDrawer"
        @mouseleave="collapseDrawer">
        <v-list>
            <v-list-item v-for="(link, i) in links" :key="i" :to="link.to" :prepend-icon="link.icon">
                <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';

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
