import axios from 'axios';
import date from 'date-and-time';

export async function getHistoricWeather(place: string) {
	const weather = await axios.get(
		`https://api.oikolab.com/weather/?param=temperature&start=2021%2F01%2F01&end=2021%2F12%2F01&api-key=6117c525056c4a1197ce47de2d22c492&resample_method=mean&freq=M&format=json&location=${place}`
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
