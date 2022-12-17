<script setup lang="ts">
import SmallHeader from '@/components/maincomponents/SmallHeader.vue'
import Gist from '@/components/subcomponents/Gist.vue'
import { onMounted, ref } from 'vue'
import Icon from '@/components/subcomponents/SVGComponent.vue';
import { headerObserver } from '@/composables/observers';

const activetab = ref(1);
const thistab = ref(null);

onMounted(() => {

    const smallheader: any = document.querySelector('#smallheader')!;
    const sections = [...document.querySelectorAll('[data-id]')]!;

    const options = {
        rootMargin: `${smallheader.offsetHeight * -5}px`,
        threshold: 0,
    };

    const intersectCallback = headerObserver(smallheader, sections);
    const observer = new IntersectionObserver(intersectCallback, options)

    sections.forEach((section) => {
        observer.observe(section)
    })

    return observer;
});

</script>

<template>
    <div id="outer" class="my-16 fadediv">
        <div orientation="left" class="side-absolute">
            <ul class="side-absolute-inner fade-enter-done">
                <li><a href="https://github.com/NeuroPyPy" aria-label="GitHub" target="_blank" rel="noreferrer"><svg
                            xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-github">
                            <title>GitHub</title>
                            <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path>
                        </svg></a></li>
                <li><a href="https://twitter.com/FlynnNeuro" aria-label="Twitter" target="_blank" rel="noreferrer"><svg
                            xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-twitter">
                            <title>Twitter</title>
                            <path
                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                            </path>
                        </svg></a></li>
                <li><a href="https://www.linkedin.com/in/flynnoconnell/" aria-label="Linkedin" target="_blank"
                        rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-linkedin">
                            <title>LinkedIn</title>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                            </path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg></a></li>
            </ul>
        </div>
        <div class="ml-20 mr-10">
            <h2 class="text-center text-[var(--lightest-slate)] h-[80px]"> Software Projects </h2>
            <SmallHeader id="smallheader" />
            <div id="column-container" class="flex flex-col justify-center px-5 my-20">
                <!--  -->
                <!-- DATAVIEWER -->
                <!--  -->
                <section data-id="PremierSuite">
                    <div id="headwithicon" class="">
                        <h3>PremierSuite</h3>
                        <div class="techicon">
                            <Icon subfolder="languages" name="C" filter: true />
                        </div>
                        <div class="techicon">
                            <Icon subfolder="languages" name="Cpp" filter: true />
                        </div>
                    </div>
                    <!-- PREMIERSUITE VIDEO / EXPLANATION -->
                    <div id="row-container" class="">
                        <!-- Left -->
                        <div class="image-container blue-shadow relative h-full">
                            <video ref="videoplayer" class="blue-shadow" autoplay muted loop>
                                <source src="/movies/PremierSuiteExample.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <!-- Right -->
                        <div class="explination ml-8 mr-8 ">
                            <p class="text-lg">
                                A downloadable plugin for
                                <a href="https://www.rocketleague.com/">RocketLeague</a> that allows the direct
                                manupulation
                                of
                                in-game servers. Written in C/C++, users use a built in GUI that additional
                                functionality
                                within rocket league.
                            </p>
                        </div>
                    </div>
                    <!-- CODE SNIPPET -->
                    <div id="row-container" class="">
                        <div class="tabscontainer">
                            <div id="tabs" class="tabs blue-shadow-nb overflow-hidden flex justify-center">
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 1"
                                    v-bind:class="[activetab === 1 ? 'active' : '']">
                                    Main</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 2"
                                    v-bind:class="[activetab === 2 ? 'active' : '']">
                                    Logic</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 3"
                                    v-bind:class="[activetab === 3 ? 'active' : '']">
                                    Workshops</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 4"
                                    v-bind:class="[activetab === 4 ? 'active' : '']">
                                    GUI Tree</a>
                            </div>
                            <div id="content" class="mt-4">
                                <div v-if="(activetab === 1)" class="tabcontent">
                                    <!-- <component :is="Gist_mainlogic" /> -->
                                    <Gist gist_id="de81d8d2d3e61bf69295d4b75959c24f" file_name="PremierSuite.cpp"
                                        language="cpp" />
                                </div>
                                <div v-if="(activetab === 2)" class="tabcontent">
                                    <!-- <component :is="Gist_iterdir" /> -->
                                    <Gist gist_id="ba94a250051e10a58f504d71b2100fc0" file_name="Logic.cpp"
                                        language="cpp" />
                                </div>
                                <div v-if="(activetab === 3)" class="tabcontent">
                                    <Gist gist_id="f4ba947d7ad3f4b8231c1f5bd85c876f" file_name="getWorkshopMaps.cpp"
                                        language="cpp" />
                                </div>
                                <div v-if="(activetab === 4)" class="tabcontent">
                                    <Gist gist_id="7206d8f0c952a4a8dd1f18328b62886e" file_name="IterDirectory"
                                        language="cpp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!--  -->
                <!-- CANALYSIS -->
                <!--  -->
                <section data-id="Canalysis">
                    <div id="headwithicon" class="">
                        <h3>Canalysis</h3>
                        <div class="techicon">
                            <Icon subfolder="languages" name="Python" filter: true />
                        </div>
                        <div class="techicon">
                            <Icon subfolder="languages" name="Cpp" filter: true />
                        </div>
                    </div>
                    <!-- CANALYSIS VIDEO / EXPLINATION -->
                    <div id="row-container" class="">
                        <!-- Left -->
                        <div class="image-container blue-shadow relative h-full">
                            <p>
                                <img width="auto" height="auto" src=https://i.imgur.com/SPok8sB.gif>
                            </p>
                        </div>
                        <!-- Right -->
                        <div class="explination ml-8 mr-8">
                            <p class="text-lg text-white">
                            <h1> Calcium Imaging Data Analysis </h1>
                            <ul class="text-white">
                                <li>Syncing traces with externally captured GPIO events.</li>
                                <li> Plotting: animated, 2D and 3D scatter, regression, skree, heatmap and correlation
                                    matrix.</li>
                                <li> Dimensionality reduction with variance filters and principal component analysis.
                                </li>

                            </ul>
                            </p>
                        </div>
                    </div>
                    <!-- CODE SNIPPET -->
                    <div id="row-container" class="">
                        <div class="tabscontainer">
                            <div id="tabs" class="tabs blue-shadow-nb overflow-hidden flex justify-center">
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 1"
                                    v-bind:class="[activetab === 1 ? 'active' : '']">
                                    Server Handler</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 2"
                                    v-bind:class="[activetab === 2 ? 'active' : '']">
                                    Iterate Files</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 3"
                                    v-bind:class="[activetab === 3 ? 'active' : '']">
                                    Extension Handler</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 4"
                                    v-bind:class="[activetab === 4 ? 'active' : '']">
                                    GUI Tree</a>
                            </div>
                            <div id="content" class="mt-4">
                                <div v-if="(activetab === 1)" class="tabcontent">
                                    <Gist gist_id="47c2a310c9b114eee14b6ac9a6e86738" file_name="Functions.py"
                                        language="python" />
                                </div>
                                <div v-if="(activetab === 2)" class="tabcontent">
                                    <Gist gist_id="47c2a310c9b114eee14b6ac9a6e86738" file_name="Functions.py"
                                        language="python" />
                                </div>
                                <div v-if="(activetab === 3)" class="tabcontent">
                                    <Gist gist_id="47c2a310c9b114eee14b6ac9a6e86738" file_name="Functions.py"
                                        language="python" />
                                </div>
                                <div v-if="(activetab === 4)" class="tabcontent">
                                    <Gist gist_id="47c2a310c9b114eee14b6ac9a6e86738" file_name="Functions.py"
                                        language="python" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!--  -->
                <!-- NEURALNETWORK -->
                <!--  -->
                <section data-id="NeuralNetwork">
                    <div id="headwithicon" class="">
                        <h3>Neural Network</h3>
                        <div class="techicon">
                            <Icon subfolder="languages" name="Python" filter: true />
                        </div>
                    </div>
                    <!-- NEURAL NETWORK VIDEO / EXPLINATION -->
                    <div id="row-container" class="">
                        <!-- Left -->
                        <div class="image-container blue-shadow relative h-full">
                            <p>
                                <img style="float: right" width="550" height="300" src=https://i.imgur.com/SPok8sB.gif>
                            </p>
                        </div>
                        <!-- Right -->
                        <div class="explination">
                            <p class="ml-8 mr-8 text-lg text-white">
                            <h1> ML for Classification </h1>
                            <ul class="text-white">
                                <li>Syncing traces with externally captured GPIO events.</li>
                                <li> Plotting: animated, 2D and 3D scatter, regression, skree, heatmap and correlation
                                    matrix.</li>
                                <li> Dimensionality reduction with variance filters and principal component analysis.
                                </li>
                                <li> Support Vector Machine Learning for classification tasks.</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                    <!-- CODE SNIPPET -->
                    <div id="row-container" class="">
                        <div class="tabscontainer">
                            <div id="tabs" class="tabs blue-shadow-nb overflow-hidden flex justify-center">
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 1"
                                    v-bind:class="[activetab === 1 ? 'active' : '']">
                                    SVM</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 2"
                                    v-bind:class="[activetab === 2 ? 'active' : '']">
                                    Data Container</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 3"
                                    v-bind:class="[activetab === 3 ? 'active' : '']">
                                    Scores</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 4"
                                    v-bind:class="[activetab === 4 ? 'active' : '']">
                                    Validation</a>
                            </div>
                            <div id="content" class="mt-4">
                                <div v-if="(activetab === 1)" class="tabcontent">
                                    <Gist gist_id="112e72d7c9ce238a0b50e21b488b4a06" file_name="SVM.py"
                                        language="python" />
                                </div>
                                <div v-if="(activetab === 2)" class="tabcontent">
                                    <Gist gist_id="611f79d2d500b3cb0dd4ec5043e7ca13" file_name="DataHandler.py"
                                        language="python" />
                                </div>
                                <div v-if="(activetab === 3)" class="tabcontent">
                                    <Gist gist_id="648d1c810cde2bbf1d8d7ae5cd20473b" file_name="Scores.py"
                                        language="python" />
                                </div>
                                <div v-if="(activetab === 4)" class="tabcontent">
                                    <Gist gist_id="d1f98ef449bb3abd667e502cfc73e6b3" file_name="_validate.py"
                                        language="python" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!--  -->
                <!-- DATAVIEWER -->
                <!--  -->
                <section data-id="DataViewer">
                    <div id="headwithicon" class="">
                        <h3>DataViewer</h3>
                        <div class="techicon">
                            <Icon subfolder="languages" name="Python" filter: true />
                        </div>

                    </div>
                    <!-- DATAVIEWER VIDEO / EXPLINATION -->
                    <div id="row-container" class="">
                        <!-- Left -->
                        <div class="image-container blue-shadow relative h-full">
                            <p>
                                <img style="float: right" width="550" height="300" src=https://i.imgur.com/SPok8sB.gif>
                            </p>
                        </div>
                        <!-- Right -->
                        <div class="explination">
                            <p class="ml-8 mr-8 text-lg text-white">
                            <h1> Calcium Imaging Data Analysis </h1>
                            <ul class="text-white">
                                <li>Syncing traces with externally captured GPIO events.</li>
                                <li> Plotting: animated, 2D and 3D scatter, regression, skree, heatmap and correlation
                                    matrix.</li>
                                <li> Dimensionality reduction with variance filters and principal component analysis.
                                </li>
                                <li> Support Vector Machine Learning for classification tasks.</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                    <!-- DATAVIEWER CODE SNIPPET -->
                    <div id="row-container" class="">
                        <div class="tabscontainer">
                            <div id="tabs" class="tabs blue-shadow-nb overflow-hidden flex justify-center">
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 1"
                                    v-bind:class="[activetab === 1 ? 'active' : '']">
                                    Main App</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 2"
                                    v-bind:class="[activetab === 2 ? 'active' : '']">
                                    Canvas</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 3"
                                    v-bind:class="[activetab === 3 ? 'active' : '']">
                                    Sliders</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 4"
                                    v-bind:class="[activetab === 4 ? 'active' : '']">
                                    Jinja Template</a>
                            </div>
                            <div id="content" class="mt-4">
                                <div v-if="(activetab === 1)" class="tabcontent">
                                    <Gist gist_id="25948acfb16b0eb0bde9f29c35792727" file_name="app.py"
                                        language="python" />
                                </div>
                                <div v-if="(activetab === 2)" class="tabcontent">
                                    <Gist gist_id="6489a24d4fdf267a629dc50d1c63efe7" file_name="canvas.ts"
                                        language="typescript" />
                                </div>
                                <div v-if="(activetab === 3)" class="tabcontent">
                                    <Gist gist_id="9d19c4c99305e347ec4544feea0589c5" file_name="sliders.js"
                                        language="python" />
                                </div>
                                <div v-if="(activetab === 4)" class="tabcontent">
                                    <Gist gist_id="16dd5df7952232322c29e5faa601b585" file_name="index.html"
                                        language="html" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!--  -->
                <!-- PORTFOLIO -->
                <!--  -->
                <section data-id="Portfolio">
                    <div id="headwithicon" class="">
                        <h3>DataViewer</h3>
                        <div class="techicon">
                            <Icon subfolder="languages" name="Typescript" filter: true />
                        </div>
                        <div class="techicon">
                            <Icon subfolder="frameworks" name="Vue" filter: true />
                        </div>
                    </div>
                    <!-- PORTFOLIO VIDEO / EXPLINATION -->
                    <div id="row-container" class="">
                        <!-- Left -->
                        <div class="image-container blue-shadow relative h-full">
                            <p>
                                <img style="float: right" width="550" height="300" src=https://i.imgur.com/SPok8sB.gif>
                            </p>
                        </div>
                        <!-- Right -->
                        <div class="explination">
                            <p class="ml-8 mr-8 text-lg text-white">
                            <h1> Calcium Imaging Data Analysis </h1>
                            <ul class="text-white">
                                <li>Syncing traces with externally captured GPIO events.</li>
                                <li> Plotting: animated, 2D and 3D scatter, regression, skree, heatmap and correlation
                                    matrix.</li>
                                <li> Dimensionality reduction with variance filters and principal component analysis.
                                </li>
                                <li> Support Vector Machine Learning for classification tasks.</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                    <!-- PORTFOLIO CODE SNIPPET -->
                    <div id="row-container" class="">
                        <div class="tabscontainer">
                            <div id="tabs" class="tabs blue-shadow-nb overflow-hidden flex justify-center">
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 1"
                                    v-bind:class="[activetab === 1 ? 'active' : '']">
                                    Observers</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 2"
                                    v-bind:class="[activetab === 2 ? 'active' : '']">
                                    Canvas</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 3"
                                    v-bind:class="[activetab === 3 ? 'active' : '']">
                                    Sliders</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 4"
                                    v-bind:class="[activetab === 4 ? 'active' : '']">
                                    Jinja Template</a>
                            </div>
                            <div id="content" class="mt-4">
                                <div v-if="(activetab === 1)" class="tabcontent">
                                    <Gist gist_id="8aed7d53d5c28c3d6cc6b98ec88a98c0" file_name="observers.ts"
                                        language="typescript" />
                                </div>
                                <div v-if="(activetab === 2)" class="tabcontent">
                                    <Gist gist_id="6489a24d4fdf267a629dc50d1c63efe7" file_name="canvas.ts"
                                        language="typescript" />
                                </div>
                                <div v-if="(activetab === 3)" class="tabcontent">
                                    <Gist gist_id="9d19c4c99305e347ec4544feea0589c5" file_name="sliders.js"
                                        language="python" />
                                </div>
                                <div v-if="(activetab === 4)" class="tabcontent">
                                    <Gist gist_id="16dd5df7952232322c29e5faa601b585" file_name="index.html"
                                        language="html" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
