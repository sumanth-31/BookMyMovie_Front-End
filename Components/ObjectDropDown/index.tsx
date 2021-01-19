import React from "react";
import { IDropDownComponentProps } from "@Props/index";
import Link from "next/link";
export const ObjectDropDown = (props: IDropDownComponentProps) => {
	const optionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		props.onSelect(parseInt(event.target.value));
	};
	return (
		<div className="input-group">
			<select className="form-control" required onChange={optionChange}>
				{props.objects.map((obj) => {
					return (
						<option key={obj.id} value={obj.id}>
							{obj[props.displayProperty]}
						</option>
					);
				})}
			</select>
			<div className="input-group-append">
				<Link href={props.redirectUrl}>
					<button className="btn btn-secondary" type="button">
						Add new {props.type}
					</button>
				</Link>
			</div>
		</div>
	);
};
