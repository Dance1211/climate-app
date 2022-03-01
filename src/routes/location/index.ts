import type { LoadInput } from '@sveltejs/kit';
import { getPhotoRef } from '$lib/models/photoreference';
import { getHistoricWeather } from '$lib/models/historicWeather';
import { getCitiesSimilarToLocation } from '$lib/models/cities';
import { getLatLng } from '$lib/models/getlatlng';

export async function get({ url }: LoadInput) {
	const place = url.searchParams.get('place');
	const country = url.searchParams.get('country');
	const { photo_reference, place_id } = await getPhotoRef(place);

	const src = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=AIzaSyC9fUjZpK0R-RE_BarfZmkv25fT3YCUirE`;

	const weather = await getHistoricWeather(place);

	const { lat, lng } = await getLatLng(place_id);

	const cities = await getCitiesSimilarToLocation([lng, lat], {});

	return {
		status: 200,
		body: { src, place, country, weather, cities }
	};
}