[data-status="active"] {
    color: var(--blue-dark);
}

[data-status="inactive"] {
    color: var(--light-slate);
}

#full-page {
    height: calc(100vh - 150px);
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.side-absolute {
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 16px;
    right: auto;
    z-index: 10;
    color: var(--light-slate);
}

.side-absolute-inner {
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
}

.side-absolute-inner::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
}

.side-absolute-inner li a {
    padding: 10px;
}

a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
}

.side-absolute-inner li a svg {
    width: 20px;
    height: 20px;
}

svg.feather {
    fill: none;
}

#row-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}

.tabscontainer {
    display: flex;
    flex-direction: column;
    min-width: 420px;
    font-family: "Crimson", serif;
    color: #888;
    margin-top: 3rem;
    flex-grow: 1;
}

.tabs {
    overflow: hidden;
    background-color: var(--background-color);
}

.tabcontent {
    overflow: auto;
    min-height: 0;
}

.tabs ul {
    list-style-type: none;
    margin-left: 20px;
}

.tabs a {
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    font-weight: bold;
    display: flex;
    flex-grow: 1;
    justify-content: center;
}

.tabs a:last-child {
    border-right: 1px solid var(--blue-dark);
    display: flex;
    flex-grow: 1;
}

/* Change background color of tabs on hover */
.tabs a:hover {
    display: flex;
    justify-content: center;
    background-color: rgba(27, 31, 42, 0.438);
    color: #fff;
}

