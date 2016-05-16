/**__________________________________________________________________________________________________________________
 * | MainPanel is a React component.
 * | Uses inside Calendarium to manage its.
 * |
 * @author sumbad
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DateUtilities_1 = require('../DateUtilities');
var DatePanel_1 = require('../date-panel/DatePanel');
var MainPanel = (function (_super) {
    __extends(MainPanel, _super);
    function MainPanel(props) {
        _super.call(this, props);
        this.state = { chosen: "day" };
    }
    MainPanel.prototype.render = function () {
        var day = DateUtilities_1.DateUtilities.toDayOfMonthString(this.props.selectedDate);
        var month = DateUtilities_1.DateUtilities.toMonthString(this.props.selectedDate);
        var year = this.props.selectedDate.getFullYear().toString();
        var hours = DateUtilities_1.DateUtilities.pad(this.props.selectedDate.getHours().toString(), 2);
        var minutes = DateUtilities_1.DateUtilities.pad(this.props.selectedDate.getMinutes().toString(), 2);
        return (React.createElement("div", {className: "main-panel"}, React.createElement("label", {onClick: this.handleClickDay.bind(this), className: "chosen-day " + (this.state.chosen === "day" ? "selected" : "")}, day), React.createElement("label", {onClick: this.handleClickMonth.bind(this), className: "chosen-month " + (this.state.chosen === "month" ? "selected" : "")}, month), React.createElement("label", {onClick: this.handleClickYear.bind(this), className: "chosen-year " + (this.state.chosen === "year" ? "selected" : "")}, year), React.createElement("label", {className: "chosen-time"}, React.createElement("div", {className: "chosen-time__hour " + (this.state.chosen === "hour" ? "selected" : "")}, React.createElement("div", {onClick: this.handleClickHoursArrowUp.bind(this), className: "arrow-up"}), React.createElement("span", {onClick: this.handleClickHours.bind(this)}, hours), React.createElement("div", {onClick: this.handleClickHoursArrowDown.bind(this), className: "arrow-down"})), React.createElement("div", {className: "chosen-time__colon"}, React.createElement("span", null, ": ")), React.createElement("div", {className: "chosen-time__minute " + (this.state.chosen === "minute" ? "selected" : "")}, React.createElement("div", {onClick: this.handleClickMinutesArrowUp.bind(this), className: "arrow-up"}), React.createElement("span", {onClick: this.handleClickMinutes.bind(this)}, minutes), React.createElement("div", {onClick: this.handleClickMinutesArrowDown.bind(this), className: "arrow-down"})))));
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //
    MainPanel.prototype.handleClickDay = function () {
        this.props.handleClick(DatePanel_1.DatePanel.Weeks);
        this.setState({ chosen: "day" });
    };
    MainPanel.prototype.handleClickMonth = function () {
        this.props.handleClick(DatePanel_1.DatePanel.Months);
        this.setState({ chosen: "month" });
    };
    MainPanel.prototype.handleClickYear = function () {
        this.props.handleClick(DatePanel_1.DatePanel.Years);
        this.setState({ chosen: "year" });
    };
    MainPanel.prototype.handleClickHours = function () {
        this.props.handleClick(DatePanel_1.DatePanel.Hours);
        this.setState({ chosen: "hour" });
    };
    MainPanel.prototype.handleClickMinutes = function () {
        this.props.handleClick(DatePanel_1.DatePanel.Minutes);
        this.setState({ chosen: "minute" });
    };
    MainPanel.prototype.handleClickHoursArrowUp = function () {
        var date = this.props.selectedDate;
        date.setHours(this.props.selectedDate.getHours() + 1);
        this.props.onSelect(date);
    };
    MainPanel.prototype.handleClickHoursArrowDown = function () {
        var date = this.props.selectedDate;
        date.setHours(this.props.selectedDate.getHours() - 1);
        this.props.onSelect(date);
    };
    MainPanel.prototype.handleClickMinutesArrowUp = function () {
        var date = this.props.selectedDate;
        date.setMinutes(this.props.selectedDate.getMinutes() + 1);
        this.props.onSelect(date);
    };
    MainPanel.prototype.handleClickMinutesArrowDown = function () {
        var date = this.props.selectedDate;
        date.setMinutes(this.props.selectedDate.getMinutes() - 1);
        this.props.onSelect(date);
    };
    return MainPanel;
}(React.Component));
exports.MainPanel = MainPanel;
//# sourceMappingURL=MainPanel.js.map