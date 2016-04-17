import * as React from 'react';
import ReactDOM = require('react-dom');
import {DateUtilities} from '../../DateUtilities';


interface IMinutesProps {
    selectedDate: Date;
    minDate: Date;
    maxDate: Date;
    onSelect: (date: Date) => void;
}

interface IMinutesState {
}


export class Minutes extends React.Component<IMinutesProps, IMinutesState> {

    constructor(props: IMinutesProps) {
        super(props);
    }


    render() {
        let minutes = [];
        
        for (var minute = 0; minute <= 59; minute++) {
            let selected = this.props.selectedDate.getMinutes()===minute ? "selected" : "";
            minutes.push(<div key={minute} onClick={this.handleClickMinutes.bind(this, minute) } className={"minute "+selected}>{DateUtilities.pad(minute.toString(), 2)}</div>);
        }


        return (
            <div className="minutes">
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