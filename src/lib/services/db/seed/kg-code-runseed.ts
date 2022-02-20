import * as testData from './data/test-data';
import { clientPromise } from '../mongodb';
import { seed } from './kg-code-seed';
import type { KGCodeDB } from '$lib/types/kg-code';

const formatTestData = ({ latitude, longitude, kgcode }): KGCodeDB => {
	return { location: { type: 'Point', coordinates: [latitude, longitude] }, kgcode };
};

const kgCodes: KGCodeDB[] = testData.kgCodes.map(formatTestData);

export async function runSeed() {
	//Connection to Mongo is served as a promise so we have to wait to receive it
	const clientConnection = await clientPromise;

	try {
		await seed(clientConnection, kgCodes);
		console.log('Database seeded!');
	} catch (error) {
		console.log('Error seeding database!');
		console.error(error);
	}
}

export default runSeed;
