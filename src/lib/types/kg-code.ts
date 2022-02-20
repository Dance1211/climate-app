import type { ObjectId } from 'mongodb';

export type Coordinate = [latitude: number, longitude: number];

export type KGCode =
| 'Af'
| 'Am'
| 'Aw'
| 'As'
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
	location: {type: string, coordinates: Coordinate}
	kgcode: KGCode;
};
