import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import store from '../stores/Store'
import * as Actions from '../action/Actions.js';

class Counter extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            value: store.getState()[this.props.caption],
        };
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount(){
        store.unsubscribe(this.onChange);
    }

    onClickIncrementButton(){
        store.dispatch(Actions.increment(this.props.caption));
    }

    onClickDecrementButton(){
        store.dispatch(Actions.decrement(this.props.caption));
    }
    
    render() {
        return (
            <div>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
                <span>{this.props.caption} counter: {this.state.value}</span>
            </div>
        )
    }
}

//导出组件
export default Counter;