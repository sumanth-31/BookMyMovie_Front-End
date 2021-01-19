"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var index_1 = require("@Constants/index");
var index_2 = require("@Components/index");
var RegisterScreen = function (props) {
    var theatres = props.theatres;
    var movies = props.movies;
    var theatreIdInitialValue = theatres.length > 0 ? theatres[0].id : 0;
    var moviesIdInitialValue = movies.length > 0 ? movies[0].id : 0;
    var _a = react_1.useState(-1), numberOfSeats = _a[0], setNumberOfSeats = _a[1];
    var _b = react_1.useState(theatreIdInitialValue), theatreId = _b[0], setTheatreId = _b[1];
    var _c = react_1.useState(moviesIdInitialValue), movieId = _c[0], setMovieId = _c[1];
    var theatreChange = function (id) {
        setTheatreId(id);
    };
    var movieChange = function (id) {
        setMovieId(id);
    };
    var registerScreen = function (event) {
        event.preventDefault();
        var url = index_1.API_URLS.buildUrl("screensUrl");
        var requestData = {
            theatreId: theatreId,
            movieId: movieId
        };
        if (numberOfSeats > 0) {
            requestData.numberOfSeats = numberOfSeats;
        }
        axios_1["default"]
            .post(url, requestData)
            .then(function (response) {
            var responseData = response.data;
            var screen = responseData.screen;
            console.log(screen);
            alert("Screen registered successfully");
        })["catch"](function (err) {
            console.log(err);
            var errorMessage = "";
            if (err.response)
                errorMessage = err.response.data.message;
            alert("Error occured! " + errorMessage);
        });
    };
    return (react_1["default"].createElement("div", { className: "d-flex flex-column vh-100" },
        react_1["default"].createElement(index_2.Navbar, null),
        react_1["default"].createElement("div", { className: "d-flex flex-column justify-content-center align-items-center flex-grow-1" },
            react_1["default"].createElement("form", { className: "w-75", onSubmit: registerScreen },
                react_1["default"].createElement("div", { className: "form-row" },
                    react_1["default"].createElement("div", { className: "form-group col-md-4" },
                        react_1["default"].createElement("label", null, "Select Theatre"),
                        react_1["default"].createElement(index_2.ObjectDropDown, { type: "Theatre", objects: theatres, onSelect: theatreChange, redirectUrl: index_1.CLIENT_URLS.registerTheatre, displayProperty: "name" })),
                    react_1["default"].createElement("div", { className: "form-group col-md-4" },
                        react_1["default"].createElement("label", null, "Select Movie"),
                        react_1["default"].createElement(index_2.ObjectDropDown, { type: "Movie", objects: movies, onSelect: movieChange, redirectUrl: index_1.CLIENT_URLS.registerMovie, displayProperty: "name" })),
                    react_1["default"].createElement("div", { className: "form-group col-md-4" },
                        react_1["default"].createElement("label", null, "Number of Seats"),
                        react_1["default"].createElement("input", { className: "form-control", type: "number", onChange: function (e) {
                                setNumberOfSeats(parseInt(e.target.value));
                            }, min: 1, max: 100 }))),
                react_1["default"].createElement("button", { className: "btn btn-primary w-100", type: "submit" }, "Submit")))));
};
RegisterScreen.getInitialProps = function (_a) {
    var res = _a.res;
    return __awaiter(void 0, void 0, void 0, function () {
        var movies, theatres, moviesUrl, moviesPromise, theatresUrl, theatresPromise;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    movies = [];
                    theatres = [];
                    moviesUrl = index_1.API_URLS.buildUrl("moviesUrl");
                    moviesPromise = axios_1["default"].get(moviesUrl);
                    theatresUrl = index_1.API_URLS.buildUrl("theatresUrl");
                    theatresPromise = axios_1["default"].get(theatresUrl);
                    return [4 /*yield*/, Promise.all([theatresPromise, moviesPromise])
                            .then(function (values) {
                            var theatresResponse = values[0].data;
                            var moviesResponse = values[1].data;
                            movies = moviesResponse.movies;
                            theatres = theatresResponse.theatres;
                        })["catch"](function (reason) {
                            console.log(reason);
                            res.writeHead(302, { location: index_1.CLIENT_URLS.errorPage });
                            res.end();
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/, {
                            theatres: theatres,
                            movies: movies
                        }];
            }
        });
    });
};
exports["default"] = RegisterScreen;
