/**__________________________________________________________________________________________________________________
 * | Calendar is a React component.
 * | Uses inside calendar.
 * |
 * @author sumbad
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// import styles from './calendarStyle';
var calendarStyle = require('./calendarStyle');
var React = require('react');
var MainPanel_1 = require('./main-panel/MainPanel');
var ControlPanel_1 = require('./control-panel/ControlPanel');
var DatePanel_1 = require('./date-panel/DatePanel');
var Weeks_1 = require('./date-panel/weeks/Weeks');
var Months_1 = require('./date-panel/months/Months');
var Years_1 = require('./date-panel/years/Years');
var Hours_1 = require('./date-panel/hours/Hours');
var Minutes_1 = require('./date-panel/minutes/Minutes');
var Calendar = (function (_super) {
    __extends(Calendar, _super);
    function Calendar(props) {
        _super.call(this, props);
        this.state = {
            datePanelSelected: DatePanel_1.DatePanel.Weeks
        };
    }
    Calendar.prototype.render = function () {
        var style;
        if (this.props.position) {
            style = {
                top: this.props.position.top,
                left: this.props.position.left
            };
        }
        var datePanel;
        switch (this.state.datePanelSelected) {
            case DatePanel_1.DatePanel.Weeks:
                datePanel = (React.createElement(Weeks_1.Weeks, {ref: "weeks", selectedDate: this.props.selectedDate, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate}));
                break;
            case DatePanel_1.DatePanel.Months:
                datePanel = (React.createElement(Months_1.Months, {selectedDate: this.props.selectedDate, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate}));
                break;
            case DatePanel_1.DatePanel.Years:
                datePanel = (React.createElement(Years_1.Years, {selectedDate: this.props.selectedDate, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate}));
                break;
            case DatePanel_1.DatePanel.Hours:
                datePanel = (React.createElement(Hours_1.Hours, {selectedDate: this.props.selectedDate, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate}));
                break;
            case DatePanel_1.DatePanel.Minutes:
                datePanel = (React.createElement(Minutes_1.Minutes, {selectedDate: this.props.selectedDate, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate}));
                break;
        }
        // console.log("/////////////////////////////////////////////////");
        return (React.createElement("div", {className: calendarStyle["ardp-calendar-"] + this.props.id + " " + calendarStyle["calendar"] + " " + (this.props.visible ? calendarStyle["calendar-show"] : calendarStyle["calendar-hide"]), style: style}, React.createElement(MainPanel_1.MainPanel, {onSelect: this.props.onSelect, selectedDate: this.props.selectedDate, handleClick: this.handleClick.bind(this)}), React.createElement("div", {className: calendarStyle["date-panel"]}, datePanel), React.createElement(ControlPanel_1.ControlPanel, {onSelect: this.props.onSelect, onClose: this.props.onClose})));
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //
    Calendar.prototype.handleClick = function (selected) {
        this.state.datePanelSelected = selected;
        this.setState(this.state);
    };
    return Calendar;
}(React.Component));
exports.Calendar = Calendar;
//# sourceMappingURL=Calendar.js.map