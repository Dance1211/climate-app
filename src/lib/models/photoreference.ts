import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;

export async function getPhotoRef(place: string) {
	// call autocomplete API to get place_id
	const placeIdUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${place}&types=geocode&key=AIzaSyDMbyra9BUhuc72_b6sb7BrtIN7RieLBUE`;
	const placeIdRes = await axios.get(placeIdUrl);
	const place_id = placeIdRes.data.predictions[0].place_id;

	// use place_id to get the photo reference
	const photoRefUrl = `https://maps.googleapis.com/maps/api/place/details/json`;
	const photoRes = await axios.get(photoRefUrl, { params: { key: apiKey, place_id } });
	const photo_reference = photoRes.data.result.photos[0].photo_reference;

	return { photo_reference, place_id };
}
