<script lang="ts">
	import axios from 'axios';
	const apiKey = import.meta.env.VITE_API_KEY;
	type Query = { location: string; home: string };
	type Loc = { lat: number; lng: number };
	const mapsUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;

	let results;
	let destinationName: string = '';

	let searchQuery: Query = {
		location: '',
		home: ''
	};
	let locationRes: Loc = {
		lat: null,
		lng: null
	};

	const onSubmit = (): void => {
		placesAutoComplete();
	};

	function placesAutoComplete(): void {
		const displaySuggestions = function (
			predictions: google.maps.places.QueryAutocompletePrediction[] | null,
			status: google.maps.places.PlacesServiceStatus
		) {
			if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
				alert(status);
				return;
			}
			console.log(predictions);
			const place_id = predictions[0].place_id;
			destinationName = predictions[0].description;
			geoCodingFetch(place_id);
		};
		const service = new google.maps.places.AutocompleteService();
		service.getPlacePredictions({ input: searchQuery.location }, displaySuggestions);
	}

	const geoCodingFetch = async (placeId) => {
		const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
		results = await axios.get(baseUrl, {
			params: {
				key: apiKey,
				place_id: placeId
			}
		});
		locationRes.lat = results.data.results[0].geometry.location.lat;
		locationRes.lng = results.data.results[0].geometry.location.lng;
	};
</script>

<svelte:head>
	<title>Climate Travel App</title>
	<script async src={mapsUrl}>
	</script>
</svelte:head>

<main class="Search">
	<h2>Compare travel destinations by climate.</h2>

	<form on:submit|preventDefault={onSubmit}>
		<div>
			<label for="location">I like the weather in</label>
			<input
				type="text"
				name="location"
				id="location"
				bind:value={searchQuery.location}
				placeholder="City, country or town..."
				required
			/>
		</div>
		{#if !searchQuery.location}
			<p class="warning">Please enter a location to search.</p>
		{/if}
		<div>
			<label for="home">My location is</label>
			<input
				type="text"
				name="home"
				id="home"
				bind:value={searchQuery.home}
				placeholder="City or town..."
			/>
		</div>
		<button disabled={!searchQuery.location} type="submit">Search</button>
	</form>

	{#if results}
		<p>Your Search: {searchQuery.location}</p>
		<p>Found Location: {destinationName}</p>
		<p>Latitude: {locationRes.lat}</p>
		<p>Longitude: {locationRes.lng}</p>
	{/if}
</main>

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
	}
	form > div {
		display: flex;
		flex-direction: column;
	}
	.warning {
		color: red;
	}
</style>
