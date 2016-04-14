import './app.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Calendarium} from '../src/Calendarium';
import {DateUtilities} from '../src/DateUtilities';

var packageJson = require('../package.json');


interface IDatePickerProps {
    //view: any,
    selected?: Date;
    //onSelect: (day: number) => void;
    //minDate: number,
    //maxDate: number,
    //visible: boolean
}

interface IDatePickerState {
    id?: string;
    view?: Date,                         // отображаемая дата в текстовом поле
    selected?: Date,                     // выбранная дата в календаре
    minDate?: number,
    maxDate?: number,
}

class DatePicker extends React.Component<IDatePickerProps, IDatePickerState>{
    displayName: 'DatePicker';

    constructor(props: IDatePickerProps) {
        super(props);

        var def = this.props.selected || new Date();

        this.state = {
            id: this.getUniqueIdentifier(),
            view: DateUtilities.clone(def),
            selected: DateUtilities.clone(def),
            minDate: null,
            maxDate: null
        };

        this.onSelect = this.onSelect.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.hideOnDocumentClick = this.hideOnDocumentClick.bind(this);
    }


    componentDidMount() {
        document.addEventListener("click", this.hideOnDocumentClick);
    }


    componentWillUnmount() {
        document.removeEventListener("click", this.hideOnDocumentClick);
    }


    render() {
        return (
            <div id={this.state.id} className="ardp-date-picker">
                <input ref="trigger" type="text" className={"date-picker-trigger-" + this.state.id} readOnly={true} value={DateUtilities.toString(this.state.selected) } onClick={this.show}/>
                <Calendarium onClick={this.handleCalendariumClick.bind(this) } ref="calendar" id={"calendarium-" + this.state.id} view={this.state.view} selected={this.state.selected} onSelect={this.onSelect} minDate={this.state.minDate} maxDate={this.state.maxDate}/>
            </div>
        );
    }



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// ADDITIONAL METHODS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    handleCalendariumClick(event) {
        event.preventDefault();
        event.stopPropagation();
    }


    hideOnDocumentClick(e) {
        let parent = e.target;
        let idDatePicker = this.state.id;
        while (parent) {
            if (parent.id && parent.id === idDatePicker) {
                return;
            }
            parent = parent.parentNode;
        }
        // if (e.target.className !== "date-picker-trigger-" + this.state.id && !this.parentsHaveClassName(e.target, "ardp-calendarium-" + this.state.id))
        this.hide();
    }



    getUniqueIdentifier() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }


    setMinDate(date) {
        this.setState({ minDate: date });
    }

    setMaxDate(date) {
        this.setState({ maxDate: date });
    }

    onSelect(day) {
        this.setState({ selected: day });
        this.hide();

        //if (this.props.onSelect)
        //    this.props.onSelect(day);
    }

    show() {
        var trigger = ReactDOM.findDOMNode(this.refs["trigger"]);
        var rect = trigger.getBoundingClientRect();
        var isTopHalf = rect.top > window.innerHeight / 2;
        var calendarHeight = 203;

        var calendar: any = this.refs["calendar"];
        calendar.show({
            top: isTopHalf ? (rect.top + window.scrollY - calendarHeight - 3) : (rect.top + trigger.clientHeight + window.scrollY + 3),
            left: rect.left
        });
    }

    hide() {
        var calendar: any = this.refs["calendar"];
        calendar.hide();
    }


    // parentsHaveClassName(element, className) {
    //     var parent = element;
    //     while (parent) {
    //         if (parent.className && parent.className.indexOf(className) > -1)
    //             return true;

    //         parent = parent.parentNode;
    //     }

    //     return false;
    // }
}



ReactDOM.render(<DatePicker />, document.getElementById('datepicker'));