<script setup lang="ts">

</script>

<template>
    <defs>
        <filter id="hoverFilter">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"></feGaussianBlur>
            <feOffset in="blur" dx="4" dy="4" result="offsetBlur"></feOffset>
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20"
                lighting-color="#bbbbbb" result="highlight">
                <fePointLight x="-5000" y="-10000" z="20000" result="04839686-a98a-4f8f-9273-dd79f08a4b43">
                </fePointLight>
            </feSpecularLighting>
            <feComposite in="highlight" in2="SourceAlpha" operator="in" result="highlightApplied"></feComposite>
            <feComposite in="SourceGraphic" in2="highlightApplied" operator="arithmetic" k2="1" k3="1"
                result="highlightText"></feComposite>
            <feMerge result="ce8d7405-a4e5-41a3-9a2d-a623ac92290a">
                <feMergeNode in="offsetBlur"></feMergeNode>
                <feMergeNode in="highlightText"></feMergeNode>
            </feMerge>
        </filter>
    </defs>
</template>

<style>

</style>
