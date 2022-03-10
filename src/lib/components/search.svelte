<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { Coordinates } from '$lib/types/kg-code';
	import LocationSearch from '$components/locationSearch.svelte';

	type Query = { location: string; home: string };

	// Input from user
	let searchQuery: Query = { location: '', home: '' };
	let placeName: string[] = [];

	// Destination co-ords received from coordinateFetch
	let destinationLocation: null | Coordinates = null;
	let userLocation: null | Coordinates = [-2.24263, 53.48076];

	/* Event handlers */

	// Function to Google Geocoding API get lat/long co-ords from the place id that we got through placesAutoComplete
	const coordinateFetch = async (place_id: string): Promise<Coordinates> => {
		const res = await fetch(`/api/latlng/${place_id}`);
		const resObject = await res.json();
		placeName = [resObject.placeName, resObject.country];
		return resObject.coordinates;
	};

	// Go-to next page when user confirms correct location
	const onConfirmSubmit = async (): Promise<void> => {
		destinationLocation = await coordinateFetch(searchQuery.location);
		if (destinationLocation && userLocation) {
			const searchUrl = `/searchresults?lat=${destinationLocation[0]}&lng=${destinationLocation[1]}&userlat=${userLocation[0]}&userlng=${userLocation[1]}&destination=${placeName[0]}&country=${placeName[1]}`;
			goto(searchUrl);
		} else {
			console.log('invalid location result');
		}
	};

	// When the page loads, get the user position
	onMount(async () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(displayLocationInfo, showError);
		}

		function displayLocationInfo(position: GeolocationPosition): void {
			userLocation = [+position.coords.longitude.toFixed(5), +position.coords.latitude.toFixed(5)];
		}

		function showError(error: GeolocationPositionError) {
			switch (error.code) {
				case error.PERMISSION_DENIED:
                    console.log('GEOLOCATION: Location request denied by user - default location set to Manchester, UK');
					break;
				case error.POSITION_UNAVAILABLE:
                    console.log('GEOLOCATION: Location request denied by user - default location set to Manchester, UK');
					break;
				case error.TIMEOUT:
                    console.log('GEOLOCATION: Location request timed out - default location set to Manchester, UK');
					break;
				default:
                    console.log('GEOLOCATION: An unknown location error occurred');
					break;
			}
		}
	});
</script>

<svelte:head>
	<title>WhereTo. Compare travel destinations by climate.</title>
</svelte:head>

<section class="container">
	<h1 class="header">Compare travel destinations by climate.</h1>

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
			<LocationSearch placeholder="Manchester, UK (default)" id="home" bind:placeId={searchQuery.home} />
		</label>
		<button class="search-button" disabled={!searchQuery.location} type="submit">
			<i class="searchIcon material-icons">search</i> Search
		</button>
	</form>

	<span id="locationError" />
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
    /* form spacing issues - quick fix */
	label {
		line-height: 2;
	}

    /* Location error */
	#locationError {
		font-size: 10px;
		color: #666;
		margin-top: 0.5rem;
	}

	/* home - search box - increase heading size */
	@media only screen and (min-width: 768px) {
		h1 {
			font-size: 2.375rem; /* 38px default */
			margin-bottom: 2rem;
		}
	}
</style>