import React from "react";
import { ICityComponentProps } from "@Interfaces/index";
export const CityComponent = (props: ICityComponentProps) => {
	const { city } = props;
	return (
		<li className="list-group-item">
			<div className="float-left">{city.name}</div>
			<button className="btn btn-primary float-right">List Movies</button>
		</li>
	);
};
