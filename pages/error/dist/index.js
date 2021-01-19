"use strict";
exports.__esModule = true;
var react_1 = require("react");
var index_1 = require("@Components/index");
var ErrorPage = function () {
    return (react_1["default"].createElement("div", { className: "d-flex flex-column vh-100" },
        react_1["default"].createElement(index_1.Navbar, null),
        react_1["default"].createElement("h3", { className: "flex-grow-1 d-flex align-items-center justify-content-center" }, "You've been redirected to this page because of some error!")));
};
exports["default"] = ErrorPage;
