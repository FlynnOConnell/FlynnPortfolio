<script>
import CppIcon from "../components/svgicons/CppIcon.vue";
import CIcon from "../components/svgicons/CIcon.vue";
import PyIcon from "../components/svgicons/PyIcon.vue";
import JavaIcon from "../components/svgicons/JavaIcon.vue";

export default {
	name: "carousel",
	layout: "layout_main",
	components: {
		CppIcon,
		CIcon,
		PyIcon,
		JavaIcon,
	},
	data() {
		return {
			hover: false,
		};
	},
	methods: {
		toGithub() {
			const link = document.createElement("a");
			link.href = "https://github.com/NeuroPyPy";
			link.target = "_blank";
			link.click();
		},
		toTwitter() {
			const link = document.createElement("a");
			link.href = "https://twitter.com/FlynnNeuro";
			link.target = "_blank";
			link.click();
		},
		toLinkedin() {
			const link = document.createElement("a");
			link.href = "https://www.linkedin.com/in/flynnoconnell/";
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
					src: "./js/responsive.js",
					body: true,
				},
				{
					src: "/js/layout.js",
					// body: true,
				},
			],
			css: [
				{
					src: "~/assets/css/styles.css",
				},
				{
					src: "~/assets/css/main.css",
				},
			],
		};
	},
};
</script>

<template>
	<div class="body">
		<nav data-toggled="false" data-transitionable="false">
			<div id="nav-logo-section" class="nav-section">
				<a
					href="#"
				>
					<font-awesome-icon
						:icon="['fas', 'flask']"
						inverse
						size="2x"
					/>
				</a>
				<div class="flex justify-center align-center items-center">
					<a href="#">
						<embed
							@mouseenter="hover = true"
							@mouseleave="hover = false"
							class="svg"
							:class="{ 'svg-hover': hover }"
							src="../static/signature_black.svg"
						/>
					</a>
				</div>
			</div>
			<div id="nav-mobile-section">
				<div id="nav-link-section" class="nav-section">
					<a href="#">ABOUT</a>
					<a href="#">PROJECTS</a>
				</div>
				<div id="nav-social-section" class="nav-section">
					<links />
				</div>
				<div id="nav-contact-section" class="nav-section">
					<a href="#">GET IN TOUCH</a>
				</div>
			</div>
			<button
				id="nav-toggle-button"
				type="button"
				onclick="handleNavToggle()"
			>
				<span>Menu</span>
				<font-awesome-icon
						:icon="['fas', 'bars']"
						inverse
					/>
			</button>
		</nav>
		<div class="main">
			<article data-index="0" data-status="active">
				<div class="article-image-section article-section"></div>
				<div class="article-description-section article-section">
					<p>
						Neuroscientist, programmer, learner and 
						<a
							class="source-link"
							href="https://www.dylanbrouwer.design/work"
							target="_blank"
							> peer reviewed author. </a
						>. 
						<a
							class="yt-link"
							href="https://youtu.be/nG2IyH43xMU"
							target="_blank"
							><i class="fa-brands fa-youtube"></i></a
						>.
					</p>
				</div>
				<div class="article-title-section article-section">
					<h2>Neuroscientist and Programmer</h2>
					<font-awesome-icon
						:icon="['fas', 'plus']"
						inverse
						size="2x"
					/>
				</div>
				<div class="article-nav-section article-section">
					<button
						class="article-nav-button"
						type="button"
						onclick="handleLeftClick()"
					>
					<font-awesome-icon
						:icon="['fas', 'arrow-left-long']"
						inverse
					/>
					</button>
					<button
						class="article-nav-button"
						type="button"
						onclick="handleRightClick()"
					>
					<font-awesome-icon
						:icon="['fas', 'arrow-right-long']"
						inverse
					/>
					</button>
				</div>
			</article>
			<article data-index="1" data-status="inactive">
				<div class="article-image-section article-section"></div>
				<div class="article-description-section article-section">
					<p>
						Hi! I'm Flynn. I'm a Neuroscientist with a love of
						software, programming and learning.
					</p>
				</div>
				<div class="article-title-section article-section">
					<h2>Some other stuff here</h2>
					<font-awesome-icon
						:icon="['fas', 'plus']"
						inverse
						size="2x"
					/>
				</div>
				<div class="article-nav-section article-section">
					<button
						class="article-nav-button"
						type="button"
						onclick="handleLeftClick()"
					>
					<font-awesome-icon
						:icon="['fas', 'arrow-left-long']"
						inverse
					/>
					</button>
					<button
						class="article-nav-button"
						type="button"
						onclick="handleRightClick()"
					>
					<font-awesome-icon
						:icon="['fas', 'arrow-right-long']"
						inverse
					/>
					</button>
				</div>
			</article>
			<article data-index="2" data-status="inactive">
				<div class="article-image-section article-section"></div>
				<div class="article-description-section article-section">
					<p>
						I uh love the beach?
					</p>
				</div>
				<div class="article-title-section article-section">
					<h2>C++ project goes here</h2>
					<font-awesome-icon
						:icon="['fas', 'plus']"
						inverse
						size="2x"
					/>
				</div>
				<div class="article-nav-section article-section">
					<button
						class="article-nav-button"
						type="button"
						onclick="handleLeftClick()"
					>
					<font-awesome-icon
						:icon="['fas', 'arrow-left-long']"
						inverse
				
					/>
					</button>
					<button
						class="article-nav-button"
						type="button"
						onclick="handleRightClick()"
					>
					<font-awesome-icon
						:icon="['fas', 'arrow-right-long']"
						inverse
			
					/>
					</button>
				</div>
			</article>
			<article data-index="3" data-status="inactive">
				<div class="article-image-section article-section"></div>
				<div class="article-description-section article-section">
					<p>
						Data Analysis Pipeline here.
					</p>
				</div>
				<div class="article-title-section article-section">
					<h2>Super Space Blob</h2>
					<i class="fa-light fa-plus-large"></i>
				</div>
				<div class="article-nav-section article-section">
					<button
						class="article-nav-button"
						type="button"
						onclick="handleLeftClick()"
					>
						<i class="fa-light arrow-left-long"></i>
					</button>
					<button
						class="article-nav-button"
						type="button"
						onclick="handleRightClick()"
					>
						<i class="fa-light arrow-right-long"></i>
					</button>
				</div>
			</article>
		</div>
	</div>
</template>

<style>
.svg {
	filter: brightness(0) invert(1);
}

.svg-hover {
	filter: invert(41%) sepia(69%) saturate(927%) hue-rotate(227deg)
		brightness(80%) contrast(86%);
}

.hl-hover {
	color: var(--highlight-color);
}

a:hover {
	color: var(--highlight-color);
}
</style>
