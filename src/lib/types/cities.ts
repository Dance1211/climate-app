import type { ObjectId } from 'mongodb';
import type { Coordinates, KGCode } from './kg-code';
export type CityDB = {
	_id?: ObjectId;
	location: { type: string; coordinates: Coordinates };
	city: string;
	city_ascii: string;
	country: string;
	iso2: string;
	iso3: string;
	population: number;
	kgcode: KGCode;
};

export type CityWeather = {
	name: string;
	temp: number;
	humidity: number;
	wind: number;
	description: string;
	icon: string;
};

export type City = { weather: CityWeather; details: CityDB };
