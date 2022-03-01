<script lang="ts">
	export let city: any;
</script>

<h1>{city.city.city}</h1>
<h4>Population: {city.city.population}</h4>
<h4>Current Temperature: {city.cityWeather.temp}&deg C</h4>
<h4>Humidity: {city.cityWeather.humidity} %</h4>
<h4>Wind Speed: {city.cityWeather.wind}km/h</h4>
<img src={city.cityWeather.icon} alt="weather_icon" />

<slot />
