import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;

export async function get({ params }) {

	try {
		const input = params.input;
		const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`;
		const res = await axios.get(url);
		return {
			status: 200,
			body: { place_id: res.data.predictions[0].place_id }
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
