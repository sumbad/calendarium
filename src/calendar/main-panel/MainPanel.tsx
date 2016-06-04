const calendarStyle = require('../calendarStyle');

import * as React from 'react';

import {DateUtilities} from '../../util/DateUtilities';
import {DatePanel} from '../date-panel/DatePanel'


export interface IMainPanelProps {
    selectedDate: Date;
    handleClick: (DatePanel) => void;
    onSelect: (date: Date) => void;
}

export interface IMainPanelState {
    chosen: string;
}


export class MainPanel extends React.Component<IMainPanelProps, IMainPanelState> {

    constructor(props: IMainPanelProps) {
        super(props);

        this.state = { chosen: "day" };
    }


    render() {
        let day = DateUtilities.toDayOfMonthString(this.props.selectedDate);
        let month = DateUtilities.toMonthString(this.props.selectedDate);
        let year = this.props.selectedDate.getFullYear().toString();
        let hours = DateUtilities.pad(this.props.selectedDate.getHours().toString(), 2);
        let minutes = DateUtilities.pad(this.props.selectedDate.getMinutes().toString(), 2);

        return (
            <div className={calendarStyle["main-panel"]}>
                <label onClick={this.handleClickDay.bind(this) } className={calendarStyle["chosen-day"] + " " + (this.state.chosen === "day" ? calendarStyle["selected"] : "")}>{day}</label>
                <label onClick={this.handleClickMonth.bind(this) } className={calendarStyle["chosen-month"] + " " + (this.state.chosen === "month" ? calendarStyle["selected"] : "")}>{month}</label>
                <label onClick={this.handleClickYear.bind(this) } className={calendarStyle["chosen-year"] + " " + (this.state.chosen === "year" ? calendarStyle["selected"] : "")}>{year}</label>
                <label className={calendarStyle["chosen-time"]}>
                    <div className={calendarStyle["chosen-minutes"] + " " + (this.state.chosen === "hour" ? calendarStyle["selected"] : "")}>
                        <div onClick={this.handleClickHoursArrowUp.bind(this) } className={calendarStyle["arrow-up"]}></div>
                        <span onClick={this.handleClickHours.bind(this) }>{hours}</span>
                        <div onClick={this.handleClickHoursArrowDown.bind(this) } className={calendarStyle["arrow-down"]}></div>
                    </div>

                        <span>: </span>

                    <div className={calendarStyle["chosen-minutes"] + " " + (this.state.chosen === "minute" ? calendarStyle["selected"] : "")}>
                        <div onClick={this.handleClickMinutesArrowUp.bind(this) } className={calendarStyle["arrow-up"]}></div>
                        <span onClick={this.handleClickMinutes.bind(this) }>{minutes}</span>
                        <div onClick={this.handleClickMinutesArrowDown.bind(this) } className={calendarStyle["arrow-down"]}></div>
                    </div>
                </label>
            </div>
        );
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //


    handleClickDay() {
        this.props.handleClick(DatePanel.Weeks);

        this.setState({ chosen: "day" });
    }


    handleClickMonth() {
        this.props.handleClick(DatePanel.Months);

        this.setState({ chosen: "month" });
    }


    handleClickYear() {
        this.props.handleClick(DatePanel.Years);

        this.setState({ chosen: "year" });
    }


    handleClickHours() {
        this.props.handleClick(DatePanel.Hours);

        this.setState({ chosen: "hour" });
    }


    handleClickMinutes() {
        this.props.handleClick(DatePanel.Minutes);

        this.setState({ chosen: "minute" });
    }


    handleClickHoursArrowUp() {
        let date = this.props.selectedDate;
        date.setHours(this.props.selectedDate.getHours() + 1);
        this.props.onSelect(date);
    }


    handleClickHoursArrowDown() {
        let date = this.props.selectedDate;
        date.setHours(this.props.selectedDate.getHours() - 1);
        this.props.onSelect(date);
    }


    handleClickMinutesArrowUp() {
        let date = this.props.selectedDate;
        date.setMinutes(this.props.selectedDate.getMinutes() + 1);
        this.props.onSelect(date);
    }


    handleClickMinutesArrowDown() {
        let date = this.props.selectedDate;
        date.setMinutes(this.props.selectedDate.getMinutes() - 1);
        this.props.onSelect(date);
    }


    //
    // ADDITIONAL METHODS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}