"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var Navbar_1 = require("@Components/Navbar");
var link_1 = require("next/link");
var index_1 = require("@Constants/index");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "d-flex flex-column vh-100" },
            react_1["default"].createElement(Navbar_1.Navbar, null),
            react_1["default"].createElement("div", { className: "d-flex flex-column justify-content-center align-items-center flex-grow-1" },
                react_1["default"].createElement("h3", { className: "mb-5" }, "Welcome to BookMyMovie!"),
                react_1["default"].createElement(link_1["default"], { href: index_1.CLIENT_URLS.theatres },
                    react_1["default"].createElement("button", { className: "btn btn-primary" }, "Start Booking")))));
    };
    return Home;
}(react_1.Component));
exports["default"] = Home;
