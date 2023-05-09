<template>
    <div ref="buttonRef" @click="action" role="button" tabindex="0" class="icon-link icon-container">
        <v-btn stacked variant="plain" :ripple="false">
            <v-icon size="x-large" icon="mdi-home" class="feather"></v-icon>
            <h3>Home</h3>
        </v-btn>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType } from 'vue';

export default defineComponent({
    name: 'HomeIconSlide',
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
