import { loadComponents } from "next/dist/next-server/server/load-components";
import React, { Component } from "react";
import { Navbar } from "@Components/Navbar";
class Home extends Component {
	render() {
		return (
			<div>
				<Navbar></Navbar>
			</div>
		);
	}
}
export default Home;
