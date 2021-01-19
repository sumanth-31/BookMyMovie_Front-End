import React, { Component } from "react";
import { INavbarProps } from "@Interfaces/index";
import { CLIENT_URLS } from "@Constants/index";
export class Navbar extends Component<INavbarProps> {
	theatreActive = this.props.theatres ? "active" : "";
	citiesActive = this.props.cities ? "active" : "";
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand">Book My Movie</a>
				<ul className="navbar-nav ml-auto">
					<li className={`nav-item ${this.theatreActive}`}>
						<a className="nav-link" href={CLIENT_URLS.theatres}>
							Theatres
						</a>
					</li>
					<li className={`nav-item ${this.citiesActive}`}>
						<a className="nav-link" href={CLIENT_URLS.cities}>
							Cities
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
