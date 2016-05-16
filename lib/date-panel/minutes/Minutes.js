"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DateUtilities_1 = require('../../DateUtilities');
var Minutes = (function (_super) {
    __extends(Minutes, _super);
    function Minutes(props) {
        _super.call(this, props);
    }
    Minutes.prototype.render = function () {
        var minutes = [];
        for (var minute = 0; minute <= 59; minute++) {
            var selected = this.props.selectedDate.getMinutes() === minute ? "selected" : "";
            minutes.push(React.createElement("div", {key: minute, onClick: this.handleClickMinutes.bind(this, minute), className: "minute " + selected}, DateUtilities_1.DateUtilities.pad(minute.toString(), 2)));
        }
        return (React.createElement("div", {className: "minutes"}, minutes));
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //
    Minutes.prototype.handleClickMinutes = function (minute) {
        var date = this.props.selectedDate;
        date.setMinutes(minute);
        this.props.onSelect(date);
    };
    return Minutes;
}(React.Component));
exports.Minutes = Minutes;
//# sourceMappingURL=Minutes.js.map