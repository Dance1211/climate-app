import type { LoadInput } from '@sveltejs/kit';
import { getCitiesSimilarToLocation } from '$lib/models/cities';
import { getWeather } from '$lib/models/weather';
import type { City, CityDB } from '$lib/types/cities';
import { getPhotoRef } from '$lib/models/photoreference';
import { getNearestKGCode } from '$lib/models/kg-code';
import { countryCode } from '$lib/types/kg-code';

export async function get({ url }: LoadInput) {
	try {
	const lng = +url.searchParams.get('lng') || 2.24;
	const lat = +url.searchParams.get('lat') || 53.48;
	const placeName = url.searchParams.get('destination');
	const countryShort = url.searchParams.get('country');

	const country = countryCode[countryShort];

	let cities: CityDB[];

	const kgCode = await getNearestKGCode([lng, lat]);

	try {
		cities = await getCitiesSimilarToLocation([lng, lat], { limit: 9 });
	} catch (error) {
		console.log(error);
	}

	const combinedData = await Promise.all(
		cities.map(async (city) => {
			const cityWeather = await getWeather(city.city_ascii);
			const { photo_reference } = await getPhotoRef(city.city_ascii);
			const src = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=${process.env['VITE_API_KEY']}`;

			return { weather: cityWeather, details: city, src } as City;
		})
	);

	return {
		status: 200,
		body: {
			combinedData,
			kgCode,
			placeName,
			country
		}
	};
} catch (err) {
	return {
		status: err.status,
		error: new Error('Could not fetch search results page.')
	}
}
}
