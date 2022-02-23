import { getCitiesSimilarToLocation } from '$lib/models/cities';
import type { CityDB } from '$lib/types/cities';
import type { KGCode } from '$lib/types/kg-code';
import type { LoadInput } from '@sveltejs/kit';

export async function get({ url }: LoadInput) {
	const longitude: number = +url.searchParams.get('longitude');
	const latitude: number = +url.searchParams.get('latitude');

	let cities: CityDB[];

	try {
		cities = await getCitiesSimilarToLocation([longitude, latitude], {});
	} catch (error) {
		console.log("Couldn't get cities");
		return {
			status: 500,
			body: {
				error
			}
		};
	}

	return {
		status: 200,
		body: {
			cities
		}
	};
}
