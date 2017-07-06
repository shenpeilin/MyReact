import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Counter from './Counter.jsx';
import Summary from './Summary.jsx';

class ControlPanel extends Component {
    render() {
        return (
            <div>
                <Counter caption="First"/>
                <Counter caption="Second"/>
                <Counter caption="Third"/>
                <Summary/>
            </div>
        )
    }
}

//导出组件
export default ControlPanel;