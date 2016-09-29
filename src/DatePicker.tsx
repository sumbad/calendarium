const calendarStyle = require('./calendar/calendarStyle');

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Calendar} from './calendar/Calendar';
import {DateUtilities} from './util/DateUtilities';

const packageJson = require('../package.json');
const locale = require('./locale/ru.json');


export interface IDatePickerProps {
    id: string;
    selectedDate?: Date;
}

export interface IDatePickerState {
    selectedDate?: Date;
    minDate?: number;
    maxDate?: number;
    visible?: boolean;
    position?: {
        top: number,
        left: number
    }
}

export class DatePicker extends React.Component<IDatePickerProps, IDatePickerState>{
    displayName: 'DatePicker';

    constructor(props: IDatePickerProps) {
        super(props);

        var date = this.props.selectedDate || new Date();

        this.state = {
            selectedDate: date,
            minDate: null,
            maxDate: null,
            visible: false
        };

        this.hideOnDocumentClick = this.hideOnDocumentClick.bind(this);

        //DateUtilities.loadLocale(locale);
    }


    componentDidMount() {
        document.addEventListener("click", this.hideOnDocumentClick);
    }


    componentWillUnmount() {
        document.removeEventListener("click", this.hideOnDocumentClick);
    }


    render() {
        return (
            <div id={this.props.id}>
                <input ref="trigger"
                    type="text"
                    readOnly={true}
                    value={DateUtilities.formatDate(this.state.selectedDate) }
                    onClick={this.show.bind(this) }/>
                <Calendar ref="calendar"
                    id={"calendar-" + this.props.id}
                    selectedDate={this.state.selectedDate}
                    visible = {this.state.visible}
                    position = {this.state.position}
                    onSelect={this.onSelect.bind(this) }
                    onClose={this.onClose.bind(this) }/>
            </div>
        );
    }



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //

    hideOnDocumentClick(e) {
        let parent = e.target;
        let idDatePicker = this.props.id;
        while (parent) {
            if (parent.id && parent.id === idDatePicker) {
                return;
            }
            parent = parent.parentNode;
        }

        this.state.visible = false;
        this.setState(this.state);
    }


    onClose() {
        this.setState({ visible: false });
    }


    onSelect(date: Date) {
        this.setState({ selectedDate: date });
    }

    getPosition() {
        let trigger = ReactDOM.findDOMNode(this.refs["trigger"]);
        let rect = trigger.getBoundingClientRect();
        let top = -100;
        let calendarHeight = 0;
        if ((typeof window) !== 'undefined') {
            top = (rect.top > window.innerHeight / 2) ? (rect.top + window.scrollY - calendarHeight - 3) : (rect.top + trigger.clientHeight + window.scrollY + 3);
            calendarHeight = 215;
        }
        return {
            top: top,
            left: rect.left
        };
    }

    show() {
        this.state.position = this.getPosition();
        this.state.visible = true;
        this.setState(this.state);
    }

    //
    // ADDITIONAL METHODS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}