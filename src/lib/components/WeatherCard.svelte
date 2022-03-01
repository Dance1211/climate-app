<script lang="ts">
	import type { City } from '$lib/types/cities';
	export let city: City;
	const {details: {city: cityName, population}, weather: {temp: temperature, humidity, wind, icon: weatherIcon}} = city;
</script>

<h1>{cityName}</h1>
<h4>Population: {population}</h4>
<h4>Current Temperature: {temperature}}&deg C</h4>
<h4>Humidity: {humidity} %</h4>
<h4>Wind Speed: {wind}km/h</h4>
<img src={weatherIcon} alt="weather_icon" />

<slot />
