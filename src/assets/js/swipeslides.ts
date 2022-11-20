// swipeslides.js
import type { Ref } from 'vue';

export function handleLeftClick(
    activeIndex: Ref<number>,
    nodeLength: number,
     ) {

    const nextIndex: number =
        activeIndex.value - 1 >= 0
            ? activeIndex.value - 1
            : nodeLength - 1;

    const currentSlide: HTMLElement | null = document.querySelector(
        `[data-index="${activeIndex.value}"]`
    );

    const nextSlide: HTMLElement | null = document.querySelector(
        `[data-index="${nextIndex}"]`
    );

    if (currentSlide && nextSlide != null) {
        currentSlide.dataset.status = 'after';
        nextSlide.dataset.status = 'becoming-active-from-before';
    }

    if (nextSlide && activeIndex.value != null) {
        setTimeout(() => {
            nextSlide.dataset.status = 'active';
            console.log(activeIndex.value);
            activeIndex.value = nextIndex;
            console.log(activeIndex.value);
        });
    }
}

export function handleRightClick(
    activeIndex: Ref<number>, 
    nodeLength: number
    ) {

    const nextIndex: number  =
        activeIndex.value + 1 <= nodeLength - 1
            ? activeIndex.value + 1
            : 0;

    const currentSlide: HTMLElement | null = document.querySelector(
        `[data-index="${activeIndex.value}"]`
    );

    const nextSlide: HTMLElement | null = document.querySelector(
        `[data-index="${nextIndex}"]`
    );

    if (currentSlide && nextSlide && activeIndex.value != null) {
        currentSlide.dataset.status = 'before';
        nextSlide.dataset.status = 'becoming-active-from-before';

        setTimeout(() => {
            nextSlide.dataset.status = 'active';
            activeIndex.value = nextIndex;
        });
    }
}
