<script>
export default {
	name: "appfooter",
	client: true,
};	
</script>

<template>
	<footer>
		<a
			id="source-link"
			class="meta-link"
			href="https://github.com/NeuroPyPy/vue-nuxt-portfolio"
			target="_blank"
		>
			<i class="fa fa-github" aria-hidden="true"></i>
			<span> Source </span>
		</a>

		<p class="text-center text-lg text-white">
			Copyright &copy; 2022 Flynn OConnell
		</p>
		<nuxt-link class="text-white top-link" to="home">
			Back to Top
		</nuxt-link>
	</footer>
</template>


<style scoped>
footer {
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	position: relative;
	height: auto;
	width: auto;
	padding: 10hv;
}

.top-link {
	align-items: center;
	backdrop-filter: blur(3px);
	background-color: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 6px;
	bottom: 10px;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	display: inline-flex;
	gap: 5px;
	right: 10px;
	padding: 10px 20px;

	text-decoration: none;
	transition: background-color 400ms, border-color 400ms;
	z-index: 10000;
}

button:hover {
	background-color: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.2);
}

#icon {
	color: rgba(255, 255, 255, 0.15);
	font-size: 80vmin;
	opacity: 0;
	pointer-events: none;
	transition: opacity 1200ms ease;
	z-index: 1;
}

.meta-link {
	align-items: center;
	backdrop-filter: blur(3px);
	background-color: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 6px;
	bottom: 10px;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	display: inline-flex;
	gap: 5px;
	left: 10px;
	padding: 10px 20px;
	text-decoration: none;
	transition: background-color 400ms, border-color 400ms;
	z-index: 10000;
}

.meta-link:hover {
	background-color: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.2);
}

.meta-link > i,
.meta-link > span {
	height: 20px;
	line-height: 20px;
}

.meta-link > span {
	color: white;
	font-family: "Rubik", sans-serif;
	transition: color 400ms;
}
</style>
