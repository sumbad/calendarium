"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DateUtilities_1 = require('../../../DateUtilities');
var Months = (function (_super) {
    __extends(Months, _super);
    function Months(props) {
        _super.call(this, props);
    }
    Months.prototype.render = function () {
        var _this = this;
        var month1col = [];
        var month2col = [];
        DateUtilities_1.DateUtilities.locale.months.forEach(function (month, index) {
            var selected = _this.props.selectedDate.getMonth() == index ? "selected" : "";
            var m = React.createElement("li", {key: index, onClick: _this.handleClickMonth.bind(_this, index), className: "month " + selected}, month);
            if (index < 6) {
                month1col.push(m);
            }
            else {
                month2col.push(m);
            }
        });
        return (React.createElement("div", {className: "months"}, React.createElement("ul", null, month1col), React.createElement("ul", null, month2col)));
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //
    Months.prototype.handleClickMonth = function (month) {
        var date = this.props.selectedDate;
        date.setMonth(month);
        this.props.onSelect(date);
    };
    return Months;
}(React.Component));
exports.Months = Months;
//# sourceMappingURL=Months.js.map