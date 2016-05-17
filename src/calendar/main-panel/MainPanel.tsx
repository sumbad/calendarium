import * as React from 'react';

import {DateUtilities} from '../../DateUtilities';
import {DatePanel} from '../date-panel/DatePanel'


interface IMainPanelProps {
    selectedDate: Date;
    handleClick: (DatePanel) => void;
    onSelect: (date: Date) => void;
}

interface IMainPanelState {
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
            <div className="main-panel">
                <label onClick={this.handleClickDay.bind(this) } className={"chosen-day " + (this.state.chosen === "day" ? "selected" : "")}>{day}</label>
                <label onClick={this.handleClickMonth.bind(this) } className={"chosen-month " + (this.state.chosen === "month" ? "selected" : "")}>{month}</label>
                <label onClick={this.handleClickYear.bind(this) } className={"chosen-year " + (this.state.chosen === "year" ? "selected" : "")}>{year}</label>
                <label className="chosen-time">
                    <div className={"chosen-time__hour " + (this.state.chosen === "hour" ? "selected" : "")}>
                        <div onClick={this.handleClickHoursArrowUp.bind(this) } className="arrow-up"></div>
                        <span onClick={this.handleClickHours.bind(this) }>{hours}</span>
                        <div onClick={this.handleClickHoursArrowDown.bind(this) } className="arrow-down"></div>
                    </div>
                    <div className="chosen-time__colon">
                        <span>: </span>
                    </div>
                    <div className={"chosen-time__minute " + (this.state.chosen === "minute" ? "selected" : "")}>
                        <div onClick={this.handleClickMinutesArrowUp.bind(this) } className="arrow-up"></div>
                        <span onClick={this.handleClickMinutes.bind(this) }>{minutes}</span>
                        <div onClick={this.handleClickMinutesArrowDown.bind(this) } className="arrow-down"></div>
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