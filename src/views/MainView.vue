<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';


const main: Ref<HTMLElement | any> = ref(null);
let activeIndex: Ref<number | any> = ref(0);
let reference = ref(null);
function handleLeftClick() {

    console.log(reference);

    // const nextIndex: number | null =
    //     activeIndex.value - 1 >= 0
    //         ? activeIndex.value - 1
    //         : main.value.childNodes.length - 1;
    // const currentSlide: HTMLElement | null = document.querySelector(
    //     `[data-index="${activeIndex.value}"]`
    // );
    // const nextSlide: HTMLElement | null = document.querySelector(
    //     `[data-index="${nextIndex}"]`
    // );
    // if (currentSlide && nextSlide != null) {
    //     currentSlide.dataset.status = 'after';
    //     nextSlide.dataset.status = 'becoming-active-from-before';
    // }
    // if (nextSlide && activeIndex.value != null) {
    //     setTimeout(() => {
    //         nextSlide.dataset.status = 'active';
    //         console.log(activeIndex.value);
    //         activeIndex.value = nextIndex;
    //         console.log(activeIndex.value);
    //     });
    // }
}

function handleRightClick() {
    console.log("right click");
    const nextIndex: number | null =
        activeIndex.value + 1 <= main.value.childNodes.length - 1
            ? activeIndex.value + 1
            : 0;

    const currentSlide: HTMLElement | null = document.querySelector(
        `[data-index="${activeIndex.value}"]`
    );
    const nextSlide: HTMLElement | null = document.querySelector(
        `[data-index="${nextIndex}"]`
    );

    if (currentSlide && nextSlide && activeIndex.value != null) {
        currentSlide.dataset.status = 'before';
        nextSlide.dataset.status = 'becoming-active-from-before';

        setTimeout(() => {
            nextSlide.dataset.status = 'active';
            activeIndex.value = nextIndex;
        });
    }
}
</script>

<template>
    <main ref="main">
        <article ref="article" :data-index="0" data-status="active">
            <div class="article-image-section article-section"></div>
            <div class="article-description-section article-section">
                <p>
                    Neuroscientist, programmer, learner and
                    <a
                        class="source-link"
                        href="https://www.mdpi.com/2072-6643/13/9/3062/htm"
                        target="_blank"
                    >
                        peer reviewed author. </a
                    >.
                    <a
                        class="yt-link"
                        href="https://youtu.be/nG2IyH43xMU"
                        target="_blank"
                        ><i class="fa-brands fa-youtube"></i></a
                    >.
                </p>
            </div>
            <div class="article-title-section article-section">
                <h2>Neuroscientist and Programmer</h2>
                <font-awesome-icon :icon="['fas', 'plus']" inverse size="2x" />
            </div>
            <div class="article-nav-section article-section">
                <button
                    class="article-nav-button"
                    type="button"
                    @click="handleLeftClick()"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-left-long']"
                        inverse
                    />
                </button>
                <button
                    class="article-nav-button"
                    type="button"
                    @click="handleRightClick()"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-right-long']"
                        inverse
                    />
                </button>
            </div>
        </article>
        <article ref="article" :data-index="1" data-status="inactive">
            <div class="article-image-section article-section"></div>
            <div class="article-description-section article-section">
                <p>
                    Hi! I'm Flynn. I'm a Neuroscientist with a love of software,
                    programming and learning.
                </p>
            </div>
            <div class="article-title-section article-section">
                <h2>Some other stuff here</h2>
                <font-awesome-icon :icon="['fas', 'plus']" inverse size="2x" />
            </div>
            <div class="article-nav-section article-section">
                <button
                    class="article-nav-button"
                    type="button"
                    @onclick="handleLeftClick()"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-left-long']"
                        inverse
                    />
                </button>
                <button
                    class="article-nav-button"
                    type="button"
                    @onclick="handleRightClick()"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-right-long']"
                        inverse
                    />
                </button>
            </div>
        </article>
        <article ref="article" :data-index="2" data-status="inactive">
            <div class="article-image-section article-section"></div>
            <div class="article-description-section article-section">
                <p>I uh love the beach?</p>
            </div>
            <div class="article-title-section article-section">
                <h2>C++ project goes here</h2>
                <font-awesome-icon :icon="['fas', 'plus']" inverse size="2x" />
            </div>
            <div class="article-nav-section article-section">
                <button
                    class="article-nav-button"
                    type="button"
                    @onclick="handleLeftClick()"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-left-long']"
                        inverse
                    />
                </button>
                <button
                    class="article-nav-button"
                    type="button"
                    @onclick="handleRightClick()"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-right-long']"
                        inverse
                    />
                </button>
            </div>
        </article>
        <article ref="article" :data-index="3" data-status="inactive">
            <div class="article-image-section article-section"></div>
            <div class="article-description-section article-section">
                <p>Data Analysis Pipeline here.</p>
            </div>
            <div class="article-title-section article-section">
                <h2>Super Space Blob</h2>
                <i class="fa-light fa-plus-large"></i>
            </div>
            <div class="article-nav-section article-section">
                <button
                    class="article-nav-button"
                    type="button"
                    @onclick="handleLeftClick()"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-left-long']"
                        inverse
                    />
                </button>
                <button
                    class="article-nav-button"
                    type="button"
                    @onclick="handleRightClick()"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-right-long']"
                        inverse
                    />
                </button>
            </div>
        </article>
    </main>
</template>

<style scoped>
.svg {
    filter: brightness(0) invert(1);
}

.svg-hover {
    filter: invert(41%) sepia(69%) saturate(927%) hue-rotate(227deg)
        brightness(80%) contrast(86%);
}

.hl-hover {
    color: var(--highlight-color);
}

a:hover {
    color: var(--highlight-color);
}
</style>
