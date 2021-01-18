import { IScreenModel } from "./ScreenModel";

export interface ISeatModel {
	id: number;
	seat: number;
	screen: IScreenModel;
}
