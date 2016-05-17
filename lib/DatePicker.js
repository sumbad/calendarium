"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var Calendar_1 = require('./calendar/Calendar');
var DateUtilities_1 = require('./DateUtilities');
var packageJson = require('../package.json');
var locale = require('./locale/ru.json');
var DatePicker = (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        _super.call(this, props);
        var date = this.props.selectedDate || new Date();
        this.state = {
            selectedDate: date,
            minDate: null,
            maxDate: null,
            visible: false
        };
        this.hideOnDocumentClick = this.hideOnDocumentClick.bind(this);
        DateUtilities_1.DateUtilities.loadLocale(locale);
    }
    DatePicker.prototype.componentDidMount = function () {
        document.addEventListener("click", this.hideOnDocumentClick);
    };
    DatePicker.prototype.componentWillUnmount = function () {
        document.removeEventListener("click", this.hideOnDocumentClick);
    };
    DatePicker.prototype.render = function () {
        return (React.createElement("div", {id: this.props.id, className: "ardp-date-picker"}, React.createElement("input", {ref: "trigger", type: "text", className: "date-picker-trigger-" + this.props.id, readOnly: true, value: DateUtilities_1.DateUtilities.formatDate(this.state.selectedDate), onClick: this.show.bind(this)}), React.createElement(Calendar_1.Calendar, {ref: "calendar", id: "calendar-" + this.props.id, selectedDate: this.state.selectedDate, visible: this.state.visible, position: this.state.position, onSelect: this.onSelect.bind(this), onClose: this.onClose.bind(this)})));
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //
    DatePicker.prototype.hideOnDocumentClick = function (e) {
        var parent = e.target;
        var idDatePicker = this.props.id;
        while (parent) {
            if (parent.id && parent.id === idDatePicker) {
                return;
            }
            parent = parent.parentNode;
        }
        this.state.visible = false;
        this.setState(this.state);
    };
    DatePicker.prototype.onClose = function () {
        this.setState({ visible: false });
    };
    DatePicker.prototype.onSelect = function (date) {
        this.setState({ selectedDate: date });
    };
    DatePicker.prototype.getPosition = function () {
        var trigger = ReactDOM.findDOMNode(this.refs["trigger"]);
        var rect = trigger.getBoundingClientRect();
        var isTopHalf = rect.top > window.innerHeight / 2;
        var calendarHeight = 203;
        return {
            top: isTopHalf ? (rect.top + window.scrollY - calendarHeight - 3) : (rect.top + trigger.clientHeight + window.scrollY + 3),
            left: rect.left
        };
    };
    DatePicker.prototype.show = function () {
        this.state.position = this.getPosition();
        this.state.visible = true;
        this.setState(this.state);
    };
    return DatePicker;
}(React.Component));
exports.DatePicker = DatePicker;
//# sourceMappingURL=DatePicker.js.map