import type { Collection, Db, MongoClient } from 'mongodb';
import type { Coordinates, KGCode } from '$lib/types/kg-code';
import { clientPromise } from '$lib/services/db/mongodb';

export async function getNearestKGCode([longitude, latitude]: Coordinates): Promise<KGCode> {
	console.log(longitude, latitude);
	const clientConnection: MongoClient = await clientPromise;
	const db: Db = clientConnection.db(process.env['MONGODB_DB_LOCATIONS']);
	const kgCodeCollection: Collection = db.collection(process.env['MONGODB_KGCODES']);

	const point = await kgCodeCollection.findOne({
		location: { $near: { $geometry: { type: 'Point', coordinates: [longitude, latitude] } } }
	});

	return point.kgcode;
}
