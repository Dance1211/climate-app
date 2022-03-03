<script lang="ts">
	import type { CityDB } from '$lib/types/cities';
	import type { Coordinates } from '$lib/types/kg-code';

	// Default value for Manchester
	export let cities: {details: CityDB, index: number}[]

	const getMapPositionLeft = (coordinates: Coordinates): number => {
		return (coordinates[0] + 180) / 3.6;
	};
	const getMapPositionTop = (coordinates: Coordinates): number => {
		return (90 - coordinates[1]) / 1.8;
	};
</script>

<section class="map">
	{#each cities as city}
		<div
			class="marker"
			style="top: {getMapPositionTop(city.details.location.coordinates)}%; left: {getMapPositionLeft(
				city.details.location.coordinates
			)}%"
		>{city.index}</div>
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
		background-size: contain;
		/* Aspect ratio is not formally supported in all browsers */
		aspect-ratio: 2;
	}
	.marker {
		position: absolute;
		background-image: url('/images/map-marker_orange.svg');
		background-position: center bottom;
		background-repeat: no-repeat;
		background-size: contain;
		width: 20px;
		height: 20px;
		color: white;
		transform: translate(-50%, -100%);

		font-size: 10px;
		text-align: center;
	}
	.marker:hover {
		transform: translate(-50%, -105%) scale(1.1);
	}
</style>
