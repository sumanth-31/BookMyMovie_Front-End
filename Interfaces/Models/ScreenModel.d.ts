import { IMovieModel } from "./MovieModel";
import { ITheatreModel } from "./TheatreModel";

export interface IScreenModel {
	id: number;
	theatre: ITheatreModel;
	movie: IMovieModel;
	numberOfSeats: number;
}
