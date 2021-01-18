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
exports.Theatre = void 0;
var react_1 = require("react");
var Theatre = /** @class */ (function (_super) {
    __extends(Theatre, _super);
    function Theatre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Theatre.prototype.render = function () {
        var theatre = this.props.theatre;
        return (react_1["default"].createElement("li", { className: "list-group-item" },
            react_1["default"].createElement("div", { className: "float-left" }, theatre.name),
            react_1["default"].createElement("button", { className: "btn btn-primary float-right" }, "Book Tickets")));
    };
    return Theatre;
}(react_1.Component));
exports.Theatre = Theatre;
