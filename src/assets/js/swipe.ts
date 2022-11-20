// swipeslides.js
import type { Ref } from 'vue';
import { ref } from 'vue';
let activeIndex: Ref<any> = ref(0);

export function useSwipe(parentNodes: number, side: string) {
    let nodeLength = parentNodes;

    if (side === 'left') {
        var nextIndex =
            activeIndex.value - 1 >= 0 ? activeIndex.value - 1 : nodeLength - 1;
        var currentstatus = 'after';
        var nextstatus = 'becoming-active-from-before';
    } else if (side === 'right') {
        var nextIndex: number =
            activeIndex.value + 1 <= nodeLength - 1 ? activeIndex.value + 1 : 0;
        var currentstatus = 'before';
        var nextstatus = 'becoming-active-from-after';
    } else {
        nextIndex = 0;
        currentstatus = 'none';
        nextstatus = 'none';
    }

    const currentSlide: HTMLElement = document.querySelector(
        `[data-index="${activeIndex.value}"]`
    )!;

    const nextSlide: HTMLElement = document.querySelector(
        `[data-index="${nextIndex}"]`
    )!;
    currentSlide.dataset.status = currentstatus;
    nextSlide.dataset.status = nextstatus;

    setTimeout(() => {
        nextSlide.dataset.status = 'active';
        activeIndex.value = nextIndex;
    });
}
