import React from "react";
import { IScreenComponentProps } from "@Interfaces/index";
import Link from "next/link";
import { CLIENT_URLS } from "@Constants/index";
export const ScreenComponent = (props: IScreenComponentProps) => {
	const { screen } = props;
	const theatreId = screen.theatre.id;
	return (
		<li className="list-group-item">
			<div className="float-left">{screen.movie.name}</div>
			<Link href={`${CLIENT_URLS.theatres}/${theatreId}/screens/${screen.id}`}>
				<button className="btn btn-primary float-right">Book Tickets</button>
			</Link>
		</li>
	);
};
