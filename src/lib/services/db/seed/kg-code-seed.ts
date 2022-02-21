import type { KGCodeDB } from '$lib/types/kg-code';
import type { Collection, Db, MongoClient } from 'mongodb';

export const seed = async (clientConnection: MongoClient, data: Array<KGCodeDB>): Promise<void> => {
	console.log('-----DATABASE IS BEING SEEDED-----');
	// Connect to a specific database
	const db: Db = clientConnection.db(process.env['MONGODB_DB_LOCATIONS']);

	// Reset collection
	await db.dropCollection(process.env['MONGODB_KGCODES']);
	await db.createCollection(process.env['MONGODB_KGCODES']);
	console.log('KG Codes db reset');

	// Put connection into a constant
	const kgCodeCollection: Collection<KGCodeDB> = db.collection(process.env['MONGODB_KGCODES']);

	// Seed the database with data
	try {
		await kgCodeCollection.bulkWrite(
			data.map((singleKgCode) => {
				return { insertOne: { document: singleKgCode } };
			})
		);
		console.log('KG Codes collection seeded');
	} catch (error) {
		console.log(`Bulk upload failed`);
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
