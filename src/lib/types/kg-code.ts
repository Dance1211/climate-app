import type { ObjectId } from 'mongodb';

export type Coordinates = [longitude: number, latitude: number];

export const koppenZones = {
    Af: 'Tropical Rainforest',
    Am: 'Tropical Monsoon',
    Aw: 'Tropical Dry Savanna',
    As: 'Tropical Wet Savanna',
    BSh: 'Hot semi-arid',
    BSk: 'Cold semi-arid',
    BWh: 'Hot desert',
    BWk: 'Cold desert',
    Cfa: 'Humid subtropical',
    Cfb: 'Temperate Oceanic',
    Cfc: 'Subpolar Oceanic',
    Csa: 'Hot-summer Mediterranean',
    Csb: 'Warm-summer Mediterranean',
    Csc: 'Cool-summer Mediterranean',
    Cwa: 'Humid subtropical',
    Cwb: 'Subtropical highland',
    Cwc: 'Cold subtropical highland',
    Dfa: 'Hot-summer humid',
    Dfb: 'Extremely cold subarctic',
    Dsa: 'Hot, dry-summer',
    Dsb: 'Warm, dry-summer',
    Dsc: 'Dry-summer subarctic',
    Dwa: 'Hot-summer humid',
    Dwb: 'Warm-summer humid',
    Dwc: 'Subarctic',
    Dwd: 'Extremely cold subarctic',
    EF: 'Ice Cap Climate',
    ET: 'Tundra'
};

export type KGCode =
| null
| 'Af'
| 'Am'
| 'As'
| 'Aw'
| 'Bwh'
| 'Bwk'
| 'BSh'
| 'BSk'
| 'Csa'
| 'Csb'
| 'Csc'
| 'Cwa'
| 'Cwb'
| 'Cwc'
| 'Cfa'
| 'Cfb'
| 'Cfc'
| 'Dsa'
| 'Dsb'
| 'Dsc'
| 'Dsd'
| 'Dwa'
| 'Dwb'
| 'Dwc'
| 'Dwd'
| 'Dfa'
| 'Dfb'
| 'Dfc'
| 'Dfd'
| 'ET'
| 'EF';

export type KGCodeDB = {
	_id?: ObjectId;
	location: {type: string, coordinates: Coordinates}
	kgcode: KGCode;
};