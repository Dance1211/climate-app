<script lang="ts">
	import type { KGCode } from '$lib/types/kg-code';
	import WeatherCard from '$lib/components/WeatherCard.svelte';

	let kgCode: KGCode = null;

	export let combinedData;
</script>

<!-- wrap rendered card in Link -->
<!-- pass city obj as prop -->
{#each combinedData as city}
	<WeatherCard {city} />
{/each}
