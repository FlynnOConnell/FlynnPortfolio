<template>
    <router-link :to="link" class="icon-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"
            style="width: 18px; height: 20px;">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <span class="tooltip">Why build this webite?</span>
    </router-link>
</template>

<script lang="ts">
export default {
    name: 'QuestionIcon',
    props: {
        link: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.icon-link {
    position: relative;
}

.icon-container {
    width: 100%;
    /* Adjust the width of the container as needed */
    height: 100%;
    /* Adjust the height of the container as needed */
}

.feather {
    width: auto;
    height: 50%;
}

.tooltip {
    position: absolute;
    top: -20px;
    /* Adjust the distance from the icon */
    left: 30%;
    transform: translateX(-50%);
    background-color: transparent;
    color: white;
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
