/**__________________________________________________________________________________________________________________
 * | Calendar is a React component.
 * | Uses inside calendar.
 * |
 * @author sumbad
 */

// import styles from './calendarStyle';
const calendarStyle = require('./calendarStyle');

import * as React from 'react';

import {MainPanel} from './main-panel/MainPanel'
import {ControlPanel} from './control-panel/ControlPanel'
import {DatePanel} from './date-panel/DatePanel'
import {Weeks} from './date-panel/weeks/Weeks'
import {Months} from './date-panel/months/Months'
import {Years} from './date-panel/years/Years'
import {Hours} from './date-panel/hours/Hours'
import {Minutes} from './date-panel/minutes/Minutes'



interface ICalendarProps {
    id: string;
    selectedDate: Date;
    visible: boolean;
    onSelect: (date: Date) => void;
    onClose: () => void;
    minDate?: Date;
    maxDate?: Date;
    position: {
        top: number,
        left: number
    }
}


interface ICalendarState {
    datePanelSelected: DatePanel;
}


export class Calendar extends React.Component<ICalendarProps, ICalendarState> {

    constructor(props: ICalendarProps) {
        super(props);

        this.state = {
            datePanelSelected: DatePanel.Weeks
        }
    }


    render() {
        let style;
        if (this.props.position) {
            style = {
                top: this.props.position.top,
                left: this.props.position.left
            }
        }

        let datePanel;
        switch (this.state.datePanelSelected) {
            case DatePanel.Weeks:
                datePanel = (
                    <Weeks ref="weeks"
                        selectedDate={this.props.selectedDate}
                        onSelect={this.props.onSelect}
                        minDate={this.props.minDate}
                        maxDate={this.props.maxDate} />
                );
                break;
            case DatePanel.Months:
                datePanel = (
                    <Months
                        selectedDate={this.props.selectedDate}
                        onSelect={this.props.onSelect}
                        minDate={this.props.minDate}
                        maxDate={this.props.maxDate} />
                );
                break;
            case DatePanel.Years:
                datePanel = (
                    <Years
                        selectedDate={this.props.selectedDate}
                        onSelect={this.props.onSelect}
                        minDate={this.props.minDate}
                        maxDate={this.props.maxDate} />
                );
                break;
            case DatePanel.Hours:
                datePanel = (
                    <Hours
                        selectedDate={this.props.selectedDate}
                        onSelect={this.props.onSelect}
                        minDate={this.props.minDate}
                        maxDate={this.props.maxDate} />
                );
                break;
            case DatePanel.Minutes:
                datePanel = (
                    <Minutes
                        selectedDate={this.props.selectedDate}
                        onSelect={this.props.onSelect}
                        minDate={this.props.minDate}
                        maxDate={this.props.maxDate} />
                );
                break;
        }
        
        // console.log("/////////////////////////////////////////////////");
        

        return (
            <div className={calendarStyle["ardp-calendar-"] + this.props.id + " " + calendarStyle["calendar"] + " " + (this.props.visible ? calendarStyle["calendar-show"] : calendarStyle["calendar-hide"]) } style={style}>
                <MainPanel onSelect={this.props.onSelect} selectedDate={this.props.selectedDate} handleClick={this.handleClick.bind(this) }/>
                <div className={calendarStyle["date-panel"]}>
                    {datePanel}
                </div>
                <ControlPanel onSelect={this.props.onSelect} onClose={this.props.onClose}/>
            </div>
        );
    }



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //


    handleClick(selected: DatePanel) {
        this.state.datePanelSelected = selected;
        this.setState(this.state);
    }
}