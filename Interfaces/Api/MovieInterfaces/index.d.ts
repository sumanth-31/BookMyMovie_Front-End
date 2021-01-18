import { IMovieModel } from "@Interfaces/Models";

export interface IGetMoviesResponse {
	movies: IMovieModel[];
}
export interface IGetMovieResponse {
	movie: IMovieModel;
}
export interface IPostMovieRequest {
	name: string;
}
export interface IPostMovieResponse {
	movie: IMovieModel;
}
