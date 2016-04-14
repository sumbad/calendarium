import * as React from 'react';


interface IMainPanelProps {

}

interface IMainPanelState {

}


export class MainPanel extends React.Component<IMainPanelProps, IMainPanelState> {

    constructor(props: IMainPanelProps) {
        super(props);
    }

    render() {
        return (
            <div className="main-panel">
                <label className="chosen-day selected">23</label>
                <label className="chosen-month">Декабря</label>
                <label className="chosen-year">2016</label>
                <label className="chosen-time">
                    <div className="chosen-time__hour">
                        <div className="arrow-up"></div>
                        <span>20</span>
                        <div className="arrow-down"></div>
                    </div>
                    <div className="chosen-time__colon">
                        <span>: </span>
                    </div>
                    <div className="chosen-time__minute">
                        <div className="arrow-up"></div>
                        <span>20</span>
                        <div className="arrow-down"></div>
                    </div>
                </label>
            </div>
        );
    }
}