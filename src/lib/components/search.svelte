<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import LocationSearch from '$components/locationSearch.svelte';

	type Query = { location: string; home: string };
	type Coordinates = [lng: number, lat: number];

	// Input from user
	let searchQuery: Query = {
		location: '',
		home: ''
	};

	// Destination co-ords received from coordinateFetch
	let destinationLocation: null | Coordinates = null;
	let userLocation: null | Coordinates = [-2.24263, 53.48076];

	/* Event handlers */

	// Function to Google Geocoding API get lat/long co-ords from the place id that we got through placesAutoComplete
	const coordinateFetch = async (place_id: string): Promise<Coordinates> => {
		const res = await fetch(`/api/latlng/${place_id}`);
		const resObject = await res.json();
		return resObject.coordinates;
	};

	// Go-to next page when user confirms correct location
	const onConfirmSubmit = async (): Promise<void> => {
		destinationLocation = await coordinateFetch(searchQuery.location);
		if (destinationLocation) {
			const searchUrl = `/searchresults&lat=${destinationLocation[0]}&lng=${destinationLocation[1]}`;
			goto(searchUrl);
		} else {
			// Error handling component here
			console.log('invalid location result');
		}
	};

	// When the page loads, get the user position
	onMount(async () => {
		let errorBox = document.getElementById('locationError');
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(displayLocationInfo, showError);
		}

		function displayLocationInfo(position: GeolocationPosition): void {
			userLocation = [+position.coords.longitude.toFixed(5), +position.coords.latitude.toFixed(5)];
		}

		function showError(error: GeolocationPositionError) {
			switch (error.code) {
				case error.PERMISSION_DENIED:
					errorBox.innerHTML =
						'User denied the request for Geolocation - default location is set to manchester.';
					break;
				case error.POSITION_UNAVAILABLE:
					errorBox.innerHTML =
						'Location information is unavailable - default location is set to manchester.';
					break;
				case error.TIMEOUT:
					errorBox.innerHTML =
						'The request to get user location timed out - default location is set to manchester.';
					break;
				default:
					errorBox.innerHTML = 'An unknown error occurred - default location is set to manchester.';
					break;
			}
		}
	});
</script>

<svelte:head>
	<title>Climate Travel App</title>
</svelte:head>

<section class="container">
	<h2 class="header">Compare travel destinations by climate.</h2>

	<!-- Input form -->
	<form class="search-form" on:submit|preventDefault={onConfirmSubmit}>
		<label for="location">
			I like the weather in
			<LocationSearch
				bind:placeId={searchQuery.location}
				placeholder="City, country or town..."
				id="location"
				required={true}
			/>
		</label>

		<label for="home">
			My location is
			<LocationSearch placeholder="City or town..." id="home" bind:placeId={searchQuery.home} />
		</label>
		<button class="search-button" disabled={!searchQuery.location} type="submit">
			<i class="searchIcon material-icons">search</i> Search
		</button>
	</form>

	<span id="locationError" />

	<!-- {#if destinationLocation}
		<form on:submit|preventDefault={onConfirmSubmit}>
			<p>Your Search: {searchQuery.location}</p>
			<p>Did you mean...</p>
			<select on:change={onChange}>
				{#each predictionsArr as prediction (prediction.place_id)}
					<option value={prediction.place_id}>{prediction.placeName}</option>
				{/each}
			</select>
			<p>Longitude: {destinationLocation[0]}</p>
			<p>Latitude: {destinationLocation[1]}</p>
			<button disabled={!destinationLocation} type="submit">Search</button>
		</form>
	{/if} -->

	<!-- {#if userLocation}
		<p>User Location</p>
		<p>Longitude: {userLocation[0]}</p>
		<p>Latitude: {userLocation[1]}</p>
	{:else}
		<p>Please enable location</p>
	{/if} -->
</section>

<style>
	.container {
		z-index: 0;
		display: grid;
		width: 90%;
		max-width: 600px;
		padding: 1.5rem;
		background: var(--col-bg);
		box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
		border-radius: 20px;
		text-align: center;
		margin: 30px auto 0 auto; /* align to center vertically */
	}

	.header {
		margin-bottom: 1rem;
	}

	.search-button {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		text-align: left;
	}

	.search-button i {
		text-align: right;
		margin-right: 5px;
	}

	/* .warning {
		color: red;
	} */
</style>
