export interface ITheatreModel {
	id: number;
	city: {
		id: number;
		name: string;
	};
	name: string;
	owner: {
		id: number;
		name: string;
		mail: string;
	};
}
