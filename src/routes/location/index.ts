import type { LoadInput } from '@sveltejs/kit';
import { getPhotoRef } from '$lib/models/photoreference';
import { getHistoricWeather } from '$lib/models/historicWeather';

export async function get({ url }: LoadInput) {
	const place = url.searchParams.get('place');
	const country = url.searchParams.get('country');
	const photo_reference = await getPhotoRef(place);

    const src = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=AIzaSyC9fUjZpK0R-RE_BarfZmkv25fT3YCUirE`;

	const weather = await getHistoricWeather(place);

	return {
		status: 200,
		body: { src, place, country, weather }
	};
}
