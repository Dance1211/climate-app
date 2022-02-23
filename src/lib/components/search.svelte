<script lang="ts">
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	const apiKey = import.meta.env.VITE_API_KEY;
	type Query = { location: string; home: string };
	type Coordinates = null | [lat: number, lng: number];

	let results;
	let destinationName: string = '';
	let predictionsArr;

	$: console.log(predictionsArr, 'predictionsArr');
	// Input from user
	let searchQuery: Query = {
		location: '',
		home: ''
	};

	// Destination co-ords received from coordinateFetch
	let destinationLocation: Coordinates = null;

	// User input co-ords from getCurrentPosition
	let userLocation: Coordinates = null;

	$: console.log(destinationLocation, 'destinationLocation');

	/* Event handlers */
	// Changing the dropdown queries the API to get new co-ords
	const onChange = async (e): Promise<void> => {
		destinationLocation = await coordinateFetch(e.target.value);
	};

	// Gets co-ords when user submits first form
	const onInitialSubmit = async (): Promise<void> => {
		const { place_id, predictions } = await placeIdFetch();
		predictionsArr = predictions;
		destinationLocation = await coordinateFetch(place_id);
	};

	// Go-to next page when user confirms correct location
	const onConfirmSubmit = (): void => {
		if (destinationLocation) {
			const searchUrl = `/searchresults&lat=${destinationLocation[0]}&lng=${destinationLocation[1]}`;
			goto(searchUrl);
		} else {
			// Error handling component here
			console.log('invalid location result');
		}
	};

	// Function to Google Maps API to autocomplete a full address from the user's input. Gets the place id and then calls geoCodingFetch to get the lat/long co-ords
	const placeIdFetch = async () => {
		const res = await axios.get(`/api/destination/${searchQuery.location}`);
		const place_id = res.data.place_id;
		const predictions = res.data.predictions;
		return { place_id, predictions };
	};

	// Function to Google Geocoding API get lat/long co-ords from the place id that we got through placesAutoComplete
	const coordinateFetch = async (place_id) => {
		const res = await axios.get(`/api/latlng/${place_id}`);
		return res.data.coordinates;
	};

	// When the page loads, get the user position
	onMount(async () => {
		let errorBox = document.getElementById('locationError');
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(displayLocationInfo, showError);
		}

		function displayLocationInfo(position) {
			userLocation = [+position.coords.latitude.toFixed(5), +position.coords.longitude.toFixed(5)];
		}

		function showError(error) {
			switch (error.code) {
				case error.PERMISSION_DENIED:
					errorBox.innerHTML = 'User denied the request for Geolocation.';
					break;
				case error.POSITION_UNAVAILABLE:
					errorBox.innerHTML = 'Location information is unavailable.';
					break;
				case error.TIMEOUT:
					errorBox.innerHTML = 'The request to get user location timed out.';
					break;
				case error.UNKNOWN_ERROR:
					errorBox.innerHTML = 'An unknown error occurred.';
					break;
			}
		}
	});
</script>

<svelte:head>
	<title>Climate Travel App</title>
</svelte:head>

<main class="Search">
	<h2>Compare travel destinations by climate.</h2>

	<!-- Input form -->
	<form on:submit|preventDefault={onInitialSubmit}>
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

	<span id="locationError" />

	{#if destinationLocation}
		<!-- Confirmation of input form -->
		<form on:submit|preventDefault={onConfirmSubmit}>
			<p>Your Search: {searchQuery.location}</p>
			<p>Did you mean...</p>
			<select on:change={onChange}>
				{#each predictionsArr as prediction (prediction.place_id)}
					<option value={prediction.place_id}>{prediction.placeName}</option>
				{/each}
			</select>
			<p>Latitude: {destinationLocation[0]}</p>
			<p>Longitude: {destinationLocation[1]}</p>
			<button disabled={!destinationLocation} type="submit">Search</button>
		</form>
	{/if}

	{#if userLocation}
		<p>User Location</p>
		<p>Latitude: {userLocation[0]}</p>
		<p>Longitude: {userLocation[1]}</p>
	{:else}
		<p>Please enable location</p>
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
