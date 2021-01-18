"use strict";
exports.__esModule = true;
var react_1 = require("react");
var index_1 = require("@Components/index");
var CityRegistration = function () {
    return (react_1["default"].createElement("div", { className: "d-flex flex-column justify-content-center align-items-center" },
        react_1["default"].createElement(index_1.Navbar, null),
        react_1["default"].createElement("div", { className: "d-flex flex-column" },
            react_1["default"].createElement("form", { className: "w-50" },
                react_1["default"].createElement("div", { className: "form-group " },
                    react_1["default"].createElement("label", null, "City Name"),
                    react_1["default"].createElement("input", { className: "form-control", placeholder: "Enter City Name" }))))));
};
