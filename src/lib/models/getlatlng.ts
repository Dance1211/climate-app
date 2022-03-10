import axios from 'axios';

export async function getLatLng(place_id: string) {
	const baseUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env['VITE_API_KEY']}&place_id=${place_id}`;
	const res = await axios.get(baseUrl);
	const lat = +res.data.results[0].geometry.location.lat.toFixed(5);
	const lng = +res.data.results[0].geometry.location.lng.toFixed(5);

	return { lat, lng };
}
