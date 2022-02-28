import axios from 'axios';

export async function get({ params }) {
	try {
		/* 		const weather = await axios.get(
			`https://api.oikolab.com/weather/?param=temperature&start=2021%2F01%2F01&end=2021%2F12%2F01&api-key=6117c525056c4a1197ce47de2d22c492&resample_method=mean&freq=M&format=json&location=${params.place}`
            ); */
		const weatherJSON = {
			weather: {
				columns: [
					'coordinates (lat,lon)',
					'model (name)',
					'model elevation (surface)',
					'utc_offset (hrs)',
					'temperature (degC)'
				],
				index: [
					1612051200, 1614470400, 1617148800, 1619740800, 1622419200, 1625011200, 1627689600,
					1630368000, 1632960000, 1635638400, 1638230400, 1640908800
				],
				data: [
					['(18.1512945138, -77.3192220134904)', 'era5', 332.31, -5, 24.08],
					['(18.1512945138, -77.3192220134904)', 'era5', 332.31, -5, 24.2],
					['(18.1512945138, -77.3192220134904)', 'era5', 332.31, -5, 24.63],
					['(18.1512945138, -77.3192220134904)', 'era5', 332.31, -5, 25.04],
					['(18.1512945138, -77.3192220134904)', 'era5', 332.31, -5, 26.78],
					['(18.1512945138, -77.3192220134904)', 'era5', 332.31, -5, 27.09],
					['(18.1512945138, -77.3192220134904)', 'era5', 332.31, -5, 27.55],
					['(18.1512945138, -77.3192220134904)', 'era5', 332.31, -5, 27.27],
					['(18.1512945138, -77.3192220134904)', 'era5', 332.31, -5, 26.99],
					['(18.1512945138, -77.3192220134904)', 'era5', 332.31, -5, 26.13],
					['(18.1512945138, -77.3192220134904)', 'era5', 332.31, -5, 25.39],
					['(18.1512945138, -77.3192220134904)', 'era5', 332.31, -5, 25.1]
				]
			}
		};

		const index = weatherJSON.weather.index;
		const data = weatherJSON.weather.data;
		const tempByMonth = index.map((month, index) => {
			return {[month]: data[index][4]};
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
