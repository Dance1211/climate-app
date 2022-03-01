import type { LoadInput } from '@sveltejs/kit';
import { getCitiesSimilarToLocation } from '$lib/models/cities';
import { getWeather } from '$lib/models/weather';
import type { City } from '$lib/types/cities';

export async function get({ url }: LoadInput) {
	const lat = +url.searchParams.get('lat');
	const lng = +url.searchParams.get('lng');

	const cities = await getCitiesSimilarToLocation([lng, lat], {});

	const combinedData = await Promise.all(
		cities.map(async (city) => {
			const cityWeather = await getWeather(city.city_ascii);

			return { weather: cityWeather, details: city } as City;
		})
	);

	return {
		status: 200,
		body: {
			combinedData
		}
	};
}
