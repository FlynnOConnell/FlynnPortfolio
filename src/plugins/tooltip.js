import Vue from "vue";

import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy, {
	directive: "tippy", // => v-tippy
	flipDuration: 0,
	popperOptions: {
		modifiers: {
			preventOverflow: {
				enabled: true,
			},
		},
	},
});

Vue.component("tippy", TippyComponent);