/* Styling for active tab */
.tabs a.active {
    color: var(--blue-light);
    border-bottom: 2px solid var(--blue-dark);
    cursor: default;
}

#headwithicon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 25px;
    max-height: 60px;
    margin-top: 2rem;
}

.container-container video {
    width: auto;
    height: 100%;
    object-fit: cover;
    position: relative;
}

body .gist .highlight {
    background: var(--background-color);
}

body .gist .blob-num,
body .gist .blob-code-inner,
body .gist .pl-st {
    color: #e6e1dc;
}

body .gist .pl-c,
body .gist .pl-c span {
    color: #555;
    font-style: italic;
}

body .gist .pl-mb {
    color: #1edafb;
    font-weight: 700;
}

body .gist .pl-mh .pl-en {
    color: #fdc251;
    font-weight: 700;
}

body .gist .pl-mi {
    color: #00698f;
    font-style: italic;
}

body .gist .pl-mq {
    color: #555;
}

body .gist .pl-sc {
    color: #999;
}

body .gist .pl-c1,
body .gist .pl-mh,
body .gist .pl-sr .pl-cce {
    color: #fdc251;
}

body .gist .pl-e,
body .gist .pl-en,
body .gist .pl-ent,
body .gist .pl-s,
body .gist .pl-v,
body .gist .pl-vpf {
    color: #974;
}

