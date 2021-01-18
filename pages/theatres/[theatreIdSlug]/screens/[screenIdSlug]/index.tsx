import { IScreenSlugProps } from "@Interfaces/Props/PageProps/ScreenSlugProps";
import React, { useState } from "react";
import { NextPage, NextPageContext } from "next";
import { API_URLS, DUMMY_SCREEN } from "@Constants/index";
import axios from "axios";
import { IGetScreenResponse } from "@Interfaces/index";
import { IScreenModel } from "@Interfaces/Models";
import {
	IGetSeatsResponse,
	IPostSeatsRequest,
	IPostSeatsResponse,
} from "@Interfaces/Api/SeatInterfaces";
import { Navbar } from "@Components/index";
const ScreenSlugPage: NextPage<IScreenSlugProps> = (props) => {
	const { screen, bookedSeats } = props;
	const numberOfSeats = screen.numberOfSeats;
	let bookedInit: boolean[] = [];
	let prevBooked: boolean[] = [];
	for (let i = 0; i < numberOfSeats; i++) {
		bookedInit.push(false);
		prevBooked.push(false);
	}
	bookedSeats.map((seatObj) => {
		prevBooked[seatObj.seat] = true;
	});
	const [booked, setBooked] = useState(bookedInit);
	const toggleSeat = (ind: number) => {
		setBooked((oldState) => {
			const newState = [...booked];
			newState[ind] = !newState[ind];
			return newState;
		});
	};
	const bookSeats = async (e: React.FormEvent) => {
		e.preventDefault();
		let currBooking = [];
		for (let i = 0; i < numberOfSeats; i++) {
			if (booked[i]) {
				currBooking.push(i);
			}
		}
		const requestData: IPostSeatsRequest = {
			screenId: screen.id,
			seats: currBooking,
		};
		const url = API_URLS.buildUrl("seatsUrl");
		await axios
			.post(url, requestData)
			.then((response) => {
				const responseData: IPostSeatsResponse = response.data;
				const seats = responseData.seats;
				console.log(seats);
				alert("Seats Booked successfully");
			})
			.catch((err) => {
				console.log(err);
				alert(`Error occured! ${err.response.data.message}`);
			});

		window.location.href = window.location.href;
	};
	return (
		<div className="d-flex flex-column vh-100">
			<Navbar />
			<div className="d-flex flex-column align-items-center justify-content-center mt-2">
				<h3>
					Seats for {screen.movie.name} at {screen.theatre.name}
				</h3>
				<form className="w-75" onSubmit={bookSeats}>
					<div className="form-group">
						{booked.map((seat, ind) => {
							return (
								<div className="d-inline-block mr-3 mb-2" key={ind}>
									<label>Seat {ind + 1}</label>
									<input
										className="form-control"
										type="checkbox"
										checked={prevBooked[ind] || seat}
										disabled={prevBooked[ind]}
										onChange={(e) => {
											toggleSeat(ind);
										}}
									/>
								</div>
							);
						})}
					</div>
					<button className="btn btn-primary w-100" type="submit">
						Book Seats
					</button>
				</form>
			</div>
		</div>
	);
};
ScreenSlugPage.getInitialProps = async (ctx: NextPageContext) => {
	const { screenIdSlug } = ctx.query;
	const rawScreenUrl = API_URLS.buildUrl("screensUrl");
	const screenUrl = `${rawScreenUrl}?screenId=${screenIdSlug}`;
	const screenPromise = axios.get(screenUrl);
	const rawSeatsUrl = API_URLS.buildUrl("seatsUrl");
	const seatsUrl = `${rawSeatsUrl}?screenId=${screenIdSlug}`;
	const seatsPromise = axios.get(seatsUrl);
	let screen: IScreenModel = DUMMY_SCREEN;
	let bookedSeats = [];
	await Promise.all([screenPromise, seatsPromise])
		.then((responses) => {
			const screenResponse: IGetScreenResponse = responses[0].data;
			const seatsResponse: IGetSeatsResponse = responses[1].data;
			screen = screenResponse.screen;
			bookedSeats = seatsResponse.seats;
		})
		.catch((err) => {
			console.log(err);
			alert("Error occured!");
		});
	return {
		screen,
		bookedSeats,
	};
};
export default ScreenSlugPage;
