const calendarStyle = require('../../calendarStyle');

import * as React from 'react';
import ReactDOM = require('react-dom');
import {DateUtilities} from '../../../util/DateUtilities';


export interface IMinutesProps {
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date: Date) => void;
}

export interface IMinutesState {
}


export class Minutes extends React.Component<IMinutesProps, IMinutesState> {

    constructor(props: IMinutesProps) {
        super(props);
    }


    render() {
        let minutes = [];

        for (var minute = 0; minute <= 59; minute++) {
            let selected = this.props.selectedDate.getMinutes() === minute ? calendarStyle["selected"] : "";
            minutes.push(
                <div key={minute} onClick={this.handleClickMinutes.bind(this, minute) } className={calendarStyle["minute"] + " " + selected}>
                    {DateUtilities.pad(minute.toString(), 2) }
                </div>
            );
        }


        return (
            <div className={calendarStyle["minutes"]}>
                {minutes}
            </div>
        );
    }



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //


    handleClickMinutes(minute: number) {
        let date = this.props.selectedDate;
        date.setMinutes(minute);
        this.props.onSelect(date);
    }


    //    
    // ADDITIONAL METHODS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}