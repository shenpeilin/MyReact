import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import CounterStore from '../stores/CounterStore';
import * as Actions from '../action/Actions.js';

class Counter extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = { 
            count: CounterStore.getCounterValues()[props.caption] 
        };
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count: newCount});
    }

    onClickIncrementButton(){
        Actions.increment(this.props.caption);
    }

    onClickDecrementButton(){
        Actions.decrement(this.props.caption);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
                <span>{this.props.caption} counter: {this.state.count}</span>
            </div>
        )
    }
}

//导出组件
export default Counter;