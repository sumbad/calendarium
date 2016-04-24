import './app.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Calendarium} from '../src/Calendarium';
import {DateUtilities} from '../src/DateUtilities';

const packageJson = require('../package.json');
const locale = require('../src/locale/ru.json');


interface IDatePickerProps {
    id: string;
    selectedDate?: Date;
}

interface IDatePickerState {
    selectedDate?: Date;
    minDate?: number;
    maxDate?: number;
    visible?: boolean;
    position?: {
        top: number,
        left: number
    }
}

class DatePicker extends React.Component<IDatePickerProps, IDatePickerState>{
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

        DateUtilities.loadLocale(locale);
    }


    componentDidMount() {
        document.addEventListener("click", this.hideOnDocumentClick);
    }


    componentWillUnmount() {
        document.removeEventListener("click", this.hideOnDocumentClick);
    }


    render() {
        return (
            <div id={this.props.id} className="ardp-date-picker">
                <input ref="trigger"
                    type="text"
                    className={"date-picker-trigger-" + this.props.id}
                    readOnly={true}
                    value={DateUtilities.formatDate(this.state.selectedDate) }
                    onClick={this.show.bind(this) }/>
                <Calendarium ref="calendar"
                    id={"calendarium-" + this.props.id}
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
        var trigger = ReactDOM.findDOMNode(this.refs["trigger"]);
        var rect = trigger.getBoundingClientRect();
        var isTopHalf = rect.top > window.innerHeight / 2;
        var calendarHeight = 203;
        return {
            top: isTopHalf ? (rect.top + window.scrollY - calendarHeight - 3) : (rect.top + trigger.clientHeight + window.scrollY + 3),
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




ReactDOM.render(<DatePicker id={getUniqueIdentifier() }/>, document.getElementById('datepicker'));


/**
 * Get an unique identifier for datepicker, we can use any different id
 * 
 * @return string
 */
function getUniqueIdentifier() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};