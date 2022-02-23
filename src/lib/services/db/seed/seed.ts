import type { CityDB } from '$lib/types/cities';
import type { Coordinates, KGCode, KGCodeDB } from '$lib/types/kg-code';
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

	// Seed the database with KGCode data
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

	// TODO: add the kg code for each city.

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
		const codeGeoindex = await kgCodeCollection.createIndex({ location: '2dsphere' });
		console.log(`Created index: ${codeGeoindex}`);
	} catch (error) {
		console.log(`Failed creating index`);
		console.error(error);
	}

	// Add codes to each city. This is slow and there could be a better way
	// ... but it works!
	// let progress = 0;
	// console.log('Starting kgcode mapping');
	// await cityCollection.find().forEach((cityDoc) => {
	// 	kgCodeCollection
	// 		.findOne({
	// 			location: { $near: { $geometry: cityDoc.location } }
	// 		})
	// 		.then((kgDoc) => {
	// 			return cityCollection.updateOne({ _id: cityDoc._id }, { $set: { kgcode: kgDoc.kgcode } });
	// 		})
	// 		.then(() => {
	// 			progress++;
	// 			progress % 100 && console.log(`${progress} / ${cityData.length}`);
	// 		})
	// 		.catch((err) => {
	// 			console.log('Got an error updating cities with kgcodes');
	// 			console.log(err);
	// 		});
	// });

	// Add indexing for the city codes

	try {
		const cityCodeIndex = await cityCollection.createIndex({ kgcode: 1 });
		console.log(`Created index: ${cityCodeIndex}`);
	} catch (error) {
		console.log(`Failed creating index`);
		console.error(error);
	}
};
