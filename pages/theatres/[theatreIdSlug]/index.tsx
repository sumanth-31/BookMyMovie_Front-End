import React from "react";
import { NextPage } from "next";
import { Navbar, ScreenComponent } from "@Components/index";
import {
	IGetScreensResponse,
	IGetTheatreResponse,
	ITheatreSlugProps,
} from "@Interfaces/index";
import { API_URLS, CLIENT_URLS, DUMMY_THEATRE } from "@Constants/index";
import { IScreenModel, ITheatreModel } from "@Interfaces/Models";
import axios from "axios";
const Theatre: NextPage<ITheatreSlugProps> = (props) => {
	const { screens, theatre } = props;
	return (
		<div className="d-flex flex-column vh-100">
			<Navbar />
			<h3>Screens available at {theatre.name}</h3>
			<div className="card">
				<ul className="list-group">
					{screens.map((screen) => {
						return <ScreenComponent key={screen.id} screen={screen} />;
					})}
				</ul>
			</div>
			<div className="d-flex flex-column align-items-center justify-content-center flex-grow-1"></div>
		</div>
	);
};
Theatre.getInitialProps = async (ctx) => {
	const res = ctx.res;
	const { theatreIdSlug } = ctx.query;
	console.log(theatreIdSlug);
	const rawScreensUrl = API_URLS.buildUrl("screensUrl");
	const screensUrl = `${rawScreensUrl}?theatreId=${theatreIdSlug}`;
	console.log(screensUrl);
	const screensPromise = axios.get(screensUrl);
	const rawTheatresUrl = API_URLS.buildUrl("theatresUrl");
	const theatresUrl = `${rawTheatresUrl}?theatreId=${theatreIdSlug}`;
	const theatresPromise = axios.get(theatresUrl);
	let theatre: ITheatreModel = DUMMY_THEATRE;
	let screens = [];
	await Promise.all([screensPromise, theatresPromise])
		.then((responses) => {
			const screensResponse: IGetScreensResponse = responses[0].data;
			const theatreResponse: IGetTheatreResponse = responses[1].data;
			screens = screensResponse.screens;
			theatre = theatreResponse.theatre;
		})
		.catch((err) => {
			console.log(err);
			res.writeHead(302, { location: CLIENT_URLS.errorPage });
			res.end();
		});
	return {
		screens: screens,
		theatre: theatre,
	};
};

export default Theatre;
