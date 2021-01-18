import React, { Component } from "react";
import { NextPageContext } from "next";
import axios from "axios";
import { IGetTheatresResponse } from "@Interfaces/index";
import { ITheatreModel } from "@Models/index";
import { API_URLS, CLIENT_URLS } from "@Constants/index";
import { Navbar, TheatreComponent } from "@Components/index";
import Router from "next/router";
class Theatres extends Component<IGetTheatresResponse> {
	static async getInitialProps({ req }: NextPageContext) {
		let theatres: ITheatreModel[] = [];
		const theatreURL = API_URLS.buildUrl("theatresUrl");
		await axios
			.get(theatreURL)
			.then((res) => {
				console.log(res);
				const responseData: IGetTheatresResponse = res.data;
				theatres = responseData.theatres;
			})
			.catch((err) => {
				console.log(err);
			});
		return {
			theatres: theatres,
		};
	}
	redirectToRegister = () => {
		Router.push(CLIENT_URLS.registerTheatre);
	};
	render() {
		const theatres = this.props.theatres;
		return (
			<div className="d-flex flex-column">
				<Navbar />
				<div className="mt-2 px-3 d-flex align-content-center justify-content-between mb-3">
					<h3 className="d-inline">Theatres</h3>
					<button
						className="btn btn-primary absolute right-0"
						onClick={this.redirectToRegister}
					>
						+ Add Theatre
					</button>
				</div>
				<div className="card w-100">
					<ul className="list-group">
						{theatres.map((theatre) => (
							<TheatreComponent key={theatre.id} theatre={theatre} />
						))}
					</ul>
				</div>
			</div>
		);
	}
}
export default Theatres;
