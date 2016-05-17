import React = require('react');
import {DateUtilities} from '../../../DateUtilities';


interface IWeekProps {
    key: number;
    start: Date;
    month: number;
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date:Date) => void;
}

interface IWeekState { }

export class Week extends React.Component<IWeekProps, IWeekState>{

    constructor(props: IWeekProps) {
        super(props);

        // this.isDisabled = this.isDisabled.bind(this);
        //this.onSelect = this.onSelect.bind(this);
    }



    render() {
        var days = this.buildDays(this.props.start);
        var DaysElement = days.map((day, i) => {
            return (
                <div key={i} onClick={this.onSelect.bind(this, day) } className={this.getDayClassName(day) }>
                    {DateUtilities.toDayOfMonthString(day) }
                </div>
            );
        });

        return (
            <div className="week">
                {DaysElement}
            </div>
        );
    }


    /*** ADDITIONAL METHODS **************************************************************************************/


    /** 
     * Create days of the week
     */
    buildDays(start) {
        // push start day to array days
        var days = [DateUtilities.clone(start)];
        // clonning start day
        var clone = DateUtilities.clone(start);

        for (var i = 1; i <= 6; i++) {
            clone = DateUtilities.clone(clone);
            clone.setDate(clone.getDate() + 1);
            days.push(clone);
        }
        return days;
    }
    

    isOtherMonth(day) {
        return this.props.month !== day.month();
    }
    

    getDayClassName(day) {
        var className = "day";
        if (DateUtilities.isSameDay(day, new Date()))
            className += " today";
        if (this.props.month !== day.getMonth())
            className += " other-month";
        if (this.props.selectedDate && DateUtilities.isSameDay(day, this.props.selectedDate))
            className += " selected";
        if (this.isDisabled(day))
            className += " disabled";
        return className;
    }
    

    onSelect(day) {
        if (!this.isDisabled(day))
            this.props.onSelect(day);
    }

    isDisabled(day) {
        var minDate = this.props.minDate,
            maxDate = this.props.maxDate;
        return (minDate && DateUtilities.isBefore(day, minDate)) || (maxDate && DateUtilities.isAfter(day, maxDate));
    }

}