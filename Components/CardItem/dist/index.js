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
exports.CardItem = void 0;
var react_1 = require("react");
var link_1 = require("next/link");
var CardItem = /** @class */ (function (_super) {
    __extends(CardItem, _super);
    function CardItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardItem.prototype.render = function () {
        var _a = this.props, buttonLink = _a.buttonLink, displayField = _a.displayField, buttonValue = _a.buttonValue;
        return (react_1["default"].createElement("li", { className: "list-group-item" },
            react_1["default"].createElement("div", { className: "float-left" }, displayField),
            buttonLink ? (react_1["default"].createElement(link_1["default"], { href: buttonLink },
                react_1["default"].createElement("button", { className: "btn btn-primary float-right" }, buttonValue))) : null));
    };
    return CardItem;
}(react_1.Component));
exports.CardItem = CardItem;
