import * as React from 'react';
export interface IWeeksProps {
    ref: string;
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date: Date) => void;
}
export interface IWeeksState {
}
export declare class Weeks extends React.Component<IWeeksProps, IWeeksState> {
    constructor(props: IWeeksProps);
    render(): JSX.Element;
    /**
     * Rendering weeks
     */
    renderWeeks(view: any): JSX.Element[];
    /**
     * Get weeks for a view
     */
    getWeekStartDates(date: Date): Date[];
}
