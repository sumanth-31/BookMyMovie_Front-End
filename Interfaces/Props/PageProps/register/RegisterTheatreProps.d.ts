import { ICityModel, IOwnerModel } from "@Interfaces/Models";

export interface IRegisterTheatreProps {
	owners: IOwnerModel[];
	cities: ICityModel[];
}
