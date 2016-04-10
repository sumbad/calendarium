import * as React from 'react';

import './calendarium.less';

interface ICalendariumProps {

}

interface ICalendariumState {

}


export class Calendarium extends React.Component<ICalendariumProps, ICalendariumState> {

    constructor(props: ICalendariumProps) {
        super(props);
    }

    render() {
        return (
            <div id="single-datepicker-container">
                <div className="ardp-date-picker">
                    <input type="text" className="date-picker-trigger-562a103f-6482-be38-6ad3-1b54781cb8ef" readOnly value="2016-04-02"/>

                    <div className="calendarium calendarium-show" style={{ top: "120.875px", left: "8px" }}>
                        <div className="main-panel">
                            <label className="chosen-day selected">23</label>
                            <label className="chosen-month">Декабря</label>
                            <label className="chosen-year">2016</label>
                            <label className="chosen-time">
                                <div className="chosen-time__hour">
                                    <div className="arrow-up"></div>
                                    <span>20</span>
                                    <div className="arrow-down"></div>
                                </div>
                                <div className="chosen-time__colon">
                                    <span>: </span>
                                </div>
                                <div className="chosen-time__minute">
                                    <div className="arrow-up"></div>
                                    <span>20</span>
                                    <div className="arrow-down"></div>
                                </div>
                            </label>
                        </div>
                        <div className="date-panel">
                            <div className="hours">
                                <div className="hour">00</div>
                                <div className="hour">01</div>
                                <div className="hour">02</div>
                                <div className="hour">03</div>
                                <div className="hour">04</div>
                                <div className="hour">05</div>
                                <div className="hour">06</div>
                                <div className="hour">07</div>
                                <div className="hour">08</div>
                                <div className="hour">09</div>
                                <div className="hour">10</div>
                                <div className="hour">11</div>
                                <div className="hour">12</div>
                                <div className="hour">13</div>
                                <div className="hour">14</div>
                                <div className="hour">15</div>
                                <div className="hour">16</div>
                                <div className="hour">17</div>
                                <div className="hour">18</div>
                                <div className="hour">19</div>
                                <div className="hour">20</div>
                                <div className="hour">21</div>
                                <div className="hour selected">22</div>
                                <div className="hour">23</div>
                            </div>
                        </div>
                        <div className="control-panel">
                            <button className="button-contour">Сейчас</button>
                            <button className="button-contour">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        );
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