<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';
	import Chart from '../components/Chart.svelte';
	const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

	let place: string = '';
	let country: string = '';
	let place_id: string;
	let src: string;
	let data;
	let photo_reference: string;

	onMount(async () => {
		let params = new URLSearchParams(document.location.search);
		place = params.get('place');
		country = params.get('country');

		const getPlaceId = async (): Promise<string> => {
			const res = await axios.get(`api/destination/${place}`);
			return res.data.place_id;
		};
		place_id = await getPlaceId();

		const infoFetch = async () => {
			const res = await axios.get(`/api/placeinfo/${place_id}`);
			return res.data;
		};
		data = await infoFetch();
		photo_reference = data.photos.photo_reference;
		src = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=AIzaSyC9fUjZpK0R-RE_BarfZmkv25fT3YCUirE`;

		/* This function is used to grab the raw image data. It is commented out because I don't know how to render it onto the page. 		
		const photoFetch = async () => {
			const res = await axios.get(`/api/placeinfo/photo/${photo_reference}`);
			return res.data.photo;
		};
		src = await photoFetch(); */
	});
</script>

<div class="LocationData">
	<h1>
		{place.slice(0, 1).toUpperCase() + place.slice(1)}, {country.slice(0, 1).toUpperCase() +
			country.slice(1)}
	</h1>
	<!-- include climate code here -->
	<img {src} alt={place} />

	{#if data}
		{#if data.rating}
			<p>Rating: {data.rating} based on {data.user_ratings_total} reviews.</p>
		{/if}
	{:else}
		<p>loading...</p>
	{/if}

	<h2>Location Data</h2>
	<div class="TempGraph">
		<Chart />
	</div>

	<div class="LocationSuggestions">
		<h3>You may also like...</h3>
	</div>
</div>

<style>
	img {
		width: 300px;
		height: auto;
	}
</style>
