<script setup lang="ts">
import SmallHeader from '@/components/maincomponents/SmallHeader.vue'
import Gist from '@/components/subcomponents/Gist.vue'
import GitHubIcon from '@/components/icons/social/GitHubIcon.vue';
import TwitterIcon from '@/components/icons/social/TwitterIcon.vue';
import LinkedInIcon from '@/components/icons/social/LinkedInIcon.vue';
import Icon from '@/components/subcomponents/SVGComponent.vue';
import { onMounted, ref } from 'vue'

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
                <li>
                    <GitHubIcon aria-label="GitHub" tooltip="" />
                </li>
                <li>
                    <TwitterIcon aria-label="Twitter" tooltip="" />
                </li>
                <li>
                    <LinkedInIcon aria-label="LinkedIn" tooltip="" />
                </li>
            </ul>

        </div>
        <div class="ml-20 mr-10">
            <SmallHeader id="smallheader">
                <router-link :to="{ name: 'projects', hash: '#PremierSuite', query: { offset: 73 } }" data-status="active"
                    data-id="PremierSuite" class="animation-underline activelink">PremierSuite</router-link>
                <router-link :to="{ name: 'projects', hash: '#Canalysis', query: { offset: 73 } }" data-status="inactive"
                    data-id="Canalysis" class="animation-underline">Canalysis</router-link>
                <router-link :to="{ name: 'projects', hash: '#NeuralNetwork', query: { offset: 73 } }"
                    data-status="inactive" data-id="NeuralNetwork" class="animation-underline">Neural Network</router-link>
                <router-link :to="{ name: 'projects', hash: '#DataViewer', query: { offset: 73 } }" data-status="inactive"
                    data-id="DataViewer" class="animation-underline">Dataviewer</router-link>
                <router-link :to="{ name: 'projects', hash: '#Portfolio', query: { offset: 73 } }" data-status="inactive"
                    data-id="Portfolio" class="animation-underline">Portfolio</router-link>
            </SmallHeader>
            <div class="project-container">
                <!--  -->
                <!-- PREMIERSUITE -->
                <!--  -->
                <section id="PremierSuite" data-id="PremierSuite" class="project-content-container">
                    <div id="headwithicon">
                        <GitHubIcon link="https://github.com/NeuroPyPy/PremierSuite" tooltip="NeuroPyPy/PremierSuite"
                            svgMargin="0 8px 0 0" />
                        <h2 class="project-label">PremierSuite</h2>
                        <div class="techicon">
                            <Icon subfolder="languages" name="C" filter: true />
                        </div>
                        <div class="techicon">
                            <Icon subfolder="languages" name="Cpp" filter: true />
                        </div>
                    </div>
                    <div class="explination">
                        <div class="project-text-outer">
                            <p class="project-text-inner">
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
                    <div class="image-container blue-shadow relative h-full">
                        <video ref="videoplayer" class="blue-shadow" autoplay muted loop>
                            <source src="/movies/PremierSuiteExample.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div id="row-container">
                        <div class="tabscontainer">
                            <div id="tabs" class="tabs blue-shadow-nb overflow-hidden flex justify-center">
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 1"
                                    v-bind:class="[activetab === 2 ? 'active' : '']">
                                    Logic</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 2"
                                    v-bind:class="[activetab === 3 ? 'active' : '']">
                                    Workshops</a>
                                <a class="flex-grow-1 animation-underline" ref="thistab" v-on:click="activetab = 3"
                                    v-bind:class="[activetab === 4 ? 'active' : '']">
                                    GUI Tree</a>
                            </div>
                            <div id="content">
                                <Transition name="fade" mode="out-in" appear>
                                    <KeepAlive>
                                        <div v-if="(activetab === 1)" class="tabcontent">
                                            <Gist gist_id="ba94a250051e10a58f504d71b2100fc0" file_name="Logic.cpp"
                                                language="cpp" />
                                        </div>
                                    </KeepAlive>
                                </Transition>
                                <Transition name="fade" mode="out-in" appear>
                                    <KeepAlive>
                                        <div v-if="(activetab === 2)" class="tabcontent">
                                            <Gist gist_id="f4ba947d7ad3f4b8231c1f5bd85c876f" file_name="getWorkshopMaps.cpp"
                                                language="cpp" />
                                        </div>
                                    </KeepAlive>
                                </Transition>
                                <Transition name="fade" mode="out-in" appear>
                                    <KeepAlive>
                                        <div v-if="(activetab === 3)" class="tabcontent">
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
                <section id="Canalysis" data-id="Canalysis" class="project-content-container">
                    <div id="headwithicon" class="">
                        <GitHubIcon link="https://github.com/NeuroPyPy/canalysis" tooltip="NeuroPyPy/PremierSuite"
                            svgMargin="0 8px 0 0" />

                        <h2 class="project-label">canalysis</h2>
                        <div class="techicon">
                            <Icon subfolder="languages" name="Python" filter: true />
                        </div>
                        <div class="techicon">
                            <Icon subfolder="languages" name="Cpp" filter: true />
                        </div>
                    </div>
                    <div class="explination ml-8 mr-8">
                        <p class="text-lg text-white">
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
                    <div class="image-container blue-shadow relative h-full">
                        <p>
                            <img width="auto" height="auto" src=https://i.imgur.com/SPok8sB.gif>
                        </p>
                    </div>
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
                <section id="NeuralNetwork" data-id="NeuralNetwork" class="project-content-container">
                    <div id="headwithicon" class="">
                        <GitHubIcon link="https://github.com/NeuroPyPy/time-series-network" tooltip="NeuroPyPy/PremierSuite"
                            svgMargin="0 8px 0 0" />

                        <h2 class="project-label">time-series-network</h2>
                        <div class="techicon">
                            <Icon subfolder="languages" name="Python" filter: true />
                        </div>
                    </div>
                    <!-- NEURAL NETWORK VIDEO / EXPLINATION -->
                    <div id="row-container" class="">
                        <div class="explination">
                            <p class="ml-8 mr-8 text-lg text-white">
                                Classification of neural signals into 5 categories: <br>

                                <ui>
                                    <li>
                                        Artificial Salive
                                    </li>
                                    <li>
                                        Sucrose
                                    </li>
                                    <li>
                                        Quinine
                                    </li>
                                    <li>
                                        Citric Acid
                                    </li>
                                    <li>
                                        NaCl
                                    </li>

                                    Support vector machine, Recurrent NN, and Concurrent NN.
                                </ui>

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
                <section id="DataViewer" data-id="DataViewer" class="project-content-container">
                    <div id="headwithicon" class="">
                        <GitHubIcon link="https://github.com/NeuroPyPy/web-dataviewer" tooltip="NeuroPyPy/PremierSuite"
                            svgMargin="0 8px 0 0" />

                        <h2 class="project-label">web-dataviewer</h2>
                        <div class="techicon">
                            <Icon subfolder="languages" name="Python" filter: true />
                        </div>

                    </div>
                    <!-- DATAVIEWER VIDEO / EXPLINATION -->
                    <div id="row-container" class="text-white">
                        <div class="explination">
                            <p class="text-lg text-white"> </p>
                            Locally hosted web server for data sharing, visualization, and analysis. <br>

                            Built with Python, Flask, and Plotly.js. <br>
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
                <section id="Portfolio" data-id="Portfolio" class="project-content-containern">
                    <div id="headwithicon" class="">
                        <GitHubIcon link="https://github.com/NeuroPyPy/FlynnPortfolio" tooltip="NeuroPyPy/PremierSuite"
                            svgMargin="0 8px 0 0" />

                        <h2 class="project-label">Portfolio Source Code</h2>
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
                            <h3> Source code for this Website Portfolio </h3>
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
a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
}

#row-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}

.tabs {
    overflow: hidden;
    background-color: var(--background-color);
}

.tabcontent {
    min-height: 0;
    height: auto;
    max-height: 600px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 10px;
    padding: 0.5rem;
    white-space: pre-wrap;
    word-wrap: break-word;
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
    align-items: center;
}

.explination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.project-label {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration-line: underline;
}

.project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 50vw;
    margin: 0 auto;
}

.project-content-container {
    width: 100%;
    margin-bottom: 6rem;
}

.tabscontainer {
    display: flex;
    flex-direction: column;
    font-family: "Crimson", serif;
    color: #888;
    margin-top: 3rem;
    margin-bottom: 3rem;
    flex-grow: 1;

}

.gist-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.image-container video {
    width: auto;
    height: 100%;
    object-fit: cover;
    position: relative;
}

.container-container video {
    width: auto;
    height: 100%;
    object-fit: cover;
    position: relative;
}
</style>
