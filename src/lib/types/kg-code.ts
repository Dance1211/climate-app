import type { ObjectId } from 'mongodb';

export type KGCodeDB = {
	_id?: ObjectId;
	latitude: number;
	longitude: number;
	kgcode: KGCode;
};

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
