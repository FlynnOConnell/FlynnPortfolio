<script setup lang="ts">
import SmallHeader from '@/components/maincomponents/SmallHeader.vue'
import Gist from '@/components/subcomponents/Gist.vue'
import { onMounted, ref } from 'vue'
import Icon from '@/components/subcomponents/SVGComponent.vue';

const activetab = ref(1);
const thistab = ref(null);

onMounted(() => {

    const sections = [...document.querySelectorAll('section.project')]!;
    const options = {
        rootMargin: '0px 0px -70% 0px',
        threshold: [0.01, 0.99]
    };
    const changeNav = (entries: any, observer: any) => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                document.querySelector('.activelink')?.classList.remove('activelink');
                var id = entry.target.getAttribute('id');
                document.querySelector(`[data-id="${id}"]`)?.classList.add('activelink');
            }
        })
    }
    const observer = new IntersectionObserver(changeNav, options)
    sections.forEach((section) => {
        observer.observe(section)
    })
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
                        rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-linkedin">
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
                <!-- PREMIERSUITE -->
                <!--  -->
                <section id="PremierSuite" data-id="PremierSuite" class="project">
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
                                <Transition name="fade" mode="out-in" appear>
                                    <KeepAlive>
                                        <div v-if="(activetab === 1)" class="tabcontent">
                                            <Gist gist_id="de81d8d2d3e61bf69295d4b75959c24f" file_name="PremierSuite.cpp"
                                                language="cpp" />
                                        </div>
                                    </KeepAlive>
                                </Transition>
                                <Transition name="fade" mode="out-in" appear>
                                    <KeepAlive>
                                        <div v-if="(activetab === 2)" class="tabcontent">
                                            <Gist gist_id="ba94a250051e10a58f504d71b2100fc0" file_name="Logic.cpp"
                                                language="cpp" />
                                        </div>
                                    </KeepAlive>
                                </Transition>
                                <Transition name="fade" mode="out-in" appear>
                                    <KeepAlive>
                                        <div v-if="(activetab === 3)" class="tabcontent">
                                            <Gist gist_id="f4ba947d7ad3f4b8231c1f5bd85c876f" file_name="getWorkshopMaps.cpp"
                                                language="cpp" />
                                        </div>
                                    </KeepAlive>
                                </Transition>
                                <Transition name="fade" mode="out-in" appear>
                                    <KeepAlive>
                                        <div v-if="(activetab === 4)" class="tabcontent">
                                            <Gist gist_id="7206d8f0c952a4a8dd1f18328b62886e" file_name="IterDirectory.cpp"
                                                language="cpp" />
                                        </div>
                                    </KeepAlive>
                                </Transition>
                            </div>
                        </div>
                    </div>
                </section>
                <!--  -->
                <!-- CANALYSIS -->
                <!--  -->
                <section id="Canalysis" data-id="Canalysis" class="project">
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
                                <li> Plotting: animated, 2D and 3D scatter, regression, skree, heatmap and
                                    correlation
                                    matrix.</li>
                                <li> Dimensionality reduction with variance filters and principal component
                                    analysis.
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
                                    Initialize</a>
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
                                    <Gist gist_id="7d65e69329bc617a3f835870ac1ac864" file_name="__init__.py"
                                        language="python" />
                                </div>
                                <div v-if="(activetab === 2)" class="tabcontent">
                                    <Gist gist_id="14fffa95f2d1b7484ebaf81141b759f5" file_name="Container.py"
                                        language="python" />
                                </div>
                                <div v-if="(activetab === 3)" class="tabcontent">
                                    <Gist gist_id="3993e5d31723085f5cf0752ee135a15f" file_name="FileHandler.py"
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
                <section id="NeuralNetwork" data-id="NeuralNetwork" class="project">
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
                                <li> Plotting: animated, 2D and 3D scatter, regression, skree, heatmap and
                                    correlation
                                    matrix.</li>
                                <li> Dimensionality reduction with variance filters and principal component
                                    analysis.
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
                                    <Gist gist_id="112e72d7c9ce238a0b50e21b488b4a06" file_name="SVM.py" language="python" />
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
                <section id="DataViewer" data-id="DataViewer" class="project">
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
                            <h1> DataViewer </h1>
                            Utilities for viewing and manipulating data.
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
                                    <Gist gist_id="25948acfb16b0eb0bde9f29c35792727" file_name="app.py" language="python" />
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
                <section id="Portfolio" data-id="Portfolio" class="project">
                    <div id="headwithicon" class="">
                        <h3>My Portfolio</h3>
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
                            </p>
                        </div>
                        <!-- Right -->
                        <div class="explination">
                            <p class="ml-8 mr-8 text-lg text-white">
                            <h1> Source code for this Website Portfolio </h1>
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
                                    API Fetch</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 3"
                                    v-bind:class="[activetab === 3 ? 'active' : '']">
                                    Sliders</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 4"
                                    v-bind:class="[activetab === 4 ? 'active' : '']">
                                    Jinja Template</a>
                            </div>
                            <div id="content" class="mt-4 blue-shadow">
                                <Transition name="fade">
                                    <div v-if="(activetab === 1)" class="tabcontent">
                                        <Gist gist_id="8aed7d53d5c28c3d6cc6b98ec88a98c0" file_name="observers.ts"
                                            language="typescript" />
                                    </div>
                                </Transition>
                                <div v-if="(activetab === 2)" class="tabcontent">
                                    <Gist gist_id="fc5c4df0640fbe029c0c1836403f3b65" file_name="Gist.vue" language="html" />
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
.fade-enter-active {
    transition: opacity 0.5s ease;
}

.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from {
    opacity: 0;
    transition: all 0.5s ease;
}

.fade-leave-to {
    opacity: 0
}

.fade-enter-to {
    opacity: 1;
    transition: all 0.5s ease;

}

.fade-leave-from {
    opacity: 1
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
    margin-right: 8rem;
    margin-left: 8rem;
}

.tabs {
    overflow: hidden;
    background-color: var(--background-color);
}

.tabcontent {
    min-height: 0;
    height: 600px;
    overflow-y: auto;
    border-radius: 10px;
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
</style>
