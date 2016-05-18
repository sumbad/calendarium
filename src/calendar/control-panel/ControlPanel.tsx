const calendarStyle = require('../calendarStyle');

import * as React from 'react';
import {DateUtilities} from '../../DateUtilities';

interface IControlPanelProps {
    onSelect: (date: Date) => void;
    onClose: () => void;
}

interface IControlPanelState {

}


export class ControlPanel extends React.Component<IControlPanelProps, IControlPanelState> {

    constructor(props: IControlPanelProps) {
        super(props);
    }

    render() {
        return (
            <div className={calendarStyle["control-panel"]}>
                <button onClick={this.handleClickNow.bind(this)} className={calendarStyle["button-contour"]}>{DateUtilities.locale.now}</button>
                <button onClick={this.handleClickClose.bind(this)} className={calendarStyle["button-contour"]}>{DateUtilities.locale.close}</button>
            </div>
        );
    }
    

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADDITIONAL METHODS
    //

    handleClickNow() {
        this.props.onSelect(new Date());
    }


    handleClickClose() {
        this.props.onClose();
    }
    
    

    //
    // ADDITIONAL METHODS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}