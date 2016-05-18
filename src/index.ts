import {Calendar} from './calendar/Calendar';
import {DatePicker} from './Datepicker'
import {DateUtilities} from './DateUtilities'


if (process.env.NODE_ENV !== 'production' ) {
  [
    Array.prototype.some,
    Array.prototype.filter,
    Array.prototype.reduce
  ].forEach(method => {
    if (!method) throw new Error(
      'One or more ES5 features is not available to Calendarium!' )
  })
}

module.exports = {
  Calendar:  Calendar,//   require('./calendar/Calendar').Calendar,
  DatePicker:   DatePicker,

  utils: {
    DateUtilities: DateUtilities
  }
}