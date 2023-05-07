<template>
    <a href="javascript:void(0)" class="icon-link" :class="class" @click="scrollToMain">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="8 12 12 16 16 12"></polyline>
            <line x1="12" y1="8" x2="12" y2="16"></line>
        </svg>
    </a>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
    name: 'ArrowDownIcon',
    props: {
        class: {
            type: String,
            default: '',
        }
    },
    setup() {
        const router = useRouter();
        const scrollToMain = () => {
            const mainElement = document.getElementById("scroll");
            if (mainElement) {
                const scrollOptions: ScrollToOptions = {
                    top: mainElement.offsetTop,
                    behavior: "smooth",
                };
                window.scrollTo(scrollOptions);

                const onScroll = () => {
                    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                    if (currentScrollPosition >= mainElement.offsetTop - 1) {
                        window.removeEventListener("scroll", onScroll);
                    }
                };
                window.addEventListener("scroll", onScroll);
            }
        };

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return {
            scrollToMain,
            scrollToTop,
        };
    },
};
</script>