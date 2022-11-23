
<script>
import CppIcon from "../components/svgicons/CppIcon.vue";
import CIcon from "../components/svgicons/CIcon.vue";
import PyIcon from "../components/svgicons/PyIcon.vue";
import JavaIcon from "../components/svgicons/JavaIcon.vue";

export default {
	layout: "layout_main",
	components: {
		CppIcon,
		CIcon,
		PyIcon,
		JavaIcon,
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
					src: "./js/responsive.js",
					body: true,
				},
			],
			css: [
				{
					src: "~/assets/css/styles.css",
				},
			],
		};
	},
};
</script>

<template>
	<div class="m-8 flex flex-col items-center justify-center">
		<div class="text-holder">
			<div class="delta text-white text-center">
				<p class="capitalize hello m-3">
					Hi! I'm Flynn, a software developer and scientist living in
					New York. I'm currently working on a few projects, including
					a data analysis pipeline, a few machine learning algorithms
					and a video game plugin.
				</p>
			</div>
		</div>
		<div class="spacer"></div>

		<hr />
		<div class="spacer"></div>
		<div class="grid grid-cols-6 gap-4 justify-items-center">
			<div class="col-start-2 col-span-6 techstack">My Tech Stack</div>
			<div
				class="col-start-1 col-end-3 justify-self-end align-self-center techstack"
			>
				Languages
			</div>
			<div
				class="col-start-3 col-end-7 flex flex-wrap justify-items-center w-full h-fit"
			>
				<div class="icontainer">
					<CppIcon />
				</div>
				<div class="icontainer">
					<CIcon />
				</div>
				<div class="icontainer">
					<PyIcon />
				</div>
				<div class="icontainer">
					<JavaIcon />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.icontainer {
	display: inline-flex;
	min-width: 50px;
	min-height: 50px;
}
.spacer {
	height: 10vh;
}

.hello {
	color: aqua;
	font-family: "Original Surfer", cursive;
	font-size: 1.2rem;
	line-height: 28px;
	max-width: 110vh;
}

.techstack {
	color: #00704b;
	font-family: "Lobster", cursive;
	font-size: 36px;
	font-weight: normal;
	line-height: 48px;
	text-shadow: 1px 0 0 #fff;
}

.text-holder {
	max-width: 100%;
	background-color: #06396e;
	border-radius: 10px;
	box-shadow: 0px 0px 31px 8px rgba(0, 31, 63, 0.75) inset;
	-webkit-box-shadow: 0px 0px 31px 8px rgba(0, 31, 63, 0.75) inset;
	-moz-box-shadow: 0px 0px 31px 8px rgba(0, 31, 63, 0.75) inset;
}
</style>

