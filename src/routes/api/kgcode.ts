import { getNearestKGCode } from '$lib/models/kg-code';
import type { KGCode } from '$lib/types/kg-code';
import type { LoadInput } from '@sveltejs/kit';

export async function get({ url }: LoadInput) {
	const longitude: number = +url.searchParams.get('longitude');
	const latitude: number = +url.searchParams.get('latitude');

	const kgCode: KGCode = await getNearestKGCode([longitude, latitude]);

	return {
		status: 200,
		body: {
			kgCode
		}
	};
}

