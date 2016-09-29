export declare class DateUtilities {
    static locale: any;
    static loadLocale(locale: any): void;
    /**
     * Add zero before value if value.length < length
     */
    static pad(value: string, length: number): string;
    /**
     * Clonning date
     */
    static clone(date: Date): Date;
    /**
     * Format date
     */
    static formatDate(date: Date): any;
    /**
     * Format UTC date
     */
    static formatDateUTC(date: Date): any;
    /**
    * Convert day of the date to String
    */
    static toDayOfMonthString(date: Date): string;
    /**
     * Get month of the date
     */
    static toMonthString(date: any): any;
    /**
     * Get year of the date
     */
    static toYearString(date: any): any;
    /**
     * Get hours of the date
     */
    static toHoursString(date: any): string;
    /**
     * Get minutes of the date
     */
    static toMinutesString(date: any): string;
    /**
     * Get day of the week at number the "dayOfWeek", start from the "date" an dgo to the last
     */
    static moveToDayOfWeek(date: Date, dayOfWeek: number): Date;
    /**
     * Get day of the week with "locale"
     */
    static getDayOfWeekWithLocal(date: Date): number;
    static isSameDay(first: any, second: any): boolean;
    static isBefore(first: any, second: any): boolean;
    static isAfter(first: any, second: any): boolean;
}
