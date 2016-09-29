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
