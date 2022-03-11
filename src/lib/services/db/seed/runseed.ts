import { kgSeedData, citySeedData } from './data';
import { clientPromise } from '../mongodb';
import { seed } from './seed';

export async function runSeed(): Promise<void> {
	//Connection to Mongo is served as a promise so we have to wait to receive it
	const clientConnection = await clientPromise;

	console.dir(citySeedData[10000]);

	try {
		await seed(clientConnection, kgSeedData, citySeedData);
		console.log('Seeding completed!');
	} catch (error) {
		console.log('Error seeding database!');
		console.error(error);
	}
}

export default runSeed;
