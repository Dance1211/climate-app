<script lang="ts">
	import axios from 'axios';
	type Query = { location: string; home: string };
	type Loc = { lat: number; lng: number };

	let searchQuery: Query = {
		location: '',
		home: ''
	};

	let results;

	let locationRes: Loc = {
		lat: null,
		lng: null,
	};

	$: if (results) {
		console.log(results);
	}

	const onSubmit = (e): void => {
		/* 		const formData: any = new FormData(e.target);
		const asString = new URLSearchParams(formData).toString(); */

		const dataFetch = async () => {
			const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
			const apiKey = 'AIzaSyBwTORljT735aohN-54u4WD3qmIfIB1oew';
			results = await axios.get(
				`${baseUrl}1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${apiKey}`
                );
                locationRes.lat = results.data.results[0].geometry.location.lat;
                locationRes.lng = results.data.results[0].geometry.location.lng;
		};
		dataFetch();
	};
</script>

<svelte:head>
	<title>Climate Travel App</title>
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
        <p>Location: {searchQuery.location}</p>
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
