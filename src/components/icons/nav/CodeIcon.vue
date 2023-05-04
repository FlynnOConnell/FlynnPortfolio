<template>
    <div ref="buttonRef" @click="action" role="button" tabindex="0" class="icon-link icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <span class="tooltip">Software Engineer</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType } from 'vue';

export default defineComponent({
    name: 'CodeIcon',
    props: {
        action: {
            type: Function as PropType<(payload: MouseEvent) => void>,
            required: true
        },
    },
    setup(props) {
        const buttonRef = ref(null);
        return {
            buttonRef,
        };
    },
});
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
    top: 0px;
    /* Adjust the distance from the icon */
    left: 50%;
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
