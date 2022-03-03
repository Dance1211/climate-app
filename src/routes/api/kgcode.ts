import { getNearestKGCode } from '$lib/models/kg-code';
import type { KGCode } from '$lib/types/kg-code';
import type { LoadInput } from '@sveltejs/kit';

export async function get({ url }: LoadInput) {
	const longitude: number = +url.searchParams.get('longitude');
	const latitude: number = +url.searchParams.get('latitude');

	let kgCode: KGCode;

	try {
		kgCode = await getNearestKGCode([longitude, latitude]);
	} catch (error) {
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
			kgCode
		}
	};
}