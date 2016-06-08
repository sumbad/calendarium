import * as React from 'react';
export interface IControlPanelProps {
    onSelect: (date: Date) => void;
    onClose: () => void;
}
export interface IControlPanelState {
}
export declare class ControlPanel extends React.Component<IControlPanelProps, IControlPanelState> {
    constructor(props: IControlPanelProps);
    render(): JSX.Element;
    handleClickNow(e: any): void;
    handleClickClose(e: any): void;
}
