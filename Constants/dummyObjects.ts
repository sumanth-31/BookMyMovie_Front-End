import { ICityModel, IScreenModel, ITheatreModel } from "@Interfaces/Models";

export const DUMMY_THEATRE: ITheatreModel = {
	id: 1,
	name: "dummy",
	owner: {
		name: "dummy",
		id: 1,
		mail: "dummy",
	},
	city: {
		name: "dummy",
		id: 1,
	},
};
export const DUMMY_SCREEN: IScreenModel = {
	id: 0,
	theatre: {
		id: 0,
		city: {
			id: 0,
			name: "Dummy",
		},
		name: "Dummy",
		owner: {
			id: 0,
			name: "dummy",
			mail: "dummy",
		},
	},
	movie: {
		id: 0,
		name: "dummy",
	},
	numberOfSeats: 60,
};
export const DUMMY_CITY: ICityModel = {
	id: 0,
	name: "Dummy",
};
