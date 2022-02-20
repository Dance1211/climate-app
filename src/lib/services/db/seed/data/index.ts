import _kgSeedData from './Koeppen-Geiger-Data.json';

type KGImport = {
	latitude: number;
	longitude: number;
	kgcode: string;
};

const kgSeedData = _kgSeedData as KGImport[];

const defaultTempData: KGImport[] = [
	{
		latitude: -25.25,
		longitude: 46.75,
		kgcode: 'Af'
	},
	{
		latitude: -24.75,
		longitude: 47.25,
		kgcode: 'Af'
	},
	{
		latitude: -24.25,
		longitude: -47.25,
		kgcode: 'Af'
	},
	{
		latitude: -23.25,
		longitude: -149.25,
		kgcode: 'Af'
	},
	{
		latitude: -23.25,
		longitude: -134.75,
		kgcode: 'Af'
	}
];

const USE_TEMP_DATA = false;

console.log(USE_TEMP_DATA ? "USING TEMP KG DATA" : "USING REAL KG DATA");

function getKGData(): KGImport[] {
	return USE_TEMP_DATA ? defaultTempData : kgSeedData;
}

export default getKGData;
