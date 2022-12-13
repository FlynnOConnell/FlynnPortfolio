import { defineComponent, reactive } from 'vue';

const GistComponent = defineComponent({
  props: {
    // The URL of the GitHub Gist to convert into a component
    url: String,
  },
  setup(props) {
    // Use a reactive variable to store the rendered HTML of the Gist
    const html = reactive('');

    // Fetch the Gist from the given URL and set the HTML
    async function fetchGist() {
      const response = await fetch(props.url);
      const json = await response.json();
      html.value = json.div;
    }

    // Fetch the Gist when the component is created
    fetchGist();

    return { html };
  },
  render() {
    // Return the rendered HTML of the Gist
    return this.html;
  },
});
