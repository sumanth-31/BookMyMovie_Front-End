import React, { Component } from "react";
import { Navbar } from "@Components/Navbar";
import Link from "next/link";
import { CLIENT_URLS } from "@Constants/index";
class Home extends Component {
	render() {
		return (
			<div className="d-flex flex-column vh-100">
				<Navbar />
				<div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
					<h3 className="mb-5">Welcome to BookMyMovie!</h3>
					<Link href={CLIENT_URLS.theatres}>
						<button className="btn btn-primary">Start Booking</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default Home;
