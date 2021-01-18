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
    buildUrl: function (urlName) {
        return BASE_URL + this[urlName];
    }
};
exports.CLIENT_URLS = {
    theatres: "/theatres",
    registerOwner: "/register/owner/",
    registerCity: "/register/city/",
    registerTheatre: "/register/theatre/"
};
