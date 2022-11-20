import Vue from 'vue'

Vue.directive('highlightjs', {
    deep: true,
    bind: function(el, binding) {
      // highlight all targets
      let targets = el.querySelectorAll('code')
      targets.forEach((target) => {
        // override this in case of binding 
        if (binding.value) {
          target.textContent = binding.value
        }
        hljs.highlightBlock(target)
      })
    },
  })