import runSeed from '$lib/services/db/seed/runseed';
import type { RequestEvent } from '@sveltejs/kit';

export async function post({ request }: RequestEvent) {

  runSeed();

	return {
		status: 201
	};
}
