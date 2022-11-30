<script setup lang="ts"></script>

<template>
    <div class="flex justify-center mt-5 h-full w-full">
        <div class="block">
            <div class="bordered flex justify-between">
                <div class="video">
                    <video controls autoplay>
                        <source src="/movies/Ca2Imaging.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <img src="/images/Stacked.png" alt="Stacked Images" />
            </div>
            <img src="/images/ps_stack.svg" alt="Stacked Images" />
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

video {
    max-width: 100%;
    height: auto;
}
</style>
