/*eslint-disable*/
import SkyHighBuilding from './6-sky_high.js';

export default class SkyHighBuilding {
	constructor(sqft, floors) {
		super(sqft);
		this._floors = floors;
	}

	get floors() {
		return this._floors;
	}

	evacuationWarningMessage() {
		return `Evacuation slowly the ${this._floors} floors`;
	}
}
