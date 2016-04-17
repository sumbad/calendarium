import './calendarium.less';

import * as React from 'react';

import {MainPanel} from './main-panel/MainPanel'
import {ControlPanel} from './control-panel/ControlPanel'
import {DatePanel} from './date-panel/DatePanel'
import {Weeks} from './date-panel/weeks/Weeks'
import {Months} from './date-panel/months/Months'
import {Years} from './date-panel/years/Years'
import {Hours} from './date-panel/hours/Hours'
import {Minutes} from './date-panel/minutes/Minutes'



interface ICalendariumProps {
    id: string;
    selectedDate: Date;
    visible: boolean;
    onSelect: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    position: {
        top: number,
        left: number
    }
}


interface ICalendariumState {
    datePanelSelected: DatePanel;
}


export class Calendarium extends React.Component<ICalendariumProps, ICalendariumState> {

    constructor(props: ICalendariumProps) {
        super(props);

        this.state = {
            datePanelSelected: DatePanel.Weeks
        }

        //this.getWeeks = this.getWeeks.bind(this);
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

        return (
            <div ref="calendarium" className={"ardp-calendarium-" + this.props.id + " calendarium" + (this.props.visible ? " calendarium-show" : " calendarium-hide") } style={style}>
                <MainPanel selectedDate={this.props.selectedDate} handleClick={this.handleClick.bind(this) }/>
                <div className="date-panel">
                    {datePanel}
                </div>
                <ControlPanel/>
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