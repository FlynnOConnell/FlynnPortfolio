<template>
	<div v-html="blog.content" />
</template>

<script>
export default {
  data () {
    return {
      blog: {}
    }
  },

  async fetch() {
    // get the blog content e
  },

  mounted () {
    setTimeout(function () {
      document.querySelectorAll('pre')
        .forEach((block) => {
          hljs.highlightBlock(block)
        })
    }, 1000)
  }
}
</script>

<style src="highlight.js/styles/night-owl.css"></style>
