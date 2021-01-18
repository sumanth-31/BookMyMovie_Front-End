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
		if (props.type === "owner") {
			router.push(CLIENT_URLS.registerOwner);
		} else {
			router.push(CLIENT_URLS.registerCity);
		}
	};
	return (
		<div className="input-group">
			<select className="form-control" required onChange={optionChange}>
				{props.objects.map((obj: IOwnerModel | ICityModel, ind) => {
					if ("mail" in obj) {
						//If Object is Owner
						return (
							<option key={obj.id} value={obj.id}>
								{obj.mail}
							</option>
						);
					} //Object is City
					else {
						return (
							<option key={obj.id} value={obj.id}>
								{obj.name}
							</option>
						);
					}
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
