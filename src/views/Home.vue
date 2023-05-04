<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useActiveIndexStore } from '@/stores/activeIndex';
import NeuronIcon from '@/components/icons/nav/NeuronIcon.vue';
import CodeIcon from '@/components/icons/nav/CodeIcon.vue';
import PauseIcon from '@/components/icons/other/PauseIcon.vue';
import PlayIcon from '@/components/icons/other/PlayIcon.vue';
import HomeIconSlide from '@/components/icons/nav/HomeIconSlide.vue';
import ArrowDownIcon from '@/components/icons/nav/ArrowDownIcon.vue';
import Icon from '@/components/subcomponents/SVGComponent.vue';

const indexStore = useActiveIndexStore();
const main = ref<HTMLElement | null>(null);
const article = ref<HTMLElement | null>(null);
const videoplayer = ref<HTMLVideoElement | null>(null);
const playbutton = ref<HTMLButtonElement | null>(null);

defineProps({
    action: {
        type: Function,

    },
    videoplayer: Object,
});
// 
onMounted(() => {

    const video = videoplayer.value;

    if (video) {
        video.addEventListener('play', () => {
            isPlaying.value = true;
        });

        video.addEventListener('pause', () => {
            isPlaying.value = false;
        });
    }

    let activeIndex = computed(() => {
        return indexStore.activeIndex;
    });

    const currentSlide: HTMLElement = document.querySelector(
        `[data-index="${activeIndex.value}"]`
    )!;
    currentSlide.dataset.status = 'active';

    const otherSlides = document.querySelectorAll(
        'article[data-index]:not([data-index="' + activeIndex.value + '"])'
    );

    Array.from(otherSlides).forEach((el) => {
        if (el instanceof HTMLElement && el.dataset.status === 'active') {
            el.dataset.status = 'inactive';
        }
    });
});

const isPlaying = ref(true);

function playButton() {
    const video = videoplayer.value as HTMLVideoElement;

    if (video) {
        if (isPlaying.value) {
            video.pause();
        } else {
            video.play();
        }
        isPlaying.value = !isPlaying.value;
    }
}

const iconComponent = computed(() => (isPlaying.value ? PauseIcon : PlayIcon));

function useSwipeLeft() {
    const nodeLength = main.value!.children.length;

    let activeIndex = computed(() => {
        return indexStore.activeIndex;
    });
    const nextIndex =
        activeIndex.value - 1 >= 0 ? activeIndex.value - 1 : nodeLength - 1;

    const currentSlide: HTMLElement = document.querySelector(
        `[data-index="${activeIndex.value}"]`
    )!;

    const nextSlide: HTMLElement = document.querySelector(
        `[data-index="${nextIndex}"]`
    )!;

    currentSlide.dataset.status = 'after';
    nextSlide.dataset.status = 'place-left';

    setTimeout(() => {
        nextSlide.dataset.status = 'active';
        indexStore.setIndex(nextIndex);
    }, 20);
}

function useSwipeRight(): void {
    const nodeLength = main.value!.children.length;
    let activeIndex = computed(() => {
        return indexStore.activeIndex;
    });

    const nextIndex =
        activeIndex.value + 1 <= nodeLength - 1 ? activeIndex.value + 1 : 0;

    const currentSlide: HTMLElement = document.querySelector(
        `[data-index="${activeIndex.value}"]`
    )!;

    const nextSlide: HTMLElement = document.querySelector(
        `[data-index="${nextIndex}"]`
    )!;

    currentSlide.dataset.status = 'before';
    nextSlide.dataset.status = 'place-right';

    setTimeout(() => {
        nextSlide.dataset.status = 'active';
        indexStore.setIndex(nextIndex);
    }, 20);
}

</script>

