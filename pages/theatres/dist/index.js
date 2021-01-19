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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var index_1 = require("@Constants/index");
var index_2 = require("@Components/index");
var router_1 = require("next/router");
var Theatres = /** @class */ (function (_super) {
    __extends(Theatres, _super);
    function Theatres() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.redirectToRegister = function () {
            router_1["default"].push(index_1.CLIENT_URLS.registerTheatre);
        };
        return _this;
    }
    Theatres.getInitialProps = function (_a) {
        var res = _a.res;
        return __awaiter(this, void 0, void 0, function () {
            var theatres, theatreURL;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        theatres = [];
                        theatreURL = index_1.API_URLS.buildUrl("theatresUrl");
                        return [4 /*yield*/, axios_1["default"]
                                .get(theatreURL)
                                .then(function (res) {
                                console.log(res);
                                var responseData = res.data;
                                theatres = responseData.theatres;
                            })["catch"](function (err) {
                                console.log(err);
                                res.writeHead(302, { location: index_1.CLIENT_URLS.errorPage });
                                res.end();
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, {
                                theatres: theatres
                            }];
                }
            });
        });
    };
    Theatres.prototype.render = function () {
        var theatres = this.props.theatres;
        return (react_1["default"].createElement("div", { className: "d-flex flex-column" },
            react_1["default"].createElement(index_2.Navbar, null),
            react_1["default"].createElement("div", { className: "mt-2 px-3 d-flex align-content-center justify-content-between mb-3" },
                react_1["default"].createElement("h3", { className: "d-inline" }, "Theatres"),
                react_1["default"].createElement("button", { className: "btn btn-primary absolute right-0", onClick: this.redirectToRegister }, "+ Add Theatre")),
            react_1["default"].createElement("div", { className: "card w-100" },
                react_1["default"].createElement("ul", { className: "list-group" }, theatres.map(function (theatre) { return (react_1["default"].createElement(index_2.TheatreComponent, { key: theatre.id, theatre: theatre })); })))));
    };
    return Theatres;
}(react_1.Component));
exports["default"] = Theatres;
