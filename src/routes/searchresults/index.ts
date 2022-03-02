import type { LoadInput } from '@sveltejs/kit';
import { getCitiesSimilarToLocation } from '$lib/models/cities';
import { getWeather } from '$lib/models/weather';
import type { City } from '$lib/types/cities';
import { getPhotoRef } from '$lib/models/photoreference';

export async function get({ url }: LoadInput) {
	const lat = +url.searchParams.get('lat');
	const lng = +url.searchParams.get('lng');

	const cities = await getCitiesSimilarToLocation([lng, lat], {});

	const combinedData = await Promise.all(
		cities.map(async (city) => {
			const cityWeather = await getWeather(city.city_ascii);
			const { photo_reference } = await getPhotoRef(city.city_ascii);
            const src = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=AIzaSyC9fUjZpK0R-RE_BarfZmkv25fT3YCUirE`;
			
			return { weather: cityWeather, details: city, src } as City;
		})
	);	
		console.log(combinedData)
	return {
		status: 200,
		body: {
			combinedData
		}
	};
}
