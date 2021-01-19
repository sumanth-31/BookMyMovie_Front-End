import React from "react";
import { NextPage } from "next";
import axios from "axios";
import { ICitiesProps, IGetCitiesResponse } from "@Interfaces/index";
import { API_URLS, CLIENT_URLS } from "@Constants/index";
import { ICityModel } from "@Interfaces/Models";
import { Navbar, CardItem } from "@Components/index";
import Link from "next/link";
const CitiesPage: NextPage<ICitiesProps> = (props) => {
	const { cities } = props;
	return (
		<div className="d-flex flex-column vh-100">
			<Navbar cities />
			<div className="mt-2 px-3 d-flex align-content-center justify-content-between mb-3">
				<h3 className="d-inline">Cities</h3>
				<Link href={CLIENT_URLS.registerCity}>
					<button className="btn btn-primary absolute right-0">
						+ Add City
					</button>
				</Link>
			</div>
			<div className="card">
				<ul className="list-group">
					{cities.length == 0 ? (
						<h3 className="text-center">Sorry! There are no cities</h3>
					) : null}
					{cities.map((city) => (
						<CardItem
							displayField={city.name}
							buttonValue="List Movies"
							buttonLink={`${CLIENT_URLS.cities}/${city.id}/movies/`}
							key={city.id}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};
CitiesPage.getInitialProps = async ({ res }) => {
	const citiesUrl = API_URLS.buildUrl("citiesUrl");
	let cities: ICityModel[] = [];
	await axios
		.get(citiesUrl)
		.then((response) => {
			const responseData: IGetCitiesResponse = response.data;
			cities = responseData.cities;
		})
		.catch((err) => {
			console.log(err);
			res.writeHead(302, { location: CLIENT_URLS.errorPage });
			res.end();
		});
	return {
		cities,
	};
};
export default CitiesPage;
