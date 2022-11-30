<!-- MyTransition.vue -->
<script lang="ts">
// JavaScript hooks logic...
</script>

<template>
    <!-- wrap the built-in Transition component -->
    <Transition name="my-transition" mode="out-in">
        <slot></slot>
        <!-- pass down slot content -->
    </Transition>
</template>

<style>
/*
  Necessary CSS...
  Note: avoid using <style scoped> here since it
  does not apply to slot content.
*/
</style>
