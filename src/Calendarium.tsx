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
                            <div className="minutes">
                                <div className="minute">00</div>
                                <div className="minute">05</div>
                                <div className="minute">10</div>
                                <div className="minute">15</div>
                                <div className="minute selected">20</div>
                                <div className="minute">25</div>
                                <div className="minute">30</div>
                                <div className="minute">35</div>
                                <div className="minute">40</div>
                                <div className="minute">45</div>
                                <div className="minute">50</div>
                                <div className="minute">55</div>
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