<template>
    <main ref="main">
        <article ref="article" id="home" data-index="0" data-status="active">
            <!-- IMAGE SECTION -->
            <div class="article-image-section article-section relative">
                <p id="credit" class="text-white absolute top-0 right-0 bold">
                    Photo credit: <br />
                    <a href="https://www.linkedin.com/in/kevin-mohsenian-phd-45020558/">Kevin Mohsenian</a>
                </p>
            </div>
            <!-- DESCRIPTION SECTION -->
            <div class="article-description-section article-section p-8 flex justify-center relative">
                <div class="h-full w-full flex flex-col justify-between">
                    <h1 class="text-center">Hi, I'm Flynn</h1>
                    <div id="neuron-bg" class="flex-grow"></div>
                    <p class="text-xl">
                        I develop software to study the awake, behaving brain.
                    </p>
                </div>
            </div>
            <!-- TITLE SECTION -->
            <div class="article-title-section article-section">
                <h2>Neuroscientist & Software Engineer</h2>
            </div>
            <!-- NAV BUTTONS SECTION -->
            <div class="article-nav-section article-section">
                <CodeIcon ref="leftButton" class="article-nav-button" :action="useSwipeLeft"></CodeIcon>
                <NeuronIcon ref="rightButton" class="article-nav-button" :action="useSwipeRight"></NeuronIcon>
            </div>
        </article>
        <article ref="article" id="scientist" data-index="1" data-status="inactive">
            <div class="article-image-section article-section relative">
                <div class="flex flex-grow justify-center">
                    <div class="video-container relative">
                        <video ref="videoplayer" id="caSignal" autoplay muted loop>
                            <source src="/movies/Ca2Imaging.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div class="caption">
                            <h5 class="text-white">Neurons glow when they're active</h5>
                        </div>
                        <button ref="playbutton" id="myBtn" class="absolute" @click="playButton">
                            <component :is="iconComponent"></component>
                        </button>
                    </div>
                </div>
            </div>
            <div class="article-description-section article-section">
                <div class="flex flex-col justify-evenly flex-grow text-white relative pt-3">
                    <h1 class="self-start justify-evenly">
                        My research objectives:
                    </h1>
                    <div class="relative mx-6 flex flex-col flex-grow justify-evenly self-center">
                        <ul class="flex flex-col flex-grow justify-evenly">
                            <li>
                                <strong>Neural Coding Mechanisms:</strong> How
                                do neurons encode information
                            </li>
                            <li>
                                <strong>Neural Dynamics:</strong> How do neurons
                                interact with each other
                            </li>
                            <li>
                                <strong>Neuroinflammation:</strong> How does
                                central inflammation affect eating behaviors
                            </li>
                            <li>
                                <strong>Neuroplasticity:</strong> How does the
                                brain adapt to changes in the environment
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="article-title-section article-section">
                <h2>A view inside the brain</h2>
                <ArrowDownIcon link="/publications" class="article-nav-button"></ArrowDownIcon>
            </div>
            <div class="article-nav-section article-section">
                <HomeIconSlide ref="leftButton" class="article-nav-button" :action="useSwipeLeft"></HomeIconSlide>
                <CodeIcon ref="rightButton" class="article-nav-button" :action="useSwipeRight"></CodeIcon>
            </div>
        </article>
        <article ref="article" id="engineer" data-index="2" data-status="inactive">
            <div class="article-image-section article-section">
                <div class="ais-wrapper">
                    <!-- ROW 1 -->
                    <div id="ais-left" class="ais-section justify-center">
                        <h3 class="self-end justify-self-center">Primary Tools</h3>
                    </div>
                    <div id="ais-left" class="ais-section justify-center">
                        <h3 class="self-end justify-self-center">Additional Skills</h3>
                    </div>
                    <!-- ROW 2 -->
                    <div id="ais-left" class="ais-section">

                        <div class="techicon">
                            <Icon subfolder="languages" name="Cpp" filter: true />
                        </div>

                        <div class="techicon">
                            <Icon subfolder="languages" name="Python" filter: true />
                        </div>

                        <div class="techicon">
                            <Icon subfolder="languages" name="Typescript" filter: true />
                        </div>
                        <div class="techicon">
                            <Icon subfolder="languages" name="Java" filter: true />
                        </div>
                    </div>
                    <div id="ais-right" class="ais-section">
                        <div class="techicon">
                            <Icon subfolder="languages" name="Html" filter: true />
                        </div>
                        <div class="techicon">
                            <Icon subfolder="languages" name="CSS" filter: true />
                        </div>
                        <div class="techicon">
                            <Icon subfolder="languages" name="C" filter: true />
                        </div>
                    </div>
                    <!-- ROW 3 -->
                    <div id="ais-left" class="ais-section">
                        <div class="techicon">
                            <Icon subfolder="frameworks" name="Nuxt" filter: true />
                        </div>
                        <div class="techicon">
                            <Icon subfolder="frameworks" name="React" filter: true />
                        </div>

                        <div class="techicon">
                            <Icon subfolder="frameworks" name="Vue" filter: true />
                        </div>
                    </div>
                    <div id="ais-right" class="ais-section">
                        <div class="techicon">
                            <Icon subfolder="other" name="Docker" filter: true />
                        </div>

                        <div class="techicon">
                            <Icon subfolder="other" name="DigitalOcean" filter: true />
                        </div>
                    </div>
                    <!-- ROW 3 -->
                    <div id="ais-left" class="ais-section">
                        <div class="techicon">
                            <Icon subfolder="databases" name="MongoDB" filter: true />
                        </div>
                        <div class="techicon">
                            <Icon subfolder="databases" name="MySQL" filter: true />
                        </div>

                        <div class="techicon">
                            <Icon subfolder="databases" name="PostgresDB" filter: true />
                        </div>
                    </div>
                    <div id="ais-right" class="ais-section">
                        <div class="techicon">
                            <Icon subfolder="other" name="Node" filter: true />
                        </div>
                        <div class="techicon">
                            <Icon subfolder="other" name="Linux" filter: true />
                        </div>
                    </div>
                    <!-- ROW 4 -->
                    <div id="ais-left" class="ais-section">
                        <div class="techicon">
                            <Icon subfolder="other" name="GoogleCloud" filter: true />
                        </div>
                    </div>
                    <div id="ais-right" class="ais-section">

                    </div>
                </div>
            </div>
            <div class="article-description-section article-section">
                <p class="text-white mt-5 mb-5">
                    I have been coding <strong class="italic">professionally </strong>for 5+ years.
                </p>

                <p class="text-white mt-5 mb-5">
                    C++ taught me fundamental data structures and algorithms, which I used while studying the inner
                    workings of pytho
                </p>

                <p class="text-white mt-5 mb-5">I use my experience with <strong>C++, Python, Java</strong> and
                    <strong>Typescript</strong> to build
                    tools for extracting and analyzing neural recordings.
                </p>
                <p class="text-white mt-5 mb-2">My <strong>object-oriented</strong> approach and <strong>strong
                        knowledge of
                        design patterns</strong> helps me keep code <strong class="italic">orgaized, fluent and
                        easily maintainable.</strong>
                </p>
            </div>
            <div class="article-title-section article-section">
                <h2 style="font-family: CrimsonItalic">Software Development</h2>
                <button @click="$router.push('projects')" class="article-nav-button">
                    <v-icon>mdi-arrow-down-bold-hexagon-outline</v-icon>
                </button>
            </div>
            <div class="article-nav-section article-section">
                <NeuronIcon ref="leftButton" class="article-nav-button" :action="useSwipeLeft"></NeuronIcon>
                <HomeIconSlide ref="rightButton" class="article-nav-button" :action="useSwipeRight"></HomeIconSlide>
            </div>
        </article>

    </main>
