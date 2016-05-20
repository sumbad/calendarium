/**__________________________________________________________________________________________________________________
 * | Calendarium is a React component.
 * |
 * @author sumbad
 */
"use strict";
var Calendar_1 = require('./calendar/Calendar');
var Datepicker_1 = require('./Datepicker');
var DateUtilities_1 = require('./util/DateUtilities');
if (process.env.NODE_ENV !== 'production') {
    [
        Array.prototype.some,
        Array.prototype.filter,
        Array.prototype.reduce
    ].forEach(function (method) {
        if (!method)
            throw new Error('One or more ES5 features is not available to Calendarium!');
    });
}
module.exports = {
    Calendar: Calendar_1.Calendar,
    DatePicker: Datepicker_1.DatePicker,
    utils: {
        DateUtilities: DateUtilities_1.DateUtilities
    }
};
//# sourceMappingURL=index.js.map