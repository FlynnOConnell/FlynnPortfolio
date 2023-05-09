<template>
  <highlightjs :language="gitlanguage" :code="gitcontent" />
</template>

<script setup>
import highlightjs from '@/components/subcomponents/HighlightCode.vue';
import { computed } from 'vue';

const gitcodeprops = defineProps({
  content: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
});

const gitcontent = computed(() => gitcodeprops.content);
const gitlanguage = computed(() => gitcodeprops.language);

</script>

<style lang="scss">
code {
  font-size: 0.75rem !important;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-x: hidden;
}

code.hljs {
  background: var(--surface-bg) !important;
}
</style>




