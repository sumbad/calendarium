import * as React from 'react';
export interface IYearsProps {
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date: Date) => void;
}
export interface IYearsState {
    years: number[];
}
export declare class Years extends React.Component<IYearsProps, IYearsState> {
    constructor(props: IYearsProps);
    render(): JSX.Element;
    handleClickYear(year: number): void;
    handleClickArrowLeft(): void;
    handleClickArrowRight(): void;
}
