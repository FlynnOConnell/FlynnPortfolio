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
    <div class="links flex flex-row justify-around w-full">
        <button @click="toLink('https://github.com/NeuroPyPy')">
            <font-awesome-icon :icon="['fab', 'github']" inverse />
        </button>
        <button @click="toLink('https://twitter.com/FlynnNeuro')">
            <font-awesome-icon :icon="['fab', 'twitter']" inverse />
        </button>
        <button @click="toLink('https://www.linkedin.com/in/flynnoconnell/')">
            <font-awesome-icon :icon="['fab', 'linkedin']" inverse />
        </button>
    </div>
</template>

<style scoped>

</style>
