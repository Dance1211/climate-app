import type { ObjectId } from 'mongodb';

export type Coordinates = [longitude: number, latitude: number];

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
