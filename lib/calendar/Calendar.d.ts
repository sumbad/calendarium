import * as React from 'react';
import { DatePanel } from './date-panel/DatePanel';
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
