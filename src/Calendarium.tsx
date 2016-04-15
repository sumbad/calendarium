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
                        onSelect={this.props.onSelect}
                        minDate={this.props.minDate}
                        maxDate={this.props.maxDate} />
                </div>
                <ControlPanel/>
            </div>
        );
    }
}