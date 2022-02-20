import * as testData from './data/test-data';
import { clientPromise } from '../mongodb';
import { seed } from './kg-code-seed';
import type { KGCodeDB } from '$lib/types/kg-code';

const kgCodes: KGCodeDB[] = testData.kgCodes as KGCodeDB[];

async function runSeed() {
	//Connection to Mongo is served as a promise so we have to wait to receive it
	const clientConnection = await clientPromise;

	await seed(clientConnection, kgCodes);
}

export default runSeed;
