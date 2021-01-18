const HOST = "http://localhost:";
const PORT = "8080/";
const BASE_URL = HOST + PORT;
export const API_URLS = {
	theatresUrl: "theatres/",
	ownersUrl: "owners/",
	citiesUrl: "cities/",
	moviesUrl: "movies/",
	screensUrl: "screens/",
	seatsUrl: "seats/",
	buildUrl: function (urlName: string) {
		return BASE_URL + this[urlName];
	},
};
export const CLIENT_URLS = {
	theatres: "/theatres",
	registerOwner: "/register/owner/",
	registerCity: "/register/city/",
	registerTheatre: "/register/theatre/",
	registerMovie: "/register/movie/",
};
