﻿import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class UserShows extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className='content'>
            <div className="row tv-program">
                <div className="col-sm-3">
                    <input type="image" src="http://static.tvmaze.com/uploads/images/original_untouched/40/101208.jpg" className="responsive" />
                </div>
                <div className="col-sm-9">
                    <h3>Program name</h3>
                    <p>Description of your next epsiode</p>
                    <p>Test</p>
                </div>
            </div>
        </div>;
    }
}