body .gist .pl-k,
body .gist .pl-mdh,
body .gist .pl-mdr,
body .gist .pl-ml,
body .gist .pl-mm,
body .gist .pl-mo,
body .gist .pl-mp,
body .gist .pl-mr,
body .gist .pl-ms,
body .gist .pl-s1 .pl-v,
body .gist .pl-s3 {
    color: #00698f;
}

body .gist .pl-pds,
body .gist .pl-s1,
body .gist .pl-s1 .pl-pse .pl-s2 {
    color: #58c554;
}

body .gist .pl-s1 .pl-s2,
body .gist .pl-sv {
    color: #1edafb;
}

body .gist .pl-smi,
body .gist .pl-smp,
body .gist .pl-stj,
body .gist .pl-vo {
    color: #be53e6;
}

body .gist .pl-sr,
body .gist .pl-sr .pl-sra,
body .gist .pl-sr .pl-sre,
body .gist .pl-src {
    color: #ff308f;
}

body .gist .pl-mi1,
body .gist .pl-mdht {
    color: #fff;
    background: rgba(0, 64, 0, .5);
}

body .gist .pl-md,
body .gist .pl-mdhf,
body .gist .pl-id,
body .gist .pl-ii {
    color: #fff;
    background: #900;
}

body .gist .gist-meta {
    display: none;
}

body .gist .gist-data {
    background-color: var(--background-color) !important;
    border: 1px solid var(--blue-dark) !important;
    border-radius: 10px;
    box-shadow: 3px 3px 6px var(--blue-dark);
}

body .gist .gist-file {
    background-color: var(--background-color) !important;
    border: unset !important;
    border-radius: unset !important;

}
</style>
