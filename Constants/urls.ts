const HOST = "http://localhost:";
const PORT = "8080/";
const BASE_URL = HOST + PORT;
export const API_URLS = {
	theatresUrl: "theatres/",
	ownersUrl: "owners/",
	citiesUrl: "cities/",
	buildUrl: function (urlName: string) {
		return BASE_URL + this[urlName];
	},
};
export const CLIENT_URLS = {
	theatres: "/theatres",
	registerOwner: "/register/owner",
	registerCity: "/register/city",
};
