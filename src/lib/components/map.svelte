<script lang="ts">
	import type { CityDB } from '$lib/types/cities';

	export let cities = [] as CityDB[];
</script>

<section class="map">
	{#each cities as city}
		<div class="marker" />
	{/each}
</section>

<style>
	.map {
		position: relative;
		width: 100%;
		max-width: 100vw;
		max-height: 100vh;
		background-image: url('/images/mapBackground.png');
		background-position: center;
		background-size: cover;
		aspect-ratio: 2;
	}

	.marker {
	}
</style>
