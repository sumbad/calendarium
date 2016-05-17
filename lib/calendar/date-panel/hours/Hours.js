"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DateUtilities_1 = require('../../../DateUtilities');
var Hours = (function (_super) {
    __extends(Hours, _super);
    function Hours(props) {
        _super.call(this, props);
    }
    Hours.prototype.render = function () {
        var hours = [];
        for (var hour = 0; hour <= 23; hour++) {
            var selected = this.props.selectedDate.getHours() === hour ? "selected" : "";
            hours.push(React.createElement("div", {key: hour, onClick: this.handleClickHour.bind(this, hour), className: "hour " + selected}, DateUtilities_1.DateUtilities.pad(hour.toString(), 2)));
        }
        return (React.createElement("div", {className: "hours"}, hours));
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //
    Hours.prototype.handleClickHour = function (hour) {
        var date = this.props.selectedDate;
        date.setHours(hour);
        this.props.onSelect(date);
    };
    return Hours;
}(React.Component));
exports.Hours = Hours;
//# sourceMappingURL=Hours.js.map