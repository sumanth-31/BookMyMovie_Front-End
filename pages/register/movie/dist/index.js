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
var index_1 = require("@Components/index");
var index_2 = require("@Constants/index");
var axios_1 = require("axios");
var router_1 = require("next/router");
var MovieRegistration = function () {
    var _a = react_1.useState(""), movieName = _a[0], setMovieName = _a[1];
    var router = router_1.useRouter();
    var registerMovie = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var movie, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    movie = {
                        name: movieName
                    };
                    url = index_2.API_URLS.buildUrl("moviesUrl");
                    return [4 /*yield*/, axios_1["default"]
                            .post(url, movie)
                            .then(function (response) {
                            var responseData = response.data;
                            var returnedMovie = responseData.movie;
                            console.log(returnedMovie);
                            alert("Movie successfully registered!");
                        })["catch"](function (err) {
                            console.log(err);
                            var errorMessage = "";
                            if (err.response)
                                errorMessage = err.response.data.message;
                            alert("Error occured! " + errorMessage);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "d-flex flex-column justify-content-center vh-100" },
        react_1["default"].createElement(index_1.Navbar, null),
        react_1["default"].createElement("div", { className: "d-flex flex-column align-items-center flex-grow-1 justify-content-center" },
            react_1["default"].createElement("form", { className: "w-50", onSubmit: registerMovie },
                react_1["default"].createElement("div", { className: "form-group " },
                    react_1["default"].createElement("label", null, "Movie Name"),
                    react_1["default"].createElement("input", { className: "form-control", placeholder: "Enter Movie Name", required: true, onChange: function (e) {
                            setMovieName(e.target.value);
                        } })),
                react_1["default"].createElement("button", { className: "btn btn-primary w-100" }, "Submit")))));
};
exports["default"] = MovieRegistration;
