<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';

	let data;

	let place_id = 'ChIJN1t_tDeuEmsRUsoyG83frY4';

	const infoFetch = async () => {
		const res = await axios.get(`/api/placeinfo/${place_id}`);
		return res.data;
	};

	onMount(async () => {
		data = await infoFetch();
		console.log(data);
	});
</script>

<div class="LocationData">
	<h1>Location Name</h1>
	{#if data}
		<p>Rating: {data.rating} based on {data.user_ratings_total} reviews.</p>
	{:else}
		<p>loading...</p>
	{/if}

	<h2>Location Data</h2>
	<div class="TempGraph">
		<h3>Average Temperature</h3>
	</div>
	<div class="LocationSuggestions">
		<h3>You may also like...</h3>
	</div>
</div>

<style>
</style>
