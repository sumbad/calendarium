"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DateUtilities_1 = require('../DateUtilities');
var ControlPanel = (function (_super) {
    __extends(ControlPanel, _super);
    function ControlPanel(props) {
        _super.call(this, props);
    }
    ControlPanel.prototype.render = function () {
        return (React.createElement("div", {className: "control-panel"}, React.createElement("button", {onClick: this.handleClickNow.bind(this), className: "button-contour"}, DateUtilities_1.DateUtilities.locale.now), React.createElement("button", {onClick: this.handleClickClose.bind(this), className: "button-contour"}, DateUtilities_1.DateUtilities.locale.close)));
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //
    ControlPanel.prototype.handleClickNow = function () {
        this.props.onSelect(new Date());
    };
    ControlPanel.prototype.handleClickClose = function () {
        this.props.onClose();
    };
    return ControlPanel;
}(React.Component));
exports.ControlPanel = ControlPanel;
//# sourceMappingURL=ControlPanel.js.map