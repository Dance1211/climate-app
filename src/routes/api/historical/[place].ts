import axios from 'axios';
import date from 'date-and-time';

export async function get({ params }) {
	try {
		const weather = await axios.get(
			// can't hide the API key. not sure how to do it.
			`https://api.oikolab.com/weather/?param=temperature&start=2021%2F01%2F01&end=2021%2F12%2F01&api-key=${APIKEYHERE}&resample_method=mean&freq=M&format=json&location=${params.place}`
		);

		const weatherData = JSON.parse(weather.data.data);

		const index = weatherData.index;
		const readableDate = index.map((month) => {
			const intermediateDate = new Date(month * 1000);
			return date.format(intermediateDate, 'MMM YYYY');
		});

		const data = weatherData.data;
		const tempByMonth = readableDate.map((month, index) => {
			return [month, data[index][4]];
		});

		return {
			status: 200,
			body: { tempByMonth }
		};
	} catch (err) {
		return {
			status: 500,
			body: {
				err
			}
		};
	}
}
