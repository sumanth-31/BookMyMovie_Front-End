import { ICityModel, IOwnerModel } from "@Interfaces/Models";

export interface IDropDownComponentProps {
	type: string;
	objects: any[];
	onSelect: (id: number) => void;
	displayProperty: string;
	redirectUrl: string;
}
