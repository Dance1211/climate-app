<script lang="ts">
	const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
	const gmapsKey = import.meta.env.VITE_GMAPS_KEY;
	import axios from 'axios';
	import { onMount } from 'svelte';
	import type { KGCode } from '$lib/types/kg-code';
	let kgCode: KGCode = null;
	let cities;
	let promise;

	onMount(async () => {
		let params = new URLSearchParams(document.location.search);
		let lat = params.get('lat');
		let lng = params.get('lng');

		const getPlaceData = async () => {
			const response = await fetch(`/api/cities?longitude=${lng}&latitude=${lat}`, {
				method: 'GET'
			});
			const body = await response.json();
			cities = body.cities;
			console.log(cities, 'body');
		};
		promise = await getPlaceData();
	});

	let loading = false;
	let data: boolean = false;
	let city = '';
	let name: string = '';
	let temp: number;
	let humidity: string = '';
	let wind: string = '';
	let description: string = '';
	let icon: any;

	const fetchWeather = () => {
		axios
			.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=Metric`)
			.then((res) => {
				const descriptionString = res.data.weather[0].description;
				setTimeout(() => {
					loading = true;
				}, 2000);
				loading = false;
				data = true;
				name = res.data.name;
				temp = Math.floor(res.data.main.temp);
				humidity = res.data.main.humidity;
				wind = res.data.wind.speed;
				description = descriptionString[0].toUpperCase() + descriptionString.slice(1);
				icon = res.data.weather[0].icon;
				city = '';
			})
			.catch((error: string) => {
				console.log(error);
			});
	};
</script>

<section>
	<h1>Maybe you would like...</h1>
		{#if cities}
		<p>Climate Code: {cities[0].kgcode}</p>
			{#each cities as city (city._id)}
			<h2>{city.city}, {city.country}</h2>
			<p>Population: {city.population}</p>
			<!-- call the fetchWeather function for each city -->
			{/each}
			{:else}
			<p>loading...</p>
		{/if}

		{#if data}
			<ul class="weather-Data-Now">
				<li>City: {name}</li>
				<li>Temp: {temp}&deg C</li>
				<li>Humidity: {humidity} %</li>
				<li>Wind Speed: {wind}km/ph</li>
				<li>Description: {description}</li>
				<img
					class="weather-icon"
					src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
					alt="weather_icon"
				/>
			</ul>
			{#if loading}
				<div class="map-div">
					<iframe
						class="map"
						title="map"
						width="600"
						height="450"
						style="border:0"
						loading="fast"
						allowfullscreen
						src={`https://www.google.com/maps/embed/v1/place?key=${gmapsKey}
  					&q=${name}`}
					/>
				</div>
			{:else}
				<div>Loading...</div>
			{/if}
		{/if}
</section>

<style>
	.map-div {
		display: flex;
		flex-direction: row;
		justify-content: center;

		height: 50vh;
	}

	.map {
		border-radius: 32px;
		width: 80vw;
		height: 100%;
	}

	.weather-Data-Now {
		margin-top: 40px;
		list-style: none;
	}

	.weather-icon {
		height: 15rem;
	}
</style>
