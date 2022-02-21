<script lang="ts">
	const apiKey = import.meta.env.VITE_API_KEY;
	import axios from 'axios';
	let data = false;
	let city: string = '';
	let name: string = '';
	let temp: Number;
	let humidity: string = '';
	let wind: string = '';
	let description: string = '';
	let icon: any;

	const fetchWeather = () => {
		axios
			.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=Metric`)
			.then((res) => {
				const descriptionString = res.data.weather[0].description;
				data = true;
				res.data;
				name = res.data.name;
				temp = Math.floor(res.data.main.temp);
				humidity = res.data.main.humidity;
				humidity = res.data.main.humidity;
				wind = res.data.wind.speed;
				description = descriptionString[0].toUpperCase() + descriptionString.slice(1);
				icon = res.data.weather[0].icon;
				console.log(res.data);
			});
	};
</script>

<section>
	<h1 style="text-align: center;">Weather Fetching page</h1>
	<form on:submit|preventDefault={fetchWeather}>
		<input type="text" bind:value={city} />
		<button>submit</button>
	</form>
	{#if data}
		<ul>
			<li>City: {name}</li>
			<li>Temp: {temp}&deg C</li>
			<li>Humidity: {humidity} %</li>
			<li>Wind Speed: {wind}km/ph</li>
			<li>Description: {description}</li>
			<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather_icon" />
		</ul>
	{/if}
</section>
