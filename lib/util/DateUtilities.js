"use strict";
var DateUtilities = (function () {
    function DateUtilities() {
    }
    ;
    DateUtilities.loadLocale = function (locale) {
        this.locale = locale;
        //this.locale = require("i18n!./locale/ru.json");
        // this.locale = require('bundle?name=[path][name].[ext]!./locale/' + name + '.json');
        // require.ensure([], function(require){
        //     this.locale = require('./locale/' + name + '.json');
        // });
        // const req = require.context('bundle?lazy&name=/dist/locale/lll!./locale/!./pages',
        //     true, // Load files recursively. Pass false to skip recursion.
        //     /^\.\/.*\.json$/ // Match files ending with .json.
        // );
    };
    /**
     * Add zero before value if value.length < length
     */
    DateUtilities.pad = function (value, length) {
        while (value.length < length)
            value = "0" + value;
        return value;
    };
    /**
     * Clonning date
     */
    DateUtilities.clone = function (date) {
        // getFullYear - get year
        // getMonth - get month
        // getDate - get day of the month
        // ...
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    };
    /**
     * Format date
     */
    DateUtilities.formatDate = function (date) {
        var format = this.locale.format;
        format = format.replace(/dd/g, DateUtilities.pad(date.getDate().toString(), 2));
        format = format.replace("MM", DateUtilities.pad((date.getMonth() + 1).toString(), 2));
        format = format.replace("YYYY", date.getFullYear().toString());
        format = format.replace("HH", DateUtilities.pad(date.getHours().toString(), 2));
        format = format.replace("mm", DateUtilities.pad(date.getMinutes().toString(), 2));
        return format; //date.getFullYear() + "-" + DateUtilities.pad((date.getMonth() + 1).toString(), 2) + "-" + DateUtilities.pad(date.getDate().toString(), 2);
    };
    /**
     * Format UTC date
     */
    DateUtilities.formatDateUTC = function (date) {
        var format = this.locale.format;
        format = format.replace(/dd/g, DateUtilities.pad(date.getUTCDate().toString(), 2));
        format = format.replace("MM", DateUtilities.pad((date.getUTCMonth() + 1).toString(), 2));
        format = format.replace("YYYY", date.getUTCFullYear().toString());
        format = format.replace("HH", DateUtilities.pad(date.getUTCHours().toString(), 2));
        format = format.replace("mm", DateUtilities.pad(date.getUTCMinutes().toString(), 2));
        return format; //date.getFullYear() + "-" + DateUtilities.pad((date.getMonth() + 1).toString(), 2) + "-" + DateUtilities.pad(date.getDate().toString(), 2);
    };
    /**
    * Convert day of the date to String
    */
    DateUtilities.toDayOfMonthString = function (date) {
        return DateUtilities.pad(date.getDate().toString(), 0);
    };
    /**
     * Get month of the date
     */
    DateUtilities.toMonthString = function (date) {
        return this.locale.months[date.getMonth()];
    };
    /**
     * Get year of the date
     */
    DateUtilities.toYearString = function (date) {
        return date.getFullYear().toString();
    };
    /**
     * Get hours of the date
     */
    DateUtilities.toHoursString = function (date) {
        return DateUtilities.pad(date.getHours().toString(), 2);
    };
    /**
     * Get minutes of the date
     */
    DateUtilities.toMinutesString = function (date) {
        return DateUtilities.pad(date.getMinutes().toString(), 2);
    };
    /**
     * Get day of the week at number the "dayOfWeek", start from the "date" an dgo to the last
     */
    DateUtilities.moveToDayOfWeek = function (date, dayOfWeek) {
        while (DateUtilities.getDayOfWeekWithLocal(date) !== dayOfWeek)
            date.setDate(date.getDate() - 1);
        return date;
    };
    /**
     * Get day of the week with "locale"
     */
    DateUtilities.getDayOfWeekWithLocal = function (date) {
        // date.getDay() returns number of day of a week starting from Sunday – 0, Monday – 1, Tuesday – 2
        var currentDayOfWeek = date.getDay();
        if (this.locale.name === 'ru') {
            switch (currentDayOfWeek) {
                case 0:
                    currentDayOfWeek = 6;
                    break;
                default:
                    currentDayOfWeek = currentDayOfWeek - 1;
                    break;
            }
        }
        return currentDayOfWeek;
    };
    DateUtilities.isSameDay = function (first, second) {
        return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth() && first.getDate() === second.getDate();
    };
    DateUtilities.isBefore = function (first, second) {
        return first.getTime() < second.getTime();
    };
    DateUtilities.isAfter = function (first, second) {
        return first.getTime() > second.getTime();
    };
    DateUtilities.locale = require('../locale/en.json');
    return DateUtilities;
}());
exports.DateUtilities = DateUtilities;
;
//# sourceMappingURL=DateUtilities.js.map