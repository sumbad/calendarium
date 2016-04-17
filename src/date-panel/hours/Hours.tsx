import * as React from 'react';
import ReactDOM = require('react-dom');
import {DateUtilities} from '../../DateUtilities';


interface IHoursProps {
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date: Date) => void;
}

interface IHoursState {
}


export class Hours extends React.Component<IHoursProps, IHoursState> {

    constructor(props: IHoursProps) {
        super(props);
    }


    render() {
        let hours = [];
        
        for (var hour = 0; hour <= 23; hour++) {
            let selected = this.props.selectedDate.getHours()===hour ? "selected" : "";
            hours.push(<div key={hour} onClick={this.handleClickHour.bind(this, hour) } className={"hour "+selected}>{DateUtilities.pad(hour.toString(), 2)}</div>);
        }


        return (
            <div className="hours">
                {hours}
            </div>
        );
    }



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //


    handleClickHour(hour: number) {
        let date = this.props.selectedDate;
        date.setHours(hour);
        this.props.onSelect(date);
    }


    //    
    // ADDITIONAL METHODS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}