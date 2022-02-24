<script lang="ts">
	import axios from 'axios';
	import { goto } from '$app/navigation';
	type Coordinates = null | [lat: number, lng: number];

	let predictionsArr;
	let countryCode = '';
	let placeId = '';

	// Input from user
	let locationInput: string = '';
	// Destination co-ords received from coordinateFetch
	let destinationLocation: Coordinates = null;
	// User input co-ords from getCurrentPosition - default is set to Manchester
	let userLocation: Coordinates = [53.48076, -2.24263];

	/* Event handlers */
	// Gets coordinates when user submits first form
	const onInitialSubmit = async (): Promise<void> => {
		await placeIdFetch();
		await coordinateFetch(placeId);
	};

	// Changing the dropdown queries the API to get new co-ords
	const onChange = async (e): Promise<void> => {
		await coordinateFetch(e.target.value);
	};

	// Go-to next page when user confirms correct location - passes through location, user location and country as URL params
	const onConfirmSubmit = (): void => {
		if (destinationLocation) {
			const searchUrl = `/getweather?lat=${destinationLocation[0]}&lng=${destinationLocation[1]}&country=${countryCode}&userlat=${userLocation[0]}&userlng=${userLocation[1]}`;
			goto(searchUrl);
		} else {
			// Error handling component here
			console.log('invalid location result');
		}
	};

	// Sets user location on locationButton click
	const onUserLocation = (): void => {
		let locationBox = document.getElementById('locationBox');
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(displayLocationInfo, showError);
		}

		function displayLocationInfo(position) {
			userLocation = [+position.coords.latitude.toFixed(5), +position.coords.longitude.toFixed(5)];
			locationBox.innerHTML = 'User location set.';
		}
		// Writes to page based on the error code
		function showError(error) {
			switch (error.code) {
				case error.PERMISSION_DENIED:
					locationBox.innerHTML =
						'User denied the request for Geolocation - default location is set to Manchester.';
					break;
				case error.POSITION_UNAVAILABLE:
					locationBox.innerHTML =
						'Location information is unavailable - default location is set to Manchester.';
					break;
				case error.TIMEOUT:
					locationBox.innerHTML =
						'The request to get user location timed out - default location is set to Manchester.';
					break;
				case error.UNKNOWN_ERROR:
					locationBox.innerHTML =
						'An unknown error occurred - default location is set to Manchester.';
					break;
			}
		}
	};

	// Call to Google Maps API to autocomplete a full address from the user's input. Gets the place id and array of predictions (used to build drop-down list)
	const placeIdFetch = async () => {
		const res = await axios.get(`/api/destination/${locationInput}`);
		const { place_id, predictions } = res.data;
		placeId = place_id;
		predictionsArr = predictions;
	};

	// Call to Google Geocoding API get lat/long coordinatess from the place id that was received in placesIdFetch
	const coordinateFetch = async (place: string): Promise<void> => {
		const res = await axios.get(`/api/latlng/${place}`);
		const { coordinates, country } = res.data;
		destinationLocation = coordinates;
		countryCode = country;
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
				bind:value={locationInput}
				placeholder="City, country or town..."
				required
			/>
		</div>
		{#if !locationInput}
			<p class="warning">Please enter a location to search.</p>
		{/if}
		<button on:click|once={onUserLocation} type="button">Get my location</button>
		<span id="locationBox" />
		<p>Press to give your current location</p>
		<button id="locationButton" type="submit">Submit</button>
	</form>

	{#if destinationLocation}
		<!-- Confirmation of input form -->
		<form on:submit|preventDefault={onConfirmSubmit}>
			<p>Your Search: {locationInput}</p>
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
