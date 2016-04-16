import * as React from 'react';

import {DateUtilities} from '../DateUtilities';



interface IMainPanelProps {
    selectedDate: Date;
    handleClick: (string) => void;
}

interface IMainPanelState {

}


export class MainPanel extends React.Component<IMainPanelProps, IMainPanelState> {

    constructor(props: IMainPanelProps) {
        super(props);
    }

    render() {
        let day = DateUtilities.toDayOfMonthString(this.props.selectedDate);
        let month = DateUtilities.toMonthString(this.props.selectedDate);
        let year = this.props.selectedDate.getFullYear().toString();
        let hours = DateUtilities.pad(this.props.selectedDate.getHours().toString(), 2);
        let minutes = DateUtilities.pad(this.props.selectedDate.getMinutes().toString(), 2);

        return (
            <div className="main-panel">
                <label onClick={this.handleClickDay.bind(this)} className="chosen-day selected">{day}</label>
                <label onClick={this.handleClickMonth.bind(this)} className="chosen-month">{month}</label>
                <label onClick={this.handleClickYear.bind(this)} className="chosen-year">{year}</label>
                <label className="chosen-time">
                    <div className="chosen-time__hour">
                        <div className="arrow-up"></div>
                        <span>{hours}</span>
                        <div className="arrow-down"></div>
                    </div>
                    <div className="chosen-time__colon">
                        <span>: </span>
                    </div>
                    <div className="chosen-time__minute">
                        <div className="arrow-up"></div>
                        <span>{minutes}</span>
                        <div className="arrow-down"></div>
                    </div>
                </label>
            </div>
        );
    }



    /** ADDITIONAL METHODS_________________________________________________________________________________________
     * 
     */
    
    handleClickMonth() {
        this.props.handleClick("months");
    }
    
    handleClickDay() {
        this.props.handleClick("weeks");
    }
    
    handleClickYear() {
        this.props.handleClick("years");
    }

}