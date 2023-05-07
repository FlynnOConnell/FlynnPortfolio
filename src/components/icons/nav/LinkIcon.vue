<template>
    <a :href="link" aria-label="GitHub" target="_blank" rel="noreferrer" :class="class">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link mx-4 my-2"
            style="width: 22px; height: 20px">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
    </a>
</template>

<script lang="ts">
export default {
    name: 'LinkIcon',
    props: {
        link: {
            type: String,
            required: true,
        },
        class: {
            type: String,
            default: '',
        },
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
