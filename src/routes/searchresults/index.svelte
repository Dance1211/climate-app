<script lang="ts">
	import type { KGCode } from '$lib/types/kg-code';
	import WeatherCard from '$lib/components/WeatherCard.svelte';
	import city from '$lib/components/WeatherCard.svelte';

	let kgCode: KGCode = null;
	let weatherArr: any = [];
	export let cities: any;
	let promise: any;
	let weather: any;
	let name: any;
	let temp: any;
	let description: any;
	let icon: any;
	let humidity: any;
	let wind: any;
	let nameArray: any;

	const getWeather = async (city: any) => {
		const weatherRes = await fetch(`/api/weather/${city}`, {
			method: 'GET'
		});
		const body = await weatherRes.json();
		weather = body;
		name = weather.name;
		temp = weather.temp;
		description = weather.description;
		wind = weather.wind;
		humidity = weather.humidity;
		icon = weather.icon;
		console.log(weather);
	};
</script>

<!-- wrap rendered card in Link -->
<!-- pass city obj as prop -->
<WeatherCard city={"Liverpool"} />
<content>
	<h1>Maybe you would like...</h1>
	{#if cities}
		<p>Climate Code: {cities[0].kgcode}</p>
		{#each cities as city (city._id)}
			<h2 value={city.city}>{city.city}, {city.country}</h2>
			<p>Population: {city.population}</p>
			{#if name === city.city}
				<p>Temperature: {temp}</p>
				<p>Wind Speed: {wind}km/h</p>
				<p>Humidity: {humidity}</p>
				<p>{description}</p>
				<img src={icon} alt="weather_image" />
			{/if}
		{/each}
	{:else}
		<p>loading...</p>
	{/if}
</content>
