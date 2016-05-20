const calendarStyle = require('../../calendarStyle');

import * as React from 'react';
import ReactDOM = require('react-dom');
import {DateUtilities} from '../../../util/DateUtilities';


interface IMonthsProps {
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date:Date) => void;
}

interface IMonthsState { }


export class Months extends React.Component<IMonthsProps, IMonthsState> {

    constructor(props: IMonthsProps) {
        super(props);
    }


    render() {
        let month1col = [];
        let month2col = [];

        DateUtilities.locale.months.forEach((month, index) => {
            let selected = this.props.selectedDate.getMonth() == index ? calendarStyle["selected"] : "";
            
            let m = <li key={index} onClick={this.handleClickMonth.bind(this, index)} className={calendarStyle["month"] + " " + selected}>{month}</li>;
            
            if (index < 6) {
                month1col.push(m);
            } else {
                month2col.push(m);
            }
        });

        return (
            <div className={calendarStyle["months"]}>
                <ul>
                    {month1col}
                </ul>
                <ul>
                    {month2col}
                </ul>
            </div>
        );
    }



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //


    handleClickMonth(month:number) {
        let date = this.props.selectedDate;
        date.setMonth(month);
        this.props.onSelect(date);
    }


    //    
    // ADDITIONAL METHODS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}