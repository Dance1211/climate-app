<script lang="ts">
	import Chart from '$components/Chart.svelte';
    export let src: string;
    export let place: string;
    export let country: string;
    export let weather;
</script>

<div class="LocationData">
	<h1>
		{place}, {country}
	</h1>
	<!-- include climate code here -->
	<img {src} alt={place} />

	<h2>Location Data</h2>
	<div class="TempGraph">
		<Chart {weather}/>
	</div>

	<div class="LocationSuggestions">
		<h3>You may also like...</h3>
	</div>
</div>

<style>
	h1 {
		text-transform: capitalize;
	}
	img {
		width: 300px;
		height: auto;
	}
</style>
