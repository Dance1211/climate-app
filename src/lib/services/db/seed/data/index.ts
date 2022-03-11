import type { CityDB } from '$lib/types/cities';
import type { Coordinates, KGCode, KGCodeDB } from '$lib/types/kg-code';
import _kgSeedData from './KoeppenGeiger-Data.json';
import _citySeedData from './worldcities.json';

type KGImport = {
	latitude: number;
	longitude: number;
	kgcode: string;
};

type CitiesImport = {
	city: string;
	city_ascii: string;
	lat: number;
	lng: number;
	country: string;
	iso2: string;
	iso3: string;
	admin_name: string;
	capital: string;
	population: number;
	id: number;
};

const kgSeedDataPreformat = _kgSeedData as KGImport[];
const citySeedDataPreformat = _citySeedData as CitiesImport[];

function getNearestPoint(coordinates: Coordinates): Coordinates {
	let [latitude, longitude] = coordinates;
	latitude = Math.floor(latitude * 2) + 0.25;
	longitude = Math.floor(longitude * 2) + 0.25;
	return [latitude, longitude] as Coordinates;
}

function round(num: number): number {
	return (Math.floor(num * 2) + 0.5) / 2;
}

const formatKgData = ({ latitude, longitude, kgcode }): KGCodeDB => {
	return { location: { type: 'Point', coordinates: [longitude, latitude] }, kgcode };
};

export const kgSeedData = kgSeedDataPreformat.map(formatKgData);

const showMissing = (cityName: string): null => {
	return null;
}

const formatCityData = ({
	city,
	city_ascii,
	lat,
	lng,
	country,
	iso2,
	iso3,
	population
}): CityDB => {
	return {
		location: { type: 'Point', coordinates: [lng, lat] },
		city,
		city_ascii,
		country,
		iso2,
		iso3,
		population,
		kgcode: (kgSeedDataPreformat.find(({ longitude, latitude }) => {
			return longitude === round(lng) && latitude === round(lat);
		})?.kgcode as KGCode) || showMissing(city_ascii)
	};
};

export const citySeedData = citySeedDataPreformat.map(formatCityData);
