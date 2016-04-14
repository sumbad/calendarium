import * as React from 'react';


interface IControlPanelProps {

}

interface IControlPanelState {

}


export class ControlPanel extends React.Component<IControlPanelProps, IControlPanelState> {

    constructor(props: IControlPanelProps) {
        super(props);
    }

    render() {
        return (
            <div className="control-panel">
                <button className="button-contour">Сейчас</button>
                <button className="button-contour">Закрыть</button>
            </div>
        );
    }
}