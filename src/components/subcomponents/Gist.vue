<template>
  <div>
    <highlightjs :language="gistprops.language" :code="gistcontent" />
  </div>
</template>

<script setup>
import highlightjs from '@/components/subcomponents/HighlightCode.vue';
import { onMounted, ref, computed } from 'vue';
import { Octokit } from 'octokit';

let gist = ref('');
let gistcontent = computed(() => gist.value);
const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN
})

const gistprops = defineProps({
  gist_id: {
    type: String,
    required: true
  },
  file_name: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
});

onMounted(async () => {

  let mygist = await octokit.request(`GET /gists/${gistprops.gist_id}`,
    {
      gist_id: gistprops.gist_id
    }
  )
  gist.value = mygist.data.files[`${gistprops.file_name}`].content;
  console.log('loaded')
});

</script>

<style scoped lang="scss">
code {
  font-size: 0.75rem !important;
}
</style>




