"use strict";
exports.__esModule = true;
exports.ScreenComponent = void 0;
var react_1 = require("react");
exports.ScreenComponent = function (props) {
    var screen = props.screen;
    return (react_1["default"].createElement("li", { className: "list-group-item" },
        react_1["default"].createElement("div", { className: "float-left" }, screen.movie.name),
        react_1["default"].createElement("button", { className: "btn btn-primary float-right" }, "Book Tickets")));
};
