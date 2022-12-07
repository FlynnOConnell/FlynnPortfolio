//@ts-nocheck
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Icon from '@/components/subcomponents/SVGComponent.vue';
import App from '@/components/gists/Gist.vue';
onMounted(() => { window.addEventListener("scroll", handleScroll) })
onUnmounted(() => { window.removeEventListener("scroll", handleScroll) })
const handleScroll = (e: any) => {
}

const activetab = ref(1);
const thistab = ref(null);


</script>

<template>
    <div class="outer">
        <div class="scrollable">
            <div class="grid-container">
                <h2> My Software Projects </h2>
                <div class="main-grid">
                    <!-- ROW 1 -->
                    <div id="grid-left" class="grid-item">
                        <div class="video-container relative h-full">
                            <video ref="videoplayer" id="ps-example" autoplay muted loop>
                                <source src="/movies/PremierSuiteExample.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div id="grid-right" class="grid-item">
                        <div class="explination">
                            <div id="headwithicon" class="ml-8 mb-8">
                                <h3>PremierSuite</h3>
                                <div class="techicon">
                                    <Icon subfolder="languages" name="C" filter: true />
                                </div>
                                <div class="techicon">
                                    <Icon subfolder="languages" name="Cpp" filter: true />
                                </div>
                            </div>
                            <p class="ml-8 mr-8 text-lg">
                                A downloadable plugin for
                                <a href="https://www.rocketleague.com/">RocketLeague</a> that allows direct interaction
                                with
                                in-game servers. Written in C/C++, this plugin lets users with a
                                built-in Gui to provide additional functionality
                                within rocket league.
                            </p>
                        </div>
                    </div>
                    <!-- ROW 2 -->
                    <div id="grid-left" class="grid-item">
                        <App />
                    </div>
                    <div id="grid-right" class="grid-item">
                        <div id="tabs" class="container">

                            <div class="tabs">
                                <a ref="thistab" v-on:click="activetab = 1"
                                    v-bind:class="[ activetab === 1 ? 'active' : '' ]">Tab 1</a>
                                <a ref="thistab" v-on:click="activetab = 2"
                                    v-bind:class="[activetab === 2 ? 'active' : '']">Tab 2</a>
                                <a ref="thistab" v-on:click="activetab = 3"
                                    v-bind:class="[activetab === 3 ? 'active' : '']">Tab 3</a>
                            </div>

                            <div class="content">
                                <div v-if="activetab === 1" class="tabcontent">
                                    Is this the real life? Is this just fantasy?
                                </div>
                                <div v-if="activetab === 2" class="tabcontent">
                                    Caught in a landslide, no escape from reality
                                </div>
                                <div v-if="activetab === 3" class="tabcontent">
                                    Open your eyes, look up to the skies and see
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
/* RESET */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* STYLING */
.container {
    max-width: 620px;
    min-width: 420px;
    margin: 40px auto;
    font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
    color: #888;
}

/* Style the tabs */
.tabs {
    overflow: hidden;
    margin-left: 20px;
    margin-bottom: -2px;
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
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
}

.tabs a:last-child {
    border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
    background-color: #aaa;
    color: #fff;
}

/* Styling for active tab */
.tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
}

/* Style the tab content */
.tabcontent {
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 3px 3px 6px #e1e1e1
}

.gist .blob-code-inner {
    white-space: pre-wrap !important;
}

.ps {
    display: block;
    max-width: 50%;
    width: auto;
    height: auto;
    border-radius: 30px;
}

#headwithicon {
    display: flex;
    flex-direction: row;
    justify-content: left;
    min-height: 25px;
    max-height: 60px;
}

.grid-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10vw;
    margin-right: 10vw;
}

.main-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto auto;
    grid-gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.video-container video {
    width: auto;
    height: 100%;
    object-fit: cover;
    position: relative;

    border: 1px solid var(--blue-dark) !important;
    border-radius: 6px 6px 6px 6px;
}
</style>
