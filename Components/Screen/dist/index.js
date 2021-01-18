"use strict";
exports.__esModule = true;
exports.ScreenComponent = void 0;
var react_1 = require("react");
var link_1 = require("next/link");
var index_1 = require("@Constants/index");
exports.ScreenComponent = function (props) {
    var screen = props.screen;
    var theatreId = screen.theatre.id;
    return (react_1["default"].createElement("li", { className: "list-group-item" },
        react_1["default"].createElement("div", { className: "float-left" }, screen.movie.name),
        react_1["default"].createElement(link_1["default"], { href: index_1.CLIENT_URLS.theatres + "/" + theatreId + "/screens/" + screen.id },
            react_1["default"].createElement("button", { className: "btn btn-primary float-right" }, "Book Tickets"))));
};
