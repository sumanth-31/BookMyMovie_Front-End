import { IScreenComponentProps } from "@Interfaces/index";
import React from "react";
export const ScreenComponent = (props: IScreenComponentProps) => {
	const { screen } = props;
	return (
		<li className="list-group-item">
			<div className="float-left">{screen.movie.name}</div>
			<button className="btn btn-primary float-right">Book Tickets</button>
		</li>
	);
};
