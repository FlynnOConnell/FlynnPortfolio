<template>
    <div @click="action" role="button" tabindex="0" class="icon-link icon-container">
        <v-btn stacked variant="plain" :ripple="false" :class="{ 'active': isHov }">
            <v-icon size="x-large" icon="mdi-code-tags" class="feather"></v-icon>
            <h3>Developer</h3>
        </v-btn>
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
        const isHov = ref(false);
        return {
            isHov,
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
