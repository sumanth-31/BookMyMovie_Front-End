"use strict";
exports.__esModule = true;
exports.CLIENT_URLS = exports.API_URLS = void 0;
var HOST = "http://localhost:";
var PORT = "8080/";
var BASE_URL = HOST + PORT;
exports.API_URLS = {
    theatresUrl: "theatres/",
    ownersUrl: "owners/",
    citiesUrl: "cities/",
    moviesUrl: "movies/",
    screensUrl: "screens/",
    seatsUrl: "seats/",
    moviesInCityUrl: "movies/city/",
    buildUrl: function (urlName) {
        return BASE_URL + this[urlName];
    }
};
exports.CLIENT_URLS = {
    theatres: "/theatres",
    cities: "/cities",
    registerOwner: "/register/owner/",
    registerCity: "/register/city/",
    registerTheatre: "/register/theatre/",
    registerMovie: "/register/movie/",
    registerScreen: "/register/screen/",
    errorPage: "/error"
};
