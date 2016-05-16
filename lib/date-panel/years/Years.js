"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Years = (function (_super) {
    __extends(Years, _super);
    function Years(props) {
        _super.call(this, props);
        var yearSelected = props.selectedDate.getFullYear();
        this.state = {
            years: [yearSelected - 6, yearSelected - 5, yearSelected - 4, yearSelected - 3, yearSelected - 2, yearSelected - 1, yearSelected, yearSelected + 1, yearSelected + 2, yearSelected + 3, yearSelected + 4, yearSelected + 5]
        };
    }
    Years.prototype.render = function () {
        var _this = this;
        var years = this.state.years.map(function (year) {
            var selected = _this.props.selectedDate.getFullYear() == year ? "selected" : "";
            return (React.createElement("li", {key: year, onClick: _this.handleClickYear.bind(_this, year), className: "year " + selected}, year));
        });
        var years1col = years.slice(0, 6);
        var years2col = years.slice(6, 12);
        return (React.createElement("div", {className: "years"}, React.createElement("div", {onClick: this.handleClickArrowLeft.bind(this), className: "arrow-left"}), React.createElement("div", {className: "years-columns"}, React.createElement("ul", null, years1col), React.createElement("ul", null, years2col)), React.createElement("div", {onClick: this.handleClickArrowRight.bind(this), className: "arrow-right"})));
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //
    Years.prototype.handleClickYear = function (year) {
        var date = this.props.selectedDate;
        date.setFullYear(year);
        this.props.onSelect(date);
    };
    Years.prototype.handleClickArrowLeft = function () {
        this.state.years = this.state.years.map(function (year) {
            return year - 6;
        });
        this.setState(this.state);
    };
    Years.prototype.handleClickArrowRight = function () {
        this.state.years = this.state.years.map(function (year) {
            return year + 6;
        });
        this.setState(this.state);
    };
    return Years;
}(React.Component));
exports.Years = Years;
//# sourceMappingURL=Years.js.map