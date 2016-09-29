declare var require;

export class DateUtilities {

    public static locale = require('../locale/en.json');;

    public static loadLocale(locale): void {
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
    }

    /**
     * Add zero before value if value.length < length
     */
    public static pad(value: string, length: number) {
        while (value.length < length)
            value = "0" + value;
        return value;
    }

    /**
     * Clonning date
     */
    public static clone(date: Date) {
        // getFullYear - get year
        // getMonth - get month
        // getDate - get day of the month
        // ...
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    }


    /**
     * Format date
     */
    public static formatDate(date: Date) {       
        let format = this.locale.format;
        
        format = format.replace(/dd/g, DateUtilities.pad(date.getDate().toString(), 2));
        format = format.replace("MM", DateUtilities.pad((date.getMonth() + 1).toString(), 2));
        format = format.replace("YYYY", date.getFullYear().toString());
        format = format.replace("HH", DateUtilities.pad(date.getHours().toString(), 2));
        format = format.replace("mm", DateUtilities.pad(date.getMinutes().toString(), 2));
        
        return format;//date.getFullYear() + "-" + DateUtilities.pad((date.getMonth() + 1).toString(), 2) + "-" + DateUtilities.pad(date.getDate().toString(), 2);
    }
    
    /**
     * Format UTC date
     */
    public static formatDateUTC(date: Date) {       
        let format = this.locale.format;
        
        format = format.replace(/dd/g, DateUtilities.pad(date.getUTCDate().toString(), 2));
        format = format.replace("MM", DateUtilities.pad((date.getUTCMonth() + 1).toString(), 2));
        format = format.replace("YYYY", date.getUTCFullYear().toString());
        format = format.replace("HH", DateUtilities.pad(date.getUTCHours().toString(), 2));
        format = format.replace("mm", DateUtilities.pad(date.getUTCMinutes().toString(), 2));
        
        return format;//date.getFullYear() + "-" + DateUtilities.pad((date.getMonth() + 1).toString(), 2) + "-" + DateUtilities.pad(date.getDate().toString(), 2);
    }
    

    /**
    * Convert day of the date to String
    */
    public static toDayOfMonthString(date: Date) {
        return DateUtilities.pad(date.getDate().toString(), 0);
    }


    /**
     * Get month of the date
     */
    public static toMonthString(date) {
        return this.locale.months[date.getMonth()];
    }

    
    /**
     * Get year of the date
     */
    public static toYearString(date) {
        return date.getFullYear().toString();
    }


    /**
     * Get hours of the date
     */
    public static toHoursString(date) {
        return DateUtilities.pad(date.getHours().toString(), 2);
    }


    /**
     * Get minutes of the date
     */
    public static toMinutesString(date) {
        return DateUtilities.pad(date.getMinutes().toString(), 2);
    }


    /**
     * Get day of the week at number the "dayOfWeek", start from the "date" an dgo to the last
     */
    public static moveToDayOfWeek(date: Date, dayOfWeek: number) {
        while (DateUtilities.getDayOfWeekWithLocal(date) !== dayOfWeek)
            date.setDate(date.getDate() - 1);
        return date;
    }


    /**
     * Get day of the week with "locale"
     */
    public static getDayOfWeekWithLocal(date: Date): number {
        // date.getDay() returns number of day of a week starting from Sunday – 0, Monday – 1, Tuesday – 2
        let currentDayOfWeek = date.getDay();
        if (this.locale.name === 'ru') {
            switch (currentDayOfWeek) {
                case 0: currentDayOfWeek = 6; break;
                default: currentDayOfWeek = currentDayOfWeek - 1; break;
            }
        }
        return currentDayOfWeek;
    }


    public static isSameDay(first, second) {
        return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth() && first.getDate() === second.getDate();
    }

    public static isBefore(first, second) {
        return first.getTime() < second.getTime();
    }

    public static isAfter(first, second) {
        return first.getTime() > second.getTime();
    }
};