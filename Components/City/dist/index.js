"use strict";
exports.__esModule = true;
exports.CityComponent = void 0;
var react_1 = require("react");
exports.CityComponent = function (props) {
    var city = props.city;
    return (react_1["default"].createElement("li", { className: "list-group-item" },
        react_1["default"].createElement("div", { className: "float-left" }, city.name),
        react_1["default"].createElement("button", { className: "btn btn-primary float-right" }, "List Movies")));
};
