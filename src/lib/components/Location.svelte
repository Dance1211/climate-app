<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';
	import Chart from '../components/Chart.svelte';
	const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

	let place: string = '';
	let country: string = '';
	let place_id: string;

	// get place from url params
	let dummy = {
		height: 499,
		html_attributions: [
			'<a href="https://maps.google.com/maps/contrib/108917525799035589745">Mike Ledwith</a>'
		],
		photo_reference:
			'Aap_uEBmSUTTQOUbkobEOPS4z8AWnypto8aNTqgOpumo9GPMkisuJtiT5KqZO2GgOuZ-7vtO60G8Tm7NkA8UAhB4iQnEJbOirlxQiTp2ZmOwJXzpVX16uDPFlvZ1H7eYCfAunFTIOT-4155e3Zl9jflZSuQrUJ-3-qq8cCkV2C0xwgYSmP4V',
		width: 887
	};

	let src = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${dummy.photo_reference}&key=${apiKey}`;

	let data;

	onMount(async () => {
		let params = new URLSearchParams(document.location.search);
		place = params.get('place');
		country = params.get('country');

		const getPlaceId = async (): Promise<string> => {
			const res = await axios.get(`api/destination/${place}`);
			return res.data.place_id;
		};
		//	place_id = await getPlaceId();

		const infoFetch = async () => {
			const res = await axios.get(`/api/placeinfo/${place_id}`);
			return res.data;
		};
		//	data = await infoFetch();
		console.log(data, 'data');
	});
</script>

<div class="LocationData">
	<h1>
		{place.slice(0, 1).toUpperCase() + place.slice(1)}, {country.slice(0, 1).toUpperCase() +
			country.slice(1)}
	</h1>
	<img {src} alt={place} />
	{@html dummy.html_attributions}
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
</style>
