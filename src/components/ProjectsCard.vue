<script setup lang="ts">
import { ref, defineComponent } from 'vue'
import { useSwipe } from '@/assets/js/swipe'

defineProps({
  dataindex: String,
  datastatus: String,
})
</script>

<template>
        <article :data-index="0" data-status="active">
            <div class="article-image-section article-section"></div>
            <div class="article-description-section article-section">
                <p>
                    Neuroscientist, programmer, learner and
                    <a
                        class="source-link"
                        href="https://www.mdpi.com/2072-6643/13/9/3062/htm"
                        target="_blank"
                    >
                        peer reviewed author. </a
                    >.
                    <a
                        class="yt-link"
                        href="https://youtu.be/nG2IyH43xMU"
                        target="_blank"
                        ><i class="fa-brands fa-youtube"></i></a
                    >.
                </p>
            </div>
            <div class="article-title-section article-section">
                <h2>Neuroscientist and Programmer</h2>
                <font-awesome-icon :icon="['fas', 'plus']" inverse size="2x" />
            </div>
            <div class="article-nav-section article-section">
                <button
                    class="article-nav-button"
                    type="button"
                    @click="useSwipe(3, 'left')"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-left-long']"
                        inverse
                    />
                </button>
                <button
                    class="article-nav-button"
                    type="button"
                    @click="useSwipe(3, 'right')"
                >
                    <font-awesome-icon
                        :icon="['fas', 'arrow-right-long']"
                        inverse
                    />
                </button>
            </div>
        </article>
</template>