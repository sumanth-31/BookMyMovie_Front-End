import React, { Component } from "react";
import { NextPageContext } from "next";
import axios from "axios";
import Link from "next/link";
import { ITheatreComponentProps } from "@Interfaces/index";
import { CLIENT_URLS } from "@Constants/index";
export class TheatreComponent extends Component<ITheatreComponentProps> {
	render() {
		const theatre = this.props.theatre;
		return (
			<li className="list-group-item">
				<div className="float-left">{theatre.name}</div>
				<Link href={`${CLIENT_URLS.theatres}/${theatre.id}`}>
					<button className="btn btn-primary float-right">Book Tickets</button>
				</Link>
			</li>
		);
	}
}
