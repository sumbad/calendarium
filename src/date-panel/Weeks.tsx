import * as React from 'react';
import ReactDOM = require('react-dom');
import {DateUtilities} from '../DateUtilities';

import {Week} from './Week';


interface IWeeksProps {
    ref: string;
    // view: any;
    selectedDate: Date;
    onTransitionEnd: () => any;
    minDate: Date;
    maxDate: Date;
    onSelect: (day: number) => void;
}

interface IWeeksState {
    // view?: Date;
    current?: Date;
    other?: Date;
    sliding: any;
}


export class Weeks extends React.Component<IWeeksProps, IWeeksState> {

    constructor(props: IWeeksProps) {
        super(props);

        // set initial state
        this.state = {
            current: DateUtilities.clone(this.props.selectedDate),
            other: DateUtilities.clone(this.props.selectedDate),
            sliding: null
        };

        this.onTransitionEnd = this.onTransitionEnd.bind(this);
    }


    componentDidMount() {
        ReactDOM.findDOMNode(this.refs["current"]).addEventListener("transitionend", this.onTransitionEnd);
        //this.state.current.getDOMNode().addEventListener("transitionend", this.onTransitionEnd);
    }

    render() {
        let current = this.renderWeeks(this.state.current);
        let other = this.renderWeeks(this.state.other);

        return (
            <div className="weeks">
                <div className="week-header">
                    <span>Пн</span>
                    <span>Вт</span>
                    <span>Ср</span>
                    <span>Чт</span>
                    <span>Пт</span>
                    <span className="holiday">Сб</span>
                    <span className="holiday">Вс</span>
                </div>
                <div className="week-body">
                    <div  ref="current" className={"current" + (this.state.sliding ? (" sliding " + this.state.sliding) : "") }>
                        {current}
                    </div>
                    <div ref="other" className={"other" + (this.state.sliding ? (" sliding " + this.state.sliding) : "") }>
                        {other}
                    </div>
                </div>
            </div>
        );
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// ADDITIONAL METHODS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    onTransitionEnd() {
        this.setState({
            sliding: null,
            current: DateUtilities.clone(this.state.other)
        });

        this.props.onTransitionEnd();
    }

    getWeekStartDates(view: Date) {
        // set first day of the month
        view.setDate(1);
        //
        view = DateUtilities.moveToDayOfWeek(DateUtilities.clone(view), 0, "ru");

        var current = DateUtilities.clone(view);
        current.setDate(current.getDate() + 7);

        var starts = [view],
            month = current.getMonth();

        while (current.getMonth() === month) {
            starts.push(DateUtilities.clone(current));
            current.setDate(current.getDate() + 7);
        }

        return starts;
    }

    moveTo(view, isForward) {
        this.setState({
            sliding: isForward ? "left" : "right",
            other: DateUtilities.clone(view)
        });
    }


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
}