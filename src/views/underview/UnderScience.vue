<script setup lang="ts"></script>

<template>

</template>

<style scoped>
.bordered {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* background-color: rgb(66, 83, 135); */
    width: 95vw;
    height: 65vh;
    min-height: 400px;
    color: var(--text-color);
    border: 1px solid var(--border-color-blue);
    padding: 4rem;
    border-radius: 25px;
}

.bordered h1 {
    font-size: 2rem;
    font-weight: 400;
    margin: 2rem;
}

video {
    max-width: 100%;
    height: auto;
}
</style>
