<template>
    <a :href="link || 'https://www.linkedin.com/in/flynnoconnell/'" aria-label="Linkedin" target="_blank" rel="noreferrer"
        :class="class">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            class="feather feather-linkedin icon" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <title>LinkedIn</title>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
            </path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>

        </svg>
        <span class="tooltip">{{ tooltip || 'LinkedIn' }}</span>
    </a>
</template>

<script>
export default {
    name: 'LinkedInIcon',
    props: {
        link: {
            type: String,
            default: 'https://www.linkedin.com/in/flynnoconnell/'
        },
        tooltip: {
            type: String,
        },
        class: {
            type: String,
        },
        id: {
            type: String,
            default: 'navicon'
        }
    }
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