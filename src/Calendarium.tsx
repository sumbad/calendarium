import './calendarium.less';

import * as React from 'react';

import {MainPanel} from './main-panel/MainPanel'
import {Weeks} from './date-panel/Weeks'
import {ControlPanel} from './control-panel/ControlPanel'

interface ICalendariumProps {
    //visible: boolean;
    id: string;
    view: any;
    selected: any;
    onSelect: (day: number) => void;
    minDate: number;
    maxDate: number;
    ref: string;
    onClick: () => void;
}

interface ICalendariumState {
    // weeks: IWeeks;
    // monthHeader: IMonthHeader;
    visible: boolean;
    style?: any;
}

export class Calendarium extends React.Component<ICalendariumProps, ICalendariumState> {

    constructor(props: ICalendariumProps) {
        super(props);

        this.state = {
            visible: false
        }

        this.onMove = this.onMove.bind(this);
        this.onTransitionEnd = this.onTransitionEnd.bind(this);
    }



    render() {
        return (
            <div onClick={this.props.onClick.bind(this)} ref="calendarium" className={"ardp-calendarium-" + this.props.id + " calendarium" + (this.state.visible ? " calendarium-show" : " calendarium-hide") } style={this.state.style}>
                <MainPanel/>
                <div className="date-panel">
                    <Weeks ref="weeks"
                        view={this.props.view}
                        selected={this.props.selected}
                        onTransitionEnd={this.onTransitionEnd}
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

    show(position) {
        this.setState({
            visible: true,
            style: {
                top: position.top,
                left: position.left
            }
        });
    }

    hide() {
        if (this.state.visible) {
            this.setState({ visible: false });
        }
    }

    onMove(view, isForward) {
        var weeks: any = this.refs["weeks"];
        weeks.moveTo(view, isForward);
    }

    onTransitionEnd() {
        var monthHeader: any = this.refs["monthHeader"];
        monthHeader.enable()
    }

}









//  <button className="btn">Сейчас</button>
//   <section>
// <button id="js-trigger-overlay" type="button">Button Effect</button>
//   </section>
//   <button className="btn">Закрыть</button>

            // <div id="single-datepicker-container">
            //     <div className="ardp-date-picker">
            //     <input type="text" className="date-picker-trigger-562a103f-6482-be38-6ad3-1b54781cb8ef" readOnly value="2016-04-02"/>

            //         <div className="calendarium calendarium-show" style={{top: "120.875px", left: "8px" }}>
            //             <div className="month-header">
            //                 <i className="">◀</i>
            //                 <span>April 2016</span>
            //                 <i className="">▶</i></div>
            //             <div className="week-header">
            //                 <span>Sun</span>
            //                 <span>Mon</span>
            //                 <span>Tue</span>
            //                 <span>Wed</span>
            //                 <span>Thu</span>
            //                 <span>Fri</span>
            //                 <span>Sat</span>
            //             </div>
            //             <div className="weeks">
            //                 <div className="current">
            //                     <div className="week">
            //                         <div className="day other-month">27</div>
            //                         <div className="day other-month">28</div>
            //                         <div className="day other-month">29</div>
            //                         <div className="day other-month">30</div>
            //                         <div className="day other-month">31</div>
            //                         <div className="day today selected">1</div>
            //                         <div className="day">2</div>
            //                     </div>
            //                     <div className="week">
            //                         <div className="day">3</div>
            //                         <div className="day">4</div>
            //                         <div className="day">5</div>
            //                         <div className="day">6</div>
            //                         <div className="day">7</div>
            //                         <div className="day">8</div>
            //                         <div className="day">9</div>
            //                     </div>
            //                     <div className="week">
            //                         <div className="day">10</div>
            //                         <div className="day">11</div>
            //                         <div className="day">12</div>
            //                         <div className="day">13</div>
            //                         <div className="day">14</div>
            //                         <div className="day">15</div>
            //                         <div className="day">16</div>
            //                     </div>
            //                     <div className="week">
            //                         <div className="day">17</div>
            //                         <div className="day">18</div>
            //                         <div className="day">19</div>
            //                         <div className="day">20</div>
            //                         <div className="day">21</div>
            //                         <div className="day">22</div>
            //                         <div className="day">23</div>
            //                     </div>
            //                     <div className="week">
            //                         <div className="day">24</div>
            //                         <div className="day">25</div>
            //                         <div className="day">26</div>
            //                         <div className="day">27</div>
            //                         <div className="day">28</div>
            //                         <div className="day">29</div>
            //                         <div className="day">30</div>
            //                     </div>
            //                 </div>
            //                 <div className="other">
            //                     <div className="week">
            //                         <div className="day other-month">27</div>
            //                         <div className="day other-month">28</div>
            //                         <div className="day other-month">29</div>
            //                         <div className="day other-month">30</div>
            //                         <div className="day other-month">31</div>
            //                         <div className="day today selected">1</div>
            //                         <div className="day">2</div>
            //                     </div>
            //                     <div className="week">
            //                         <div className="day">3</div>
            //                         <div className="day">4</div>
            //                         <div className="day">5</div>
            //                         <div className="day">6</div>
            //                         <div className="day">7</div>
            //                         <div className="day">8</div>
            //                         <div className="day">9</div>
            //                     </div>
            //                     <div className="week">
            //                         <div className="day">10</div>
            //                         <div className="day">11</div>
            //                         <div className="day">12</div>
            //                         <div className="day">13</div>
            //                         <div className="day">14</div>
            //                         <div className="day">15</div>
            //                         <div className="day">16</div>
            //                     </div>
            //                     <div className="week">
            //                         <div className="day">17</div>
            //                         <div className="day">18</div>
            //                         <div className="day">19</div>
            //                         <div className="day">20</div>
            //                         <div className="day">21</div>
            //                         <div className="day">22</div>
            //                         <div className="day">23</div>
            //                     </div>
            //                     <div className="week">
            //                         <div className="day">24</div>
            //                         <div className="day">25</div>
            //                         <div className="day">26</div>
            //                         <div className="day">27</div>
            //                         <div className="day">28</div>
            //                         <div className="day">29</div>
            //                         <div className="day">30</div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>