import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;

export async function get({ params }) {
	try {
		const photo_reference = params.photoref;
		const url = `https://maps.googleapis.com/maps/api/place/photo`;

		const res = await axios.get(url, { params: { maxwidth: 400, photo_reference, key: apiKey } });

		return {
			status: 200,
			body: { photo: res.data }
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