import {kgSeedData, citySeedData} from './data';
import { clientPromise } from '../mongodb';
import { seed } from './seed';
import type { KGCodeDB } from '$lib/types/kg-code';
import type { CityDB } from '$lib/types/cities';

const formatKgData = ({ latitude, longitude, kgcode }): KGCodeDB => {
	return { location: { type: 'Point', coordinates: [longitude, latitude] }, kgcode };
};

const formatCityData = ({city, city_ascii, lat, lng, country, iso2, iso3, population}): CityDB => {
	return {location: {type: 'Point', coordinates: [lng, lat]}, city, city_ascii, country, iso2, iso3, population}
}

export async function runSeed(): Promise<void> {
	//Connection to Mongo is served as a promise so we have to wait to receive it
	const clientConnection = await clientPromise;

	const kgCodes: KGCodeDB[] = kgSeedData.map(formatKgData);
	const cities: CityDB[] = citySeedData.map(formatCityData);

	try {
		await seed(clientConnection, kgCodes, cities);
	} catch (error) {
		console.log('Error seeding database!');
		console.error(error);
	}
}

export default runSeed;
