import React, { useState } from "react";
import { IPostMovieRequest, IPostMovieResponse } from "@Interfaces/index";
import { Navbar } from "@Components/index";
import { API_URLS } from "@Constants/index";
import axios from "axios";
import { useRouter } from "next/router";
const MovieRegistration = () => {
	const [movieName, setMovieName] = useState("");
	const router = useRouter();
	const registerMovie = async (event: React.FormEvent) => {
		event.preventDefault();
		const movie: IPostMovieRequest = {
			name: movieName,
		};
		const url = API_URLS.buildUrl("moviesUrl");
		await axios
			.post(url, movie)
			.then((response) => {
				const responseData: IPostMovieResponse = response.data;
				const returnedMovie = responseData.movie;
				console.log(returnedMovie);
				alert("Movie successfully registered!");
			})
			.catch((err) => {
				console.log(err);
				let errorMessage = "";
				if (err.response) errorMessage = err.response.data.message;
				alert(`Error occured! ${errorMessage}`);
			});
	};
	return (
		<div className="d-flex flex-column justify-content-center vh-100">
			<Navbar />
			<div className="d-flex flex-column align-items-center flex-grow-1 justify-content-center">
				<form className="w-50" onSubmit={registerMovie}>
					<div className="form-group ">
						<label>Movie Name</label>
						<input
							className="form-control"
							placeholder="Enter Movie Name"
							required
							onChange={(e) => {
								setMovieName(e.target.value);
							}}
						/>
					</div>
					<button className="btn btn-primary w-100">Submit</button>
				</form>
			</div>
		</div>
	);
};
export default MovieRegistration;
