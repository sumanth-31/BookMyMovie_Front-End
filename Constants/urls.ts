const HOST = "https://book-on-click-backend.herokuapp.com/";
const BASE_URL = HOST;
export const API_URLS = {
	theatresUrl: "theatres/",
	ownersUrl: "owners/",
	citiesUrl: "cities/",
	moviesUrl: "movies/",
	screensUrl: "screens/",
	seatsUrl: "seats/",
	moviesInCityUrl: "movies/city/",
	buildUrl: function (urlName: string) {
		return BASE_URL + this[urlName];
	},
};
export const CLIENT_URLS = {
	theatres: "/theatres",
	cities: "/cities",
	registerOwner: "/register/owner/",
	registerCity: "/register/city/",
	registerTheatre: "/register/theatre/",
	registerMovie: "/register/movie/",
	registerScreen: "/register/screen/",
	errorPage: "/error",
};
