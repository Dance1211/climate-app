import type { CityDB } from '$lib/types/cities';
import type { KGCodeDB } from '$lib/types/kg-code';
import type { Collection, Db, MongoClient } from 'mongodb';

export const seed = async (
	clientConnection: MongoClient,
	kgData: Array<KGCodeDB>,
	cityData: Array<CityDB>
): Promise<void> => {
	console.log('-----DATABASE IS BEING SEEDED-----');
	// Connect to a specific database
	const db: Db = clientConnection.db(process.env['MONGODB_DB_LOCATIONS']);

	// Reset collection
	try {
		await db.dropCollection(process.env['MONGODB_KGCODES']);
	} catch (error) {
		console.log('Got an error dropping kg_codes');
	} finally {
		await db.createCollection(process.env['MONGODB_KGCODES']);
	}
	try {
		await db.dropCollection(process.env['MONGODB_CITIES']);
	} catch (error) {
		console.log('Got an error dropping cities');
	} finally {
		await db.createCollection(process.env['MONGODB_CITIES']);
	}
	console.log('KG Codes db reset');

	// Put connection into a constant
	const kgCodeCollection: Collection<KGCodeDB> = db.collection(process.env['MONGODB_KGCODES']);

	const cityCollection: Collection<CityDB> = db.collection(process.env['MONGODB_CITIES']);

	// Seed the database with data
	try {
		await kgCodeCollection.bulkWrite(
			kgData.map((singleKgCode) => {
				return { insertOne: { document: singleKgCode } };
			})
		);
		console.log('KG Codes collection seeded');
	} catch (error) {
		console.log(`Bulk upload failed`);
		console.error(error);
	}

	try {
		await cityCollection.bulkWrite(
			cityData.map((singleCity) => {
				return { insertOne: { document: singleCity } };
			})
		);
		console.log('Cities collection seeded');
	} catch (error) {
		console.log('Bulk upload failed');
		console.error(error);
	}

	// Create an index for fast queries
	try {
		const index = await kgCodeCollection.createIndex({ location: '2dsphere' });
		console.log(`Created index: ${index}`);
	} catch (error) {
		console.log(`Failed creating index`);
		console.error(error);
	}
};
