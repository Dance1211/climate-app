<script lang="ts">
	import { koppenZones } from '$lib/types/kg-code';
	import Chart from '$components/Chart.svelte';
	export let src: string;
	export let place: string;
	export let country: string;
	export let weather: any;
	export let cityInfo: any[];
</script>

<div class="LocationData">
	<h1>
		{place}, {country}
	</h1>
	<h2>Climate Zone: {koppenZones[cityInfo[0].details.kgcode]}</h2>
	<img {src} alt={place} />

	<h2>Location Data</h2>
	<div class="TempGraph">
		<Chart {weather} />
	</div>

	<div class="LocationSuggestions">
		<h3>You may also like...</h3>
		{#each cityInfo as city (city.details._id)}
			<a href={`/location?place=${city.details.city_ascii}&country=${city.details.country}`}
				>{city.details.city}, {city.details.country}</a
			>
			<img src={city.src} alt={city.details.city} />
		{/each}
	</div>
</div>

<style>
	.LocationData {
		margin-top: 75px;
	}
	h1 {
		text-transform: capitalize;
	}
	img {
		width: 300px;
		height: auto;
	}
</style>