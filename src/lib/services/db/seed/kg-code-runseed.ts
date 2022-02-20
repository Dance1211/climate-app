import { kgCodes } from './data/test-data';
import { clientPromise } from '../mongodb';
import { seed } from './kg-code-seed';

async function runSeed() {
	//Connection to Mongo is served as a promise so we have to wait to receive it
	const clientConnection = await clientPromise;

	await seed(clientConnection, kgCodes);
}

export default runSeed;
