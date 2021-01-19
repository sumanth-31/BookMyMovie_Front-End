import React from "react";
import { Navbar } from "@Components/index";
const ErrorPage = () => {
	return (
		<div className="d-flex flex-column vh-100">
			<Navbar />
			<h3 className="flex-grow-1 d-flex align-items-center justify-content-center">
				You've been redirected to this page because of some error!
			</h3>
		</div>
	);
};
export default ErrorPage;