</template>

<style scoped>
.article-nav-button {
    display: flex;
    justify-content: center;
    align-items: center;
}

strong .italic {
    font-weight: bold;
    font-style: italic;
}

strong {
    font-weight: bold;
}

/* SCOPED STYLE FOR MAIN PAGE - NO SCROLLING */

#neuron-bg {
    background-image: url('@/assets/svg/other/Neuron.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

#credit {
    font-size: small;
}

main>article[data-status='active'] {
    transform: translateX(0%);
}

main>article[data-status='inactive'] {
    transform: translateX(-100%);
    transition: none;
}

main>article[data-status='before'] {
    transform: translateX(-100%);
}

main>article[data-status='after'] {
    transform: translateX(100%);
}

main>article[data-status='place-left'] {
    transform: translateX(-100%);
    transition: none;
}

main>article[data-status='place-right'] {
    transform: translateX(100%);
    transition: none;
}

video {
    max-width: 100%;
    width: auto;
    height: 50%;
}

/* Style the video: 100% width and height to cover the entire window */
#myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
}

#myBtn {
    font-size: 18px;
    border-radius: 15px;
    color: #ffffff;
    cursor: pointer;
    bottom: 0;
    padding: 0.5rem;

    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 75px;
}

#myBtn:hover {
    color: var(--blue-dark);
}

.video-container {
    height: auto;
    width: 100%;
    position: relative;
}

.video-container video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: 0;
}

.video-container .caption {
    z-index: 1;
    position: relative;
    text-align: center;
    color: #dc0000;
    padding: 10px;
}
</style>
