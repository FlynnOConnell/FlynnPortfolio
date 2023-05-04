<template>
    <transition name="fade" mode="out-in" appear>
        <a href="javascript:void(0)" class="icon-link" :class="class" @click="scrollToTop">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-chevron-up">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        </a>
    </transition>
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
        const scrollToTop = () => {
            router.push({});
        }
        return {
            scrollToTop,
        };
    },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
