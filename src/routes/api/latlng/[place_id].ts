import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;

export async function get({ params }) {
	try {
		const place_id = params.place_id;
		const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
		const res = await axios.get(baseUrl, {
			params: {
				key: apiKey,
				place_id: place_id
			}
		});

		const address = res.data.results[0].address_components;
		const [country] = address.filter((place) => place.types.includes('country'));
		const lat = +res.data.results[0].geometry.location.lat.toFixed(5);
		const lng = +res.data.results[0].geometry.location.lng.toFixed(5);
		return {
			status: 200,
			body: { coordinates: [lat, lng], country: country.short_name }
		};
	} catch (err) {
		return {
			status: 500,
			body: {
				err
			}
		};
	}
}
