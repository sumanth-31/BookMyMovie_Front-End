import { ITheatreModel } from "@Models/index";
export interface IGetTheatresResponse {
	theatres: ITheatreModel[];
}
export interface IGetTheatreResponse {
	theatre: ITheatreModel;
}
export interface IPostTheatreRequest {}
