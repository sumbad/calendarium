"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DateUtilities_1 = require('../../DateUtilities');
var Week = (function (_super) {
    __extends(Week, _super);
    function Week(props) {
        _super.call(this, props);
        // this.isDisabled = this.isDisabled.bind(this);
        //this.onSelect = this.onSelect.bind(this);
    }
    Week.prototype.render = function () {
        var _this = this;
        var days = this.buildDays(this.props.start);
        var DaysElement = days.map(function (day, i) {
            return (React.createElement("div", {key: i, onClick: _this.onSelect.bind(_this, day), className: _this.getDayClassName(day)}, DateUtilities_1.DateUtilities.toDayOfMonthString(day)));
        });
        return (React.createElement("div", {className: "week"}, DaysElement));
    };
    /*** ADDITIONAL METHODS **************************************************************************************/
    /**
     * Create days of the week
     */
    Week.prototype.buildDays = function (start) {
        // push start day to array days
        var days = [DateUtilities_1.DateUtilities.clone(start)];
        // clonning start day
        var clone = DateUtilities_1.DateUtilities.clone(start);
        for (var i = 1; i <= 6; i++) {
            clone = DateUtilities_1.DateUtilities.clone(clone);
            clone.setDate(clone.getDate() + 1);
            days.push(clone);
        }
        return days;
    };
    Week.prototype.isOtherMonth = function (day) {
        return this.props.month !== day.month();
    };
    Week.prototype.getDayClassName = function (day) {
        var className = "day";
        if (DateUtilities_1.DateUtilities.isSameDay(day, new Date()))
            className += " today";
        if (this.props.month !== day.getMonth())
            className += " other-month";
        if (this.props.selectedDate && DateUtilities_1.DateUtilities.isSameDay(day, this.props.selectedDate))
            className += " selected";
        if (this.isDisabled(day))
            className += " disabled";
        return className;
    };
    Week.prototype.onSelect = function (day) {
        if (!this.isDisabled(day))
            this.props.onSelect(day);
    };
    Week.prototype.isDisabled = function (day) {
        var minDate = this.props.minDate, maxDate = this.props.maxDate;
        return (minDate && DateUtilities_1.DateUtilities.isBefore(day, minDate)) || (maxDate && DateUtilities_1.DateUtilities.isAfter(day, maxDate));
    };
    return Week;
}(React.Component));
exports.Week = Week;
//# sourceMappingURL=Week.js.map