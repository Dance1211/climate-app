<script lang="ts">
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	const apiKey = import.meta.env.VITE_API_KEY;
	type Query = { location: string;};
	type Coordinates = null | [lat: number, lng: number];

	let predictionsArr;

	$: console.log(predictionsArr, 'predictionsArr');
	// Input from user
	let searchQuery: Query = {
		location: '',
	};

	// Destination co-ords received from coordinateFetch
	let destinationLocation: Coordinates = null;

	// User input co-ords from getCurrentPosition - default is set to Manchester
	let userLocation: Coordinates = [53.48076, -2.24263];

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


	const getUserLocation = (): void => {
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
					errorBox.innerHTML = 'User denied the request for Geolocation - default location is set to Manchester.';
					break;
				case error.POSITION_UNAVAILABLE:
					errorBox.innerHTML = 'Location information is unavailable - default location is set to Manchester.';
					break;
				case error.TIMEOUT:
					errorBox.innerHTML = 'The request to get user location timed out - default location is set to Manchester.';
					break;
				case error.UNKNOWN_ERROR:
					errorBox.innerHTML = 'An unknown error occurred - default location is set to Manchester.';
					break;
			}
		}
	}


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
			<button on:click|once={getUserLocation} type="button">Get my location</button>
			<button type="submit">Submit</button>
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
