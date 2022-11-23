<script setup lang="ts">
import * as d3 from "d3";
import {scatterPlot3d} from '@/assets/ts/scatter.js';
scatterPlot3d( d3.select('#divPlot'));
</script>

<template>
    <div id="divPlot"></div>
</template>

<style scoped>
#divPlot {
    width: 100%;
    height: 100%;
}
</style>
