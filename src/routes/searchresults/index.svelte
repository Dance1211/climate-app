<script lang="ts">
	import type { KGCode } from '$lib/types/kg-code';
	import { koppenZones } from '$lib/types/kg-code';
	import WeatherCard from '$lib/components/WeatherCard.svelte';
	import type { City } from '$lib/types/cities';
	import Map from '$lib/components/map.svelte';
	let kgCode: KGCode = null;
	export let combinedData: City[];
	const mapCoord = combinedData.map((data) => {
		return data.details;
	});
</script>

<!-- wrap rendered card in Link -->
<!-- pass city obj as prop -->
<Map cities={mapCoord} />
<h1>Climate Zone: {koppenZones[combinedData[0].details.kgcode]}</h1>
{#each combinedData as city}
	<WeatherCard {city} />
{/each}