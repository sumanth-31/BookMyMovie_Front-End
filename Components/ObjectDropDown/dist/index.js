"use strict";
exports.__esModule = true;
exports.ObjectDropDown = void 0;
var react_1 = require("react");
var router_1 = require("next/router");
exports.ObjectDropDown = function (props) {
    var router = router_1.useRouter();
    var optionChange = function (event) {
        props.onSelect(parseInt(event.target.value));
    };
    var redirectToRegister = function () {
        router.push(props.redirectUrl);
    };
    return (react_1["default"].createElement("div", { className: "input-group" },
        react_1["default"].createElement("select", { className: "form-control", required: true, onChange: optionChange }, props.objects.map(function (obj) {
            return (react_1["default"].createElement("option", { key: obj.id, value: obj.id }, obj[props.displayProperty]));
        })),
        react_1["default"].createElement("div", { className: "input-group-append" },
            react_1["default"].createElement("button", { className: "btn btn-secondary", type: "button", onClick: redirectToRegister },
                "Add new ",
                props.type))));
};
