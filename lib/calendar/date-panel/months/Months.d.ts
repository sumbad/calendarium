import * as React from 'react';
export interface IMonthsProps {
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date: Date) => void;
}
export interface IMonthsState {
}
export declare class Months extends React.Component<IMonthsProps, IMonthsState> {
    constructor(props: IMonthsProps);
    render(): JSX.Element;
    handleClickMonth(month: number): void;
}
