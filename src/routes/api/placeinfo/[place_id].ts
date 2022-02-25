import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;

export async function get({ params }) {
	try {
		const place_id = params.place_id;
		const baseUrl = `https://maps.googleapis.com/maps/api/place/details/json`;
		const res = await axios.get(baseUrl, { params: { key: apiKey, place_id } });
		console.log(res.data);

		const { photos, rating, user_ratings_total } = res.data.result;

		return {
			status: 200,
			body: { photos: photos[0], rating, user_ratings_total }
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
