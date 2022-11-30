import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useActiveIndexStore = defineStore('activeIndexStore', {
    state: () => ({
        activeIndex: 0,
        currentSlide: 'about',
    }),
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        setIndex(newIndex: number) {
            this.activeIndex = newIndex;
        },
        setSlide() {
            if (this.activeIndex === 0) {
                this.currentSlide = 'about';
            } else if (this.activeIndex === 1) {
                this.currentSlide = 'scientist';
            } else if (this.activeIndex === 2) {
                this.currentSlide = 'engineer';
            } else {
                console.log('error');
            }
        },
    },
});
