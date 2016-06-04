import * as React from 'react';
export interface IMainPanelProps {
    selectedDate: Date;
    handleClick: (DatePanel) => void;
    onSelect: (date: Date) => void;
}
export interface IMainPanelState {
    chosen: string;
}
export declare class MainPanel extends React.Component<IMainPanelProps, IMainPanelState> {
    constructor(props: IMainPanelProps);
    render(): JSX.Element;
    handleClickDay(): void;
    handleClickMonth(): void;
    handleClickYear(): void;
    handleClickHours(): void;
    handleClickMinutes(): void;
    handleClickHoursArrowUp(): void;
    handleClickHoursArrowDown(): void;
    handleClickMinutesArrowUp(): void;
    handleClickMinutesArrowDown(): void;
}
