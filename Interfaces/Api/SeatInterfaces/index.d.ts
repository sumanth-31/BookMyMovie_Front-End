import { ISeatModel } from "@Models/index";

export interface IGetSeatsResponse {
	seats: ISeatModel[];
}
export interface IPostSeatsRequest {
	screenId: number;
	seats: number[];
}
export interface IPostSeatsResponse {
	seats: ISeatModel[];
}
