import * as React from 'react';


export interface IDatePickerProps {
    id: string;
    selectedDate?: Date;
}
export interface IDatePickerState {
    selectedDate?: Date;
    minDate?: number;
    maxDate?: number;
    visible?: boolean;
    position?: {
        top: number;
        left: number;
    };
}
export declare class DatePicker extends React.Component<IDatePickerProps, IDatePickerState> {
    displayName: 'DatePicker';
    constructor(props: IDatePickerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    hideOnDocumentClick(e: any): void;
    onClose(): void;
    onSelect(date: Date): void;
    getPosition(): {
        top: number;
        left: number;
    };
    show(): void;
}


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
    * Convert day of the date to String
    */
    static toDayOfMonthString(date: Date): string;
    /**
     * Get month of the date
     */
    static toMonthString(date: any): any;
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


export declare enum DatePanel {
    Weeks = 0,
    Months = 1,
    Years = 2,
    Hours = 3,
    Minutes = 4,
}


export interface ICalendarProps {
    id: string;
    selectedDate: Date;
    visible: boolean;
    onSelect: (date: Date) => void;
    onClose: () => void;
    minDate?: Date;
    maxDate?: Date;
    position: {
        top: number;
        left: number;
    };
}
export interface ICalendarState {
    datePanelSelected: DatePanel;
}
export declare class Calendar extends React.Component<ICalendarProps, ICalendarState> {
    constructor(props: ICalendarProps);
    render(): JSX.Element;
    handleClick(selected: DatePanel): void;
}
