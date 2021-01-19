import React, { useState } from "react";
import { IPostCityRequest, IPostCityResponse } from "@Interfaces/index";
import { Navbar } from "@Components/index";
import { API_URLS, CLIENT_URLS } from "@Constants/index";
import axios from "axios";
import { useRouter } from "next/router";
const CityRegistration = () => {
	const [cityName, setCityName] = useState("");
	const router = useRouter();
	const registerCity = async (event: React.FormEvent) => {
		event.preventDefault();
		const city: IPostCityRequest = {
			name: cityName,
		};
		const url = API_URLS.buildUrl("citiesUrl");
		await axios
			.post(url, city)
			.then((response) => {
				const responseData: IPostCityResponse = response.data;
				const returnedCity = responseData.city;
				console.log(returnedCity);
				alert("City successfully registered!");
				router.push(CLIENT_URLS.theatres);
			})
			.catch((err) => {
				console.log(err);
				let errorMessage = "";
				if (err.response) errorMessage = err.response.data.message;
				alert(`Error occured! ${errorMessage}`);
			});
	};
	return (
		<div className="d-flex flex-column justify-content-center vh-100">
			<Navbar />
			<div className="d-flex flex-column align-items-center flex-grow-1 justify-content-center">
				<form className="w-50" onSubmit={registerCity}>
					<div className="form-group ">
						<label>City Name</label>
						<input
							className="form-control"
							placeholder="Enter City Name"
							required
							onChange={(e) => {
								setCityName(e.target.value);
							}}
						/>
					</div>
					<button className="btn btn-primary w-100">Submit</button>
				</form>
			</div>
		</div>
	);
};
export default CityRegistration;
