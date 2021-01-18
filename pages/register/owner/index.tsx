import React, { useState } from "react";
import { IPostOwnerRequest, IPostOwnerResponse } from "@Interfaces/index";
import { Navbar } from "@Components/index";
import axios from "axios";
import { API_URLS, CLIENT_URLS } from "@Constants/index";
import { useRouter } from "next/router";
const OwnerRegistration = () => {
	const [ownerName, setOwnerName] = useState("");
	const [ownerMail, setOwnerMail] = useState("");
	const router = useRouter();
	const registerOwner = async (event: React.FormEvent) => {
		event.preventDefault();
		const url = API_URLS.buildUrl("ownersUrl");
		const owner: IPostOwnerRequest = {
			name: ownerName,
			mail: ownerMail,
		};
		await axios
			.post(url, owner)
			.then((response) => {
				const responseData: IPostOwnerResponse = response.data;
				const returnedOwner = responseData.owner;
				console.log(returnedOwner);
				alert("Owner successfully registered!");
				router.push(CLIENT_URLS.theatres);
			})
			.catch((err) => {
				alert(`Error Occured! ${err.response.data.message}`);
			});
	};
	return (
		<div className="d-flex flex-column justify-content-center vh-100">
			<Navbar />
			<div className="d-flex flex-column align-items-center flex-grow-1 justify-content-center">
				<form className="w-50" onSubmit={registerOwner}>
					<div className="form-group ">
						<label>Owner Name</label>
						<input
							className="form-control"
							placeholder="Enter Owner Name"
							onChange={(e) => {
								setOwnerName(e.target.value);
							}}
							required
						/>
					</div>
					<div className="form-group ">
						<label>Owner Mail</label>
						<input
							className="form-control"
							placeholder="Enter Owner Mail"
							type="email"
							onChange={(e) => {
								setOwnerMail(e.target.value);
							}}
							required
						/>
					</div>
					<button className="btn btn-primary w-100">Submit</button>
				</form>
			</div>
		</div>
	);
};
export default OwnerRegistration;
