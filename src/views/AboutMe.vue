<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useActiveIndexStore } from '@/stores/activeIndex';
import HeaderComponent from '@/components/navigation/HeaderComponent.vue';

import NeuronIcon from '@/components/icons/nav/NeuronIcon.vue';
import CodeIcon from '@/components/icons/nav/CodeIcon.vue';
import PauseIcon from '@/components/icons/other/PauseIcon.vue';
import PlayIcon from '@/components/icons/other/PlayIcon.vue';
import HomeIconSlide from '@/components/icons/nav/HomeIconSlide.vue';
import ArrowDownIcon from '@/components/icons/nav/ArrowDownIcon.vue';
import Icon from '@/components/subcomponents/SVGComponent.vue';
import { useDisplay } from 'vuetify';
const { mobile, lgAndUp } = useDisplay();

const isHovered = ref(false);
const indexStore = useActiveIndexStore();

const main = ref(null);
const article = ref<HTMLElement | null>(null);
const videoplayer = ref<HTMLVideoElement | null>(null);
const playbutton = ref<HTMLButtonElement | null>(null);

defineProps({
    action: {
        type: Function,
    },
    videoplayer: Object,
});

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
    const nodeLength = main.value!.$el.children.length;

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
    const nodeLength = main.value!.$el.children.length;
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
    <HeaderComponent v-if="!mobile" />
    <v-main ref="main" :class="mobile ? 'mobile-main' : ''">
        <article ref="article" id="home" data-index="0" data-status="active">
            <!-- IMAGE SECTION -->
            <div
                id="home-image-section"
                class="article-image-section article-section relative"
            >
                <div class="article-inner">
                    <p id="credit" class="absolute top-0 right-0 bold">
                        Photo credit: <br />
                        <a
                            href="https://www.linkedin.com/in/kevin-mohsenian-phd-45020558/"
                            >Kevin Mohsenian</a
                        >
                    </p>
                </div>
            </div>
            <!-- DESCRIPTION SECTION -->
            <div
                v-if="!mobile"
                class="article-description-section article-section bg-[#060b19] text-white p-8 flex justify-center relative rounded-lg shadow-lg"
            >
                <div class="article-inner text-white p-8 rounded-lg shadow-lg">
                    <div class="w-full flex flex-col justify-between space-y-6">
                        <h1 class="text-4xl font-bold text-left text-white">
                            Hi! I'm Flynn
                        </h1>
                        <h2 class="text-2xl text-gray-300">
                            Professionally, I develop software to study the
                            awake, behaving brain.
                        </h2>
                        <h3 class="text-xl text-gray-400">
                            But I love all things tech, and I'm always looking
                            for new opportunities to learn and grow. I love
                            reading source code in search of different
                            perspectives and and designs.
                        </h3>
                        <p class="text-center text-gray-300">
                            I consider myself a professional learner, a skill
                            adapted from the endless reviews of scientific
                            literature.
                        </p>
                        <p class="text-center text-gray-300">
                            Nobody has time to read 50 papers written in a
                            foreign scientific language, so you really have to
                            get to the core of what the authors are trying to
                            prove and understand what to skip.
                        </p>
                        <p class="text-center text-gray-300">
                            I apply the same mentality to learning a programming
                            language. Behind all of the abstractions, how is
                            this framework accomplishing what it's meant to
                            accomplish...
                        </p>
                        <p class="text-center text-gray-300">
                            Or for python, why are for loops so unbelievably
                            slow, what is it actually doing under the hood.
                        </p>
                        <p class="text-center text-gray-300">
                            This makes software development one of the most
                            intellectually stimulating disciplines I've come
                            across.
                        </p>
                    </div>
                </div>
            </div>

            <!-- TITLE SECTION -->
            <div class="article-title-section article-section">
                <h1>Neuroscientist & Software Engineer</h1>
            </div>
            <!-- NAV SECTION -->
            <div
                class="article-nav-section article-section"
                @mouseover="isHovered = true"
                @mouseout="isHovered = false"
            >
                <CodeIcon
                    ref="leftButton"
                    class="article-nav-button"
                    :action="useSwipeLeft"
                    :isHov="isHovered"
                >
                </CodeIcon>
                <NeuronIcon
                    ref="rightButton"
                    class="article-nav-button"
                    :action="useSwipeRight"
                    :isHov="isHovered"
                >
                </NeuronIcon>
            </div>
        </article>
        <article
            ref="article"
            id="scientist"
            data-index="1"
            data-status="inactive"
        >
            <!-- IMAGE SECTION -->
            <div
                id="scientist-image-section"
                class="article-image-section article-section relative"
            >
                <div class="flex flex-grow justify-center">
                    <div class="video-container relative">
                        <video
                            ref="videoplayer"
                            id="caSignal"
                            autoplay
                            muted
                            loop
                        >
                            <source
                                src="/movies/Ca2Imaging.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                        <div class="caption">
                            <h5 class="text-white">
                                Neurons glow when they're active
                            </h5>
                        </div>
                        <button
                            ref="playbutton"
                            id="myBtn"
                            class="absolute"
                            @click="playButton"
                        >
                            <component :is="iconComponent"></component>
                        </button>
                    </div>
                </div>
            </div>
            <!-- DESCRIPTION SECTION -->
            <div
                v-if="!mobile"
                class="article-description-section article-section bg-[#060b19] text-white p-8 flex justify-center relative rounded-lg shadow-lg"
            >
                <div class="article-inner text-white p-8 rounded-lg shadow-lg">
                    <div class="w-full flex flex-col justify-between space-y-6">
                        <h1 class="text-4xl font-bold text-left text-white">
                            My research objectives:
                        </h1>
                        <h2 class="text-2xl text-gray-300">
                            <strong>Neural Coding Mechanisms:</strong> How do
                            neurons encode information
                        </h2>
                        <h3 class="text-xl text-gray-300">
                            <strong>Neural Dynamics:</strong> How do neurons
                            interact with each other
                        </h3>
                        <p class="text-center text-gray-300">
                            <strong>Neuroinflammation:</strong> How does central
                            inflammation affect eating behaviors
                        </p>
                        <p class="text-center text-gray-300">
                            <strong>Neuroplasticity:</strong> How does the brain
                            adapt to changes in the environment
                        </p>
                    </div>
                </div>
            </div>

            <!-- TITLE SECTION -->
            <div class="article-title-section article-section">
                <h2>A view inside the brain</h2>
                <ArrowDownIcon
                    link="experience/publications"
                    tooltip="Publications"
                    class="article-nav-button"
                >
                </ArrowDownIcon>
            </div>
            <!-- NAV SECTION -->
            <div class="article-nav-section article-section">
                <HomeIconSlide
                    ref="leftButton"
                    class="article-nav-button"
                    :action="useSwipeLeft"
                ></HomeIconSlide>
                <CodeIcon
                    ref="rightButton"
                    class="article-nav-button"
                    :action="useSwipeRight"
                ></CodeIcon>
            </div>
        </article>
        <article
            ref="article"
            id="engineer"
            data-index="2"
            data-status="inactive"
        >
            <!-- IMAGE SECTION -->
            <div
                id="engineer-image-section"
                class="article-image-section article-section"
                :touch="mobile ? 'true' : 'false'"
            >
                <div id="icon-inner" class="article-inner h-full">
                    <h1 class="w-full text-center">My Tech Stack</h1>
                    <div class="ais-wrapper">
                        <!-- ROW 1 -->
                        <div id="ais-left" class="ais-section justify-center">
                            <h3 class="self-end justify-self-center">
                                Primary Tools
                            </h3>
                        </div>
                        <div id="ais-left" class="ais-section justify-center">
                            <h3 class="self-end justify-self-center">
                                Additional Skills
                            </h3>
                        </div>
                        <!-- ROW 2 -->
                        <div id="ais-left" class="ais-section">
                            <div class="techicon">
                                <Icon subfolder="languages" name="cpp" filter:
                                true />
                            </div>
                            <div class="techicon">
                                <Icon subfolder="languages" name="c" filter:
                                true />
                            </div>
                            <div class="techicon">
                                <Icon subfolder="languages" name="py" filter:
                                true />
                            </div>
                            <div class="techicon">
                                <Icon subfolder="languages" name="ts" filter:
                                true />
                            </div>
                            <div class="techicon">
                                <Icon subfolder="languages" name="java" filter:
                                true />
                            </div>
                        </div>
                        <div id="ais-right" class="ais-section">
                            <div class="techicon">
                                <Icon subfolder="languages" name="html" filter:
                                true />
                            </div>
                            <div class="techicon">
                                <Icon subfolder="languages" name="css" filter:
                                true />
                            </div>
                        </div>
                        <!-- ROW 3 -->
                        <div id="ais-left" class="ais-section">
                            <div class="techicon">
                                <Icon subfolder="frameworks" name="nuxt" filter:
                                true />
                            </div>
                            <div class="techicon">
                                <Icon subfolder="frameworks" name="react"
                                filter: true />
                            </div>

                            <div class="techicon">
                                <Icon subfolder="frameworks" name="vue" filter:
                                true />
                            </div>
                        </div>
                        <div id="ais-right" class="ais-section">
                            <div class="techicon">
                                <Icon subfolder="other" name="Docker" filter:
                                true />
                            </div>

                            <div class="techicon">
                                <Icon subfolder="other" name="DigitalOcean"
                                filter: true />
                            </div>
                        </div>
                        <!-- ROW 3 -->
                        <div id="ais-left" class="ais-section">
                            <div class="techicon">
                                <Icon subfolder="databases" name="MongoDB"
                                filter: true />
                            </div>
                            <div class="techicon">
                                <Icon subfolder="databases" name="MySQL" filter:
                                true />
                            </div>

                            <div class="techicon">
                                <Icon subfolder="databases" name="PostgresDB"
                                filter: true />
                            </div>
                        </div>
                        <div id="ais-right" class="ais-section">
                            <div class="techicon">
                                <Icon subfolder="other" name="Node" filter: true
                                />
                            </div>
                            <div class="techicon">
                                <Icon subfolder="other" name="Linux" filter:
                                true />
                            </div>
                        </div>
                        <!-- ROW 4 -->
                        <div id="ais-left" class="ais-section">
                            <div class="techicon">
                                <Icon subfolder="other" name="GoogleCloud"
                                filter: true />
                            </div>
                        </div>
                        <div id="ais-right" class="ais-section"></div>
                    </div>
                </div>
            </div>
            <!-- DESCRIPTION SECTION -->
            <div
                v-if="!mobile"
                class="article-description-section article-section"
            >
                <div class="article-inner">
                    <p>
                        I have been coding every day that I can for over 6
                        years.
                    </p>
                    <p>
                        C++ taught me fundamental data structures and
                        algorithms, which I used while studying the inner
                        workings of python.
                    </p>

                    <p>
                        I use my experience with
                        <strong>C++, Python, Java</strong> and
                        <strong>Typescript</strong> to build tools for
                        extracting and analyzing neural recordings.
                    </p>
                    <p>
                        My object-oriented approach and
                        <strong>strong knowledge of design patterns</strong>
                        helps me keep code
                        <strong class="italic"
                            >orgaized, fluent and easily maintainable.</strong
                        >
                    </p>
                </div>
            </div>
            <!-- TITLE SECTION -->
            <div class="article-title-section article-section">
                <h2>Software Development</h2>
                <ArrowDownIcon
                    link="experience/projects"
                    tooltip="Projects"
                    class="article-nav-button"
                ></ArrowDownIcon>
            </div>
            <!-- NAV SECTION -->
            <div class="article-nav-section article-section">
                <NeuronIcon
                    ref="leftButton"
                    class="article-nav-button"
                    :action="useSwipeLeft"
                ></NeuronIcon>
                <HomeIconSlide
                    ref="rightButton"
                    class="article-nav-button"
                    :action="useSwipeRight"
                ></HomeIconSlide>
            </div>
        </article>
    </v-main>
