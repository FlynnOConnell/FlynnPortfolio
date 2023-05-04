<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import HomeIcon from '@/components/icons/nav/HomeIcon.vue';

const headRef = ref<any>(null);
let showArrowUp = ref(false);
let scrollPosition = ref(0);

let animationFrameId: number;

const scrollToTop = () => {
    window.scrollTo({
        top: 140,
        behavior: "smooth"
    });
};

const handleScroll = () => {
    scrollPosition.value = window.pageYOffset || document.documentElement.scrollTop;

    // Cancel any pending animation frame request
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    // Request a new animation frame
    animationFrameId = requestAnimationFrame(updateHomeIconPosition);
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const updateHomeIconPosition = () => {
    const homeIcon = document.querySelector('.home-icon') as HTMLElement;
    if (homeIcon && headRef.value) {
        const rect = headRef.value.getBoundingClientRect();
        showArrowUp.value = rect.top <= 0;
    }
};

// Add a watcher for the scrollPosition value
watch(scrollPosition, () => {
    updateHomeIconPosition();
});

</script>

<template>
    <div ref="headRef" class="header lg:h-[70px]" :class="[scrollPosition >= 120 ? 'shrink-header' : '', '']">
        <div class="header-back lg:justify-between px-2 lg:px-4 xl:px-12 lg:text-2xl leading-6 lg:h-auto">
            <div class="scrolltop" :class="{ 'show': showArrowUp }" @click="scrollToTop">
                <svg v-show="showArrowUp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-arrow-up arrow-up-icon">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
            </div>
        </div>
        <div
            class="header-inner text-[var(--light-slate)] lg:justify-between px-2 lg:px-4 xl:px-12 lg:text-2xl leading-6 lg:h-auto home-icon">

            <HomeIcon link="/"></HomeIcon>
            <slot></slot>

        </div>
    </div>
</template>

<style scoped>
.header button {
    position: absolute;
    left: 0;
}


.header {
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: right;
    top: 0;
    padding: 0px 50px;
    width: 100%;
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    /* background: rgb(6, 11, 25); */
    background: linear-gradient(0deg, rgba(6, 11, 25, 0) 0%, rgba(6, 11, 25, 0.3043418050814075) 3%, rgba(6, 11, 25, 0.5340336818321079) 7%, rgba(6, 11, 25, 0.7917367630646008) 12%, rgba(6, 11, 25, 1) 25%, rgba(6, 11, 25, 1) 100%);
    backdrop-filter: blur(10px);
    transition: all var(--transition);
    height: var(--nav-scroll-height);
    z-index: 10;
}

.header-inner {
    display: flex;
    align-items: center;
    position: relative;
    flex-grow: 1;
    height: 100%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    transition: all 250ms cubic-bezier(0.33, 1, 0.68, 1);
}

.shrink-header {
    padding-top: .35rem !important;
    padding-bottom: .35rem !important;
    font-size: larger !important;
}

.scrolltop {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.scrolltop:hover {
    color: var(--highlight-color);
    transition: color 0.5s ease;
}

.scrolltop.show {
    opacity: 1;
}

.arrow-up-icon {
    width: 24px;
    height: 24px;
    stroke: aliceblue;
}

.tooltip {
    margin-left: 10px;
    font: var(--font-main);
    font-size: 0.75rem;
    white-space: nowrap;
    cursor: pointer;
}

.tooltip.show {
    opacity: 1;
}

.header-back {
    position: relative;
}
</style>
