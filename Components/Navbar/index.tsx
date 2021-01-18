import React, { Component } from "react";

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand">Book My Movie</a>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link" href="#">
							Cities
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
