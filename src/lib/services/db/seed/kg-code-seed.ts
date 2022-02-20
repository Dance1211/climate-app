import type { KGCodeDB } from '$lib/types/kg-code';
import type { Collection, Db, MongoClient } from 'mongodb';

export const seed = async (clientConnection: MongoClient, data: Array<KGCodeDB>): Promise<void> => {
	// Connect to a specific database
	const db: Db = clientConnection.db(process.env['MONGODB_COLLECTION_LOCATIONS']);

	await db.dropCollection(process.env['MONGODB_KGCODES']);
	await db.createCollection(process.env['MONGODB_KGCODES']);

	const kgCodeCollection: Collection<KGCodeDB> = db.collection(process.env['MONGODB_KGCODES']);

	try {
		await kgCodeCollection.bulkWrite(
			data.map((singleKgCode) => {
				return { insertOne: { document: singleKgCode } };
			})
		);
	} catch (error) {
    console.log(`Bulk upload failed`);
    console.dir(error);
  }
};
