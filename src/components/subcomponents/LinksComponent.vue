<script lang="ts">
export default {
    name: 'LinksComponent',
    methods: {
        toLink(href: string) {
            const link = document.createElement('a');
            link.href = href;
            link.target = '_blank';
            link.click();
        },
    },
};
</script>

<template>
    <div class="flex flex-row justify-between w-full">
        <button @click="toLink('https://github.com/NeuroPyPy')">
            <font-awesome-icon :icon="['fab', 'github']" inverse size="2x" />
        </button>
        <button @click="toLink('https://twitter.com/FlynnNeuro')">
            <font-awesome-icon :icon="['fab', 'twitter']" inverse size="2x" />
        </button>
        <button @click="toLink('https://www.linkedin.com/in/flynnoconnell/')">
            <font-awesome-icon :icon="['fab', 'linkedin']" inverse size="2x" />
        </button>
    </div>
</template>

<style scoped></style>
