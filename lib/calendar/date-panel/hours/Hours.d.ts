import * as React from 'react';
export interface IHoursProps {
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date: Date) => void;
}
export interface IHoursState {
}
export declare class Hours extends React.Component<IHoursProps, IHoursState> {
    constructor(props: IHoursProps);
    render(): JSX.Element;
    handleClickHour(hour: number): void;
}
