/**__________________________________________________________________________________________________________________
 * | Calendarium is a React component.
 * |
 * @author sumbad
 */

import {Calendar} from './calendar/Calendar';
import {DatePicker} from './Datepicker'
import {DateUtilities} from './util/DateUtilities'


if (process.env.NODE_ENV !== 'production') {
  [
    Array.prototype.some,
    Array.prototype.filter,
    Array.prototype.reduce
  ].forEach(method => {
    if (!method) throw new Error(
      'One or more ES5 features is not available to Calendarium!')
  })
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
  Calendar: Calendar,
  DatePicker: DatePicker,
  DateUtilities: DateUtilities
  // utils: {
  //   DateUtilities: DateUtilities
  // }
}

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