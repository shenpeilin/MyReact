import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Counter extends Component {
    constructor(props){
        super(props);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        
        this.defaultProps={
            iniValue: 0
        }

        this.state = { count: this.props.iniValue };
    }

    onClickIncrementButton(){
        this.setState({count:this.state.count+1});
        this.props.onChangeValue(1);
    }

    onClickDecrementButton(){
        this.setState({count:this.state.count-1});
        this.props.onChangeValue(-1);
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


Counter.propTypes={
    caption: PropTypes.string,
    iniValue: PropTypes.number,
    onChangeValue: PropTypes.func
}
//导出组件
export default Counter;