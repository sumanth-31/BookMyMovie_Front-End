import React, { useState } from "react";
import { NextPage } from "next";
import {
	IGetOwnersResponse,
	IGetCitiesResponse,
	IRegisterTheatreProps,
	IPostTheatreRequest,
	IPostTheatreResponse,
} from "@Interfaces/index";
import axios from "axios";
import { useRouter } from "next/router";
import { ICityModel, IOwnerModel } from "@Interfaces/Models";
import { API_URLS, CLIENT_URLS } from "@Constants/index";
import { Navbar, ObjectDropDown } from "@Components/index";
const Theatre: NextPage<IRegisterTheatreProps> = (props) => {
	const owners = props.owners;
	const cities = props.cities;
	const ownerIdInitialValue = owners.length > 0 ? owners[0].id : 0;
	const cityIdInitialValue = cities.length > 0 ? cities[0].id : 0;
	const [theatreName, setTheatreName] = useState("");
	const [ownerId, setOwnerId] = useState(ownerIdInitialValue);
	const [cityId, setCityId] = useState(cityIdInitialValue);
	const ownerChange = (id: number) => {
		console.log("called owner change " + id);
		setOwnerId(id);
	};
	const cityChange = (id: number) => {
		console.log("called city change " + id);
		setCityId(id);
	};
	const registerTheatre = (event: React.FormEvent) => {
		event.preventDefault();
		const url = API_URLS.buildUrl("theatresUrl");
		const requestData: IPostTheatreRequest = {
			name: theatreName,
			ownerId: ownerId,
			cityId: cityId,
		};
		axios
			.post(url, requestData)
			.then((response) => {
				const responseData: IPostTheatreResponse = response.data;
				const theatre = responseData.theatre;
				console.log(theatre);
				alert("Theatre registered successfully");
			})
			.catch((err) => {
				console.log(err);
				alert(`Error occured! ${err.response.data.message}`);
			});
	};
	return (
		<div className="d-flex flex-column vh-100">
			<Navbar />
			<div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
				<form className="w-75" onSubmit={registerTheatre}>
					<div className="form-row">
						<div className="form-group col-md-4">
							<label>Theatre Name</label>
							<input
								className="form-control"
								required
								placeholder="Enter Theatre Name"
								onChange={(e) => {
									setTheatreName(e.target.value);
								}}
							/>
						</div>
						<div className="form-group col-md-4">
							<label>Select Owner</label>
							<ObjectDropDown
								type="Owner"
								objects={owners}
								onSelect={ownerChange}
								redirectUrl={CLIENT_URLS.registerOwner}
								displayProperty="mail"
							/>
						</div>
						<div className="form-group col-md-4">
							<label>Select City</label>
							<ObjectDropDown
								type="City"
								objects={cities}
								onSelect={cityChange}
								redirectUrl={CLIENT_URLS.registerCity}
								displayProperty="name"
							/>
						</div>
					</div>
					<button className="btn btn-primary w-100" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
Theatre.getInitialProps = async ({ req }) => {
	let owners: IOwnerModel[] = [];
	let cities: ICityModel[] = [];
	const citiesUrl = API_URLS.buildUrl("citiesUrl");
	const citiesPromise = axios.get(citiesUrl);
	const ownersUrl = API_URLS.buildUrl("ownersUrl");
	const ownersPromise = axios.get(ownersUrl);
	await Promise.all([citiesPromise, ownersPromise])
		.then((values) => {
			const citiesResponse: IGetCitiesResponse = values[0].data;
			const ownersResponse: IGetOwnersResponse = values[1].data;
			cities = citiesResponse.cities;
			owners = ownersResponse.owners;
		})
		.catch((reason) => {
			alert("Error Occured!");
			console.log(reason);
		});
	return {
		cities: cities,
		owners: owners,
	};
};
export default Theatre;
