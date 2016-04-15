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
}

export class Calendarium extends React.Component<ICalendariumProps, ICalendariumState> {


    constructor(props: ICalendariumProps) {
        super(props);
        // this.onMove = this.onMove.bind(this);
    }


    render() {
        let style;
        if (this.props.position){
            style = {
                top: this.props.position.top,
                left: this.props.position.left
            }
        }

        return (
            <div ref="calendarium" className={"ardp-calendarium-" + this.props.id + " calendarium" + (this.props.visible ? " calendarium-show" : " calendarium-hide") } style={style}>
                <MainPanel/>
                <div className="date-panel">
                    <Weeks ref="weeks"
                        selectedDate={this.props.selectedDate}
                        onTransitionEnd={this.onTransitionEnd.bind(this)}
                        onSelect={this.props.onSelect}
                        minDate={this.props.minDate}
                        maxDate={this.props.maxDate} />
                </div>
                <ControlPanel/>
            </div>
        );
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// ADDITIONAL METHODS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // onMove(view, isForward) {
    //     var weeks: any = this.refs["weeks"];
    //     weeks.moveTo(view, isForward);
    // }


    onTransitionEnd() {
        var monthHeader: any = this.refs["monthHeader"];
        monthHeader.enable()
    }

}