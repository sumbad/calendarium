import './app.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Calendarium} from '../src/Calendarium';
import {DateUtilities} from '../src/DateUtilities';

var packageJson = require('../package.json');


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
                    value={DateUtilities.toString(this.state.selectedDate) }
                    onClick={this.show.bind(this) }/>
                <Calendarium ref="calendar"
                    id={"calendarium-" + this.props.id}
                    selectedDate={this.state.selectedDate}
                    visible = {this.state.visible}
                    position = {this.state.position}
                    onSelect={this.onSelect.bind(this) } />
            </div>
        );
    }



    /**********************************************************************************************************
     * ADDITIONAL METHODS
     * 
     */


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


    onSelect(day) {
        this.setState({ selectedDate: day });
        //if (this.props.onSelect)
        //    this.props.onSelect(day);
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