/**__________________________________________________________________________________________________________________
 * | Calendarium is a React component.
 * |
 * @author sumbad
 */
"use strict";
var Calendar_1 = require('./calendar/Calendar');
var DatePicker_1 = require('./DatePicker');
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
// export default {
//   Calendar: Calendar,
//   DatePicker: DatePicker,
//   DateUtilities: DateUtilities
//   // utils: {
//   //   DateUtilities: DateUtilities
//   // }
// }
module.exports = {
    Calendar: Calendar_1.Calendar,
    DatePicker: DatePicker_1.DatePicker,
    DateUtilities: DateUtilities_1.DateUtilities
};
//  export module Calendarium {
//   Calendar,
//   DatePicker,
//   DateUtilities
//   // utils: {
//   //   DateUtilities: DateUtilities
//   // }
// }
// export default class Calendarium {
//   Calendar;
//   DatePicker;
//   DateUtilities;
// } 
//# sourceMappingURL=calendarium.js.map