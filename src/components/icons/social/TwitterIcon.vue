<template>
    <a :href="link || 'https://twitter.com/FlynnNeuro'" aria-label="Twitter" target="_blank" rel="noreferrer"
        :class="class">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter icon">
            <title>Twitter</title>
            <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
            </path>
        </svg>
        <span class="tooltip">{{ tooltip || 'Twitter' }}</span>
    </a>
</template>

<script lang="ts">
export default {
    name: 'TwitterIcon',
    props: {
        link: {
            type: String,
        },
        tooltip: {
            type: String,
        },
        class: {
            type: String,
            default: "icon"
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