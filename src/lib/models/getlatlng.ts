import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;

export async function getLatLng(place_id: string) {
	const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
	const res = await axios.get(baseUrl, {
		params: {
			key: `AIzaSyDMbyra9BUhuc72_b6sb7BrtIN7RieLBUE`,
			place_id: place_id
		}
	});
	const lat = +res.data.results[0].geometry.location.lat.toFixed(5);
	const lng = +res.data.results[0].geometry.location.lng.toFixed(5);

	return { lat, lng };
}