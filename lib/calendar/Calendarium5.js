"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
require('./calendarium.less');
var Calendarium = (function (_super) {
    __extends(Calendarium, _super);
    function Calendarium(props) {
        _super.call(this, props);
    }
    Calendarium.prototype.render = function () {
        return (React.createElement("div", {className: "calendarium calendarium-show", style: { top: "120.875px", left: "8px" }}, React.createElement("div", {className: "main-panel"}, React.createElement("label", {className: "chosen-day selected"}, "23"), React.createElement("label", {className: "chosen-month"}, "Декабря"), React.createElement("label", {className: "chosen-year"}, "2016"), React.createElement("label", {className: "chosen-time"}, React.createElement("div", {className: "chosen-time__hour"}, React.createElement("div", {className: "arrow-up"}), React.createElement("span", null, "20"), React.createElement("div", {className: "arrow-down"})), React.createElement("div", {className: "chosen-time__colon"}, React.createElement("span", null, ": ")), React.createElement("div", {className: "chosen-time__minute"}, React.createElement("div", {className: "arrow-up"}), React.createElement("span", null, "20"), React.createElement("div", {className: "arrow-down"})))), React.createElement("div", {className: "date-panel"}, React.createElement("div", {className: "minutes"}, React.createElement("div", {className: "minute"}, "00"), React.createElement("div", {className: "minute"}, "05"), React.createElement("div", {className: "minute"}, "10"), React.createElement("div", {className: "minute"}, "15"), React.createElement("div", {className: "minute selected"}, "20"), React.createElement("div", {className: "minute"}, "25"), React.createElement("div", {className: "minute"}, "30"), React.createElement("div", {className: "minute"}, "35"), React.createElement("div", {className: "minute"}, "40"), React.createElement("div", {className: "minute"}, "45"), React.createElement("div", {className: "minute"}, "50"), React.createElement("div", {className: "minute"}, "55"))), React.createElement("div", {className: "control-panel"}, React.createElement("button", {className: "button-contour"}, "Сейчас"), React.createElement("button", {className: "button-contour"}, "Закрыть"))));
    };
    return Calendarium;
}(React.Component));
exports.Calendarium = Calendarium;
//# sourceMappingURL=Calendarium5.js.map