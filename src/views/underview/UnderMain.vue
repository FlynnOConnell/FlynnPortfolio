<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
    <div class="flex justify-center mt-5">
        <div class="bordered flex justify-between">
            <img src="/images/Stacked.png" alt="Stacked Images" />
        </div>
    </div>
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
</style>
