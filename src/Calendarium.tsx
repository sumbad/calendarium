import './calendarium.less';

import * as React from 'react';

import {MainPanel} from './main-panel/MainPanel'
import {Weeks} from './date-panel/Weeks'
import {ControlPanel} from './control-panel/ControlPanel'


interface ICalendariumProps {
    id: string;
    selectedDate: Date;
    visible: boolean;
    onSelect: (day: number) => void;
    minDate?: Date;
    maxDate?: Date;
    position: {
        top: number,
        left: number
    }
}

interface ICalendariumState {
    datePanelSelected: string;
}

export class Calendarium extends React.Component<ICalendariumProps, ICalendariumState> {


    constructor(props: ICalendariumProps) {
        super(props);

        this.state = {
            datePanelSelected: "weeks"
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
            case "weeks":
                datePanel = (<Weeks ref="weeks"
                    selectedDate={this.props.selectedDate}
                    onSelect={this.props.onSelect}
                    minDate={this.props.minDate}
                    maxDate={this.props.maxDate} />);
                break;
            case "months":
                datePanel = (<div className="months">
                    <ul>
                        <li className="month">Январть</li>
                        <li className="month">Февраль</li>
                        <li className="month">Март</li>
                        <li className="month selected">Апрель</li>
                        <li className="month">Май</li>
                        <li className="month">Июнь</li>
                    </ul>
                    <ul>
                        <li className="month">Июль</li>
                        <li className="month">Август</li>
                        <li className="month">Сентябрь</li>
                        <li className="month">Октябрь</li>
                        <li className="month">Ноябрь</li>
                        <li className="month">Декабрь</li>
                    </ul>
                </div>);
                break;
            case "years":
                datePanel = (<div className="years">
                    <div className="arrow-left"></div>
                    <ul>
                        <li className="year">2010</li>
                        <li className="year">2011</li>
                        <li className="year">2012</li>
                        <li className="year">2013</li>
                        <li className="year">2014</li>
                        <li className="year">2015</li>
                    </ul>
                    <ul>
                        <li className="year selected">2016</li>
                        <li className="year">2017</li>
                        <li className="year">2018</li>
                        <li className="year">2019</li>
                        <li className="year">2020</li>
                        <li className="year">2021</li>
                    </ul>
                    <div className="arrow-right"></div>
                </div>);
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

    /** ADDITIONAL METHODS_________________________________________________________________________________________
     * 
     */


    handleClick(selected: string) {
        this.state.datePanelSelected = selected;
        this.setState(this.state);
    }
}