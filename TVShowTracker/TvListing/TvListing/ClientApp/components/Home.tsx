import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className='content'>
            <div className="row">
                <div className = "col-sm-3">
                    <button className="btn-block program-button"></button>
                </div>
                <div className = "col-sm-9 program-details-frame">
                    <h3>Program name</h3>
                    <p>Description of your next epsiode</p>
                </div>
            </div>
        </div>;
    }
}
