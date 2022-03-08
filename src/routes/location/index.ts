import type { LoadInput } from '@sveltejs/kit';
import { getPhotoRef } from '$lib/models/photoreference';
import { getHistoricWeather } from '$lib/models/historicWeather';
import { getCitiesSimilarToLocation } from '$lib/models/cities';
import { getLatLng } from '$lib/models/getlatlng';


export async function get({ url }: LoadInput) {
	const place = url.searchParams.get('place');
	const country = url.searchParams.get('country');
	const { photo_reference, place_id } = await getPhotoRef(place);

	const src = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=${process.env['VITE_API_KEY']}`;

	const weather = await getHistoricWeather(place);

	const { lat, lng } = await getLatLng(place_id);

	const cities = (await getCitiesSimilarToLocation([lng, lat], {})).slice(0,5);

	const cityInfo = await Promise.all(
		cities.map(async (city) => {
			const { photo_reference } = await getPhotoRef(city.city_ascii);
			const src = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=${process.env['VITE_API_KEY']}`;
			return { src, details: city };
		})
	);

	return {
		status: 200,
		body: { src, place, country, weather, cityInfo }
	};
}