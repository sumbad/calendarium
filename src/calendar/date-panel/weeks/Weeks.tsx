import * as React from 'react';
import ReactDOM = require('react-dom');
import {DateUtilities} from '../../../DateUtilities';

import {Week} from './Week';


interface IWeeksProps {
    ref: string;
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date:Date) => void;
}

interface IWeeksState { }


export class Weeks extends React.Component<IWeeksProps, IWeeksState> {

    constructor(props: IWeeksProps) {
        super(props);
    }


    render() {
        let weeks = this.renderWeeks(DateUtilities.clone(this.props.selectedDate));
        
        let weekHeader = DateUtilities.locale.week.map(w=>{
            return (<span key={w.name} className={w.class}>{w.name}</span>);
        });

        return (
            <div className="weeks">
                <div className="week-header">
                    {weekHeader}
                </div>
                <div className="week-body">
                    <div  ref="current" className={"current"}>
                        {weeks}
                    </div>
                </div>
            </div>
        );
    }



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //


    /**
     * Rendering weeks
     */
    renderWeeks(view) {
        let starts = this.getWeekStartDates(view);
        let month = starts[1].getMonth();

        let WeeksElement = starts.map((s, i) => {
            return <Week
                key={i}
                start={s}
                month={month}
                selectedDate={this.props.selectedDate}
                onSelect={this.props.onSelect}
                minDate={this.props.minDate}
                maxDate={this.props.maxDate}
                />
        });

        return WeeksElement;
    }
    

    /**
     * Get weeks for a view
     */
    getWeekStartDates(date: Date) {
        // set a first day of the month
        date.setDate(1);
        date = DateUtilities.moveToDayOfWeek(DateUtilities.clone(date), 0);

        let current = DateUtilities.clone(date);
        current.setDate(current.getDate() + 7);

        let weeks = [date];
        let month = current.getMonth();

        while (current.getMonth() === month || weeks.length < 6) {
            weeks.push(DateUtilities.clone(current));
            current.setDate(current.getDate() + 7);
        }

        return weeks;
    }


    //    
    // ADDITIONAL METHODS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}