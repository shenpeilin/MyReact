import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import CounterContainer from './Counter.jsx';
import Summary from './Summary.jsx';

class ControlPanel extends Component {
    render() {
        return (
            <div>
                <CounterContainer caption="First"/>
                <CounterContainer caption="Second"/>
                <CounterContainer caption="Third"/>
                <Summary/>
            </div>
        )
    }
}

//导出组件
export default ControlPanel;