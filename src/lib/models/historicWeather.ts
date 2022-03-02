import axios from 'axios';
import date from 'date-and-time';
const historicalKey = import.meta.env.VITE_OIKO_WEATHER_KEY

export async function getHistoricWeather(place: string) {
	const weather = await axios.get(
		`https://api.oikolab.com/weather/?param=temperature&start=2021%2F01%2F01&end=2021%2F12%2F01&api-key=${historicalKey}&resample_method=mean&freq=M&format=json&location=${place}`
	);
	const weatherData = JSON.parse(weather.data.data);

	const index = weatherData.index;
	const readableDate = index.map((month) => {
		const intermediateDate = new Date(month * 1000);
		return date.format(intermediateDate, 'MMM YYYY');
	});

	const data = weatherData.data;
	const tempByMonth = readableDate.map((month, index: number) => {
		return [month, data[index][4]];
	});
	return tempByMonth;
}
