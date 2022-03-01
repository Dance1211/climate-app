import type { LoadInput } from '@sveltejs/kit';
import axios from 'axios';

export async function get({ url }: LoadInput) {
	const place = url.searchParams.get('place');
	const country = url.searchParams.get('country');

	const getPlaceId = await axios.get(`api/destination/${place}`);
	/* 	const place_id = getPlaceId.data.place_id;

	const getPhotoRef = await axios.get(`/api/placeinfo/${place_id}`);
	const photo_reference =getPhotoRef.data.photos.photo_reference;
    console.log(photo_reference);
 */

	return {
		status: 200,
		body: { key: 'nothing' }
	};
}
