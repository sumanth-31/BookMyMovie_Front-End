import { IMovieModel, ITheatreModel } from "@Interfaces/Models";

export interface IRegisterScreenProps {
	theatres: ITheatreModel[];
	movies: IMovieModel[];
}
