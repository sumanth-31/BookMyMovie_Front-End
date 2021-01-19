import React, { useState } from "react";
import { NextPage } from "next";
import {
	IGetTheatresResponse,
	IGetMoviesResponse,
	IRegisterScreenProps,
	IPostScreenRequest,
	IPostScreenResponse,
} from "@Interfaces/index";
import axios from "axios";
import { IMovieModel, ITheatreModel } from "@Interfaces/Models";
import { API_URLS, CLIENT_URLS } from "@Constants/index";
import { Navbar, ObjectDropDown } from "@Components/index";
const RegisterScreen: NextPage<IRegisterScreenProps> = (props) => {
	const theatres = props.theatres;
	const movies = props.movies;
	const theatreIdInitialValue = theatres.length > 0 ? theatres[0].id : 0;
	const moviesIdInitialValue = movies.length > 0 ? movies[0].id : 0;
	const [numberOfSeats, setNumberOfSeats] = useState(-1);
	const [theatreId, setTheatreId] = useState(theatreIdInitialValue);
	const [movieId, setMovieId] = useState(moviesIdInitialValue);
	const theatreChange = (id: number) => {
		setTheatreId(id);
	};
	const movieChange = (id: number) => {
		setMovieId(id);
	};
	const registerScreen = (event: React.FormEvent) => {
		event.preventDefault();
		const url = API_URLS.buildUrl("screensUrl");
		let requestData: IPostScreenRequest = {
			theatreId: theatreId,
			movieId: movieId,
		};
		if (numberOfSeats > 0) {
			requestData.numberOfSeats = numberOfSeats;
		}
		axios
			.post(url, requestData)
			.then((response) => {
				const responseData: IPostScreenResponse = response.data;
				const screen = responseData.screen;
				console.log(screen);
				alert("Screen registered successfully");
			})
			.catch((err) => {
				console.log(err);
				let errorMessage = "";
				if (err.response) errorMessage = err.response.data.message;
				alert(`Error occured! ${errorMessage}`);
			});
	};
	return (
		<div className="d-flex flex-column vh-100">
			<Navbar />
			<div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
				<form className="w-75" onSubmit={registerScreen}>
					<div className="form-row">
						<div className="form-group col-md-4">
							<label>Select Theatre</label>
							<ObjectDropDown
								type="Theatre"
								objects={theatres}
								onSelect={theatreChange}
								redirectUrl={CLIENT_URLS.registerTheatre}
								displayProperty="name"
							/>
						</div>
						<div className="form-group col-md-4">
							<label>Select Movie</label>
							<ObjectDropDown
								type="Movie"
								objects={movies}
								onSelect={movieChange}
								redirectUrl={CLIENT_URLS.registerMovie}
								displayProperty="name"
							/>
						</div>
						<div className="form-group col-md-4">
							<label>Number of Seats</label>
							<input
								className="form-control"
								type="number"
								onChange={(e) => {
									setNumberOfSeats(parseInt(e.target.value));
								}}
								min={1}
								max={100}
							/>
						</div>
					</div>
					<button className="btn btn-primary w-100" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
RegisterScreen.getInitialProps = async ({ res }) => {
	let movies: IMovieModel[] = [];
	let theatres: ITheatreModel[] = [];
	const moviesUrl = API_URLS.buildUrl("moviesUrl");
	const moviesPromise = axios.get(moviesUrl);
	const theatresUrl = API_URLS.buildUrl("theatresUrl");
	const theatresPromise = axios.get(theatresUrl);
	await Promise.all([theatresPromise, moviesPromise])
		.then((values) => {
			const theatresResponse: IGetTheatresResponse = values[0].data;
			const moviesResponse: IGetMoviesResponse = values[1].data;
			movies = moviesResponse.movies;
			theatres = theatresResponse.theatres;
		})
		.catch((reason) => {
			console.log(reason);
			res.writeHead(302, { location: CLIENT_URLS.errorPage });
			res.end();
		});
	return {
		theatres: theatres,
		movies: movies,
	};
};
export default RegisterScreen;
