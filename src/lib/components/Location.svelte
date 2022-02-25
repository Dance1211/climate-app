<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';
	let place: string = '';
	let country: string = '';
	let place_id: string;

	// get place from url params

	let data;

	onMount(async () => {
		let params = new URLSearchParams(document.location.search);
		place = params.get('place');
		country = params.get('country');

		const getPlaceId = async (): Promise<string> => {
			const res = await axios.get(`api/destination/${place}`)
			return res.data.place_id;
		}
		place_id = await getPlaceId();

		const infoFetch = async () => {
			const res = await axios.get(`/api/placeinfo/${place_id}`);
			return res.data;
		};
		data = await infoFetch();
		console.log(data,'data');
	});
</script>

<div class="LocationData">
	<h1>
		{place.slice(0, 1).toUpperCase() + place.slice(1)}, {country.slice(0, 1).toUpperCase() +
			country.slice(1)}
	</h1>
	{#if data}
		{#if data.rating}
			<p>Rating: {data.rating} based on {data.user_ratings_total} reviews.</p>
		{/if}
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