</template>

<style lang="scss">
.techicon {
    height: auto;
    width: 100%;
    max-width: 65px;
    min-width: 22px;
    min-height: 22px;
    margin-right: 3px;
}

// MAIN NO BREAKPOINTS //
main {
    flex-grow: 1;
    position: relative;
    overflow: hidden;
    background-color: var(--background-color);

    > article {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 2fr 0.5fr;
        position: absolute;
        transition: transform 400ms ease;

        > .article-section {
            height: 100%;
            display: flex;
            padding: 2rem;

            > .article-inner {
                display: flex;
                flex-grow: 1;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
            }
        }

        > .article-description-section {
            border-left: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            padding-right: 3rem;
            padding-left: 2rem;

            #neuron-bg {
                background-image: url('@/assets/svg/other/Neuron.svg');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }

            > p {
                color: var(--lightest-slate);
                transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
                transform-style: preserve-3d;

                > a {
                    &:hover {
                        text-decoration: underline;
                        transition: text-decoration 0.5s ease;
                    }
                }

                > .source-link {
                    color: var(--highlight-color);
                    display: inline;
                }
            }
        }

        > .article-nav-section {
            border-left: 1px solid var(--border-color);
            border-top: 1px solid var(--border-color);
            padding: 0 !important; // need this to override the padding from the article-section

            > .article-nav-button {
                background-color: transparent;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-grow: 1;
                border: none;
                outline: none;
                color: rgba(255, 255, 255, 0.75);
                cursor: pointer;

                &:hover {
                    transition: background-color 0.5s ease;
                    background-color: rgba(255, 255, 255, 0.02);

                    i {
                        color: var(--highlight-color) !important;
                        transform: scale(1.5);
                        transition: all 0.2s ease !important;
                    }
                }

                &:nth-child(2) {
                    border-left: 1px solid var(--border-color);
                }
            }
        }

        > .article-title-section {
            border-top: 1px solid var(--border-color);
            align-items: center;
            justify-content: space-between;
            padding: 1rem 4rem;

            > h2 {
                flex-basis: 50%;
                margin: 0px;
                text-transform: uppercase;
                flex-grow: 1;
                line-height: normal;
            }

            &:hover {
                transition: background-color 0.5s ease;
                background-color: var(--background-color-3);
                cursor: pointer;

                > button {
                    > .v-btn__content {
                        color: var(--highlight-color) !important;
                        transform: scale(1.1);
                        transition: all 0.5s ease !important;
                    }
                }
            }
        }

        &:first-child {
            > .article-image-section {
                background-color: transparent;
                background-image: url('/img/SFN.jpg');
            }
        }

        &:nth-child(2) {
            > .article-image-section {
                background-color: transparent;
            }
        }

        &:nth-child(3) {
            > .article-image-section {
                background-color: transparent;
            }
        }

        > .article-image-section {
            background-position: center;
            background-size: cover;

            &#engineer-image-section {
                padding-top: 2rem !important;
                padding-bottom: 0 !important;
                padding-right: 0 !important;
                padding-left: 0 !important;
            }

            #credit {
                font-size: small;
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

            .article-inner {
                flex-grow: 1;
                flex-shrink: 1;
                overflow: hidden;
            }

            .ais-wrapper {
                display: grid;
                grid-template-columns: 2fr 2fr;
                grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 100%;
                padding-left: 1rem;
                padding-right: 1rem;
                padding-top: 1rem;
                padding-bottom: 1rem;
                margin: 0px;
                overflow: hidden;

                > .ais-section {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    margin: 0px;
                    overflow: hidden;
                }

                > #ais-left {
                    height: 100%;
                    max-height: 60px;
                }
            }
        }
    }
}

