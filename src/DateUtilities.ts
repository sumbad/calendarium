declare var require;

export class DateUtilities {

    public static locale = require('./locale/en.json');;

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


    public static toString(date: Date) {
        return date.getFullYear() + "-" + DateUtilities.pad((date.getMonth() + 1).toString(), 2) + "-" + DateUtilities.pad(date.getDate().toString(), 2);
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
        // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        //const months = this.locale.months;//["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        return this.locale.months[date.getMonth()];
    }


    /**
     * Get day of the week at number the "dayOfWeek", start from the "date" an dgo to the last
     */
    public static moveToDayOfWeek(date: Date, dayOfWeek: number, locale: string) {
        while (DateUtilities.getDayOfWeekWithLocal(date, locale) !== dayOfWeek)
            date.setDate(date.getDate() - 1);
        return date;
    }


    /**
     * Get day of the week with "locale"
     */
    public static getDayOfWeekWithLocal(date: Date, locale: string): number {
        // date.getDay() returns number of day of a week starting from Sunday – 0, Monday – 1, Tuesday – 2
        let currentDayOfWeek = date.getDay();
        if (locale === 'ru') {
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