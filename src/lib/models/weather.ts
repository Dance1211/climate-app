import type { CityWeather } from '$lib/types/cities';
import axios from 'axios';
const weatherKey = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city: string) {
	const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=metric`;
	const res = await axios.get(weatherUrl);

	const location = res.data.name;

	const iconString = res.data.weather[0].icon;
	const temp = Math.round(res.data.main.temp);
	const humidity = res.data.main.humidity;
	const wind = Math.round(res.data.wind.speed);
	const description = res.data.weather[0].description;
	const icon = `http://openweathermap.org/img/wn/${iconString}@2x.png`;

	return {
		name: location,
		temp: temp,
		humidity: humidity,
		wind: wind,
		description: description,
		icon: icon
	} as CityWeather;
}