// MEDIA QUERIES - SMALL //
@media only screen and (max-width: 768px) {
    h2 {
        font-size: 1.5rem;
    }

    main {
        flex-grow: 1;
        position: relative;
        overflow: hidden;

        > article {
            display: flex;
            flex-direction: column;
            position: absolute;
            height: 100vh;
            top: 0;
        }

        .article-image-section {
            position: relative !important;
        }

        .mobile-description {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        .article-section:first-child {
            flex-basis: 50%;
            flex-grow: 1;
            flex-shrink: 1;
            overflow: auto;
        }

        .article-section:nth-child(2) {
            flex-basis: 35%;
            flex-grow: 1;
            flex-shrink: 0;
            overflow: auto;
        }

        .article-section:nth-child(3) {
            flex-basis: 15%;
            flex-grow: 0;
            flex-shrink: 0;
            overflow: auto;
        }

        .article-inner {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            flex-shrink: 1;
            overflow: hidden;
            font-size: clamp(12px, 1.5vw, 18px);
        }
    }
}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
    main {
        overflow-y: hidden;

        > article {
            grid-template-columns: none;
            grid-template-rows: 1.5fr repeat(3, 0.75fr) 0.25fr;

            > .article-title-section {
                > h2 {
                    line-height: 2.6rem;
                }

                border-bottom: 1px solid var(--border-color);
                order: 2;
            }

            > .article-description-section {
                border-left: none;
                justify-content: center;
                order: 3;
            }

            > .article-nav-section {
                border-left: none;
                border-bottom: 1px solid var(--border-color);
                order: 4;
            }

            > .article-image-section {
                order: 1;
            }
        }
    }
}

main > article[data-status='active'] {
    transform: translateX(0%);
}

main > article[data-status='inactive'] {
    transform: translateX(-100%);
    transition: none;
}

main > article[data-status='before'] {
    transform: translateX(-100%);
}

main > article[data-status='after'] {
    transform: translateX(100%);
}

main > article[data-status='place-left'] {
    transform: translateX(-100%);
    transition: none;
}

main > article[data-status='place-right'] {
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
