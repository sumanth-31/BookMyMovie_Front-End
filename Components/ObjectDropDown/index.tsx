import React from "react";
import { IDropDownComponentProps } from "@Props/index";
import { ICityModel, IOwnerModel } from "@Interfaces/Models";
import { useRouter } from "next/router";
import { CLIENT_URLS } from "@Constants/index";
export const ObjectDropDown = (props: IDropDownComponentProps) => {
	const router = useRouter();
	const optionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		props.onSelect(parseInt(event.target.value));
	};
	const redirectToRegister = () => {
		router.push(props.redirectUrl);
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
				<button
					className="btn btn-secondary"
					type="button"
					onClick={redirectToRegister}
				>
					Add new {props.type}
				</button>
			</div>
		</div>
	);
};
