import React, { Component } from "react";
import { NextPageContext } from "next";
import axios from "axios";
import { ITheatreComponentProps } from "@Interfaces/index";
export class Theatre extends Component<ITheatreComponentProps> {
	render() {
		const theatre = this.props.theatre;
		return (
			<li className="list-group-item">
				<div className="float-left">{theatre.name}</div>
				<button className="btn btn-primary float-right">Book Tickets</button>
			</li>
		);
	}
}
