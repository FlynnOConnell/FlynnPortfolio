<template>
	<section class="flexed-line justify-center mt-5">
		<div class="flex items-center text-yellow-600 text-xs ml-2">
			<span>{{ tracks }}</span>
		</div>
	</section>
</template>

<script>
import { getTopTracks } from "../../plugins/api/spotify";
export default {
	name: "TopSpotify",
	data() {
		return {
			tracks: "Top tracks can't be loaded.",
		};
	},
	watch: {
		"$route.path"() {
			this.topTracks();
		},
	},
	beforeMount() {
		this.topTracks();
	},
	methods: {
		async topTracks() {
			try {
				const response = await getTopTracks();
				if (response.status === 200) {
					const { items } = await response.json();
					console.log(items);
					const tracks = items.slice(0, 10).map((track) => ({
						artist: track.artists
							.map((_artist) => _artist.name)
							.join(", "),
						songUrl: track.external_urls.spotify,
						title: track.name,
					}));
				} console.log(this.tracks)
				console.log(tracks)
			} catch (e) {
				this.items = "Couldn't fetch data :(";
			}
		},
	},
};
</script>

<style scoped></style>
