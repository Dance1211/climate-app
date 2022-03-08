import type { Collection, Db, MongoClient } from 'mongodb';
import { clientPromise } from '$lib/services/db/mongodb';
import type { CityDB } from '$lib/types/cities';
import type { Coordinates } from '$lib/types/kg-code';
import { getNearestKGCode } from './kg-code';

export async function getCitiesSimilarToLocation(
	coordinates: Coordinates,
	{
		limit = 10,
		page = 1,
		minDistanceMeters = 1000000
	}: {
		limit?: number;
		page?: number;
		minDistanceMeters?: number;
	}
): Promise<CityDB[]> {

	// database connection
	const clientConnection: MongoClient = await clientPromise;
	const db: Db = clientConnection.db(process.env['MONGODB_DB_LOCATIONS']);
	const cityCollection: Collection = db.collection(process.env['MONGODB_CITIES']);

	// Get current KG code to find similar places
	const currCode = await getNearestKGCode(coordinates);

	let cities: CityDB[];
	try {
		cities = (await cityCollection
			.find({
				kgcode: currCode,
				location: {
					$near: { $geometry: { type: 'Point', coordinates }, $minDistance: minDistanceMeters }
				}
			})
			.sort({ population: -1 })
			.limit(limit)
			.skip((page - 1) * limit)
			.toArray()) as CityDB[];
	} catch (error) {
    console.error(error);
  }

	return cities;
}