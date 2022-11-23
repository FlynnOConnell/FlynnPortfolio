<script>
export default {
	name: "appheader2",
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
};
</script>

<template>
	<header>
		<nav data-toggled="false" data-transitionable="false">
			<div id="nav-logo-section" class="nav-section">
				<a href="#">
					<div class="flex justify-center align-center items-center">
						<embed
							style="filter: brightness(0) invert(1);"
							src="../static/signature_black.svg"
						/>
					</div>
				</a>
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
				<i class="fa-solid fa-bars"></i>
			</button>
		</nav>
	</header>
</template>

<style scoped>
* {
	box-sizing: border-box;
}

nav {
	display: flex;
	flex-direction: row;
	width: 100%;
	border-bottom: 1px solid var(--background-color);
}

nav >>> .nav-section {
	padding: 3rem 2rem;
	display: flex;
	gap: 1rem;
	border-left: 1px solid var(--background-color);
	align-items: center;
	justify-content: center;
}

#nav-logo-section {
	justify-content: flex-start;
}

#nav-links-section > a > i {
	font-size: 2.5rem;
}

#nav-links-section {
	gap: 6rem;
}

#nav-social-section {
	gap: 3rem;
	flex-grow: 1;
}

#nav-logo-section,
#nav-links-section {
	flex-basis: calc(100% / 3);
}

#nav-contacts-sectioin {
	flex-grow: 1;
}
</style>
