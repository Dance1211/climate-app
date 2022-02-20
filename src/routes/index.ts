import { clientPromise } from '$lib/services/db/mongodb';
import runSeed from '$lib/services/db/seed/kg-code-runseed';
import type { RequestEvent } from '@sveltejs/kit';

export async function post({ request }: RequestEvent) {
	console.log('Got a post request!');
  
	const clientConnection = await clientPromise;

  runSeed();

	return {
		status: 201
	};
}
