"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var calendarStyle = require('../../calendarStyle');
var React = require('react');
var DateUtilities_1 = require('../../../util/DateUtilities');
var Week_1 = require('./Week');
var Weeks = (function (_super) {
    __extends(Weeks, _super);
    function Weeks(props) {
        _super.call(this, props);
    }
    Weeks.prototype.render = function () {
        var weeks = this.renderWeeks(DateUtilities_1.DateUtilities.clone(this.props.selectedDate));
        var weekHeader = DateUtilities_1.DateUtilities.locale.week.map(function (w) {
            return (React.createElement("span", {key: w.name, className: calendarStyle[w.class]}, w.name));
        });
        return (React.createElement("div", {className: calendarStyle["weeks"]}, React.createElement("div", {className: calendarStyle["week-header"]}, weekHeader), React.createElement("div", {className: calendarStyle["week-body"]}, React.createElement("div", {ref: "current", className: calendarStyle["current"]}, weeks))));
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //
    /**
     * Rendering weeks
     */
    Weeks.prototype.renderWeeks = function (view) {
        var _this = this;
        var starts = this.getWeekStartDates(view);
        var month = starts[1].getMonth();
        var WeeksElement = starts.map(function (s, i) {
            return React.createElement(Week_1.Week, {key: i, start: s, month: month, selectedDate: _this.props.selectedDate, onSelect: _this.props.onSelect, minDate: _this.props.minDate, maxDate: _this.props.maxDate});
        });
        return WeeksElement;
    };
    /**
     * Get weeks for a view
     */
    Weeks.prototype.getWeekStartDates = function (date) {
        // set a first day of the month
        date.setDate(1);
        date = DateUtilities_1.DateUtilities.moveToDayOfWeek(DateUtilities_1.DateUtilities.clone(date), 0);
        var current = DateUtilities_1.DateUtilities.clone(date);
        current.setDate(current.getDate() + 7);
        var weeks = [date];
        var month = current.getMonth();
        while (current.getMonth() === month || weeks.length < 6) {
            weeks.push(DateUtilities_1.DateUtilities.clone(current));
            current.setDate(current.getDate() + 7);
        }
        return weeks;
    };
    return Weeks;
}(React.Component));
exports.Weeks = Weeks;
//# sourceMappingURL=Weeks.js.map