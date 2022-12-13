<script setup lang="ts">
import { ref } from 'vue';
const headRef = ref<any>(null);
let scrollPosition = ref(0);

</script>

<template>
    <div ref="headRef" class="header lg:h-[70px]" :class="[scrollPosition >= 120 ? 'shrink-header' : '', '']">
        <div class="header-back lg:justify-between px-2 lg:px-4 xl:px-12 lg:text-2xl leading-6 lg:h-auto">
            <div class="flex items-center">
                <button class="text-[var(--light-slate)] font-bold text-sm" type="button" @click="$router.go(-1)">
                    <font-awesome-icon :icon="['fas', 'home']" inverse style="color: var(--light-slate)" />
                </button>
            </div>
        </div>
        <div
            class="header-inner text-[var(--light-slate)] lg:justify-between px-2 lg:px-4 xl:px-12 lg:text-2xl leading-6 lg:h-auto">

            <router-link data-status="active" id="PremierSuite" class="animation-underline"
                :to="{ name: 'UnderEngineer', hash: '#PremierSuite' }">PremierSuite</router-link>
            <router-link data-status="inactive" id="Canalysis" class="animation-underline"
                :to="{ name: 'UnderEngineer', hash: '#Canalysis' }">Canalysis</router-link>
            <router-link data-status="inactive" id="NeuralNetwork" class="animation-underline"
                :to="{ name: 'UnderEngineer', hash: '#NeuralNetwork' }">Neural Network
            </router-link>
            <router-link data-status="inactive" id="DataViewer" class="animation-underline"
                :to="{ name: 'UnderEngineer', hash: '#DataViewer' }">Dataviewer</router-link>

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

.shrink-header .header-inner {
    padding-top: .35rem !important;
    padding-bottom: .35rem !important;
    font-size: larger !important;
}
</style>
