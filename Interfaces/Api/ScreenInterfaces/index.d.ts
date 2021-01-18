import { IScreenModel } from "@Interfaces/Models";

export interface IGetScreensResponse {
	screens: IScreenModel[];
}
export interface IGetScreenResponse {
	screen: IScreenModel;
}
export interface IPostScreenRequest {
	movieId: number;
	theatreId: number;
	numberOfSeats?: number;
}
export interface IPostScreenResponse {
	screen: IScreenModel;
}
