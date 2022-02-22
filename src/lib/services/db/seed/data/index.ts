import _kgSeedData from './Koeppen-Geiger-Data.json';
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
}

export const kgSeedData = _kgSeedData as KGImport[];
export const citySeedData = _citySeedData as CitiesImport[];
