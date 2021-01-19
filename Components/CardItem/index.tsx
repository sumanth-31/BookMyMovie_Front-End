import React, { Component } from "react";
import Link from "next/link";
import { ICardItemComponentProps } from "@Interfaces/index";
export class CardItem extends Component<ICardItemComponentProps> {
	render() {
		const { buttonLink, displayField, buttonValue } = this.props;
		return (
			<li className="list-group-item">
				<div className="float-left">{displayField}</div>
				{buttonLink ? (
					<Link href={buttonLink}>
						<button className="btn btn-primary float-right">
							{buttonValue}
						</button>
					</Link>
				) : null}
			</li>
		);
	}
}
