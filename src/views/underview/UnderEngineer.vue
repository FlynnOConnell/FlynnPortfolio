//@ts-nocheck
<script setup lang="ts">
import SmallHeader from '@/components/maincomponents/SmallHeader.vue'
import Gist_mainlogic from '@/components/gists/Gist_mainlogic.vue'
import Gist_psgui from '@/components/gists/Gist_psgui.vue'
import Gist_iterdir from '@/components/gists/Gist_iterdir.vue'
import Gist_workshop from '@/components/gists/Gist_workshop.vue'
import { onMounted, onUnmounted, ref, getCurrentInstance } from 'vue'
import Icon from '@/components/subcomponents/SVGComponent.vue';
import { onIntersect } from '@/composables/observers';

const activetab = ref(1);
const thistab = ref(null);

</script>

<template>
    <div class="relative my-16">
        <section>
            <h2 class="text-center"> My Software Projects </h2>
        </section>
        <!-- CONTAINER FOR WHOLE PAGE -->
        <section id="page-container" class="ml-10 mr-10">
            <SmallHeader />
            <div id="column-container" class="flex flex-col justify-center px-5 my-20">
                <article id="PremierSuite">
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
                        <div class="video-container blue-shadow relative h-full">
                            <video ref="videoplayer" class="blue-shadow" autoplay muted loop>
                                <source src="/movies/PremierSuiteExample.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <!-- Right -->
                        <div class="explination">
                            <p class="ml-8 mr-8 text-lg">
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
                                    <component :is="Gist_mainlogic" />
                                </div>
                                <div v-if="(activetab === 2)" class="tabcontent">
                                    <component :is="Gist_iterdir" />
                                </div>
                                <div v-if="(activetab === 3)" class="tabcontent">
                                    <component :is="Gist_workshop" />
                                </div>
                                <div v-if="(activetab === 4)" class="tabcontent">
                                    <component :is="Gist_psgui" />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
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
                        <div class="video-container blue-shadow relative h-full">
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
                                    <component :is="Gist_mainlogic" />
                                </div>
                                <div v-if="(activetab === 2)" class="tabcontent">
                                    <component :is="Gist_iterdir" />
                                </div>
                                <div v-if="(activetab === 3)" class="tabcontent">
                                    <component :is="Gist_workshop" />
                                </div>
                                <div v-if="(activetab === 4)" class="tabcontent">
                                    <component :is="Gist_psgui" />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

        </section>
    </div>
</template>

<style>
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
    margin-top: 10rem;
}

.video-container video {
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
