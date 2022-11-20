<script>
import CppIcon from "../components/svgicons/CppIcon.vue";
import CIcon from "../components/svgicons/CIcon.vue";

export default {
	layout: "layout_main",
	components: {
		CppIcon,
		CIcon,
	},
	methods: {
		psGithub() {
			const link = document.createElement("a");
			link.href = "https://github.com/NeuroPyPy/PremierSuite";
			link.target = "_blank";
			link.click();
		},
	},

	head() {
		return {
			title: "Flynns Website",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"My personal portfolio with some fun things I've done and will continue doing.",
				},
			],
			script: [
				{
					src: "./js/observer.js",
					body: true,
				},
				{
					src: "./js/responsive.js",
					body: true,
				},
			],
			css: [
				{
					src: "~/assets/css/colors.css",
				},
			],
		};
	},
};
</script>

<template>
	<div class="m-8 flex flex-col items-center justify-center">
		<div class="flex flex-col flex-wrap justify-center">
			<div
				class="flex flex-wrap items-center justify-center align-center gap-4"
			>
				<button @click="psGithub">
					<font-awesome-icon
						:icon="['fab', 'github']"
						inverse
						size="2x"
					/>
				</button>

				<h1 class="gamma lato ls-small">Premier Suite GUI</h1>
				<div class="flex justify-left mx-2 mb-2">
					<CppIcon />
					<CIcon />
				</div>
			</div>
			<video controls muted autoplay="true">
				<source
					src="../static/movies/PremierSuiteExample.mp4"
					type="video/mp4"
				/>
				<source
					src="../static/movies/PremierSuiteExample_h264_youtube720.mp4"
					type="video/mp4"
				/>
				<source
					src="../static/movies/PremierSuiteExample_h264_aac.mp4"
					type="video/mp4"
				/>
				<source
					src="../static/movies/PremierSuiteExample_h264_mobile720.mp4"
					type="video/mp4"
				/>
				Video format not supported by your browser.
			</video>
		</div>

		<h5>PremierSuite</h5>
		<p>
			is a downloadable plugin for
			<a href="https://www.rocketleague.com/">RocketLeague</a> that allow
			users to manipulate the server to instantly leave, join or change
			games. It is written in C++ and uses the ImGui framework with a
			built-in Gui to both extend and provide additional functionality
			within rocket league.
		</p>

		<div class="container pt-7 m-0 overflow-auto relative rounded-md">
			<pre>
			<code v-highlight class="c++ rounded-3xl">// From ImGui namespace
void PremierSuite::Render()
{
	static bool show_app_main_menu_bar = true;
	if (ImGui::Begin(menuTitle.c_str(),
		&isWindowOpen,
		ImGuiWindowFlags_None))
	{
		if (ImGui::BeginTabBar(
			"#TabBar", ImGuiTabBarFlags_NoCloseWithMiddleMouseButton)) {

			renderInstantSettingsTab();
			renderKeybindsTab();
			ImGui::EndTabBar();
		}
	}
	ImGui::End();
	if (!isWindowOpen) {
		cvarManager->executeCommand("togglemenu " + GetMenuName());
	}
}
			</code>
		  </pre>
		</div>
	</div>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: 1;
	margin-top: 0;
	color: #fff;
	display: inline-block;
	position: relative;
}

code {
	/* font-family: "Roboto Mono", monospace; */
	font-size: 0.7rem;
	/* background-color: #1D192B; */
	/* color: rgb(176, 176, 176); */
}

pre {
	border-radius: 25px;
	page-break-inside: avoid;
	font-family: monospace;
	line-height: 1.6;
	/* margin-bottom: 1.6em; */
	max-width: 100%;
	padding: 1em 1.5em;
	display: block;
	word-wrap: break-word;
}

p {
	color: #adb7bd;
	font-family: "Lucida Sans", Arial, sans-serif;
	font-size: 16px;
	line-height: 26px;
	text-indent: 30px;
	margin: 0;
}
</style>
