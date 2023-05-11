<template>
    <router-link :to="link" class="icon-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="8 12 12 16 16 12"></polyline>
            <line x1="12" y1="8" x2="12" y2="16"></line>
        </svg>
        <span v-if="tooltip" class="tooltip">{{ tooltip }}</span>
    </router-link>
</template>

<script lang="ts">
export default {
    name: 'ArrowDownIcon',
    props: {
        link: {
            type: String,
            required: true,
        },
        tooltip: {
            type: String,
        }
    },
};
</script>

<style scoped>
.icon-link {
    position: relative;
}

.tooltip {
    position: absolute;
    top: -35px;
    /* Adjust the distance from the icon */
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    white-space: nowrap;
    /* Ensure single line text */
}

.icon-link:hover .tooltip {
    opacity: 1;
}
</style>
