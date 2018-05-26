import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { TestStore } from '../stores/teststore';
import { inject, observer } from 'mobx-react';

//interface CounterState {
//    currentCount: number;
//}
interface Props extends RouteComponentProps<any>, React.Props<any> {
    testStore: TestStore
}

@inject('testStore')
@observer
export class Counter extends React.Component<Props> {
    public render() {
        return (
            <div className="workspace workspace-counter">
                <h1 className="workspace-header">Counter</h1>
                <div className="workspace-body">
                    <p>This is a simple example of a React/MobX component.</p>
                    <p>Current count: <strong>{this.props.testStore.count}</strong></p>
                    <div className="btn-group" role="group">
                        <button className="btn btn-danger joebutton" onClick={this.props.testStore.decrementCount}><span className="fa fa-chevron-circle-down"></span> Decrement</button>
                        <button className="btn btn-success" onClick={this.props.testStore.incrementCount}><span className="fa fa-chevron-circle-up"></span> Increment</button>
                        {/*<button className="btn btn-info" onClick={this.props.testStore}><span className="fa fa-refresh"></span> Reset</button>*/}
                    </div>
                    <p></p>
                    {/*<h4>Did you know?</h4>*/}
                    {/*<p>The square of the current count is: <strong>{this.props.testStore.square}</strong></p>

                    <p>The cube of the current count is: <strong>{this.props.testStore.cube}</strong></p>

                    <p>The square root of the current count is: <strong>{this.props.testStore.squarRoot}</strong></p>*/}
                </div>
            </div>
        )
    }
}
