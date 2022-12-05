<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Icon from '@/components/subcomponents/SVGComponent.vue';

onMounted(() => { window.addEventListener("scroll", handleScroll) })
onUnmounted(() => { window.removeEventListener("scroll", handleScroll) })
const handleScroll = (e: any) => {
    console.log(e)
}

</script>

<template>
    <div class="outer">
        <div class="scrollable">
            <div id="flex-columns" class="grid-container">
                <h2> My Software Projects </h2>
                <div class="main-grid">
                    <!-- ROW 1 -->
                    <div id="grid-left" class="grid-item">
                        <div class="video-container relative">
                            <video ref="videoplayer" id="ps-example" autoplay muted loop>
                                <source src="/movies/PremierSuiteExample.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div id="grid-right" class="grid-item">
                        <div class="explination">
                            <div id="headwithicon">
                                <h3>PremierSuite</h3>
                                <div class="techicon">
                                    <Icon subfolder="languages" name="C" filter: true />
                                </div>
                                <div class="techicon">
                                    <Icon subfolder="languages" name="Cpp" filter: true />
                                </div>
                            </div>
                            <p>
                                is a downloadable plugin for
                                <a href="https://www.rocketleague.com/">RocketLeague</a> that allow
                                users to manipulate the server to instantly leave, join or change
                                games. It is written in C++ and uses the ImGui framework with a
                                built-in Gui to both extend and provide additional functionality
                                within rocket league.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.video-container {
    height: auto;
    width: 100%;
    position: relative;
}

.video-container video {
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>
