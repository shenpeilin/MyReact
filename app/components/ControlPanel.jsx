import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Counter from './Counter.jsx'

class ControlPanel extends Component {
    constructor(props){
        super(props);
        this.initValue = [ 1,2,3 ];
        this.initSum = this.initValue.reduce((a,b)=> a+b,0);
        this.state = {
            sum: this.initSum,
        };

        this.onChangeValue = this.onChangeValue.bind(this);
    }
    
    onChangeValue(value){
        this.setState( { sum: this.state.sum + value } );
    }
    
    render() {
        return (
            <div>
                <Counter caption="First" iniValue={this.initValue[0]} onChangeValue={this.onChangeValue}/>
                <Counter caption="Second" iniValue={this.initValue[1]} onChangeValue={this.onChangeValue}/>
                <Counter caption="Third" iniValue={this.initValue[2]} onChangeValue={this.onChangeValue}/>
                <span> the total num: {this.state.sum}</span>
            </div>
        )
    }
}
ControlPanel.PropTypes={
    onChangeValue:PropTypes.func,
};
//导出组件
export default ControlPanel;