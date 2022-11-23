<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSwipe } from '@/assets/ts/swipe';

const nodeCount = 4;
</script>

<template>
    <main>
        <article data-index="0" data-status="active">
            <div class="article-image-section article-section relative">
                <!-- Image Section with Background in CSS -->
                <p id="credit" class="text-white absolute top-0 right-0 bold">
                    Photo credit: <br />
                    <a
                        href="https://www.linkedin.com/in/kevin-mohsenian-phd-45020558/"
                        >Kevin Mohsenian</a
                    >
                </p>
            </div>
            <div class="article-description-section article-section">
                <p>
                    Neuroscientist, programmer, learner and
                    <a
                        class="source-link"
                        href="https://www.mdpi.com/2072-6643/13/9/3062/htm"
                        target="_blank"
                    >
                        peer reviewed author.
                    </a>
                </p>
            </div>
            <div class="article-title-section article-section">
                <h2 id="top">Neuroscientist & Software Engineer</h2>
                <!-- <font-awesome-icon :icon="['fas', 'plus']" inverse size="2x" /> -->
                <button @click="('')">
                    <font-awesome-icon
                        :icon="['fas', 'plus']"
                        inverse
                        size="2x"
                    />
                </button>
            </div>
            <div class="article-nav-section article-section">
                <button
                    class="article-nav-button"
                    type="button"
                    @click="useSwipe(nodeCount, 'left')"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-left-long']"
                        inverse
                    />
                </button>

                <button
                    ref="rightButton"
                    class="article-nav-button"
                    type="button"
                    @click="useSwipe(nodeCount, 'right')"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-right-long']"
                        inverse
                    />
                </button>
            </div>
        </article>
        <article data-index="1" data-status="inactive">
            <div class="article-image-section article-section">
                <div
                    class="graph-container w-full h-full block overflow-hidden"
                >
                    <iframe
                        id="graph"
                        class="w-full h-full block"
                        src="/images/surface2.html"
                    >
                    </iframe>
                </div>
            </div>
            <div class="article-description-section article-section">
                <ul
                    class="wrapper badge flex flex-row justify-between m-5"
                    style="overflow: visible"
                >
                    <li class="badge">
                        <img
                            alt="py"
                            src="https://img.shields.io/badge/python-3670A0?style=?style=plastic&logo=python&logoColor=ffdd54"
                        />
                    </li>
                    <li class="badge">
                        <img
                            alt="C"
                            src="https://img.shields.io/badge/c++-%2300599C.svg?style=plastic&logo=c%2B%2B&logoColor=white"
                        />
                    </li>
                    <li class="badge">
                        <a
                            href="https://github.com/NeuroPyPy/CalciumAnalysis/blob/master/LICENSE"
                            ><img
                                alt="GitHub license"
                                src="https://img.shields.io/github/license/NeuroPyPy/CalciumAnalysis?style=plastic"
                        /></a>
                    </li>
                    <li class="badge">
                        <img
                            alt="GitHub commit activity"
                            src="https://img.shields.io/github/commit-activity/y/NeuroPyPy/CalciumAnalysis?label=commits&style=plastic"
                        />
                    </li>
                    <li class="badge">
                        <img
                            alt="CodeFactor Grade"
                            src="https://img.shields.io/codefactor/grade/github/NeuroPyPy/CalciumAnalysis"
                        />
                    </li>
                    <li class="badge">
                        <img
                            alt="GitHub last commit"
                            src="https://img.shields.io/github/last-commit/NeuroPyPy/CalciumAnalysis?style=plastic"
                        />
                    </li>
                </ul>
            </div>
            <div class="article-title-section article-section">
                <h2>Some more graphs</h2>
                <font-awesome-icon :icon="['fas', 'plus']" inverse size="2x" />
            </div>
            <div class="article-nav-section article-section">
                <button
                    class="article-nav-button"
                    type="button"
                    @click="useSwipe(nodeCount, 'left')"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-left-long']"
                        inverse
                    />
                </button>
                <button
                    class="article-nav-button"
                    type="button"
                    @click="useSwipe(nodeCount, 'right')"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-right-long']"
                        inverse
                    />
                </button>
            </div>
        </article>
        <article data-index="2" data-status="inactive">
            <div class="article-image-section article-section">
                <!-- <GraphComponent /> -->
            </div>
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
                    @click="useSwipe(nodeCount, 'left')"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-left-long']"
                        inverse
                    />
                </button>
                <button
                    class="article-nav-button"
                    type="button"
                    @click="useSwipe(nodeCount, 'right')"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-right-long']"
                        inverse
                    />
                </button>
            </div>
        </article>
        <article data-index="3" data-status="inactive">
            <div class="article-image-section article-section">
                Image Section
            </div>
            <div class="article-description-section article-section">
                <p>Data Analysis Pipeline here.</p>
            </div>
            <div class="article-title-section article-section">
                <h2>Super Space Blob</h2>
                <font-awesome-icon :icon="['fas', 'plus']" inverse size="2x" />
            </div>
            <div class="article-nav-section article-section">
                <button
                    class="article-nav-button"
                    type="button"
                    @click="useSwipe(nodeCount, 'left')"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-left-long']"
                        inverse
                    />
                </button>
                <button
                    class="article-nav-button"
                    type="button"
                    @click="useSwipe(nodeCount, 'right')"
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
p,
h1,
h2 {
    font-family: var(--font-family);
}
#credit {
    font-size: small;
}
</style>
