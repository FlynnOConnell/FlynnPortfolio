<template>
	<section class="flexed-line justify-center mt-5">
		<div class="flex items-center text-yellow-600 text-xs ml-2">
			<span>{{ recentTracksStr }}</span>
		</div>
	</section>
</template>

<script>
import { getRecentlyPlayed } from "../../plugins/api/spotify";
export default {
	name: "RecentSpotify",
	data() {
		return {
			recentTracksStr: "Nothing playing right now.",
		};
	},
	watch: {
		"$route.path"() {
			this.recentTracks();
		},
	},
	beforeMount() {
		this.recentTracks();
	},
	methods: {
		async recentTracks() {
			try {
				const response = await getRecentlyPlayed();
				if (response.status === 200) {
					const { items } = await response.json();
                    console.log(items)
					this.recentTracksStr = `${
						np ? "Now playing:" : "Last played:"
					} ${item.name}
                                    by ${item.artists
										.map((artist) => artist.name)
										.join(", ")}.`;
				}
			} catch (e) {
				this.recentTracksStr = "Couldn't fetch data :(";
			}
		},
	},
};
</script>

<style scoped>
.spotify-icon {
  width: 20px;
  height: 20px;
  max-width: 100%;
	max-height: 100%;
}
</style>
