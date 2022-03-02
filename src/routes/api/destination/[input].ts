import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;

export async function get({ params }) {
	try {
		const input = params.input;
		const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&key=AIzaSyDMbyra9BUhuc72_b6sb7BrtIN7RieLBUE`;
		const res = await axios.get(url);
		const predictions = res.data.predictions.map((location) => {
			return { placeName: location.description, place_id: location.place_id };
		});
		return {
			status: 200,
			body: { place_id: res.data.predictions[0].place_id, predictions }
		};
	} catch (err) {
		console.error(err);
		return {
			status: 500,
			body: {
				err
			}
		};
	}
}
