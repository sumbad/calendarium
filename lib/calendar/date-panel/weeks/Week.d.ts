import React = require('react');
export interface IWeekProps {
    key: number;
    start: Date;
    month: number;
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date: Date) => void;
}
export interface IWeekState {
}
export declare class Week extends React.Component<IWeekProps, IWeekState> {
    constructor(props: IWeekProps);
    render(): JSX.Element;
    /**
     * Create days of the week
     */
    buildDays(start: any): Date[];
    isOtherMonth(day: any): boolean;
    getDayClassName(day: any): any;
    onSelect(day: any): void;
    isDisabled(day: any): boolean;
}
