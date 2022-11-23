<script setup lang="ts">

import { useSwipe } from '@/assets/js/swipe';

const nodeCount = 4; // TODO: make this reactive to the number of nodes in the DOM
</script>

<template>
    <div class="article-nav-section article-section">
        <button
            class="article-nav-button"
            type="button"
            @click="useSwipe(nodeCount, 'left')"
        >
            <font-awesome-icon :icon="['fas', 'arrow-left-long']" inverse />
        </button>
        <button
            class="article-nav-button"
            type="button"
            @click="useSwipe(nodeCount, 'right')"
        >
            <font-awesome-icon :icon="['fas', 'arrow-right-long']" inverse />
        </button>
    </div>
</template>
