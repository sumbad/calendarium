const calendarStyle = require('../../calendarStyle');

import * as React from 'react';
import ReactDOM = require('react-dom');
import {DateUtilities} from '../../../util/DateUtilities';


export interface IYearsProps {
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date: Date) => void;
}

export interface IYearsState {
    years: number[];
}


export class Years extends React.Component<IYearsProps, IYearsState> {

    constructor(props: IYearsProps) {
        super(props);
        let yearSelected = props.selectedDate.getFullYear();
        this.state = {
            years: [yearSelected - 6, yearSelected - 5, yearSelected - 4, yearSelected - 3, yearSelected - 2, yearSelected - 1, yearSelected, yearSelected + 1, yearSelected + 2, yearSelected + 3, yearSelected + 4, yearSelected + 5]
        }
    }


    render() {
        let years = this.state.years.map(year => {
            let selected = this.props.selectedDate.getFullYear() == year ? calendarStyle["selected"] : "";
            return (
                <li key={year} onClick={this.handleClickYear.bind(this, year) } className={calendarStyle["year"] + " " + selected}>{year}</li>
            );
        });

        let years1col = years.slice(0, 6);
        let years2col = years.slice(6, 12);

        return (
            <div className={calendarStyle["years"]}>
                <div onClick={this.handleClickArrowLeft.bind(this) } className={calendarStyle["arrow-left"]}></div>
                <div className={calendarStyle["years-columns"]}>
                    <ul>
                        {years1col}
                    </ul>
                    <ul>
                        {years2col}
                    </ul>
                </div>
                <div onClick={this.handleClickArrowRight.bind(this) } className={calendarStyle["arrow-right"]}></div>
            </div>
        );
    }



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //


    handleClickYear(year: number) {
        let date = this.props.selectedDate;
        date.setFullYear(year);
        this.props.onSelect(date);
    }


    handleClickArrowLeft() {
        this.state.years = this.state.years.map(year => {
            return year - 6;
        });
        this.setState(this.state);
    }


    handleClickArrowRight() {
        this.state.years = this.state.years.map(year => {
            return year + 6;
        });
        this.setState(this.state);
    }


    //    
    // ADDITIONAL METHODS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}