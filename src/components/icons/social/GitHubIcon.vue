<template>
    <a :href="link || 'https://github.com/NeuroPyPy'" aria-label="GitHub" target="_blank" rel="noreferrer" :class="class">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="svgColor" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="feather feather-github icon"
            :style="{ width: svgWidth, height: svgHeight, color: svgColor, margin: svgMargin }">
            <title>GitHub</title>
            <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73-.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27-.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
            </path>
        </svg>
        <span v-if="tooltip" class="tooltip"
            :style="{ top: tooltipTop, fontSize: tooltipFontSize, backgroundColor: tooltipBackgroundColor, color: tooltipTextColor }">{{
                tooltip }}</span>
    </a>
</template>


<script lang="ts">
export default {
    name: 'GitHubIcon',
    props: {
        link: {
            type: String,
            default: 'https://github.com/NeuroPyPy'
        },
        tooltip: {
            type: String,
            default: ''
        },
        class: {
            type: String,
            default: ''
        },
        svgColor: {
            type: String,
            default: ''
        },
        svgMargin: {
            type: String,
            default: '0 3px 0 0'
        },
        svgWidth: {
            type: String,
            default: '20px'
        },
        svgHeight: {
            type: String,
            default: '22px'
        },
        tooltipTop: {
            type: String,
            default: '-35px'
        },
        tooltipLeft: {
            type: String,
            default: '-35px'
        },
        tooltipFontSize: {
            type: String,
            default: '12px'
        },
        tooltipBackgroundColor: {
            type: String,
            default: '#333'
        },
        tooltipTextColor: {
            type: String,
            default: '#fff'
        }
    },
    computed: {
        importantSvgColor() {
            return `${this.svgColor} !important`;
        },
    }
};
</script>

<style scoped>
.tooltip {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    padding: 4px 8px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    white-space: nowrap;
}

a:hover .tooltip {
    opacity: 1;
}
</style>
