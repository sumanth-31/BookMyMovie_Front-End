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
exports.Navbar = void 0;
var react_1 = require("react");
var index_1 = require("@Constants/index");
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theatreActive = _this.props.theatres ? "active" : "";
        _this.citiesActive = _this.props.cities ? "active" : "";
        return _this;
    }
    Navbar.prototype.render = function () {
        return (react_1["default"].createElement("nav", { className: "navbar navbar-expand-lg navbar-dark bg-dark" },
            react_1["default"].createElement("a", { className: "navbar-brand" }, "Book My Movie"),
            react_1["default"].createElement("ul", { className: "navbar-nav ml-auto" },
                react_1["default"].createElement("li", { className: "nav-item " + this.theatreActive },
                    react_1["default"].createElement("a", { className: "nav-link", href: index_1.CLIENT_URLS.theatres }, "Theatres")),
                react_1["default"].createElement("li", { className: "nav-item " + this.citiesActive },
                    react_1["default"].createElement("a", { className: "nav-link", href: index_1.CLIENT_URLS.cities }, "Cities")))));
    };
    return Navbar;
}(react_1.Component));
exports.Navbar = Navbar;
