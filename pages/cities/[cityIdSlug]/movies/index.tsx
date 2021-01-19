import React from "react";
import { NextPage } from "next";
import {
	ICitySlugProps,
	IGetCityResponse,
	IGetMoviesResponse,
} from "@Interfaces/index";
import { API_URLS, CLIENT_URLS, DUMMY_CITY } from "@Constants/index";
import axios from "axios";
import { IMovieModel } from "@Models/index";
import { CardItem, Navbar } from "@Components/index";
const CitySlugPage: NextPage<ICitySlugProps> = (props) => {
	const { city, movies } = props;
	return (
		<div className="d-flex flex-column vh-100">
			<Navbar />
			<h3 className="float-left mt-2 px-3">Movies released in {city.name}</h3>
			<div className="card">
				{movies.length === 0 ? (
					<h3 className="text-center">Sorry! There are no movies</h3>
				) : null}
				{movies.map((movie) => (
					<CardItem key={movie.id} displayField={movie.name} />
				))}
			</div>
		</div>
	);
};
CitySlugPage.getInitialProps = async (ctx) => {
	const { cityIdSlug } = ctx.query;
	const res = ctx.res;
	const rawcitiesUrl = API_URLS.buildUrl("citiesUrl");
	const citiesUrl = `${rawcitiesUrl}?cityId=${cityIdSlug}`;
	let city = DUMMY_CITY;
	const cityPromise = axios.get(citiesUrl);
	let movies: IMovieModel[] = [];
	const rawMoviesUrl = API_URLS.buildUrl("moviesInCityUrl");
	const moviesUrl = `${rawMoviesUrl}?cityId=${cityIdSlug}`;
	const moviesPromise = axios.get(moviesUrl);
	await Promise.all([cityPromise, moviesPromise])
		.then((responses) => {
			const cityResponse: IGetCityResponse = responses[0].data;
			const moviesResponse: IGetMoviesResponse = responses[1].data;
			city = cityResponse.city;
			movies = moviesResponse.movies;
		})
		.catch((err) => {
			console.log(err);
			res.writeHead(302, { location: CLIENT_URLS.errorPage });
			res.end();
		});
	return {
		city,
		movies,
	};
};
export default CitySlugPage;
