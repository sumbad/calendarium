import * as React from 'react';
export interface IMinutesProps {
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date: Date) => void;
}
export interface IMinutesState {
}
export declare class Minutes extends React.Component<IMinutesProps, IMinutesState> {
    constructor(props: IMinutesProps);
    render(): JSX.Element;
    handleClickMinutes(minute: number): void;
}
