import * as React from 'react';



interface IWeeksProps {
    ref: string;
    view: any;
    selected: boolean;
    onTransitionEnd: () => any;
    minDate: number;
    maxDate: number;
    onSelect: (day: number) => void;
}

interface IWeeksState {
    view?: Date;
    current?: any;
    other?: any;
    sliding: any;
}


export class Weeks extends React.Component<IWeeksProps, IWeeksState> {



    render() {
        return (
            <div className="weeks">
                <div className="week-header">
                    <span>Пн</span>
                    <span>Вт</span>
                    <span>Ср</span>
                    <span>Чт</span>
                    <span>Пт</span>
                    <span className="holiday">Сб</span>
                    <span className="holiday">Вс</span>
                </div>
                <div className="week-body">
                    <div className="current">
                        <div className="week">
                            <div className="day other-month">27</div>
                            <div className="day other-month">28</div>
                            <div className="day other-month">29</div>
                            <div className="day other-month">30</div>
                            <div className="day other-month">31</div>
                            <div className="day today selected">1</div>
                            <div className="day">2</div>
                        </div>
                        <div className="week">
                            <div className="day">3</div>
                            <div className="day">4</div>
                            <div className="day">5</div>
                            <div className="day">6</div>
                            <div className="day">7</div>
                            <div className="day">8</div>
                            <div className="day">9</div>
                        </div>
                        <div className="week">
                            <div className="day">10</div>
                            <div className="day">11</div>
                            <div className="day">12</div>
                            <div className="day">13</div>
                            <div className="day">14</div>
                            <div className="day">15</div>
                            <div className="day">16</div>
                        </div>
                        <div className="week">
                            <div className="day">17</div>
                            <div className="day">18</div>
                            <div className="day">19</div>
                            <div className="day">20</div>
                            <div className="day">21</div>
                            <div className="day">22</div>
                            <div className="day">23</div>
                        </div>
                        <div className="week">
                            <div className="day">24</div>
                            <div className="day">25</div>
                            <div className="day">26</div>
                            <div className="day">27</div>
                            <div className="day">28</div>
                            <div className="day">29</div>
                            <div className="day">30</div>
                        </div>
                    </div>
                    <div className="other">
                        <div className="week">
                            <div className="day other-month">27</div>
                            <div className="day other-month">28</div>
                            <div className="day other-month">29</div>
                            <div className="day other-month">30</div>
                            <div className="day other-month">31</div>
                            <div className="day today selected">1</div>
                            <div className="day">2</div>
                        </div>
                        <div className="week">
                            <div className="day">3</div>
                            <div className="day">4</div>
                            <div className="day">5</div>
                            <div className="day">6</div>
                            <div className="day">7</div>
                            <div className="day">8</div>
                            <div className="day">9</div>
                        </div>
                        <div className="week">
                            <div className="day">10</div>
                            <div className="day">11</div>
                            <div className="day">12</div>
                            <div className="day">13</div>
                            <div className="day">14</div>
                            <div className="day">15</div>
                            <div className="day">16</div>
                        </div>
                        <div className="week">
                            <div className="day">17</div>
                            <div className="day">18</div>
                            <div className="day">19</div>
                            <div className="day">20</div>
                            <div className="day">21</div>
                            <div className="day">22</div>
                            <div className="day">23</div>
                        </div>
                        <div className="week">
                            <div className="day">24</div>
                            <div className="day">25</div>
                            <div className="day">26</div>
                            <div className="day">27</div>
                            <div className="day">28</div>
                            <div className="day">29</div>
                            <div className="day">30</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }




}